/**
 * AIO-targeted answer-first block.
 *
 * Renders the page's primary question (H1) followed by a concise 40-60 word
 * answer optimized for citation in Google AI Overviews, Perplexity, and
 * ChatGPT search. The corresponding `QAPage` JSON-LD is emitted by the page's
 * metadata builder so the structured data stays aligned with visible content.
 */
export default function AnswerFirstBlock({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="seo-answer-first">
      <h1 className="seo-answer-first__question">{question}</h1>
      <p className="seo-answer-first__answer">{answer}</p>
    </div>
  );
}
