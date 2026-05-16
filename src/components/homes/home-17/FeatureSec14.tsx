import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const steps = [
  {
    title: "Paste the Script.",
    description:
      "Add one simple line of code to your existing website. It works with WordPress, Wix, Webflow, Squarespace, and most contractor websites.",
  },
  {
    title: "Tag Your Numbers.",
    description:
      "Put a simple tag on your website phone number so calls route to your 24/7 Virtual Receptionist when your office is closed or your team is busy.",
  },
  {
    title: "Save the Lead.",
    description:
      "SceneShift captures website forms and late-night calls, qualifies the job, alerts you instantly, and gets the appointment on your calendar.",
  },
];

export default function FeatureSec14() {
  return (
    <section id="five-minute-upgrade" className="feature-sec14 v2 ibt-section-gap">
      <div className="container">
        <div className="feature-content12 how-it-works">
          <div className="sec-title white text-center">
            <SubTitleWrapper>the 5-minute upgrade</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              How it works without changing how your crew works
            </TitleSplitWrapper>
            <p>
              No new software to learn. No office overhaul. Just a cleaner way
              to catch the leads you already paid to attract.
            </p>
          </div>
          <div className="how-it-works__grid">
            {steps.map((step, index) => (
              <article className="how-it-works__card" key={step.title}>
                <span className="how-it-works__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
