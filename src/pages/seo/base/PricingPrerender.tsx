import { useEffect } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@/components/seo/Breadcrumbs";
import InterlinkGrid from "@/components/seo/InterlinkGrid";
import type { InterlinkRail } from "@/components/seo/InterlinkGrid";

import { PACKAGES } from "@/data/packages-catalog";
import { getPageMetadata } from "@/data/pages";

export default function PricingPrerender() {
  useEffect(() => {
    getPageMetadata("pricing");
  }, []);

  const rails: InterlinkRail[] = [
    {
      heading: "Package details",
      items: PACKAGES.map((pkg) => ({
        href: `/packages/${pkg.slug}`,
        label: pkg.name,
        hook: pkg.tagline,
      })),
    },
    {
      heading: "Talk with us",
      items: [
        { href: "/contact", label: "Contact", hook: "Book an automation working session" },
        { href: "/services", label: "Services", hook: "Individual service breakdowns" },
      ],
    },
  ];

  return (
    <div className="container seo-page">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />
      <header className="seo-page__hero">
        <h1>AI automation pricing for small businesses</h1>
        <p className="seo-lead">
          SceneShift packages are priced around recovered leads, saved admin time,
          and faster follow-up — not vague transformation promises. Compare web
          chat, AI reception, CRM updates, calendar booking, speed-to-lead, and
          review automation.
        </p>
      </header>

      <section>
        <h2>Packages at a glance</h2>
        <ul className="seo-list">
          {PACKAGES.map((pkg) => (
            <li key={pkg.slug}>
              <strong>
                <Link to={`/packages/${pkg.slug}`}>{pkg.name}</Link>
              </strong>{" "}
              — {pkg.priceHeadline}
              {pkg.priceDetailLines.join(" ")}. {pkg.tagline}
            </li>
          ))}
        </ul>
        <p>
          The right package depends on call volume, lead value, existing software,
          and how much of your sales floor should run automatically when your team
          is busy.
        </p>
      </section>

      <InterlinkGrid rails={rails} />
    </div>
  );
}
