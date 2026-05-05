export {
  COUNTIES,
  COUNTY_SLUGS,
  IOWA_REGIONS,
  getCountiesByRegion,
  getCountyBySlug,
} from "./counties";
export {
  CITIES,
  CITY_SLUGS,
  FEATURED_SMALL_TOWNS,
  getCityBySlug,
  getNearbyCitySlugs,
} from "./cities";

import { CITIES } from "./cities";
import { COUNTIES } from "./counties";

/** All city slugs that live inside a given county. */
export function getCitySlugsInCounty(countySlug: string): readonly string[] {
  return CITIES.filter((c) => c.countySlug === countySlug).map((c) => c.slug);
}

/** Returns the county record that contains the given city slug, if any. */
export function getCountyForCity(citySlug: string) {
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return COUNTIES.find((co) => co.slug === city.countySlug);
}
