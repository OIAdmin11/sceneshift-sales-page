import { useEffect } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@/components/seo/Breadcrumbs";
import InterlinkGrid from "@/components/seo/InterlinkGrid";
import type { InterlinkRail } from "@/components/seo/InterlinkGrid";

import {
  aboutOperatingPrinciples,
  aboutWhyItMattersHighlights,
  siteConfig,
} from "@/data/site";
import { getPageMetadata } from "@/data/pages";

export default function AboutUsPrerender() {
  useEffect(() => {
    getPageMetadata("about-us");
  }, []);

  const rails: InterlinkRail[] = [
    {
      heading: "Next steps",
      items: [
        { href: "/pricing", label: "Pricing", hook: "Compare automation packages" },
        { href: "/contact", label: "Contact", hook: "Book a working session" },
        { href: "/services", label: "Services", hook: "What we build for Iowa SMBs" },
      ],
    },
    {
      heading: "Trust & editorial",
      items: [
        {
          href: "/about/founder",
          label: "Founder",
          hook: "Who leads SceneShift",
        },
        {
          href: "/about/editorial-policy",
          label: "Editorial policy",
          hook: "How we write and review content",
        },
      ],
    },
  ];

  return (
    <div className="container seo-page">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About us" },
        ]}
      />
      <header className="seo-page__hero">
        <h1>About SceneShift</h1>
        <p className="seo-lead">
          Rooted in {siteConfig.region}, SceneShift helps independent businesses
          respond faster, follow up consistently, and stay easy to choose when
          buyers compare options online.
        </p>
      </header>

      <section>
        <h2>Helping small businesses keep up with how customers buy now</h2>
        <p>
          Buyers still choose businesses they trust, but they expect quick answers,
          clear next steps, and follow-up that does not fall apart. Most owners are
          not losing because they care less — they lose when calls go unanswered,
          details get trapped in inboxes, and follow-up depends on whoever
          remembers it.
        </p>
        <p>
          SceneShift focuses on practical systems: faster answers, clearer
          follow-up, and less work lost between the phone, the website, and the
          office.
        </p>
      </section>

      <section>
        <h2>Why it matters</h2>
        <ul className="seo-list">
          {aboutWhyItMattersHighlights.map((item) => (
            <li key={item.title}>
              <strong>{item.title}.</strong> {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>How we work</h2>
        <ul className="seo-list">
          {aboutOperatingPrinciples.map((item) => (
            <li key={item.title}>
              <strong>{item.title}.</strong> {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Talk with us</h2>
        <p>
          Ready to tighten lead response and follow-up?{" "}
          <Link to="/contact">Contact SceneShift</Link> or call{" "}
          <a href={`tel:${siteConfig.primaryPhoneHref}`}>
            {siteConfig.primaryPhoneLabel}
          </a>
          .
        </p>
      </section>

      <InterlinkGrid rails={rails} />
    </div>
  );
}
