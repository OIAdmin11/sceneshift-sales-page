import { useEffect } from "react";
import { useParams } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import FaqBlock from "@/components/seo/FaqBlock";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { getCrosshair } from "@/data/crosshairs-catalog";
import { getServiceBySlug } from "@/data/services-catalog";
import { getIndustryBySlug } from "@/data/industries-catalog";
import NotFound from "@/pages/seo/_shared/NotFound";
import { buildCrosshairMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { crosshairDetailRails } from "@/utils/seoLinks";

export default function CrosshairDetail() {
  const params = useParams<{ slug: string; crosshair: string }>();
  const c =
    params.slug && params.crosshair
      ? getCrosshair(params.slug, params.crosshair)
      : undefined;

  useEffect(() => {
    if (c) applySeoMetadata(buildCrosshairMeta(c));
  }, [c]);

  if (!c) return <NotFound title="Page not found" />;

  const svc = getServiceBySlug(c.serviceSlug);
  const ind = getIndustryBySlug(c.industrySlug);

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          ...(svc
            ? [{ label: svc.name, href: `/services/${svc.slug}` }]
            : []),
          { label: c.h1 },
        ]}
      />

      <AnswerFirstBlock question={c.h1} answer={c.answer} />
      <Byline lastReviewed={c.lastReviewed} />

      {ind && (
        <section className="seo-hero">
          <p className="seo-hero__hook">
            <strong>Built for:</strong> {ind.decisionMaker} at{" "}
            {ind.idealCompanySize}
          </p>
        </section>
      )}

      <h2>What's actually breaking in this industry</h2>
      <ul>
        {c.industryPains.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>Why this version is different</h2>
      <p>{c.uniqueAngle}</p>

      <FaqBlock faqs={c.faqs} />

      <InterlinkGrid rails={crosshairDetailRails(c.serviceSlug, c.slug)} />
    </div>
  );
}
