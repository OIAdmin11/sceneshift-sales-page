#!/usr/bin/env node
// rename-pages-to-index.js
// Bulk-rename all `page.*` files to `index.*`

import fs from "fs/promises";
import path from "path";

const ROOT = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const DRY = process.argv.includes("--dry");
const OVERWRITE = process.argv.includes("--overwrite");

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "out",
  "dist",
  "build",
  "coverage",
  ".turbo",
]);

const exts = [".js", ".jsx", ".ts", ".tsx"];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      await walk(full);
    } else {
      const ext = path.extname(entry.name);
      if (!exts.includes(ext)) continue;

      const base = path.basename(entry.name, ext);
      if (base !== "page") continue;

      const target = path.join(dir, `index${ext}`);
      try {
        await fs.access(target);
        if (!OVERWRITE) {
          console.log(`[SKIP] ${full} -> ${target} (index exists)`);
          continue;
        } else {
          await fs.rm(target, { force: true });
        }
      } catch {
        // target does not exist
      }

      if (DRY) {
        console.log(`[DRY] ${full} -> ${target}`);
      } else {
        await fs.rename(full, target);
        console.log(`[OK] ${full} -> ${target}`);
      }
    }
  }
}

console.log(`▶ Renaming in ${ROOT} (dry=${DRY}, overwrite=${OVERWRITE})`);
walk(ROOT).catch((err) => console.error("Error:", err));
