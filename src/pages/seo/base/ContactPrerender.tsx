import { useEffect } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@/components/seo/Breadcrumbs";
import InterlinkGrid from "@/components/seo/InterlinkGrid";
import type { InterlinkRail } from "@/components/seo/InterlinkGrid";

import { getPageMetadata } from "@/data/pages";
import { siteConfig } from "@/data/site";

export default function ContactPrerender() {
  useEffect(() => {
    getPageMetadata("contact");
  }, []);

  const rails: InterlinkRail[] = [
    {
      heading: "Before you call",
      items: [
        { href: "/pricing", label: "Pricing", hook: "Package overview and setup fees" },
        { href: "/services", label: "Services", hook: "What we automate for Iowa SMBs" },
        { href: "/about-us", label: "About us", hook: "How SceneShift works" },
      ],
    },
  ];

  return (
    <div className="container seo-page">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <header className="seo-page__hero">
        <h1>Contact SceneShift</h1>
        <p className="seo-lead">
          Reach out for lead capture, AI reception, CRM follow-up, missed-call text
          back, review generation, and growth automation for your Iowa business.
        </p>
      </header>

      <section>
        <h2>Get in touch</h2>
        <ul className="seo-list">
          <li>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${siteConfig.primaryPhoneHref}`}>
              {siteConfig.primaryPhoneLabel}
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${siteConfig.primaryEmail}`}>
              {siteConfig.primaryEmail}
            </a>
          </li>
          <li>
            <strong>Region served:</strong> {siteConfig.region} and statewide Iowa
          </li>
        </ul>
        <p>
          Prefer to review options first? See{" "}
          <Link to="/pricing">pricing</Link> and{" "}
          <Link to="/packages">packages</Link>, then book a working session when you
          are ready.
        </p>
      </section>

      <InterlinkGrid rails={rails} />
    </div>
  );
}
