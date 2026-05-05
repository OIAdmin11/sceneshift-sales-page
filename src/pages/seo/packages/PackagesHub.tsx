import { useEffect } from "react";
import { Link } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { PACKAGES } from "@/data/packages-catalog";
import { buildPackagesHubMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { packagesHubRails } from "@/utils/seoLinks";

export default function PackagesHub() {
  useEffect(() => {
    applySeoMetadata(buildPackagesHubMeta());
  }, []);

  return (
    <div className="container">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Packages" }]} />
      <AnswerFirstBlock
        question="Which SceneShift package is right for my Iowa business?"
        answer="If you have 1-5 employees and miss calls while on jobs, start with The Main Street Startup ($299/mo). 5-20 employees losing leads to slow response time should choose Always-On Capture ($599/mo). 20+ employees running outbound sales should run The Autonomous Sales Floor ($999/mo)."
      />
      <Byline lastReviewed="2026-05-04" />
      <p className="seo-page__intro">
        Three packages, each building on the last. Pick the one that matches
        where your business is bleeding time and money today.
      </p>

      <h2>Compare packages</h2>
      <div className="seo-page__grid-cards">
        {PACKAGES.map((p) => (
          <article key={p.slug} className="seo-page__card">
            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
            <p>
              <strong>{p.priceHeadline}</strong>{" "}
              {p.priceDetailLines.join(" ")}
            </p>
            <Link to={`/packages/${p.slug}`}>See what's included →</Link>
          </article>
        ))}
      </div>

      <InterlinkGrid rails={packagesHubRails()} />
    </div>
  );
}
