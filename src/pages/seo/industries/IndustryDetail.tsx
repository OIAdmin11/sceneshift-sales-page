import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import FaqBlock from "@/components/seo/FaqBlock";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { getIndustryBySlug } from "@/data/industries-catalog";
import { getServiceBySlug } from "@/data/services-catalog";
import { CROSSHAIRS, crosshairFullPath } from "@/data/crosshairs-catalog";
import { getCityBySlug } from "@/data/iowa";
import NotFound from "@/pages/seo/_shared/NotFound";
import { buildIndustryMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { industryDetailRails } from "@/utils/seoLinks";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const ind = slug ? getIndustryBySlug(slug) : undefined;

  useEffect(() => {
    if (ind) applySeoMetadata(buildIndustryMeta(ind));
  }, [ind]);

  if (!ind) return <NotFound title="Industry not found" />;

  const crosshairs = CROSSHAIRS.filter((c) => c.industrySlug === ind.slug);

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: ind.name },
        ]}
      />

      <AnswerFirstBlock
        question={`How does SceneShift help ${ind.name.toLowerCase()}?`}
        answer={ind.hookOneLiner}
      />
      <Byline lastReviewed={ind.lastReviewed} />

      <section className="seo-hero">
        <p className="seo-hero__hook">{ind.bleedingNeck}</p>
      </section>

      <h2>Who this is for</h2>
      <ul>
        <li><strong>Decision maker:</strong> {ind.decisionMaker}</li>
        <li><strong>Ideal company size:</strong> {ind.idealCompanySize}</li>
      </ul>

      <h2>Services that fit this industry</h2>
      <ul>
        {ind.productMatchSlugs.map((s) => {
          const svc = getServiceBySlug(s);
          if (!svc) return null;
          return (
            <li key={s}>
              <Link to={`/services/${svc.slug}`}>
                <strong>{svc.name}</strong>
              </Link>
              {" — "}
              {svc.hookOneLiner}
            </li>
          );
        })}
      </ul>

      {crosshairs.length > 0 && (
        <>
          <h2>Built specifically for this industry</h2>
          <ul>
            {crosshairs.map((c) => (
              <li key={c.slug}>
                <Link to={crosshairFullPath(c)}>{c.h1}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {ind.notableIowaCities.length > 0 && (
        <>
          <h2>Iowa cities where {ind.name.toLowerCase()} are concentrated</h2>
          <ul>
            {ind.notableIowaCities.map((s) => {
              const city = getCityBySlug(s);
              if (!city) return null;
              return (
                <li key={s}>
                  <Link to={`/iowa/cities/${city.slug}`}>{city.name}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <FaqBlock faqs={ind.faqs} />

      <InterlinkGrid rails={industryDetailRails(ind.slug)} />
    </div>
  );
}
