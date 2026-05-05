/**
 * Per-route metadata builders for the SceneShift SEO/AIO content network.
 *
 * Every new page type has a builder that returns a `RouteMetadata` record
 * containing:
 *   - the canonical path
 *   - title and description (within length budgets)
 *   - whether the page should be indexed
 *   - a JSON-LD `@graph` array with the correct schema types
 *
 * This file is the single source of truth for what gets crawled and how
 * structured data attaches to it. The build pipeline reads from here through
 * a generated JSON snapshot at `scripts/data/route-metadata.json`.
 */

import { siteConfig } from "@/data/site";
import { SERVICES } from "@/data/services-catalog";
import { PACKAGES } from "@/data/packages-catalog";
import { INDUSTRIES } from "@/data/industries-catalog";
import { CROSSHAIRS, crosshairFullPath } from "@/data/crosshairs-catalog";
import { COUNTIES, CITIES } from "@/data/iowa";
import { getPrimaryAuthor } from "@/data/authors";
import type {
  CityRecord,
  CountyRecord,
  CrosshairRecord,
  FaqEntry,
  IndustryRecord,
  PackageRecord,
  PrimarySource,
  ServiceRecord,
} from "@/types/seo";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const PERSON_ID = `${siteConfig.url}/#founder`;
const LOCAL_BUSINESS_ID = `${siteConfig.url}/#localbusiness`;

export interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  index: boolean;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
  jsonLd: unknown;
}

function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

// ============================================================================
// Shared schema fragments
// ============================================================================

function organizationNode(): Record<string, unknown> {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.primaryEmail,
    telephone: siteConfig.primaryPhoneHref,
    areaServed: siteConfig.areaServed,
    serviceType: [
      "AI CRM automation",
      "Lead response automation",
      "Sales follow-up systems",
      "Small business workflow automation",
    ],
  };
}

function websiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORG_ID },
  };
}

function personNode(): Record<string, unknown> {
  const author = getPrimaryAuthor();
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    sameAs: author.sameAs,
    worksFor: { "@id": ORG_ID },
  };
}

/**
 * Single-source LocalBusiness node. Lives only on the home page and the
 * founder page. Per-page service entries use `areaServed` to extend reach
 * without duplicating the LocalBusiness across hundreds of city pages.
 */
function localBusinessNode(): Record<string, unknown> {
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.primaryEmail,
    telephone: siteConfig.primaryPhoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ames",
      addressRegion: "IA",
      addressCountry: "US",
    },
    areaServed: siteConfig.areaServed,
  };
}

function breadcrumbList(
  items: ReadonlyArray<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function faqPage(faqs: readonly FaqEntry[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function howToFromMechanism(
  name: string,
  mechanism: ReadonlyArray<{ name: string; text: string }>,
): Record<string, unknown> {
  return {
    "@type": "HowTo",
    name,
    step: mechanism.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

function qaPage(question: string, answer: string): Record<string, unknown> {
  return {
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    },
  };
}

function citationsFromSources(
  sources: readonly PrimarySource[] | undefined,
): unknown {
  if (!sources || sources.length === 0) return undefined;
  return sources.map((s) => ({
    "@type": "CreativeWork",
    name: s.label,
    url: s.url,
  }));
}

// ============================================================================
// Utility: trim copy to length budgets so SERPs render cleanly
// ============================================================================

function clip(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + "...";
}

// ============================================================================
// Builders
// ============================================================================

export function buildServiceMeta(svc: ServiceRecord): RouteMetadata {
  const path = `/services/${svc.slug}`;
  const url = absoluteUrl(path);
  const title = clip(`${svc.name} for Iowa Small Businesses | SceneShift`, 60);
  const description = clip(svc.hookOneLiner + " " + svc.outcomes[0], 158);

  const serviceNode = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: svc.name,
    description: svc.hookOneLiner,
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed,
    audience: { "@type": "BusinessAudience", audienceType: "Small business" },
    serviceType: svc.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    citation: citationsFromSources(svc.primarySources),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: undefined,
    dateModified: svc.lastReviewed,
    author: { "@id": PERSON_ID },
    inLanguage: "en-US",
    breadcrumb: breadcrumbList([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Services", url: absoluteUrl("/services") },
      { name: svc.name, url },
    ]),
  };

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.8,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        serviceNode,
        howToFromMechanism(`How ${svc.name} works`, svc.mechanism),
        qaPage(svc.h1, svc.answer),
        faqPage(svc.faqs),
        webPage,
      ],
    },
  };
}

