import { useEffect } from "react";
import { Link } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import {
  CITIES,
  COUNTIES,
  IOWA_REGIONS,
  getCountiesByRegion,
} from "@/data/iowa";
import { buildIowaHubMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { iowaHubRails } from "@/utils/seoLinks";

const REGION_LABELS: Record<string, string> = {
  Central: "Central Iowa",
  NW: "Northwest Iowa",
  NE: "Northeast Iowa",
  SE: "Southeast Iowa",
  SW: "Southwest Iowa",
};

export default function IowaHub() {
  useEffect(() => {
    applySeoMetadata(buildIowaHubMeta());
  }, []);

  const indexableCities = CITIES.filter((c) => c.indexable);

  return (
    <div className="container">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Iowa" }]} />

      <AnswerFirstBlock
        question="Which Iowa cities and counties does SceneShift serve?"
        answer={`SceneShift serves Iowa small businesses statewide. We have published guides for all 99 Iowa counties and ${indexableCities.length} cities — from Des Moines and Cedar Rapids down to small towns like Huxley — covering missed-call recovery, AI reception, web chat, and follow-up automation in each market.`}
      />
      <Byline lastReviewed="2026-05-04" />

      <p className="seo-page__intro">
        Iowa is 99 counties and almost a thousand incorporated cities.
        SceneShift's small-business AI services work the same way in every one
        of them — answer faster, follow up consistently, stay easy to choose.
        Find your county or city below.
      </p>

      <h2>Featured Iowa cities</h2>
      <div className="seo-page__grid-cards">
        {indexableCities.slice(0, 12).map((c) => (
          <article key={c.slug} className="seo-page__card">
            <h3>{c.name}</h3>
            <p>{c.intro}</p>
            <Link to={`/iowa/cities/${c.slug}`}>
              See {c.name} businesses we serve →
            </Link>
          </article>
        ))}
      </div>

      <h2>All 99 Iowa counties by region</h2>
      <div className="seo-page__regions">
        {IOWA_REGIONS.map((region) => {
          const counties = getCountiesByRegion(region);
          if (counties.length === 0) return null;
          return (
            <section key={region}>
              <h3>{REGION_LABELS[region] ?? region}</h3>
              <ul className="seo-page__county-grid">
                {counties.map((co) => (
                  <li key={co.slug}>
                    <Link to={`/iowa/counties/${co.slug}`}>
                      {co.name} County
                    </Link>
                    <span className="seo-page__county-meta">
                      Seat: {co.seatCity} · Pop. {co.population.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <p>
        Showing {COUNTIES.length} counties and {indexableCities.length} cities.
      </p>

      <InterlinkGrid rails={iowaHubRails()} />
    </div>
  );
}
