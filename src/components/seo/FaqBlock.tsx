/**
 * Customer-facing FAQ section. The FAQPage JSON-LD with the same Q/A text
 * is emitted from the page metadata builder (see [src/data/pages.ts]) so
 * structured data and visible content stay aligned.
 */
import type { FaqEntry } from "@/types/seo";

export default function FaqBlock({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: readonly FaqEntry[];
  heading?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section className="seo-faq">
      <h2 className="seo-faq__heading">{heading}</h2>
      <div className="seo-faq__list">
        {faqs.map((faq) => (
          <details key={faq.question} className="seo-faq__item">
            <summary className="seo-faq__question">{faq.question}</summary>
            <div className="seo-faq__answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
