import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  absoluteAsset,
  absoluteUrl,
  canonicalRoutes,
  escapeHtml,
  site,
} from "./seo-data.mjs";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const indexPath = join(distDir, "index.html");

function scriptJson(value) {
  return JSON.stringify(value).replaceAll("</", "<\\/");
}

function buildJsonLd(route) {
  const pageUrl = absoluteUrl(route.path);
  const orgId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;

  const organization = {
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
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    publisher: { "@id": orgId },
  };

  const page = {
    "@type": route.schemaType,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    provider: { "@id": orgId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, page],
  };
}

function upsertTag(head, selector, tag) {
  const pattern = new RegExp(selector, "i");
  if (pattern.test(head)) {
    return head.replace(pattern, tag);
  }

  return `${head}\n    ${tag}`;
}

function injectHead(html, route) {
  const canonicalUrl = absoluteUrl(route.path);
  const imageUrl = absoluteAsset(site.ogImage);
  const jsonLd = buildJsonLd(route);

  let head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  head = head.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  head = upsertTag(
    head,
    '<meta\\s+name="description"[^>]*>',
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
  );
  head = upsertTag(
    head,
    '<meta\\s+name="robots"[^>]*>',
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
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

const shellHtml = await readFile(indexPath, "utf8");

for (const route of canonicalRoutes) {
  const html = injectHead(shellHtml, route);
  if (route.path === "/") {
    await writeFile(indexPath, html);
    continue;
  }

  const outputDir = join(distDir, route.path.replace(/^\//, ""));
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "index.html"), html);
}

console.log(`Prerendered SEO shells for ${canonicalRoutes.length} canonical routes.`);
