import { useMemo, useState, type CSSProperties } from "react";

import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";

const MISSED_CALL_RATE = 0.2;
const MONTHLY_LOSS_RATE = 0.144;
const ANNUAL_CAPTURE_RATE = 0.96;

const CALL_VOLUME_MIN = 25;
const CALL_VOLUME_MAX = 400;
const CALL_VOLUME_DEFAULT = 100;

const JOB_VALUE_MIN = 1500;
const JOB_VALUE_MAX = 50000;
const JOB_VALUE_STEP = 500;
const JOB_VALUE_DEFAULT = 10000;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompactCurrency(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    const rounded =
      millions >= 10
        ? Math.round(millions)
        : Math.round(millions * 10) / 10;
    return `$${rounded}M`;
  }
  if (value >= 1_000) {
    const thousands = value / 1_000;
    const rounded =
      thousands >= 100
        ? Math.round(thousands)
        : Math.round(thousands * 10) / 10;
    return `$${rounded}K`;
  }
  return formatCurrency(value);
}

export default function RoiCalculatorSec() {
  const [callVolume, setCallVolume] = useState(CALL_VOLUME_DEFAULT);
  const [jobValue, setJobValue] = useState(JOB_VALUE_DEFAULT);

  const missedCalls = useMemo(
    () => Math.round(callVolume * MISSED_CALL_RATE),
    [callVolume],
  );

  const monthlyRevenueLost = useMemo(
    () => Math.round(callVolume * jobValue * MONTHLY_LOSS_RATE),
    [callVolume, jobValue],
  );

  const annualImpact = useMemo(
    () => Math.round(callVolume * jobValue * ANNUAL_CAPTURE_RATE),
    [callVolume, jobValue],
  );

  const callVolumeProgress =
    ((callVolume - CALL_VOLUME_MIN) / (CALL_VOLUME_MAX - CALL_VOLUME_MIN)) *
    100;
  const jobValueProgress =
    ((jobValue - JOB_VALUE_MIN) / (JOB_VALUE_MAX - JOB_VALUE_MIN)) * 100;

  return (
    <section className="roi-calculator-sec ibt-section-gap">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-center">
          <div className="col-lg-5">
            <div className="roi-calculator-sec__copy">
              <SubTitleWrapper>you&apos;re leaving money on the table</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                A <strong>real stickler</strong> for delivering ROI
              </TitleSplitWrapper>
              <p>
                Based on patterns we see with Iowa trades and service businesses.
                SceneShift usually pays for itself within the first month—often
                within the first week.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="roi-calculator-sec__card">
              <div className="roi-calculator-sec__field">
                <div className="roi-calculator-sec__field-head">
                  <span className="roi-calculator-sec__label">
                    Monthly call volume
                  </span>
                  <span className="roi-calculator-sec__value">{callVolume}</span>
                </div>
                <input
                  type="range"
                  className="roi-calculator-sec__range"
                  min={CALL_VOLUME_MIN}
                  max={CALL_VOLUME_MAX}
                  step={5}
                  value={callVolume}
                  style={
                    {
                      "--range-progress": `${callVolumeProgress}%`,
                    } as CSSProperties
                  }
                  onChange={(event) =>
                    setCallVolume(Number(event.target.value))
                  }
                  aria-label="Monthly call volume"
                />
              </div>

              <div className="roi-calculator-sec__field">
                <div className="roi-calculator-sec__field-head">
                  <span className="roi-calculator-sec__label">
                    Average job value
                  </span>
                  <span className="roi-calculator-sec__value">
                    {formatCurrency(jobValue)}
                  </span>
                </div>
                <input
                  type="range"
                  className="roi-calculator-sec__range"
                  min={JOB_VALUE_MIN}
                  max={JOB_VALUE_MAX}
                  step={JOB_VALUE_STEP}
                  value={jobValue}
                  style={
                    {
                      "--range-progress": `${jobValueProgress}%`,
                    } as CSSProperties
                  }
                  onChange={(event) => setJobValue(Number(event.target.value))}
                  aria-label="Average job value"
                />
              </div>

              <div className="roi-calculator-sec__stats">
                <div className="roi-calculator-sec__stat">
                  <span className="roi-calculator-sec__label">
                    Calls missed (20%)
                  </span>
                  <span className="roi-calculator-sec__stat-value">
                    {missedCalls}
                  </span>
                </div>
                <div className="roi-calculator-sec__stat">
                  <span className="roi-calculator-sec__label">
                    Monthly revenue lost
                  </span>
                  <span className="roi-calculator-sec__stat-value">
                    {formatCurrency(monthlyRevenueLost)}
                  </span>
                </div>
              </div>

              <div className="roi-calculator-sec__footer">
                <span className="roi-calculator-sec__footer-label">
                  Annual impact with SceneShift
                </span>
                <span className="roi-calculator-sec__footer-value">
                  {formatCompactCurrency(annualImpact)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