export function buildPackageMeta(pkg: PackageRecord): RouteMetadata {
  const path = `/packages/${pkg.slug}`;
  const url = absoluteUrl(path);
  const title = clip(`${pkg.name} | SceneShift AI Package`, 60);
  const description = clip(pkg.tagline, 158);

  const offerCatalog = {
    "@type": "OfferCatalog",
    name: pkg.name,
    itemListElement: pkg.includedServiceSlugs.map((slug) => {
      const svc = SERVICES.find((s) => s.slug === slug);
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc?.name ?? slug,
          url: absoluteUrl(`/services/${slug}`),
        },
      };
    }),
  };

  const serviceNode = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: pkg.name,
    description: pkg.tagline,
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed,
    hasOfferCatalog: offerCatalog,
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: pkg.lastReviewed,
    author: { "@id": PERSON_ID },
    inLanguage: "en-US",
    breadcrumb: breadcrumbList([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Packages", url: absoluteUrl("/packages") },
      { name: pkg.name, url },
    ]),
  };

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        serviceNode,
        faqPage(pkg.faqs),
        webPage,
      ],
    },
  };
}

export function buildIndustryMeta(ind: IndustryRecord): RouteMetadata {
  const path = `/industries/${ind.slug}`;
  const url = absoluteUrl(path);
  const title = clip(`${ind.name} | SceneShift`, 60);
  const description = clip(ind.hookOneLiner, 158);

  const serviceNode = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: ind.name,
    description: ind.hookOneLiner,
    provider: { "@id": ORG_ID },
    areaServed: ["Iowa", "United States"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: ind.decisionMaker,
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: ind.lastReviewed,
    author: { "@id": PERSON_ID },
    inLanguage: "en-US",
    breadcrumb: breadcrumbList([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Industries", url: absoluteUrl("/industries") },
      { name: ind.name, url },
    ]),
  };

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.7,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        serviceNode,
        faqPage(ind.faqs),
        webPage,
      ],
    },
  };
}

