/**
 * Builders for tiered interlink rails. The rules here implement the
 * "Tiered linking" section of the iowa-seo-aio-pages plan — each page type
 * gets a different set of rails so link equity flows toward commercial-intent
 * pages rather than diffusing across every county.
 */
import type { InterlinkItem, InterlinkRail } from "@/components/seo/InterlinkGrid";

import { SERVICES, getServiceBySlug } from "@/data/services-catalog";
import { PACKAGES, getPackageBySlug } from "@/data/packages-catalog";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries-catalog";
import {
  CROSSHAIRS,
  crosshairFullPath,
  getCrosshair,
} from "@/data/crosshairs-catalog";
import {
  CITIES,
  COUNTIES,
  getCityBySlug,
  getCountyBySlug,
  getCitySlugsInCounty,
  getNearbyCitySlugs,
} from "@/data/iowa";

// ============================================================================
// Item builders
// ============================================================================

export function serviceItem(slug: string): InterlinkItem | undefined {
  const svc = getServiceBySlug(slug);
  if (!svc) return undefined;
  return {
    href: `/services/${svc.slug}`,
    label: svc.name,
    hook: svc.hookOneLiner,
  };
}

export function packageItem(slug: string): InterlinkItem | undefined {
  const pkg = getPackageBySlug(slug);
  if (!pkg) return undefined;
  return {
    href: `/packages/${pkg.slug}`,
    label: pkg.name,
    hook: pkg.tagline,
  };
}

export function industryItem(slug: string): InterlinkItem | undefined {
  const ind = getIndustryBySlug(slug);
  if (!ind) return undefined;
  return {
    href: `/industries/${ind.slug}`,
    label: ind.name,
    hook: ind.hookOneLiner,
  };
}

export function crosshairItem(
  serviceSlug: string,
  crosshairSlug: string,
): InterlinkItem | undefined {
  const c = getCrosshair(serviceSlug, crosshairSlug);
  if (!c) return undefined;
  return {
    href: crosshairFullPath(c),
    label: c.h1,
  };
}

/** Looks up a crosshair by its full path "/services/svc/cross". */
export function crosshairItemFromPath(
  path: string,
): InterlinkItem | undefined {
  const match = path.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (!match) return undefined;
  return crosshairItem(match[1], match[2]);
}

export function countyItem(slug: string): InterlinkItem | undefined {
  const co = getCountyBySlug(slug);
  if (!co) return undefined;
  return {
    href: `/iowa/counties/${co.slug}`,
    label: `${co.name} County`,
    hook: `Seat: ${co.seatCity}`,
  };
}

export function cityItem(slug: string): InterlinkItem | undefined {
  const c = getCityBySlug(slug);
  if (!c) return undefined;
  return {
    href: `/iowa/cities/${c.slug}`,
    label: c.name,
    hook: `Pop. ${c.population.toLocaleString()}`,
  };
}

function compact<T>(items: ReadonlyArray<T | undefined>): T[] {
  return items.filter((x): x is T => x !== undefined);
}

// ============================================================================
// Rail builders per page type
// ============================================================================

/**
 * Service detail rails — 3 rotated siblings, all packages, 2 industries,
 * 2 most-relevant crosshairs.
 */
export function serviceDetailRails(serviceSlug: string): InterlinkRail[] {
  const svc = getServiceBySlug(serviceSlug);
  if (!svc) return [];
  const siblings = svc.naturalCompanions.slice(0, 3);
  const industries = svc.industries.slice(0, 2);
  const crosshairs = CROSSHAIRS.filter((c) => c.serviceSlug === serviceSlug)
    .slice(0, 2)
    .map((c) => ({ href: crosshairFullPath(c), label: c.h1 }));

  return [
    {
      heading: "Other services",
      items: compact(siblings.map(serviceItem)),
    },
    {
      heading: "All packages include this",
      items: compact(svc.includedInPackages.map(packageItem)),
    },
    {
      heading: "Industries we serve",
      items: compact(industries.map(industryItem)),
    },
    ...(crosshairs.length > 0
      ? [{ heading: "Built for", items: crosshairs }]
      : []),
  ];
}

/** Package detail — all included services, other packages, 2 industries. */
export function packageDetailRails(packageSlug: string): InterlinkRail[] {
  const pkg = getPackageBySlug(packageSlug);
  if (!pkg) return [];
  const otherPackages = PACKAGES.filter((p) => p.slug !== packageSlug)
    .slice(0, 2)
    .map((p) => ({
      href: `/packages/${p.slug}`,
      label: p.name,
      hook: p.tagline,
    }));

  return [
    {
      heading: "What's included",
      items: compact(pkg.includedServiceSlugs.map(serviceItem)),
    },
    { heading: "Other packages", items: otherPackages },
    {
      heading: "Best fit for",
      items: compact(pkg.bestFitIndustries.map(industryItem)),
    },
  ];
}

/** Industry detail — matched services, all packages, crosshairs, Iowa hub. */
export function industryDetailRails(industrySlug: string): InterlinkRail[] {
  const ind = getIndustryBySlug(industrySlug);
  if (!ind) return [];
  const crosshairs = CROSSHAIRS.filter((c) => c.industrySlug === industrySlug)
    .slice(0, 4)
    .map((c) => ({ href: crosshairFullPath(c), label: c.h1 }));

  return [
    {
      heading: "Services that fit",
      items: compact(ind.productMatchSlugs.map(serviceItem)),
    },
    {
      heading: "Packages",
      items: PACKAGES.map((p) => ({
        href: `/packages/${p.slug}`,
        label: p.name,
        hook: p.tagline,
      })),
    },
    ...(crosshairs.length > 0
      ? [{ heading: "Built specifically for this industry", items: crosshairs }]
      : []),
    {
      heading: "Iowa coverage",
      items: [{ href: "/iowa", label: "Where we work in Iowa" }],
    },
  ];
}

