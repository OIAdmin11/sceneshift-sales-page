import { useEffect } from "react";
import { Link } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { SERVICES } from "@/data/services-catalog";
import { buildServicesHubMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { servicesHubRails } from "@/utils/seoLinks";

export default function ServicesHub() {
  useEffect(() => {
    applySeoMetadata(buildServicesHubMeta());
  }, []);

  return (
    <div className="container">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <AnswerFirstBlock
        question="What AI services does SceneShift offer Iowa small businesses?"
        answer="SceneShift offers eight AI services for Iowa small businesses: a 24/7 web chat concierge, an always-on AI receptionist, automatic CRM updates, calendar booking, our included Easy CRM, sixty-second outbound speed-to-lead calls, hands-off Google review collection, and an autonomous AI sales rep that works your call list."
      />
      <Byline lastReviewed="2026-05-04" />
      <p className="seo-page__intro">
        Each service installs on top of your existing tools — no replatforming,
        no new website. Pick one to learn more, or compare our packages to see
        how the services bundle together.
      </p>

      <h2>All services</h2>
      <div className="seo-page__grid-cards">
        {SERVICES.map((s) => (
          <article key={s.slug} className="seo-page__card">
            <h3>{s.name}</h3>
            <p>{s.hookOneLiner}</p>
            <Link to={`/services/${s.slug}`}>Learn more →</Link>
          </article>
        ))}
      </div>

      <InterlinkGrid rails={servicesHubRails()} />
    </div>
  );
}
