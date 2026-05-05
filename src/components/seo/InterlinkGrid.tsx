/**
 * Tiered interlink grid — the structural component that distributes link
 * equity across the SceneShift content network.
 *
 * Each rail is a labeled group of related internal links. The page-level
 * caller chooses which rails to render based on the page's tier (see plan
 * "Tiered linking" section). Rails accept any URL — services, packages,
 * industries, crosshairs, counties, cities, hubs.
 */
import { Link } from "react-router-dom";

export interface InterlinkItem {
  href: string;
  label: string;
  /** Optional subtitle / one-liner shown under the link. */
  hook?: string;
}

export interface InterlinkRail {
  /** Heading shown above the link group. */
  heading: string;
  items: readonly InterlinkItem[];
}

export default function InterlinkGrid({
  rails,
  ctaHref = "/contact",
  ctaLabel = "Book a call",
}: {
  rails: readonly InterlinkRail[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const realRails = rails.filter((rail) => rail.items.length > 0);
  if (realRails.length === 0) return null;
  return (
    <section className="seo-interlink">
      <div className="seo-interlink__rails">
        {realRails.map((rail) => (
          <div key={rail.heading} className="seo-interlink__rail">
            <h3 className="seo-interlink__heading">{rail.heading}</h3>
            <ul className="seo-interlink__list">
              {rail.items.map((item) => (
                <li key={item.href} className="seo-interlink__item">
                  <Link to={item.href} className="seo-interlink__link">
                    <span className="seo-interlink__label">{item.label}</span>
                    {item.hook && (
                      <span className="seo-interlink__hook">{item.hook}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="seo-interlink__cta">
        <Link to={ctaHref} className="ibt-btn ibt-btn-dark">
          <span>{ctaLabel}</span>
        </Link>
      </div>
    </section>
  );
}
