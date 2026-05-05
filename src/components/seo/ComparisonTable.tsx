/**
 * Real semantic <table> for AIO citations. AI Overview crawlers parse tables
 * cleanly when columns are clearly labeled with <th scope> attributes.
 */
import type { ComparisonRow } from "@/types/seo";

export default function ComparisonTable({
  title,
  oursLabel,
  theirsLabel,
  rows,
}: {
  title: string;
  oursLabel: string;
  theirsLabel: string;
  rows: readonly ComparisonRow[];
}) {
  return (
    <section className="seo-compare">
      <h2 className="seo-compare__title">{title}</h2>
      <div className="seo-compare__scroll">
        <table className="seo-compare__table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">{oursLabel}</th>
              <th scope="col">{theirsLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature}>
                <th scope="row">{row.feature}</th>
                <td>{row.ours}</td>
                <td>{row.theirs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