export function buildCrosshairMeta(c: CrosshairRecord): RouteMetadata {
  const svc = SERVICES.find((s) => s.slug === c.serviceSlug);
  const ind = INDUSTRIES.find((i) => i.slug === c.industrySlug);
  if (!svc || !ind) {
    throw new Error(
      `Crosshair ${c.serviceSlug}/${c.slug} references unknown service or industry`,
    );
  }
  const path = crosshairFullPath(c);
  const url = absoluteUrl(path);
  const title = clip(`${svc.name} ${c.slug.replace(/-/g, " ")} | SceneShift`, 60);
  const description = clip(c.answer, 158);

  const serviceNode = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${svc.name} ${c.slug.replace(/-/g, " ")}`,
    description: c.answer,
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed,
    audience: {
      "@type": "BusinessAudience",
      audienceType: ind.decisionMaker,
    },
    serviceType: svc.name,
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: c.lastReviewed,
    author: { "@id": PERSON_ID },
    inLanguage: "en-US",
    breadcrumb: breadcrumbList([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Services", url: absoluteUrl("/services") },
      { name: svc.name, url: absoluteUrl(`/services/${svc.slug}`) },
      { name: c.h1, url },
    ]),
  };

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.85,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        serviceNode,
        qaPage(c.h1, c.answer),
        faqPage(c.faqs),
        webPage,
      ],
    },
  };
}

export function buildCountyMeta(co: CountyRecord): RouteMetadata {
  const path = `/iowa/counties/${co.slug}`;
  const url = absoluteUrl(path);
  const title = clip(
    `Small Business AI Automation in ${co.name} County, Iowa | SceneShift`,
    60,
  );
  const description = clip(
    `${co.name} County small businesses use SceneShift to capture missed calls, respond faster to web leads, and automate follow-up. Serving ${co.seatCity} and surrounding communities.`,
    158,
  );

  const serviceNode = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Small business AI automation in ${co.name} County, Iowa`,
    description,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${co.name} County, Iowa`,
      containedInPlace: { "@type": "State", name: "Iowa" },
    },
    audience: { "@type": "BusinessAudience", audienceType: "Small business" },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: "2026-05-04",
    author: { "@id": PERSON_ID },
    inLanguage: "en-US",
    breadcrumb: breadcrumbList([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Iowa", url: absoluteUrl("/iowa") },
      { name: `${co.name} County`, url },
    ]),
  };

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.5,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [organizationNode(), websiteNode(), personNode(), serviceNode, webPage],
    },
  };
}

export function buildCityMeta(city: CityRecord): RouteMetadata {
  const path = `/iowa/cities/${city.slug}`;
  const url = absoluteUrl(path);
  const county = COUNTIES.find((c) => c.slug === city.countySlug);
  const title = clip(
    `Small Business AI Automation in ${city.name}, Iowa | SceneShift`,
    60,
  );
  const description = clip(
    `${city.name} small businesses use SceneShift to capture missed calls and respond faster to web leads. ${city.intro}`,
    158,
  );

  const serviceNode = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Small business AI automation in ${city.name}, Iowa`,
    description,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lon,
      },
      containedInPlace: county
        ? {
            "@type": "AdministrativeArea",
            name: `${county.name} County, Iowa`,
            containedInPlace: { "@type": "State", name: "Iowa" },
          }
        : { "@type": "State", name: "Iowa" },
    },
    audience: { "@type": "BusinessAudience", audienceType: "Small business" },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: "2026-05-04",
    author: { "@id": PERSON_ID },
    inLanguage: "en-US",
    breadcrumb: breadcrumbList([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Iowa", url: absoluteUrl("/iowa") },
      ...(county
        ? [
            {
              name: `${county.name} County`,
              url: absoluteUrl(`/iowa/counties/${county.slug}`),
            },
          ]
        : []),
      { name: city.name, url },
    ]),
  };

  return {
    path,
    title,
    description,
    index: city.indexable,
    changefreq: "monthly",
    priority: city.indexable ? 0.5 : 0.3,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [organizationNode(), websiteNode(), personNode(), serviceNode, webPage],
    },
  };
}

// ============================================================================
// Hub pages (services / packages / industries / iowa) and founder + editorial
// ============================================================================

export function buildServicesHubMeta(): RouteMetadata {
  const path = "/services";
  const url = absoluteUrl(path);
  const title = "AI Services for Iowa Small Businesses | SceneShift";
  const description =
    "AI services that capture missed calls, answer chat 24/7, qualify leads in 60 seconds, book appointments, and earn 5-star reviews for Iowa small businesses.";

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "weekly",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        {
          "@type": "CollectionPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          author: { "@id": PERSON_ID },
          inLanguage: "en-US",
          breadcrumb: breadcrumbList([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Services", url },
          ]),
          hasPart: SERVICES.map((s) => ({
            "@type": "Service",
            name: s.name,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        },
      ],
    },
  };
}

export function buildPackagesHubMeta(): RouteMetadata {
  const path = "/packages";
  const url = absoluteUrl(path);
  const title = "AI Automation Packages for Iowa Small Businesses | SceneShift";
  const description =
    "Compare SceneShift packages: Main Street Startup ($299/mo), Always-On Capture ($599/mo), and Autonomous Sales Floor ($999/mo). Built for Iowa small businesses.";

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "weekly",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        {
          "@type": "CollectionPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          inLanguage: "en-US",
          breadcrumb: breadcrumbList([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Packages", url },
          ]),
        },
      ],
    },
  };
}

