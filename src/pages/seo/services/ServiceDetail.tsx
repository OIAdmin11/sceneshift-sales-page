import { useEffect } from "react";
import { useParams } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import ComparisonTable from "@/components/seo/ComparisonTable";
import FaqBlock from "@/components/seo/FaqBlock";
import InterlinkGrid from "@/components/seo/InterlinkGrid";
import PainMechanismOutcome from "@/components/seo/PainMechanismOutcome";
import PrimarySources from "@/components/seo/PrimarySources";

import { getServiceBySlug } from "@/data/services-catalog";
import NotFound from "@/pages/seo/_shared/NotFound";
import { buildServiceMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { serviceDetailRails } from "@/utils/seoLinks";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const svc = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (svc) applySeoMetadata(buildServiceMeta(svc));
  }, [svc]);

  if (!svc) return <NotFound title="Service not found" />;

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: svc.name },
        ]}
      />

      <AnswerFirstBlock question={svc.h1} answer={svc.answer} />
      <Byline lastReviewed={svc.lastReviewed} />

      <PainMechanismOutcome
        painPoints={svc.painPoints}
        mechanism={svc.mechanism}
        outcomes={svc.outcomes}
      />

      {svc.comparison && (
        <ComparisonTable
          title={svc.comparison.title}
          oursLabel={svc.comparison.oursLabel}
          theirsLabel={svc.comparison.theirsLabel}
          rows={svc.comparison.rows}
        />
      )}

      <FaqBlock faqs={svc.faqs} />

      {svc.primarySources && <PrimarySources sources={svc.primarySources} />}

      <InterlinkGrid rails={serviceDetailRails(svc.slug)} />
    </div>
  );
}
