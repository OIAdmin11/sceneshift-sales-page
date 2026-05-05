/**
 * Shared types for the SceneShift SEO/AIO content network.
 *
 * Records here are read by both the runtime (React pages) and the build pipeline
 * (sitemap + prerender). Keep all fields serializable.
 */

export type IsoDate = string; // YYYY-MM-DD

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  ours: string;
  theirs: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface PrimarySource {
  label: string;
  url: string;
}

/** A single product the customer can buy. */
export interface ServiceRecord {
  slug: string;
  name: string;
  /** Question-form H1 used on the detail page (also the QAPage question). */
  h1: string;
  /** ~40-60 word answer block used as the AIO citation target. */
  answer: string;
  /** One-line hook for cards and link rails. */
  hookOneLiner: string;
  /** Bleeding-neck pains the customer feels today. */
  painPoints: readonly string[];
  /** Plain-language steps for how the service works. Used for HowTo schema. */
  mechanism: readonly HowToStep[];
  /** Concrete outcomes customers can expect after install. */
  outcomes: readonly string[];
  /** Optional comparison block (becomes a real <table>). */
  comparison?: {
    title: string;
    oursLabel: string;
    theirsLabel: string;
    rows: readonly ComparisonRow[];
  };
  /** FAQ block at the bottom of the page (FAQPage schema). */
  faqs: readonly FaqEntry[];
  /** Package slugs that include this service. */
  includedInPackages: readonly string[];
  /** Sibling service slugs surfaced in interlink rails. */
  naturalCompanions: readonly string[];
  /** Industry slugs this service is most relevant to. */
  industries: readonly string[];
  /** Optional cited primary sources (.gov / industry research) for AIO. */
  primarySources?: readonly PrimarySource[];
  lastReviewed: IsoDate;
}

/** A bundle of services sold as a package. */
export interface PackageRecord {
  slug: string;
  name: string;
  tagline: string;
  /** Long-form positioning of who this is for. */
  idealFor: string;
  pains: readonly string[];
  heroFeature: string;
  includedServiceSlugs: readonly string[];
  priceHeadline: string;
  priceDetailLines: readonly string[];
  /** FAQs for this package. */
  faqs: readonly FaqEntry[];
  /** Industry slugs best matched to this package. */
  bestFitIndustries: readonly string[];
  lastReviewed: IsoDate;
}

/** A target vertical / industry. */
export interface IndustryRecord {
  slug: string;
  name: string;
  decisionMaker: string;
  idealCompanySize: string;
  bleedingNeck: string;
  hookOneLiner: string;
  /** Service slugs that solve this industry's primary pain. */
  productMatchSlugs: readonly string[];
  /** Crosshair page slugs relevant to this industry. */
  crosshairSlugs: readonly string[];
  /** Acquisition channel hints for sales (not customer-facing). */
  acquisitionChannel?: string;
  faqs: readonly FaqEntry[];
  /** Iowa city slugs that have notable density of this industry. */
  notableIowaCities: readonly string[];
  lastReviewed: IsoDate;
}

/** A specific Service x Industry intersection page. */
export interface CrosshairRecord {
  slug: string; // canonical sub-slug under the parent service
  serviceSlug: string;
  industrySlug: string;
  /** Page H1 in question form. */
  h1: string;
  /** ~40-60 word direct answer for AIO. */
  answer: string;
  /** Industry-specific bleeding-neck framing. */
  industryPains: readonly string[];
  /** How the service uniquely addresses this industry. */
  uniqueAngle: string;
  /** Industry-specific FAQs (different from the generic service FAQs). */
  faqs: readonly FaqEntry[];
  /** Sibling crosshair slugs (full path, e.g. "/services/.../for-...") */
  siblingCrosshairFullPaths: readonly string[];
  lastReviewed: IsoDate;
}

export type IowaRegion = "NW" | "NE" | "Central" | "SW" | "SE";

export interface CountyRecord {
  slug: string;
  name: string; // e.g. "Story"
  seatCity: string; // e.g. "Nevada"
  population: number;
  region: IowaRegion;
  neighboringCountySlugs: readonly string[];
  /** City slugs (from cities.ts) that are inside this county and indexable. */
  topCitySlugs: readonly string[];
  /** Notable employer types / industries (1-2 short phrases). */
  notableEmployers: readonly string[];
  /** Common local business categories that buy SceneShift services. */
  localBusinessCategories: readonly string[];
  /** 1-2 sentence unique paragraph giving the county real substance. */
  regionalContext: string;
}

export interface CityRecord {
  slug: string;
  name: string;
  countySlug: string;
  population: number;
  /** Latitude / longitude for sibling-distance computation and JSON-LD. */
  lat: number;
  lon: number;
  /** Unique 1-2 sentence intro mentioning a real landmark, employer, or trait. */
  intro: string;
  /** Notable named anchor employers in town (best-effort, may be empty). */
  anchorEmployers: readonly string[];
  /** Common local business categories. */
  localBusinessCategories: readonly string[];
  /**
   * If true, page ships with `index, follow`. If false, ships `noindex, follow`
   * until it earns Search Console impressions (kill-criteria policy).
   */
  indexable: boolean;
}

export interface AuthorRecord {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  /** Public profile (LinkedIn, portfolio, etc.) for `sameAs`. */
  sameAs: readonly string[];
  imagePath?: string;
}