export function buildIndustriesHubMeta(): RouteMetadata {
  const path = "/industries";
  const url = absoluteUrl(path);
  const title = "Industries We Serve in Iowa | SceneShift";
  const description =
    "SceneShift AI automation for Iowa home-services, professional services, MedSpas, local logistics, and niche e-commerce — translated into each industry's real workflow.";

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.7,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        {
          "@type": "CollectionPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          inLanguage: "en-US",
          breadcrumb: breadcrumbList([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Industries", url },
          ]),
        },
      ],
    },
  };
}

export function buildIowaHubMeta(): RouteMetadata {
  const path = "/iowa";
  const url = absoluteUrl(path);
  const title = "Iowa Small Business AI Automation by County | SceneShift";
  const description =
    "AI automation for small businesses in all 99 Iowa counties and major cities. Capture missed calls, answer chat, follow up automatically — and stay easy to choose.";

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "monthly",
    priority: 0.6,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        {
          "@type": "CollectionPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          inLanguage: "en-US",
          breadcrumb: breadcrumbList([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Iowa", url },
          ]),
        },
      ],
    },
  };
}

export function buildFounderMeta(): RouteMetadata {
  const path = "/about/founder";
  const url = absoluteUrl(path);
  const title = "About the Founder | SceneShift Iowa";
  const description =
    "SceneShift was started in Ames, Iowa to help small businesses respond faster, follow up consistently, and stay easy to choose against larger competitors.";

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "yearly",
    priority: 0.5,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        localBusinessNode(),
        personNode(),
        {
          "@type": "AboutPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: { "@id": PERSON_ID },
          breadcrumb: breadcrumbList([
            { name: "Home", url: absoluteUrl("/") },
            { name: "About", url: absoluteUrl("/about-us") },
            { name: "Founder", url },
          ]),
        },
      ],
    },
  };
}

export function buildEditorialPolicyMeta(): RouteMetadata {
  const path = "/about/editorial-policy";
  const url = absoluteUrl(path);
  const title = "SceneShift Editorial Policy | Iowa AI Automation";
  const description =
    "How SceneShift writes, reviews, and updates the AI automation guidance published on this site. Sources, review cadence, and corrections process.";

  return {
    path,
    title,
    description,
    index: true,
    changefreq: "yearly",
    priority: 0.4,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organizationNode(),
        websiteNode(),
        personNode(),
        {
          "@type": "AboutPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          breadcrumb: breadcrumbList([
            { name: "Home", url: absoluteUrl("/") },
            { name: "About", url: absoluteUrl("/about-us") },
            { name: "Editorial policy", url },
          ]),
        },
      ],
    },
  };
}

// ============================================================================
// Aggregate every new SEO route in one list — read by the build pipeline
// ============================================================================

export function buildAllSeoRoutes(): RouteMetadata[] {
  return [
    buildServicesHubMeta(),
    ...SERVICES.map(buildServiceMeta),
    buildPackagesHubMeta(),
    ...PACKAGES.map(buildPackageMeta),
    buildIndustriesHubMeta(),
    ...INDUSTRIES.map(buildIndustryMeta),
    ...CROSSHAIRS.map(buildCrosshairMeta),
    buildIowaHubMeta(),
    ...COUNTIES.map(buildCountyMeta),
    ...CITIES.map(buildCityMeta),
    buildFounderMeta(),
    buildEditorialPolicyMeta(),
  ];
}

/** Lookup metadata for a given path — used at runtime by SEO pages. */
export function getSeoMetadataForPath(path: string): RouteMetadata | undefined {
  return buildAllSeoRoutes().find((r) => r.path === path);
}
