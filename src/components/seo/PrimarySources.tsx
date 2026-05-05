/**
 * Cited primary-source rail. Even one .gov / .edu / industry-research link
 * per page measurably increases AI Overview citation probability, because
 * AI Overviews preferentially cite content that itself cites primary sources.
 */
import type { PrimarySource } from "@/types/seo";

export default function PrimarySources({
  sources,
}: {
  sources: readonly PrimarySource[];
}) {
  if (sources.length === 0) return null;
  return (
    <section className="seo-sources" aria-label="Primary sources">
      <h2 className="seo-sources__heading">Sources cited</h2>
      <ul className="seo-sources__list">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
