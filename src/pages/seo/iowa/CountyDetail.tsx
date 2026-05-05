import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AnswerFirstBlock from "@/components/seo/AnswerFirstBlock";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Byline from "@/components/seo/Byline";
import InterlinkGrid from "@/components/seo/InterlinkGrid";

import {
  getCountyBySlug,
  getCitySlugsInCounty,
  getCityBySlug,
} from "@/data/iowa";
import NotFound from "@/pages/seo/_shared/NotFound";
import { buildCountyMeta } from "@/data/seoMetadata";
import { applySeoMetadata } from "@/utils/seoHead";
import { countyDetailRails } from "@/utils/seoLinks";

export default function CountyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const county = slug ? getCountyBySlug(slug) : undefined;

  useEffect(() => {
    if (county) applySeoMetadata(buildCountyMeta(county));
  }, [county]);

  if (!county) return <NotFound title="County not found" />;

  const cities = getCitySlugsInCounty(county.slug)
    .map((s) => getCityBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Iowa", href: "/iowa" },
          { label: `${county.name} County` },
        ]}
      />

      <AnswerFirstBlock
        question={`How does ${county.name} County, Iowa benefit from small-business AI automation?`}
        answer={`${county.name} County small businesses ${county.regionalContext.split(".")[0].toLowerCase()}. SceneShift's AI receptionist, 24/7 web chat, and speed-to-lead outbound let ${county.seatCity}-area trades and clinics catch every missed call, answer every web inquiry, and follow up automatically — without adding office staff.`}
      />
      <Byline lastReviewed="2026-05-04" />

      <h2>About {county.name} County</h2>
      <p>
        <strong>County seat:</strong> {county.seatCity}
        {" · "}
        <strong>Population:</strong> {county.population.toLocaleString()}
        {" · "}
        <strong>Region:</strong> {county.region} Iowa
      </p>
      <p>{county.regionalContext}</p>

      {county.notableEmployers.length > 0 && (
        <>
          <h2>Notable employers and industries</h2>
          <ul>
            {county.notableEmployers.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </>
      )}

      <h2>Small businesses we typically serve here</h2>
      <ul>
        {county.localBusinessCategories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      {cities.length > 0 && (
        <>
          <h2>Cities in {county.name} County</h2>
          <ul className="seo-page__county-grid">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link to={`/iowa/cities/${c.slug}`}>{c.name}</Link>
                <span className="seo-page__county-meta">
                  Pop. {c.population.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>What SceneShift does for {county.name} County businesses</h2>
      <p>
        Whether you run an HVAC company in {county.seatCity} or a CPA practice
        in a smaller {county.name} County town, the daily losses look the
        same: missed calls, slow follow-ups, and review velocity falling
        behind larger competitors.
      </p>
      <p>
        SceneShift installs an AI receptionist on your existing phone line, an
        AI chat on your existing website, and an automation layer that calls
        every web lead within sixty seconds — so your team spends the day on
        actual jobs instead of triage.
      </p>

      <InterlinkGrid rails={countyDetailRails(county.slug)} />
    </div>
  );
}
