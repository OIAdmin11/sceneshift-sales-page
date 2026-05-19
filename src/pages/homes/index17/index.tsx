import ForceThemeMode from "@/components/common/ForceDarkForIndex15";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import { getPageMetadata } from "@/data/pages";

import FeatureSec14 from "@/components/homes/home-17/FeatureSec14";
import FeatureSec16 from "@/components/homes/home-17/FeatureSec16";
import FeatureStyle17 from "@/components/homes/home-17/FeatureStyle17";
import FunfactSec5 from "@/components/homes/home-17/FunfactSec5";
import MainSec9 from "@/components/homes/home-17/MainSec9";
import MarqueeSec from "@/components/homes/home-17/MarqueeSec";
// import PartnersSec from "@/components/homes/home-17/PartnersSec";
import PricingSec6 from "@/components/homes/home-17/PricingSec6";
import RoiCalculatorSec from "@/components/homes/home-17/RoiCalculatorSec";
import TestimonialSec5 from "@/components/homes/home-17/TestimonialSec5";

export default function Page() {
  getPageMetadata("home17");

  return (
    <>
      <ForceThemeMode mode="dark" />
      <div className="wrapper">
        <Header1
          hasLogin
          stickyClass="sticky-active v3 is-sticky"
          className="vs-header2 v15"
        />
        <MainSec9 />
        <TestimonialSec5 />
        <FeatureSec16 />
        <MarqueeSec />
        <FeatureSec14 />
        <FeatureStyle17 />
        <FunfactSec5 />
        <RoiCalculatorSec />
        <PricingSec6 />
        {/* <PartnersSec /> */}
        <Footer3 parentClass="footer-style4 v17" />
      </div>
    </>
  );
}
