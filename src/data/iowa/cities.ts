import type { CityRecord } from "@/types/seo";

/**
 * Iowa city pages — top by population plus founder-defined featuredSmallTowns.
 *
 * Per the iowa-seo-aio-pages plan kill-criteria policy:
 *  - Population-ranked cities ship `noindex, follow` initially. They are
 *    crawled and contribute to internal linking, but do not dilute crawl
 *    budget or quality signals. Promote to `index, follow` after they earn
 *    Search Console impressions.
 *  - `featuredSmallTowns` ship `index, follow` because they carry a real
 *    E-E-A-T signal (founder local ties).
 *
 * Promotion can be manual (`MANUALLY_PROMOTED_CITIES`) or automatic via env:
 *
 *   VITE_SEO_CITY_PROMOTION_START_DATE=2026-06-01
 *   VITE_SEO_CITY_PROMOTION_BATCH_SIZE=3
 *
 * Starting on the configured date, the build promotes the next batch of
 * population-ranked cities once per calendar month. Without the start date,
 * no automatic promotion happens.
 */
export const FEATURED_SMALL_TOWNS = ["huxley"] as const;

/**
 * Internal city records. The `indexable` flag below is the LAUNCH default —
 * it gets overridden at export time so only `featuredSmallTowns` ship
 * indexed. To manually promote a population-ranked city to indexed (after
 * Search Console shows real impressions per the kill-criteria policy), add
 * its slug to `MANUALLY_PROMOTED_CITIES` below.
 */
const MANUALLY_PROMOTED_CITIES: readonly string[] = [];

const AUTO_PROMOTION_START_DATE =
  import.meta.env.VITE_SEO_CITY_PROMOTION_START_DATE;
