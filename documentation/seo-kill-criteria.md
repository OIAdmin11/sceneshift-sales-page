# SceneShift SEO/AIO Page Network — 90-Day Kill Criteria

Last reviewed: 2026-05-04 by SceneShift Team

This document defines what stays, what gets demoted, and what gets removed from
the SceneShift content network after 90 days in Google Search Console. The
goal is to prevent thin-content debt from accumulating and to concentrate
crawl budget on pages that earn it.

## Why this exists

Adding 100+ pages to a site in a single phase risks tripping Google's 2026
Helpful Content System for two distinct reasons:

1. **Doorway pages**: many near-identical pages whose only difference is a
   geographic identifier.
2. **Thin / orphaned content**: pages that nobody visits and that don't
   answer real queries.

The phased rollout in [iowa-seo-aio-pages plan](../) addresses (1) at launch.
This kill-criteria policy addresses (2) over time.

## Page tiers

| Tier | Examples | Default robots | Default priority |
| --- | --- | --- | --- |
| Tier 1 | `/services`, `/packages`, hero service pages | `index, follow` | 0.8 - 0.9 |
| Tier 2 | Industry pages, crosshair pages | `index, follow` | 0.7 - 0.85 |
| Tier 3 | County pages, hub pages | `index, follow` | 0.5 - 0.6 |
| Tier 4 | City pages (non-featured) | `noindex, follow` | 0.3 |
| Tier 4 (featured) | `featuredSmallTowns` (e.g. Huxley) | `index, follow` | 0.5 |

Default promoted city pages at launch:

- Ames
- Ankeny
- Cedar Rapids
- Davenport
- Des Moines
- Huxley

## Review cadence

- **Day 0**: Page ships to production.
- **Day 30**: First Search Console check. Pages with 0 impressions get a
  flag — not yet a demotion.
- **Day 60**: Second check. Persistently zero-impression pages get a content
  refresh (regional context expanded, additional FAQ added).
- **Day 90**: Decision point. Apply the table below.
- **Day 180**: Final review for pages that were demoted at Day 90.

## Automatic monthly city promotion

City pages can promote automatically at build time using environment variables:

```bash
VITE_SEO_CITY_PROMOTION_START_DATE=2026-06-01
VITE_SEO_CITY_PROMOTION_BATCH_SIZE=3
```

When `VITE_SEO_CITY_PROMOTION_START_DATE` is set, each monthly build promotes
the next batch of population-ranked city pages from `noindex, follow` to
`index, follow`. With the example above, the first build on or after
2026-06-01 promotes the first 3 cities; the first build on or after
2026-07-01 promotes the first 6; and so on.

Important: this is deterministic build-time code, not a background worker.
The promotion only takes effect when a new build/deploy runs. Use an Amplify
scheduled build, a monthly push, or a manual Amplify build trigger if you want
the schedule to advance without code changes.

For local testing only, set:

```bash
VITE_SEO_CITY_PROMOTION_AS_OF_DATE=2026-08-01
```

Do not set `VITE_SEO_CITY_PROMOTION_AS_OF_DATE` in production unless you want
the promotion schedule pinned to that fixed date.

## Kill / Keep table

| Status at Day 90 | Action |
| --- | --- |
| **≥10 impressions/month** | Keep indexed. Move into the regular content review rotation. |
| **1-9 impressions/month** | Keep indexed but flag for content refresh by Day 180. Review whether the page belongs in a higher tier of internal linking. |
| **0 impressions in 90 days** | Switch to `noindex, follow`. Page stays for internal linking and direct traffic, but no longer dilutes crawl budget or quality signals. |
| **Tier 4 page promoted from `noindex`** | If Search Console shows ≥10 impressions/month after 30 days as `noindex` (which can happen via internal-link or direct traffic), evaluate promoting back to `index, follow`. |

## Removal

- Pages on `noindex, follow` for 180 consecutive days with no improvement
  get removed entirely:
  1. Delete the route from `App.tsx` and `entry-server.tsx`.
  2. Remove the catalog record (or set `indexable: false` and exclude from
     route enumeration).
  3. The next build will regenerate `sitemap.xml` and `route-snapshot.json`
     without the page.
  4. Add the path to a 410 (Gone) response or a 301 redirect to the most
     relevant remaining page.

## Operational notes

- The single source of truth is **Google Search Console > Performance > Pages**.
  Cross-check against Bing Webmaster Tools for sanity.
- Use a 28-day rolling window so seasonality (e.g., furnace-season HVAC
  searches) doesn't trigger false demotions.
- Document every demotion / removal in this file's change log section so we
  can review patterns later.

## Change log

- 2026-05-04 — Initial policy created during Phase 1 rollout.
