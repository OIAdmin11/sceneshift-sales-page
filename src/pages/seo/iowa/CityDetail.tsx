import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import { getCityBySlug, getCountyBySlug } from "@/data/iowa";
import NotFound from "@/pages/seo/_shared/NotFound";
import { buildCityMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { cityDetailRails } from "@/utils/seoLinks";

export default function CityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;

  useEffect(() => {
    if (city) applySeoMetadata(buildCityMeta(city));
  }, [city]);

  if (!city) return <NotFound title="City not found" />;

  const county = getCountyBySlug(city.countySlug);

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Iowa", href: "/iowa" },
          ...(county
            ? [
                {
                  label: `${county.name} County`,
                  href: `/iowa/counties/${county.slug}`,
                },
              ]
            : []),
          { label: city.name },
        ]}
      />

      <AnswerFirstBlock
        question={`How can ${city.name}, Iowa small businesses use AI to capture more leads?`}
        answer={`${city.name} small businesses use SceneShift to catch every missed call, answer web chat 24/7, and call new web leads within sixty seconds — so a homeowner shopping for a plumber at 9 PM books with you instead of whoever picks up first. ${city.intro}`}
      />
      <Byline lastReviewed="2026-05-04" />

      {!city.indexable && (
        <p style={{ fontSize: 13, color: "var(--seo-fg-muted)" }}>
          This page is currently in pre-launch mode and is not yet promoted in
          search.
        </p>
      )}

      <h2>About {city.name}</h2>
      <p>
        <strong>Population:</strong> {city.population.toLocaleString()}
        {county && (
          <>
            {" · "}
            <strong>County:</strong>{" "}
            <Link to={`/iowa/counties/${county.slug}`}>
              {county.name} County
            </Link>
          </>
        )}
      </p>
      <p>{city.intro}</p>

      {city.anchorEmployers.length > 0 && (
        <>
          <h2>Anchor employers</h2>
          <ul>
            {city.anchorEmployers.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </>
      )}

      <h2>Small businesses we typically serve in {city.name}</h2>
      <ul>
        {city.localBusinessCategories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <h2>What SceneShift does for {city.name} businesses</h2>
      <p>
        Whether you run a multi-truck operation or a single-location clinic in{" "}
        {city.name}, the same set of daily problems compound: a call missed
        while you are with a customer, a web form filled out at 8 PM that nobody
        answers, a job completed without ever asking for the Google review. We
        install systems that close those gaps without adding people to your
        front desk.
      </p>

      <InterlinkGrid rails={cityDetailRails(city.slug)} />
    </div>
  );
}
