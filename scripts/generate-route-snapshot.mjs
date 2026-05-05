/**
 * Build-time bridge from the TypeScript catalogs to a Node-readable JSON
 * snapshot of all canonical SEO routes.
 *
 * The TypeScript catalogs in [src/data] are the single source of truth for
 * services / packages / industries / crosshairs / counties / cities / authors.
 * Node build scripts (sitemap, prerender, IndexNow, validation) cannot import
 * .ts directly, so we use Vite's SSR module loader to import the metadata
 * builder at build time and emit a JSON snapshot at
 * `scripts/data/route-snapshot.json`.
 *
 * This script runs as the FIRST step of the build, before sitemap generation,
 * so every downstream script reads from the same source of truth.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const snapshotDir = join(rootDir, "scripts", "data");
const snapshotPath = join(snapshotDir, "route-snapshot.json");

async function main() {
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true, watch: null },
    appType: "custom",
    optimizeDeps: { noDiscovery: true, include: [] },
  });

  try {
    const mod = await vite.ssrLoadModule("/src/data/seoMetadata.ts");
    const routes = mod.buildAllSeoRoutes();
    await mkdir(snapshotDir, { recursive: true });
    await writeFile(snapshotPath, JSON.stringify(routes, null, 2));
    console.log(
      `Generated route snapshot with ${routes.length} canonical SEO URLs at ${snapshotPath}.`,
    );
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error("Failed to generate route snapshot:", err);
  process.exit(1);
});
