import Image from "next/image";
import {Fragment} from "react";
import IntroContainer from "@/containers/home/intro";
import SEO from "@/components/ui/seo";

export default function HomePage() {
  return (
    <Fragment>
        <SEO title="Hope – Health &amp; Medical React JS Template" />
        <div className="wrapper home-default-wrapper">
            <div className="main-content site-wrapper-reveal">
                <IntroContainer />
                {/* <HealthFeatureContainer />
                <MedicalFeatureContainer />
                <AppointmentContainer />
                <TeamContainer />
                <TestimonialContainer />
                <BrandContainer />
                <PricingContainer />
                <BlogAccordion />
                <GoogleMapContainer /> */}
            </div>
            {/* <Footer /> */}
            {/* <ScrollToTop /> */}
        </div>
</Fragment>
  );
}
