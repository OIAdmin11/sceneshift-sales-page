/**
 * Hormozi-structured (pain -> mechanism -> outcome) section in the
 * SceneShift voice. Pain block is plain language and concrete dollars/time.
 * Mechanism is the "how it works" steps that also map 1:1 to HowTo schema.
 * Outcome is the dream state the customer can credibly expect.
 */
import type { HowToStep } from "@/types/seo";

export default function PainMechanismOutcome({
  painPoints,
  mechanism,
  outcomes,
}: {
  painPoints: readonly string[];
  mechanism: readonly HowToStep[];
  outcomes: readonly string[];
}) {
  return (
    <section className="seo-pmo">
      <div className="seo-pmo__grid">
        <div className="seo-pmo__col">
          <h2 className="seo-pmo__heading">What is actually costing you money</h2>
          <ul className="seo-pmo__list">
            {painPoints.map((pain) => (
              <li key={pain}>{pain}</li>
            ))}
          </ul>
        </div>
        <div className="seo-pmo__col">
          <h2 className="seo-pmo__heading">How it works</h2>
          <ol className="seo-pmo__steps">
            {mechanism.map((step) => (
              <li key={step.name}>
                <strong>{step.name}.</strong> {step.text}
              </li>
            ))}
          </ol>
        </div>
        <div className="seo-pmo__col">
          <h2 className="seo-pmo__heading">What you can expect</h2>
          <ul className="seo-pmo__list">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
