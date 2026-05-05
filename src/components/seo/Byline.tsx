/**
 * Visible "Last reviewed [date] by [author]" line. This is a meaningful E-E-A-T
 * and AIO citation signal — Google and AI Overview crawlers consistently
 * prioritize content with explicit authorship and review dates over
 * anonymous, undated pages.
 *
 * The Person and dateModified JSON-LD that pairs with this is emitted by the
 * page metadata builder so structured data and visible content stay aligned.
 */
import { getPrimaryAuthor } from "@/data/authors";

export default function Byline({ lastReviewed }: { lastReviewed: string }) {
  const author = getPrimaryAuthor();
  // Render the date with stable formatting that works in both SSR and client.
  const date = new Date(lastReviewed);
  const formatted = Number.isNaN(date.getTime())
    ? lastReviewed
    : date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return (
    <p className="seo-byline">
      Last reviewed <time dateTime={lastReviewed}>{formatted}</time> by{" "}
      <span className="seo-byline__author">{author.name}</span>{" "}
      <span className="seo-byline__title">({author.jobTitle})</span>
    </p>
  );
}
