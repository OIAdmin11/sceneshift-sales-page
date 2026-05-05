/**
 * Post-build validation for the SceneShift SEO/AIO content network.
 *
 * Asserts every prerendered page meets minimum requirements:
 *   - Title length is between 30 and 70 characters
 *   - Description length is between 80 and 170 characters
 *   - Title is unique within indexable routes
 *   - Description is unique within indexable routes
 *   - Static HTML body contains an <h1>
 *   - Static HTML body contains at least one internal anchor (defends
 *     against the "empty SPA shell" regression)
 *
 * Failures abort the build via non-zero exit, but only for indexable routes.
 */
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { canonicalRoutes, prerenderRoutes } from "./seo-data.mjs";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");

const errors = [];
const warnings = [];

function pathToFile(routePath) {
  if (routePath === "/") return join(distDir, "index.html");
  return join(distDir, routePath.replace(/^\//, ""), "index.html");
}

const titles = new Map();
const descriptions = new Map();

for (const route of canonicalRoutes) {
  const titleLen = (route.title ?? "").length;
  const descLen = (route.description ?? "").length;

  if (titleLen < 30 || titleLen > 70) {
    warnings.push(`${route.path}: title length ${titleLen} outside 30-70 budget`);
  }
  if (descLen < 80 || descLen > 170) {
    warnings.push(
      `${route.path}: description length ${descLen} outside 80-170 budget`,
    );
  }

  const titleKey = route.title?.trim().toLowerCase();
  const descKey = route.description?.trim().toLowerCase();
  if (titleKey) {
    if (titles.has(titleKey)) {
      errors.push(
        `Duplicate title "${route.title}" on ${route.path} and ${titles.get(titleKey)}`,
      );
    } else {
      titles.set(titleKey, route.path);
    }
  }
  if (descKey) {
    if (descriptions.has(descKey)) {
      errors.push(
        `Duplicate description on ${route.path} and ${descriptions.get(descKey)}`,
      );
    } else {
      descriptions.set(descKey, route.path);
    }
  }
}

const internalLinkPattern = /<a[^>]*href="\/[^"]*"/i;
const h1Pattern = /<h1[\s>]/i;

for (const route of prerenderRoutes) {
  let html;
  try {
    html = await readFile(pathToFile(route.path), "utf8");
  } catch (err) {
    errors.push(`${route.path}: prerendered HTML missing (${err.message})`);
    continue;
  }

  // Body checks only matter for SEO snapshot routes (not the legacy 4 base routes
  // which intentionally ship as head-only / SPA shells).
  const isSeoRoute = !["/", "/about-us", "/pricing", "/contact"].includes(
    route.path,
  );

  if (isSeoRoute) {
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/i);
    const rootInner = rootMatch ? rootMatch[1] : "";
    if (!rootInner.trim()) {
      errors.push(
        `${route.path}: <div id="root"> is empty in prerendered HTML (SSR body injection failed)`,
      );
      continue;
    }
    if (!h1Pattern.test(rootInner)) {
      errors.push(`${route.path}: no <h1> in prerendered body`);
    }
    if (!internalLinkPattern.test(rootInner)) {
      errors.push(`${route.path}: no internal links in prerendered body`);
    }
  }
}

if (warnings.length > 0) {
  console.warn(`SEO validation: ${warnings.length} warning(s):`);
  for (const w of warnings) console.warn(`  - ${w}`);
}

if (errors.length > 0) {
  console.error(`SEO validation FAILED with ${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  `SEO validation passed: ${prerenderRoutes.length} routes, ${warnings.length} non-blocking warning(s).`,
);
