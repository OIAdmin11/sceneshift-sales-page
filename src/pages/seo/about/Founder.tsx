import { useEffect } from "react";
import { Link } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";
import type { InterlinkRail } from "@/components/seo/InterlinkGrid";

import { getPrimaryAuthor } from "@/data/authors";
import { siteConfig } from "@/data/site";
import { buildFounderMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";

export default function Founder() {
  useEffect(() => {
    applySeoMetadata(buildFounderMeta());
  }, []);

  const author = getPrimaryAuthor();

  const rails: InterlinkRail[] = [
    {
      heading: "Editorial standards",
      items: [
        {
          href: "/about/editorial-policy",
          label: "Editorial policy",
          hook: "How we write, review, and update content",
        },
      ],
    },
    {
      heading: "What we build",
      items: [
        {
          href: "/services",
          label: "All services",
          hook: "Eight AI services for Iowa small businesses",
        },
        {
          href: "/packages",
          label: "Packages",
          hook: "Three bundles starting at $299/mo",
        },
      ],
    },
    {
      heading: "Where we work",
      items: [
        { href: "/iowa", label: "Iowa coverage", hook: "All 99 counties" },
      ],
    },
  ];

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Founder" },
        ]}
      />

      <AnswerFirstBlock
        question="Who is behind SceneShift?"
        answer={`${author.bio}`}
      />
      <Byline lastReviewed="2026-05-04" />

      <h2>Who we are</h2>
      <p>{author.bio}</p>

      <h2>Why this exists</h2>
      <p>
        Buyers still choose businesses they trust, but the way they shop has
        changed. People expect quick answers, clear next steps, and follow-up
        that does not fall apart. If your business is slower to respond than
        the next option on the list, great work can lose before you ever get
        the chance to prove it.
      </p>
      <p>
        Most owners are not losing because they care less or work less. They
        lose when calls go unanswered, details get trapped in inboxes, and
        follow-up depends on whoever happens to remember it. Faster first
        response and a cleaner handoff usually matter more than big promises
        about transformation.
      </p>

      <h2>How to reach us</h2>
      <p>
        SceneShift is based in {siteConfig.region}.
      </p>
      <ul>
        <li>
          Phone:{" "}
          <a href={`tel:${siteConfig.primaryPhoneHref}`}>
            {siteConfig.primaryPhoneLabel}
          </a>
        </li>
        <li>
          Email:{" "}
          <a href={`mailto:${siteConfig.primaryEmail}`}>
            {siteConfig.primaryEmail}
          </a>
        </li>
        <li>
          <Link to="/contact">Book a call</Link>
        </li>
      </ul>

      <InterlinkGrid rails={rails} />
    </div>
  );
}
