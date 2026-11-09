// Runs after `vite build`. Social/WhatsApp scrapers and some crawlers do not execute JavaScript,
// so for pages that are promoted externally we emit a copy of the built index.html with
// route-specific <head> tags (title, description, canonical, Open Graph, Twitter).
// The React app still boots normally from the same bundle. Keep titles in sync with SEOManager.jsx.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const SITE_URL = 'https://www.v2ecomservices.com';
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');

const pages = [
  {
    file: 'academy.html',
    route: '/academy',
    title: 'V2 Ecom Academy | Amazon, Flipkart & Meesho Training in Tiruppur',
    description: 'Join V2 Ecom Academy for practical Amazon, Flipkart, Meesho and e-commerce marketplace training. Online and offline courses in Tamil and English.',
    image: '/academy-og.png',
    imageAlt: 'V2 Ecom Academy – Learn. Launch. Grow.',
  },
  {
    file: 'academy-apply.html',
    route: '/academy/apply',
    title: 'Apply to V2 Ecom Academy | Admission Form',
    description: 'Apply online for V2 Ecom Academy e-commerce marketplace courses. Online and offline training in Tamil and English from Tiruppur.',
    image: '/academy-og.png',
    imageAlt: 'V2 Ecom Academy – Learn. Launch. Grow.',
    noindex: true, // shareable direct link; the main /academy page is the one to rank
  },
  {
    file: 'privacy.html',
    route: '/privacy',
    title: 'Privacy Policy | V2 Ecom Services',
    description: 'How V2 Ecom Services and V2 Ecom Academy collect, use and protect the personal information you share with us.',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const base = await readFile(path.join(dist, 'index.html'), 'utf8');

for (const p of pages) {
  const url = `${SITE_URL}${p.route}`;
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(p.title)}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/, `<meta name="description" content="${esc(p.description)}" />`)
    .replace(/<meta\s+property="og:title"[^>]*>\s*/, '')
    .replace(/<meta\s+property="og:description"[^>]*>\s*/, '')
    .replace(/<meta\s+property="og:type"[^>]*>\s*/, '');

  const tags = [
    `<link rel="canonical" href="${url}" data-seo-manager="true" />`,
    ...(p.noindex ? [`<meta name="robots" content="noindex, follow" />`] : []),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="V2 Ecom Academy" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    ...(p.image
      ? [
          `<meta property="og:image" content="${SITE_URL}${p.image}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="${esc(p.imageAlt)}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:image" content="${SITE_URL}${p.image}" />`,
        ]
      : []),
  ].join('\n    ');

  if (!html.includes('</head>')) throw new Error('dist/index.html has no </head>');
  html = html.replace('</head>', `    ${tags}\n  </head>`);
  await writeFile(path.join(dist, p.file), html);
  console.log(`postbuild-meta: wrote dist/${p.file}`);
}
