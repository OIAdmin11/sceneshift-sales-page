/**
 * Static prerender for the SceneShift SEO/AIO content network.
 *
 * For every canonical route we:
 *   1. Inject the route-specific <title>, meta tags, canonical, and JSON-LD
 *      into the index.html shell produced by `vite build`.
 *   2. Render the React tree for that route to HTML using the SSR bundle
 *      produced by `vite build --ssr` and inject it into <div id="root">.
 *
 * Both steps are required. Without (1), crawlers see the wrong meta. Without
 * (2), AI Overview / Bing / Perplexity crawlers see an empty body and the
 * entire SEO investment is invisible. The rewrite from head-only injection
 * to full body rendering is the foundation work called out in the plan.
 *
 * Existing 4 base routes (/, /about-us, /pricing, /contact) keep head-only
 * injection — they go through the heavy animation layout and would not
 * benefit from SSR (and SSR could conflict with the GSAP/Lenis layers).
 *
 * Source of truth: `scripts/data/route-snapshot.json`.
 */
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  absoluteAsset,
  absoluteUrl,
  canonicalRoutes,
  noindexRoutes,
  prerenderRoutes,
  escapeHtml,
  site,
} from "./seo-data.mjs";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const distServerDir = join(rootDir, "dist-server");
const indexPath = join(distDir, "index.html");

// Set of paths that come from the SEO snapshot — these get true SSR rendering.
const seoPathSet = new Set(prerenderRoutes.map((r) => r.path));
// The 4 base routes (home, about, pricing, contact) keep head-only injection.
const headOnlyPaths = new Set(["/", "/about-us", "/pricing", "/contact"]);

function scriptJson(value) {
  return JSON.stringify(value).replaceAll("</", "<\\/");
}

/**
 * Legacy JSON-LD builder used for the 4 base routes that don't ship a
 * pre-baked jsonLd from the snapshot.
 */
function legacyJsonLd(route) {
  const pageUrl = absoluteUrl(route.path);
  const orgId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        areaServed: ["Ames, Iowa", "Iowa", "United States"],
        serviceType: [
          "AI CRM automation",
          "Lead response automation",
          "Sales follow-up systems",
          "Small business workflow automation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.url,
        publisher: { "@id": orgId },
      },
      {
        "@type": route.schemaType ?? "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: route.title,
        description: route.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        provider: { "@id": orgId },
      },
    ],
  };
}

function upsertTag(head, selector, tag) {
  const pattern = new RegExp(selector, "i");
  if (pattern.test(head)) {
    return head.replace(pattern, tag);
  }
  return `${head}\n    ${tag}`;
}

function injectHead(html, route, indexable) {
  const canonicalUrl = absoluteUrl(route.path);
  const imageUrl = absoluteAsset(site.ogImage);
  const jsonLd = route.jsonLd ?? legacyJsonLd(route);
  const robots = indexable
    ? "index, follow, max-image-preview:large"
    : "noindex, follow";

  let head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  head = head.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(route.title)}</title>`,
  );
  head = upsertTag(
    head,
    '<meta\\s+name="description"[^>]*>',
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+name="robots"[^>]*>',
    `<meta name="robots" content="${robots}" />`,
  );
  head = upsertTag(
    head,
    '<link\\s+rel="canonical"[^>]*>',
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+property="og:type"[^>]*>',
    '<meta property="og:type" content="website" />',
  );
  head = upsertTag(
    head,
    '<meta\\s+property="og:title"[^>]*>',
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+property="og:description"[^>]*>',
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+property="og:url"[^>]*>',
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+property="og:image"[^>]*>',
    `<meta property="og:image" content="${imageUrl}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+name="twitter:card"[^>]*>',
    '<meta name="twitter:card" content="summary_large_image" />',
  );
  head = upsertTag(
    head,
    '<meta\\s+name="twitter:title"[^>]*>',
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+name="twitter:description"[^>]*>',
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
  );
  head = upsertTag(
    head,
    '<script\\s+type="application\\/ld\\+json"\\s+id="seo-json-ld"[\\s\\S]*?<\\/script>',
    `<script type="application/ld+json" id="seo-json-ld">${scriptJson(jsonLd)}</script>`,
  );

  return html.replace(/<head>[\s\S]*?<\/head>/i, `<head>${head}</head>`);
}

function injectBody(html, bodyHtml) {
  // Replace the empty <div id="root"></div> with the SSR'd content.
  return html.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${bodyHtml}</div>`,
  );
}

async function loadSsrRender() {
  // Vite SSR build emits a CommonJS or ESM module at dist-server/entry-server.js.
  // We import via file URL so Windows + ESM works.
  const candidates = [
    join(distServerDir, "entry-server.js"),
    join(distServerDir, "entry-server.mjs"),
  ];
  for (const candidate of candidates) {
    try {
      await access(candidate);
      const mod = await import(pathToFileURL(candidate).href);
      if (typeof mod.render === "function") return mod.render;
    } catch {
      // try next
    }
  }
  return null;
}

const shellHtml = await readFile(indexPath, "utf8");
const ssrRender = await loadSsrRender();

if (!ssrRender) {
  console.warn(
    "[prerender] SSR bundle not found at dist-server/entry-server.js; falling back to head-only injection. Run `vite build --ssr src/entry-server.tsx --outDir dist-server` first.",
  );
}

let ssrCount = 0;
let headOnlyCount = 0;
let failures = 0;

for (const route of prerenderRoutes) {
  const indexable = route.indexable !== false;
  let html = injectHead(shellHtml, route, indexable);

  // Decide rendering mode for this route.
  const useSsr =
    ssrRender !== null && seoPathSet.has(route.path) && !headOnlyPaths.has(route.path);

  if (useSsr) {
    try {
      const bodyHtml = ssrRender(route.path);
      html = injectBody(html, bodyHtml);
      ssrCount += 1;
    } catch (err) {
      failures += 1;
      console.warn(
        `[prerender] SSR failed for ${route.path}: ${err.message}. Falling back to head-only.`,
      );
      headOnlyCount += 1;
    }
  } else {
    headOnlyCount += 1;
  }

  if (route.path === "/") {
    await writeFile(indexPath, html);
    continue;
  }

  const outputDir = join(distDir, route.path.replace(/^\//, ""));
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "index.html"), html);
}

console.log(
  `Prerendered ${prerenderRoutes.length} routes — ${ssrCount} with full SSR body, ${headOnlyCount} head-only, ${failures} SSR failures.`,
);
console.log(
  `Indexed: ${canonicalRoutes.length} | Noindex follow: ${noindexRoutes.length}`,
);
