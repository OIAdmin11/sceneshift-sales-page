import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { absoluteUrl, canonicalRoutes, disallowedPaths, site } from "./seo-data.mjs";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(rootDir, "public");

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function buildSitemap() {
  const lastmod = todayIsoDate();
  const urls = canonicalRoutes
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots() {
  const disallows = disallowedPaths.map((path) => `Disallow: ${path}`).join("\n");

  return `User-agent: *
Allow: /
${disallows}

Sitemap: ${absoluteUrl("/sitemap.xml")}
Host: ${site.host}
`;
}

await mkdir(publicDir, { recursive: true });
await writeFile(join(publicDir, "sitemap.xml"), buildSitemap());
await writeFile(join(publicDir, "robots.txt"), buildRobots());

console.log(`Generated sitemap.xml and robots.txt for ${canonicalRoutes.length} canonical URLs.`);
