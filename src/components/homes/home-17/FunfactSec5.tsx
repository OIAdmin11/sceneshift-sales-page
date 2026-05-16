import Counter from "@/components/common/Counter";

export default function FunfactSec5() {
  return (
    <section className="funfact-sec5">
      <div className="container3">
        <div className="funfact-info5">
          <div className="funfact-content5">
            <div className="funfact-count5">
              <div className="counter-box17">
                <Counter max={62} />
                <span className="counter-text">%</span>
              </div>
              <span className="user3">of home-service calls go unanswered</span>
            </div>
            <div className="funfact-count5 v2">
              <div className="counter-box17">
                <Counter max={60} />
                <span className="counter-text">s</span>
              </div>
              <span className="user3">to follow up with new form leads</span>
            </div>
          </div>
          <h4 className="title">
            One missed emergency job can pay for the whole system.
          </h4>
        </div>
      </div>
    </section>
  );
}
