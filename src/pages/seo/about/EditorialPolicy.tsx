import { useEffect } from "react";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";
import type { InterlinkRail } from "@/components/seo/InterlinkGrid";

import { siteConfig } from "@/data/site";
import { buildEditorialPolicyMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";

export default function EditorialPolicy() {
  useEffect(() => {
    applySeoMetadata(buildEditorialPolicyMeta());
  }, []);

  const rails: InterlinkRail[] = [
    {
      heading: "About",
      items: [
        { href: "/about/founder", label: "Founder", hook: "Who is behind SceneShift" },
        { href: "/about-us", label: "About SceneShift", hook: "What we do and why" },
      ],
    },
    {
      heading: "Browse the site",
      items: [
        { href: "/services", label: "All services" },
        { href: "/packages", label: "Packages" },
        { href: "/iowa", label: "Iowa coverage" },
      ],
    },
  ];

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Editorial policy" },
        ]}
      />

      <AnswerFirstBlock
        question="How does SceneShift write and review the content on this site?"
        answer="SceneShift content is written by the founding team based on hands-on experience deploying these systems with Iowa small businesses. Every page is reviewed at least every 90 days, dated visibly, and updated when prices, integrations, or recommended workflows change."
      />
      <Byline lastReviewed="2026-05-04" />

      <h2>Authorship</h2>
      <p>
        Every guidance page on this site bylines back to a named author with a
        public profile. We do not publish anonymous content.
      </p>

      <h2>Review cadence</h2>
      <p>
        Service, package, industry, and crosshair pages are reviewed at least
        every 90 days. County and city pages are reviewed every 180 days. The
        visible "Last reviewed" date on each page reflects the most recent
        editorial pass, not just a code change.
      </p>

      <h2>Sources</h2>
      <p>
        Where we cite statistics or research, we link the primary source —
        government data (BLS, Census, Iowa SBDC), peer-reviewed research, or
        named industry studies. We do not cite "studies show" without a
        traceable link.
      </p>

      <h2>Corrections</h2>
      <p>
        If you find an error, email{" "}
        <a href={`mailto:${siteConfig.primaryEmail}`}>
          {siteConfig.primaryEmail}
        </a>
        . Material corrections are dated in the affected page's "Last
        reviewed" line and noted in our internal change log.
      </p>

      <h2>AI use</h2>
      <p>
        We use AI tools to help draft and structure content, but every page is
        reviewed and edited by a person before it goes live. We do not publish
        unedited AI output.
      </p>

      <h2>Disclosure</h2>
      <p>
        SceneShift sells the AI services described on this site. Pages
        describing those services are not third-party reviews — they are our
        own product pages, written to help small-business buyers understand
        whether the service fits their workflow.
      </p>

      <InterlinkGrid rails={rails} />
    </div>
  );
}
