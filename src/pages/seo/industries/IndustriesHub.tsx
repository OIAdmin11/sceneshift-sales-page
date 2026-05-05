import { useEffect } from "react";
import { Link } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { INDUSTRIES } from "@/data/industries-catalog";
import { buildIndustriesHubMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { industriesHubRails } from "@/utils/seoLinks";

export default function IndustriesHub() {
  useEffect(() => {
    applySeoMetadata(buildIndustriesHubMeta());
  }, []);

  return (
    <div className="container">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <AnswerFirstBlock
        question="Which industries does SceneShift work with in Iowa?"
        answer="SceneShift works with Iowa home-services trades (HVAC, plumbing, roofing, electrical), professional services (CPAs, law firms, insurance), MedSpas and private clinics, local logistics and warehousing, and niche e-commerce. Each industry has a distinct bleeding-neck problem we solve."
      />
      <Byline lastReviewed="2026-05-04" />
      <p className="seo-page__intro">
        Generic AI doesn't fit your trade. Pick your industry to see how we
        translate the same eight services into the specific workflow your team
        actually runs.
      </p>

      <h2>Industries we serve</h2>
      <div className="seo-page__grid-cards">
        {INDUSTRIES.map((i) => (
          <article key={i.slug} className="seo-page__card">
            <h3>{i.name}</h3>
            <p>
              <strong>The bleeding neck:</strong> {i.bleedingNeck}
            </p>
            <p>{i.hookOneLiner}</p>
            <Link to={`/industries/${i.slug}`}>See the fit →</Link>
          </article>
        ))}
      </div>

      <InterlinkGrid rails={industriesHubRails()} />
    </div>
  );
}
