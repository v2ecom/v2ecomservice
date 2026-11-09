// Vercel serverless function: POST /api/academy-apply
// Validates an Academy admission application on the server and stores it in Supabase using the
// service-role key (kept only in Vercel environment variables, never sent to the browser).
//
// Required env vars: SUPABASE_URL and SUPABASE_SECRET_KEY (or the legacy name SUPABASE_SERVICE_ROLE_KEY)
import crypto from 'node:crypto';
import { validateApplication } from '../src/lib/academyValidation.js';
import { getCourse } from '../src/config/academy.js';

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 4_000; // a person cannot complete the 4-step form faster than this
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 }; // per hashed IP
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000;
const ID_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no look-alike characters

const json = (res, status, body) => res.status(status).json(body);

function makeApplicationId() {
  const d = new Date();
  const ymd = `${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, '0')}${String(d.getUTCDate()).padStart(2, '0')}`;
  let tail = '';
  for (let i = 0; i < 6; i += 1) tail += ID_ALPHABET[crypto.randomInt(ID_ALPHABET.length)];
  return `V2A-${ymd}-${tail}`;
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (typeof fwd === 'string' ? fwd.split(',')[0].trim() : '') || req.socket?.remoteAddress || 'unknown';
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  }

  const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const SERVICE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error('academy-apply: SUPABASE_URL / SUPABASE_SECRET_KEY are not configured');
    return json(res, 503, { ok: false, error: 'not_configured' });
  }

  // Browsers always send Origin on cross-site POSTs; reject anything not from this site.
  const origin = req.headers.origin;
  if (origin) {
    let originHost = '';
    try { originHost = new URL(origin).host; } catch { /* invalid origin */ }
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    if (originHost !== host) return json(res, 403, { ok: false, error: 'forbidden' });
  }

  if (Number(req.headers['content-length'] || 0) > MAX_BODY_BYTES) {
    return json(res, 413, { ok: false, error: 'payload_too_large' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json(res, 400, { ok: false, error: 'invalid_body' });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success, store nothing.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return json(res, 200, { ok: true, applicationId: makeApplicationId() });
  }

  if (!(Number(body.elapsedMs) >= MIN_FILL_MS)) {
    return json(res, 422, { ok: false, error: 'too_fast' });
  }

  const { errors, values } = validateApplication(body);
  if (Object.keys(errors).length > 0) {
    return json(res, 422, { ok: false, errors });
  }
  const course = getCourse(values.courseId);

  // New-style secret keys (sb_secret_...) are not JWTs and must only go in `apikey`; legacy service_role JWTs also use Authorization.
  const headers = {
    apikey: SERVICE_KEY,
    ...(SERVICE_KEY.startsWith('eyJ') ? { Authorization: `Bearer ${SERVICE_KEY}` } : {}),
    'Content-Type': 'application/json',
  };
  const table = `${SUPABASE_URL}/rest/v1/academy_applications`;
  const opts = (extra = {}) => ({ headers: { ...headers, ...extra }, signal: AbortSignal.timeout(8000) });

  try {
    // Keyed hash of the IP: lets us rate-limit without storing the raw address.
    const ipHash = crypto.createHmac('sha256', SERVICE_KEY).update(clientIp(req)).digest('hex');

    // 1) Rate limit per IP
    const since = new Date(Date.now() - RATE_LIMIT.windowMs).toISOString();
    const rl = await fetch(`${table}?select=id&ip_hash=eq.${ipHash}&created_at=gte.${encodeURIComponent(since)}`, {
      ...opts({ Prefer: 'count=exact', Range: '0-0', 'Range-Unit': 'items' }),
    });
    if (!rl.ok) throw new Error(`rate-limit lookup failed (${rl.status})`);
    const recent = Number((rl.headers.get('content-range') || '').split('/')[1]) || 0;
    if (recent >= RATE_LIMIT.max) return json(res, 429, { ok: false, error: 'rate_limited' });

    // 2) Same mobile + course within 24h: treat as a repeat click, return the existing ID
    const dupSince = new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString();
    const dup = await fetch(
      `${table}?select=application_id&mobile=eq.${values.mobile}&course_id=eq.${encodeURIComponent(values.courseId)}&created_at=gte.${encodeURIComponent(dupSince)}&order=created_at.desc&limit=1`,
      opts()
    );
    if (!dup.ok) throw new Error(`duplicate lookup failed (${dup.status})`);
    const existing = await dup.json();
    if (Array.isArray(existing) && existing[0]?.application_id) {
      return json(res, 200, { ok: true, applicationId: existing[0].application_id, duplicate: true });
    }

    // 3) Insert (retry only if the random application ID collides)
    const row = {
      full_name: values.fullName,
      mobile: values.mobile,
      whatsapp: values.whatsapp,
      email: values.email,
      city: values.city,
      state: values.state,
      age_group: values.ageGroup,
      gender: values.gender || null,
      qualification: values.qualification,
      occupation: values.occupation,
      business_name: values.businessName || null,
      current_platforms: values.currentPlatforms,
      experience: values.experience,
      course_id: course.id,
      course_name: course.name,
      course_fee: course.launchFee,
      learning_mode: values.mode,
      preferred_batch: values.batch,
      preferred_language: values.language,
      marketplace_interest: values.interests,
      learning_objective: values.objective,
      lead_source: values.source,
      additional_message: values.message || null,
      consent: true,
      consent_at: new Date().toISOString(),
      ip_hash: ipHash,
    };

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const applicationId = makeApplicationId();
      const ins = await fetch(table, {
        method: 'POST',
        ...opts({ Prefer: 'return=minimal' }),
        body: JSON.stringify({ ...row, application_id: applicationId }),
      });
      if (ins.status === 201) return json(res, 200, { ok: true, applicationId });
      if (ins.status !== 409) throw new Error(`insert failed (${ins.status})`);
    }
    throw new Error('could not allocate a unique application id');
  } catch (err) {
    // Never log applicant details.
    console.error('academy-apply:', err instanceof Error ? err.message : 'unknown error');
    return json(res, 500, { ok: false, error: 'server_error' });
  }
}
