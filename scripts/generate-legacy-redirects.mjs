/**
 * Writes static 301-style redirect stubs for legacy template demo URLs.
 * Amplify `redirects` in amplify.yml are the primary mechanism; these HTML
 * files ensure crawlers and hosts without redirect rules still reach `/`.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "./seo-data.mjs";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const home = site.url.replace(/\/$/, "");

const legacyPaths = [
  "/index",
  ...Array.from({ length: 17 }, (_, i) => `/index${i + 1}`),
];

const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0;url=${home}/" />
    <link rel="canonical" href="${home}/" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Redirecting…</title>
    <script>location.replace("/");</script>
  </head>
  <body>
    <p><a href="/">Continue to SceneShift</a></p>
  </body>
</html>
`;

for (const path of legacyPaths) {
  const dir = join(distDir, path.replace(/^\//, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), redirectHtml, "utf8");
}

console.log(`Wrote ${legacyPaths.length} legacy redirect stubs under dist/.`);
