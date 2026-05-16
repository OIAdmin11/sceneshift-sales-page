import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const businessCases = [
  {
    title: "HVAC & Plumbing Shops",
    description:
      "Best when emergency calls come in after hours and the first company to answer usually wins the job.",
  },
  {
    title: "Roofers & Electricians",
    description:
      "Best when storm damage, panel issues, or urgent repairs need fast triage before the homeowner calls someone else.",
  },
  {
    title: "Owner-Operators",
    description:
      "Best when you are in the truck, on a ladder, or with a customer and cannot answer every ring.",
  },
  {
    title: "Busy Office Teams",
    description:
      "Best when the phone rings while your dispatcher is already handling another customer.",
  },
  {
    title: "Website Form Leads",
    description:
      "Best when forms sit in an inbox and nobody follows up until the homeowner has moved on.",
  },
  {
    title: "After-Hours Emergencies",
    description:
      "Best when a late-night call needs to be sorted, qualified, and booked before morning.",
  },
];

export default function FeatureStyle17() {
  return (
    <section className="feature-sec17 ibt-section-gap">
      <div className="container">
        <div className="sec-title white">
          <SubTitleWrapper>built for the trades</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            When answering first decides who gets paid
          </TitleSplitWrapper>
          <p>
            If one missed call can cost more than a month of coverage, your
            phone deserves a backup plan.
          </p>
        </div>
        <div className="row g-4">
          {businessCases.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature-card10">
                <h4 className="title">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
