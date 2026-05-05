import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import FaqBlock from "@/components/seo/FaqBlock";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { getPackageBySlug } from "@/data/packages-catalog";
import { getServiceBySlug } from "@/data/services-catalog";
import NotFound from "@/pages/seo/_shared/NotFound";
import { buildPackageMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { packageDetailRails } from "@/utils/seoLinks";

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = slug ? getPackageBySlug(slug) : undefined;

  useEffect(() => {
    if (pkg) applySeoMetadata(buildPackageMeta(pkg));
  }, [pkg]);

  if (!pkg) return <NotFound title="Package not found" />;

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: pkg.name },
        ]}
      />

      <AnswerFirstBlock
        question={`What's included in ${pkg.name}?`}
        answer={pkg.tagline}
      />
      <Byline lastReviewed={pkg.lastReviewed} />

      <section className="seo-hero">
        <p className="seo-hero__hook">{pkg.idealFor}</p>
      </section>

      <h2>What it costs</h2>
      <div className="seo-price">
        <p className="seo-price__headline">{pkg.priceHeadline}</p>
        <ul className="seo-price__detail">
          {pkg.priceDetailLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <h2>What it solves</h2>
      <ul>
        {pkg.pains.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>Hero feature</h2>
      <p>{pkg.heroFeature}</p>

      <h2>Every service included</h2>
      <ul>
        {pkg.includedServiceSlugs.map((s) => {
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

      <FaqBlock faqs={pkg.faqs} />

      <InterlinkGrid rails={packageDetailRails(pkg.slug)} />
    </div>
  );
}