/** Crosshair detail — parent service, parent industry, 2 sibling crosshairs, 2 packages. */
export function crosshairDetailRails(
  serviceSlug: string,
  crosshairSlug: string,
): InterlinkRail[] {
  const c = getCrosshair(serviceSlug, crosshairSlug);
  if (!c) return [];
  const siblings = c.siblingCrosshairFullPaths
    .slice(0, 2)
    .map((p) => crosshairItemFromPath(p))
    .filter((x): x is InterlinkItem => Boolean(x));

  return [
    {
      heading: "The parent service",
      items: compact([serviceItem(serviceSlug)]),
    },
    {
      heading: "Industry overview",
      items: compact([industryItem(c.industrySlug)]),
    },
    {
      heading: "Related solutions",
      items: siblings,
    },
    {
      heading: "Bundle with a package",
      items: PACKAGES.slice(0, 2).map((p) => ({
        href: `/packages/${p.slug}`,
        label: p.name,
        hook: p.tagline,
      })),
    },
  ];
}

/** County page — its cities, 4 neighboring counties, 2 services, 1 industry. */
export function countyDetailRails(countySlug: string): InterlinkRail[] {
  const co = getCountyBySlug(countySlug);
  if (!co) return [];
  const cities = getCitySlugsInCounty(countySlug)
    .map(cityItem)
    .filter((x): x is InterlinkItem => Boolean(x));
  const neighbors = co.neighboringCountySlugs
    .slice(0, 4)
    .map(countyItem)
    .filter((x): x is InterlinkItem => Boolean(x));

  return [
    ...(cities.length > 0
      ? [{ heading: "Cities in this county", items: cities }]
      : []),
    { heading: "Neighboring counties", items: neighbors },
    {
      heading: "Services for this region",
      items: compact([
        serviceItem("always-on-receptionist"),
        serviceItem("speed-to-lead-outbound"),
      ]),
    },
    {
      heading: "By industry",
      items: compact([industryItem("home-services-iowa")]),
    },
  ];
}

/** City page — its county, 4 nearest siblings, 2 services, 1 industry. */
export function cityDetailRails(citySlug: string): InterlinkRail[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  const co = getCountyBySlug(city.countySlug);
  const siblings = getNearbyCitySlugs(citySlug, 4)
    .map(cityItem)
    .filter((x): x is InterlinkItem => Boolean(x));

  return [
    ...(co
      ? [
          {
            heading: "County",
            items: [
              {
                href: `/iowa/counties/${co.slug}`,
                label: `${co.name} County`,
                hook: `Seat: ${co.seatCity}`,
              },
            ],
          },
        ]
      : []),
    { heading: "Nearby cities", items: siblings },
    {
      heading: "Services we run here",
      items: compact([
        serviceItem("always-on-receptionist"),
        serviceItem("speed-to-lead-outbound"),
      ]),
    },
    {
      heading: "By industry",
      items: compact([industryItem("home-services-iowa")]),
    },
  ];
}

// Hub pages just dump the full member list.
export function servicesHubRails(): InterlinkRail[] {
  return [
    {
      heading: "All services",
      items: SERVICES.map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
        hook: s.hookOneLiner,
      })),
    },
    {
      heading: "Bundle into a package",
      items: PACKAGES.map((p) => ({
        href: `/packages/${p.slug}`,
        label: p.name,
        hook: p.tagline,
      })),
    },
  ];
}

export function packagesHubRails(): InterlinkRail[] {
  return [
    {
      heading: "All packages",
      items: PACKAGES.map((p) => ({
        href: `/packages/${p.slug}`,
        label: p.name,
        hook: p.tagline,
      })),
    },
    {
      heading: "Or pick services à la carte",
      items: SERVICES.slice(0, 4).map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
        hook: s.hookOneLiner,
      })),
    },
  ];
}

export function industriesHubRails(): InterlinkRail[] {
  return [
    {
      heading: "Industries we serve",
      items: INDUSTRIES.map((i) => ({
        href: `/industries/${i.slug}`,
        label: i.name,
        hook: i.hookOneLiner,
      })),
    },
    {
      heading: "Or browse by service",
      items: SERVICES.slice(0, 4).map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
        hook: s.hookOneLiner,
      })),
    },
  ];
}

export function iowaHubRails(): InterlinkRail[] {
  // Surface 6 indexable cities + a "see all" rail to counties.
  const featuredCities = CITIES.filter((c) => c.indexable)
    .slice(0, 6)
    .map((c) => ({
      href: `/iowa/cities/${c.slug}`,
      label: c.name,
      hook: `Pop. ${c.population.toLocaleString()}`,
    }));
  return [
    { heading: "Featured Iowa cities", items: featuredCities },
    {
      heading: "All 99 counties",
      items: COUNTIES.slice(0, 6).map((co) => ({
        href: `/iowa/counties/${co.slug}`,
        label: `${co.name} County`,
        hook: co.seatCity,
      })),
    },
    {
      heading: "Services across Iowa",
      items: SERVICES.slice(0, 3).map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
        hook: s.hookOneLiner,
      })),
    },
  ];
}