const AUTO_PROMOTION_BATCH_SIZE = parsePositiveInt(
  import.meta.env.VITE_SEO_CITY_PROMOTION_BATCH_SIZE,
  3,
);
const AUTO_PROMOTION_AS_OF_DATE =
  import.meta.env.VITE_SEO_CITY_PROMOTION_AS_OF_DATE;

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseDateOnly(value: string | undefined): Date | undefined {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function monthsElapsedInclusive(
  startDateValue: string | undefined,
  asOfDateValue: string | undefined,
): number {
  const startDate = parseDateOnly(startDateValue);
  if (!startDate) return 0;

  const asOfDate = parseDateOnly(asOfDateValue) ?? new Date();
  const asOfUtc = new Date(
    Date.UTC(
      asOfDate.getUTCFullYear(),
      asOfDate.getUTCMonth(),
      asOfDate.getUTCDate(),
    ),
  );

  if (asOfUtc < startDate) return 0;

  let months =
    (asOfUtc.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    (asOfUtc.getUTCMonth() - startDate.getUTCMonth());

  if (asOfUtc.getUTCDate() < startDate.getUTCDate()) {
    months -= 1;
  }

  return Math.max(0, months + 1);
}

const RAW_CITIES: readonly CityRecord[] = [
  {
    slug: "des-moines",
    name: "Des Moines",
    countySlug: "polk",
    population: 214133,
    lat: 41.5868,
    lon: -93.625,
    intro:
      "Iowa's capital and largest city, anchored by the Iowa State Capitol and a downtown insurance and finance corridor that drives Polk County's economy.",
    anchorEmployers: [
      "Principal Financial Group",
      "Wells Fargo",
      "MercyOne Des Moines",
      "UnityPoint Health",
      "State of Iowa government",
    ],
    localBusinessCategories: [
      "HVAC and home services",
      "Plumbing and electrical contractors",
      "Roofing and storm restoration",
      "MedSpas and aesthetic clinics",
      "CPA and law firms",
      "Auto dealerships and repair",
      "Salons and barbershops",
    ],
    indexable: true,
  },
  {
    slug: "cedar-rapids",
    name: "Cedar Rapids",
    countySlug: "linn",
    population: 137710,
    lat: 41.9779,
    lon: -91.6656,
    intro:
      "Iowa's second-largest city, often called the City of Five Seasons, with a manufacturing and food-processing base anchored by Quaker Oats, Collins Aerospace, and a strong cluster of independent contractors and trades.",
    anchorEmployers: [
      "Collins Aerospace",
      "Transamerica",
      "Quaker Oats / PepsiCo",
      "UnityPoint Health - St. Luke's",
      "Mercy Medical Center",
    ],
    localBusinessCategories: [
      "Manufacturing services",
      "Home services and trades",
      "MedSpas and dental clinics",
      "Insurance and financial services",
      "Auto and truck repair",
    ],
    indexable: true,
  },
  {
    slug: "davenport",
    name: "Davenport",
    countySlug: "scott",
    population: 101724,
    lat: 41.5236,
    lon: -90.5776,
    intro:
      "The largest of the Quad Cities along the Mississippi River, with a riverfront economy that blends advanced manufacturing, healthcare, and a dense network of trades and home-service businesses.",
    anchorEmployers: [
      "Genesis Health System",
      "Arconic",
      "Tyson Foods",
      "John Deere (regional offices)",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Healthcare clinics and MedSpas",
      "Manufacturing services",
      "Real estate and property management",
    ],
    indexable: true,
  },
  {
    slug: "sioux-city",
    name: "Sioux City",
    countySlug: "woodbury",
    population: 85791,
    lat: 42.4999,
    lon: -96.4003,
    intro:
      "Western Iowa's hub at the Missouri River tri-state intersection, with a regional economy built on meat processing, agribusiness logistics, and the trades that serve them.",
    anchorEmployers: [
      "Tyson Foods",
      "Smithfield Foods",
      "MercyOne Siouxland",
      "UnityPoint Health - St. Luke's",
    ],
    localBusinessCategories: [
      "Logistics and trucking services",
      "Home services and trades",
      "Agricultural services",
      "Healthcare and dental clinics",
    ],
    indexable: true,
  },
  {
    slug: "iowa-city",
    name: "Iowa City",
    countySlug: "johnson",
    population: 74828,
    lat: 41.6611,
    lon: -91.5302,
    intro:
      "Home of the University of Iowa and the UIHC academic medical center — a college town with a high-density professional services and clinic economy serving students, faculty, and the surrounding region.",
    anchorEmployers: [
      "University of Iowa",
      "UI Hospitals and Clinics",
      "ACT Inc",
      "Pearson",
    ],
    localBusinessCategories: [
      "Professional services and CPA firms",
      "MedSpas and dental practices",
      "Property management",
      "Restaurants and hospitality",
      "Home services and trades",
    ],
    indexable: true,
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    countySlug: "black-hawk",
    population: 67314,
    lat: 42.4928,
    lon: -92.3426,
    intro:
      "An industrial Cedar Valley city with deep manufacturing roots — John Deere's Waterloo Works is one of the largest tractor-assembly operations in the world.",
    anchorEmployers: [
      "John Deere",
      "Tyson Foods",
      "MercyOne Northeast Iowa",
      "UnityPoint Health - Allen Hospital",
    ],
    localBusinessCategories: [
      "Industrial and manufacturing services",
      "Home services and trades",
      "Auto repair and dealerships",
      "Healthcare and family clinics",
    ],
    indexable: true,
  },
  {
    slug: "ames",
    name: "Ames",
    countySlug: "story",
    population: 66427,
    lat: 42.0308,
    lon: -93.6319,
    intro:
      "Home of Iowa State University and SceneShift's headquarters — a college town with a high concentration of professional services, technology businesses, and home-service trades serving Central Iowa.",
    anchorEmployers: [
      "Iowa State University",
      "Mary Greeley Medical Center",
      "Workiva",
      "Danfoss Power Solutions",
    ],
    localBusinessCategories: [
      "Professional services",
      "Home services and trades",
      "MedSpas and clinics",
      "Property management for student housing",
      "Restaurants and retail",
    ],
    indexable: true,
  },
  {
    slug: "west-des-moines",
    name: "West Des Moines",
    countySlug: "polk",
    population: 68723,
    lat: 41.5772,
    lon: -93.7113,
    intro:
      "A fast-growing Des Moines suburb with high-income demographics, a major insurance and finance employment cluster, and a dense network of MedSpas, professional services, and home-service contractors.",
    anchorEmployers: [
      "Wells Fargo (regional)",
      "Hy-Vee corporate",
      "Athene",
      "FBL Financial Group",
    ],
    localBusinessCategories: [
      "MedSpas and aesthetic clinics",
      "Professional services and CPA firms",
      "Home services and trades",
      "Real estate",
      "Restaurants and retail",
    ],
    indexable: true,
  },
  {
    slug: "council-bluffs",
    name: "Council Bluffs",
    countySlug: "pottawattamie",
    population: 62799,
    lat: 41.2619,
    lon: -95.8608,
    intro:
      "Across the Missouri River from Omaha, with a logistics and rail-served distribution economy alongside Iowa-side trades, casinos, and healthcare.",
    anchorEmployers: [
      "Union Pacific Railroad",
      "Google data center",
      "MercyOne Council Bluffs",
      "Methodist Jennie Edmundson Hospital",
    ],
    localBusinessCategories: [
      "Logistics and warehousing",
      "Home services and trades",
      "Healthcare and family clinics",
      "Retail and hospitality",
    ],
    indexable: true,
  },
  {
    slug: "dubuque",
    name: "Dubuque",
    countySlug: "dubuque",
    population: 59667,
    lat: 42.5006,
    lon: -90.6648,
    intro:
      "Iowa's oldest city, on the Mississippi at the tri-state corner, with a manufacturing and tourism economy and a strong base of independent home-service businesses.",
    anchorEmployers: [
      "John Deere Dubuque Works",
      "MercyOne Dubuque",
      "UnityPoint Health - Finley Hospital",
      "Cottingham & Butler",
    ],
    localBusinessCategories: [
      "Manufacturing services",
      "Home services and trades",
      "Healthcare and dental clinics",
      "Hospitality and tourism services",
    ],
    indexable: true,
  },
  {
    slug: "ankeny",
    name: "Ankeny",
    countySlug: "polk",
    population: 67887,
    lat: 41.7297,
    lon: -93.6058,
    intro:
      "One of Iowa's fastest-growing suburbs, just north of Des Moines, with new-construction neighborhoods that drive heavy demand for home-services trades, real estate, and family-oriented MedSpas and clinics.",
    anchorEmployers: [
      "John Deere Des Moines Works",
      "DMACC (community college)",
      "Casey's General Stores corporate",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Real estate and property services",
      "MedSpas and pediatric clinics",
      "Restaurants and family retail",
    ],
    indexable: true,
  },
  {
    slug: "urbandale",
    name: "Urbandale",
    countySlug: "polk",
    population: 45580,
    lat: 41.6266,
    lon: -93.7122,
    intro:
      "A close-in Des Moines suburb with a high-income demographic and a dense cluster of independent service businesses, professional services, and family healthcare.",
    anchorEmployers: [
      "FBL Financial Group",
      "Heartland Co-op",
      "Berkshire Hathaway Energy",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Professional services",
      "MedSpas and family clinics",
      "Auto repair and dealerships",
    ],
    indexable: true,
  },
  {
    slug: "cedar-falls",
    name: "Cedar Falls",
    countySlug: "black-hawk",
    population: 40713,
    lat: 42.5277,
    lon: -92.4453,
    intro:
      "Home of the University of Northern Iowa, sharing the Cedar Valley with neighboring Waterloo and supporting a college-town economy of professional services and trades.",
    anchorEmployers: [
      "University of Northern Iowa",
      "Target Distribution Center",
      "Western Home Communities",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Professional services",
      "Property management for student housing",
      "Healthcare and clinics",
    ],
    indexable: true,
  },
  {
    slug: "marion",
    name: "Marion",
    countySlug: "linn",
    population: 41535,
    lat: 42.0341,
    lon: -91.5969,
    intro:
      "An eastern Cedar Rapids suburb with rapid residential growth and a strong base of home-service contractors serving new-construction neighborhoods.",
    anchorEmployers: [
      "Marion Independent School District",
      "Linn-Mar Community Schools",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Real estate and property services",
      "Family clinics and dental",
      "Restaurants and retail",
    ],
    indexable: true,
  },
  {
    slug: "bettendorf",
    name: "Bettendorf",
    countySlug: "scott",
    population: 39102,
    lat: 41.5236,
    lon: -90.5151,
    intro:
      "The Iowa side of the Quad Cities' upscale residential corridor, with a high-income demographic and concentrated demand for MedSpas, professional services, and home-service trades.",
    anchorEmployers: [
      "Genesis Medical Center Bettendorf",
      "Isle Casino Hotel",
      "Pleasant Valley schools",
    ],
    localBusinessCategories: [
      "MedSpas and aesthetic clinics",
      "Professional services",
      "Home services and trades",
      "Hospitality and dining",
    ],
    indexable: true,
  },
  {
    slug: "mason-city",
    name: "Mason City",
    countySlug: "cerro-gordo",
    population: 27338,
    lat: 43.1536,
    lon: -93.2008,
    intro:
      "North-central Iowa's regional hub, with a healthcare and manufacturing economy and the surrounding agricultural communities that look to Mason City for trades and professional services.",
    anchorEmployers: [
      "MercyOne North Iowa Medical Center",
      "Cargill",
      "Kraft Heinz",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Healthcare and clinics",
      "Agricultural services",
      "Auto and equipment repair",
    ],
    indexable: true,
  },
  {
    slug: "marshalltown",
    name: "Marshalltown",
    countySlug: "marshall",
    population: 27591,
    lat: 42.0494,
    lon: -92.9079,
    intro:
      "A central-Iowa manufacturing town anchored by JBS Pork (formerly Swift) and a long history of light manufacturing, with a working-class home-services and trades economy.",
    anchorEmployers: [
      "JBS USA",
      "Lennox Industries",
      "Emerson Process Management",
      "Iowa Veterans Home",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Auto repair",
      "Manufacturing services",
      "Family healthcare",
    ],
    indexable: true,
  },
  {
    slug: "clinton",
    name: "Clinton",
    countySlug: "clinton",
    population: 24469,
    lat: 41.8444,
    lon: -90.1887,
    intro:
      "A Mississippi River industrial town with rail-served manufacturing and shipping logistics, plus a steady base of independent trades and home-service contractors.",
    anchorEmployers: [
      "ADM Clinton",
      "Nestlé Purina PetCare",
      "Mercy Medical Center - Clinton",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Manufacturing services",
      "Logistics services",
      "Family healthcare",
    ],
    indexable: true,
  },
  {
    slug: "burlington",
    name: "Burlington",
    countySlug: "des-moines",
    population: 23982,
    lat: 40.8076,
    lon: -91.1129,
    intro:
      "Southeastern Iowa's largest city, on the Mississippi at the Illinois border, with a manufacturing economy and a regional medical center serving the river towns south of the Quad Cities.",
    anchorEmployers: [
      "Great River Health System",
      "Case New Holland",
      "American Ordnance",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Healthcare and clinics",
      "Manufacturing services",
      "Auto repair",
    ],
    indexable: true,
  },
  {
    slug: "ottumwa",
    name: "Ottumwa",
    countySlug: "wapello",
    population: 25529,
    lat: 41.0203,
    lon: -92.4113,
    intro:
      "Southeastern Iowa's regional hub on the Des Moines River, with a meat-processing and manufacturing base and the surrounding rural counties looking to Ottumwa for trades and healthcare.",
    anchorEmployers: [
      "JBS Ottumwa",
      "Pinnacle Foods",
      "Ottumwa Regional Health Center",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Manufacturing services",
      "Healthcare clinics",
      "Auto and equipment repair",
    ],
    indexable: true,
  },
  {
    slug: "fort-dodge",
    name: "Fort Dodge",
    countySlug: "webster",
    population: 24168,
    lat: 42.5,
    lon: -94.1788,
    intro:
      "North-central Iowa's regional center for ag-services, gypsum mining, and meat processing, with a working-class trades and home-services economy.",
    anchorEmployers: [
      "UnityPoint Health - Trinity Regional",
      "Cargill Meat Solutions",
      "Koch Industries (CertainTeed)",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Agricultural services",
      "Manufacturing services",
      "Healthcare clinics",
    ],
    indexable: true,
  },
  {
    slug: "muscatine",
    name: "Muscatine",
    countySlug: "muscatine",
    population: 23797,
    lat: 41.4248,
    lon: -91.0432,
    intro:
      "A Mississippi River manufacturing town historically known as the Pearl Button Capital of the World, with a global manufacturing and ag-processing base.",
    anchorEmployers: [
      "HNI Corporation",
      "Bandag (Bridgestone)",
      "Kent Corporation",
      "Muscatine Power and Water",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Manufacturing services",
      "Agricultural services",
      "Healthcare and dental",
    ],
    indexable: true,
  },
  {
    slug: "coralville",
    name: "Coralville",
    countySlug: "johnson",
    population: 22318,
    lat: 41.6764,
    lon: -91.5803,
    intro:
      "An Iowa City suburb with the Coralville Strip retail corridor and the Iowa River Landing development, supporting MedSpas, family clinics, and a college-town trades economy.",
    anchorEmployers: [
      "Iowa River Landing development",
      "ACT Inc (regional)",
      "Heartland Inn (hospitality)",
    ],
    localBusinessCategories: [
      "MedSpas and aesthetic clinics",
      "Home services and trades",
      "Hospitality and dining",
      "Property management",
    ],
    indexable: true,
  },
  {
    slug: "johnston",
    name: "Johnston",
    countySlug: "polk",
    population: 24064,
    lat: 41.6722,
    lon: -93.6977,
    intro:
      "A growing Des Moines suburb with the Pioneer / Corteva agribusiness corporate campus and a high-income demographic driving demand for premium home services and aesthetic clinics.",
    anchorEmployers: [
      "Corteva Agriscience (Pioneer Hi-Bred)",
      "Iowa Public Television",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "MedSpas and aesthetic clinics",
      "Professional services",
      "Family healthcare",
    ],
    indexable: true,
  },
  {
    slug: "huxley",
    name: "Huxley",
    countySlug: "story",
    population: 3614,
    lat: 41.8908,
    lon: -93.6094,
    intro:
      "A small Story County town between Ames and Ankeny along the High Trestle Trail, with rapid residential growth driven by Des Moines and Ames commuters and a tight-knit small-business community.",
    anchorEmployers: [
      "Ballard Community Schools",
      "Story County Medical Center (regional)",
    ],
    localBusinessCategories: [
      "Home services and trades",
      "Real estate and property services",
      "Family healthcare",
      "Local restaurants and retail",
    ],
    indexable: true,
  },
] as const;

const automaticPromotionCount =
  monthsElapsedInclusive(
    AUTO_PROMOTION_START_DATE,
    AUTO_PROMOTION_AS_OF_DATE,
  ) * AUTO_PROMOTION_BATCH_SIZE;

export const AUTO_PROMOTED_CITY_SLUGS: readonly string[] = RAW_CITIES.filter(
  (c) => !(FEATURED_SMALL_TOWNS as readonly string[]).includes(c.slug),
)
  .slice(0, automaticPromotionCount)
  .map((c) => c.slug);

export const SEO_CITY_AUTO_PROMOTION_CONFIG = {
  startDate: AUTO_PROMOTION_START_DATE,
  batchSize: AUTO_PROMOTION_BATCH_SIZE,
  asOfDate: AUTO_PROMOTION_AS_OF_DATE,
  automaticPromotionCount,
} as const;

/**
 * Final exported city list with `indexable` derived from launch policy:
 * featuredSmallTowns + manually-promoted cities + schedule-promoted cities
 * ship indexed; everything else ships noindex,follow until promoted.
 */
export const CITIES: readonly CityRecord[] = RAW_CITIES.map((c) => ({
  ...c,
  indexable:
    (FEATURED_SMALL_TOWNS as readonly string[]).includes(c.slug) ||
    MANUALLY_PROMOTED_CITIES.includes(c.slug) ||
    AUTO_PROMOTED_CITY_SLUGS.includes(c.slug),
}));

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCityBySlug(slug: string): CityRecord | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** Haversine distance in km between two lat/lon pairs. */
function distanceKm(
  a: { lat: number; lon: number },
  b: { lat: number; lon: number },
): number {
  const toRad = (x: number) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Returns the N nearest sibling city slugs (excluding self). */
export function getNearbyCitySlugs(slug: string, n = 4): readonly string[] {
  const self = getCityBySlug(slug);
  if (!self) return [];
  return CITIES.filter((c) => c.slug !== slug)
    .map((c) => ({
      slug: c.slug,
      distance: distanceKm(self, c),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, n)
    .map((c) => c.slug);
}
