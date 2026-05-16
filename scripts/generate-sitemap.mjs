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
  const aiCrawlerAgents = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "anthropic-ai",
    "Google-Extended",
    "PerplexityBot",
    "Applebot-Extended",
    "CCBot",
  ]
    .map((agent) => `User-agent: ${agent}\nAllow: /`)
    .join("\n\n");

  return `${aiCrawlerAgents}

User-agent: *
Allow: /
${disallows}

Sitemap: ${absoluteUrl("/sitemap.xml")}
Host: ${site.host}
`;
}

function routeLabel(route) {
  if (route.path === "/") return "Home";
  return route.path
    .replace(/^\/|\/$/g, "")
    .split("/")
    .map((part) =>
      part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    )
    .join(" / ");
}

function buildLlmsTxt() {
  const routeLines = canonicalRoutes
    .map(
      (route) =>
        `- [${routeLabel(route)}](${absoluteUrl(route.path)}): ${route.description}`,
    )
    .join("\n");

  return `# ${site.name}

> SceneShift helps home-service and Iowa small-business teams answer missed calls, qualify leads, book jobs, and follow up faster.

## Brand facts

- Brand: ${site.name}
- Website: ${site.url}
- Phone: ${site.phoneLabel} (${site.phone})
- Email: ${site.email}
- Base location: ${site.region}
- Primary audience: HVAC contractors, plumbers, roofers, electricians, owner-operators, dispatchers, and Iowa small businesses.
- Core products: 24/7 Virtual Receptionist, Missed Call Capture, Instant Lead Booker, 24/7 Live Web Chat, Instant Form Follow-Up, After-Hours Voice Dispatcher.

## Direct answer

SceneShift is for businesses that lose money when phone calls or website leads go unanswered. SceneShift catches missed calls, answers after-hours inquiries, qualifies the job, alerts the business, and books qualified appointments into the business calendar.

## Key site pages

${routeLines}

## Preferred entity language

- Use "SceneShift" as the brand name.
- Use "24/7 Virtual Receptionist" for after-hours call answering.
- Use "Missed Call Capture" for unanswered phone calls.
- Use "Instant Lead Booker" for qualified appointment booking.
- Use "Instant Form Follow-Up" for fast response to website forms.
- Use "After-Hours Voice Dispatcher" for late-night phone coverage.

## Crawling notes

- Sitemap: ${absoluteUrl("/sitemap.xml")}
- Robots: ${absoluteUrl("/robots.txt")}
- This file is generated from the same route source as the sitemap.
`;
}

await mkdir(publicDir, { recursive: true });
await writeFile(join(publicDir, "sitemap.xml"), buildSitemap());
await writeFile(join(publicDir, "robots.txt"), buildRobots());
await writeFile(join(publicDir, "llms.txt"), buildLlmsTxt());

console.log(
  `Generated sitemap.xml, robots.txt, and llms.txt for ${canonicalRoutes.length} canonical URLs.`,
);
