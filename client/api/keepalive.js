// Vercel serverless function: GET /api/keepalive  (called by a Vercel Cron job, see vercel.json)
// Makes one tiny read against Supabase so the Free-plan project is not paused for inactivity.
// It never returns any data from the database.
//
// Required env vars: SUPABASE_URL and SUPABASE_SECRET_KEY (or the legacy SUPABASE_SERVICE_ROLE_KEY).
// Optional: CRON_SECRET. If set, Vercel Cron sends it as "Authorization: Bearer <secret>" and we require it.
// If it is not set, we only accept requests from Vercel's cron user agent.

const json = (res, status, body) => res.status(status).json(body);

function isAuthorised(req) {
  const secret = process.env.CRON_SECRET;
  if (secret) return req.headers.authorization === `Bearer ${secret}`;
  return String(req.headers['user-agent'] || '').startsWith('vercel-cron/');
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  }
  if (!isAuthorised(req)) return json(res, 401, { ok: false, error: 'unauthorised' });

  const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const SERVICE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error('keepalive: SUPABASE_URL / SUPABASE_SECRET_KEY are not configured');
    return json(res, 503, { ok: false, error: 'not_configured' });
  }

  // New-style secret keys (sb_secret_...) are not JWTs and must only go in `apikey`; legacy service_role JWTs also use Authorization.
  const headers = {
    apikey: SERVICE_KEY,
    ...(SERVICE_KEY.startsWith('eyJ') ? { Authorization: `Bearer ${SERVICE_KEY}` } : {}),
  };

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/academy_applications?select=id&limit=1`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) {
      console.error(`keepalive: Supabase responded ${r.status}`);
      return json(res, 502, { ok: false, error: 'supabase_error', status: r.status });
    }
    return json(res, 200, { ok: true, checkedAt: new Date().toISOString() });
  } catch (err) {
    console.error('keepalive: request failed', err?.name || err);
    return json(res, 502, { ok: false, error: 'supabase_unreachable' });
  }
}
