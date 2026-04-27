import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { absoluteUrl, canonicalRoutes, site } from "./seo-data.mjs";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const defaultEndpoint = "https://api.indexnow.org/indexnow";
const key = process.env.INDEXNOW_KEY || site.indexNowKey;
const strict = process.env.INDEXNOW_STRICT === "1";
const registryUrl = "https://www.indexnow.org/searchengines.json";
const fallbackEngines = {
  bing: "https://www.bing.com/indexnow",
  yandex: "https://yandex.com/indexnow",
  seznam: "https://search.seznam.cz/indexnow",
  naver: "https://searchadvisor.naver.com/indexnow",
  yep: "https://indexnow.yep.com/indexnow",
  internetarchive: "https://web-static.archive.org/indexnow",
  amazonbot: "https://indexnow.amazonbot.amazon/indexnow",
};

function args() {
  return process.argv.slice(2);
}

function unique(values) {
  return [...new Set(values)];
}

async function urlsFromSitemap() {
  const sitemap = await readFile(join(rootDir, "public", "sitemap.xml"), "utf8");
  return [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

async function resolveUrls() {
  const cliArgs = args();
  const explicitUrls = cliArgs
    .filter((arg) => arg.startsWith("--url="))
    .map((arg) => arg.slice("--url=".length));

  if (cliArgs.includes("--urls-from-sitemap")) {
    return unique(await urlsFromSitemap());
  }

  if (explicitUrls.length > 0) {
    return unique(explicitUrls);
  }

  return canonicalRoutes.map((route) => absoluteUrl(route.path));
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`${url} returned ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function discoverEngineEndpoints() {
  const registry = await fetchJson(registryUrl);
  const entries = await Promise.allSettled(
    Object.entries(registry).map(async ([id, metaUrl]) => {
      const meta = await fetchJson(metaUrl);
      if (!meta.api || meta.unsubscribe === true) {
        return null;
      }
      return [id, meta.api];
    }),
  );

  return Object.fromEntries(
    entries
      .filter((entry) => entry.status === "fulfilled" && entry.value)
      .map((entry) => entry.value),
  );
}

async function resolveEndpoints() {
  const cliArgs = args();
  const manualEndpoint = process.env.INDEXNOW_ENDPOINT;
  const endpointArgs = cliArgs
    .filter((arg) => arg.startsWith("--endpoint="))
    .map((arg) => arg.slice("--endpoint=".length));
  const engineArgs = cliArgs
    .filter((arg) => arg.startsWith("--engine="))
    .flatMap((arg) =>
      arg
        .slice("--engine=".length)
        .split(",")
        .map((engine) => engine.trim().toLowerCase())
        .filter(Boolean),
    );
  const allEngines = cliArgs.includes("--all-engines");

  if (endpointArgs.length > 0 || manualEndpoint) {
    return {
      custom: unique([...endpointArgs, manualEndpoint].filter(Boolean)),
    };
  }

  if (!allEngines && engineArgs.length === 0) {
    return { indexnow: [defaultEndpoint] };
  }

  let discoveredEngines = {};
  try {
    discoveredEngines = await discoverEngineEndpoints();
  } catch (error) {
    console.warn(
      `IndexNow engine discovery failed: ${error.message}. Falling back to built-in endpoints.`,
    );
  }

  const engines = {
    ...fallbackEngines,
    ...discoveredEngines,
  };
  const selectedEngineIds = allEngines ? Object.keys(engines) : engineArgs;
  const selected = Object.fromEntries(
    selectedEngineIds
      .map((id) => [id, engines[id]])
      .filter(([, endpoint]) => Boolean(endpoint)),
  );
  const missing = selectedEngineIds.filter((id) => !engines[id]);

  if (missing.length > 0) {
    console.warn(`Unknown IndexNow engine(s): ${missing.join(", ")}.`);
  }

  if (Object.keys(selected).length === 0) {
    return { indexnow: [defaultEndpoint] };
  }

  return Object.fromEntries(
    Object.entries(selected).map(([id, endpoint]) => [id, [endpoint]]),
  );
}

async function submitToEndpoint(label, endpoint, urlList) {
  const body = {
    host: site.host,
    key,
    keyLocation: absoluteUrl(`/${key}.txt`),
    urlList,
  };

  if (args().includes("--dry-run")) {
    console.log(`[dry-run] ${label}: would submit ${urlList.length} URL(s) to ${endpoint}.`);
    return { label, endpoint, status: "dry-run" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (response.ok || response.status === 202) {
    console.log(
      `${label}: IndexNow accepted ${urlList.length} URL(s) with status ${response.status}.`,
    );
    return { label, endpoint, status: response.status };
  }

  const message = `${label}: IndexNow returned ${response.status} ${response.statusText} for ${urlList.length} URL(s).`;
  if (strict) {
    throw new Error(message);
  }

  console.warn(`${message} Continuing because INDEXNOW_STRICT is not enabled.`);
  return { label, endpoint, status: response.status };
}

async function main() {
  const urlList = await resolveUrls();
  const endpointsByEngine = await resolveEndpoints();

  for (const [engine, endpoints] of Object.entries(endpointsByEngine)) {
    for (const endpoint of endpoints) {
      try {
        await submitToEndpoint(engine, endpoint, urlList);
      } catch (error) {
        if (strict) {
          throw error;
        }
        console.warn(
          `${engine}: IndexNow submission skipped for ${endpoint}: ${error.message}`,
        );
      }
    }
  }
}

main().catch((error) => {
  if (strict) {
    throw error;
  }
  console.warn(`IndexNow submission skipped: ${error.message}`);
});
