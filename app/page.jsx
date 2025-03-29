
import {Fragment} from "react";
import IntroContainer from "@/containers/home/intro/index";
import HealthFeatureContainer from "@/containers/home/health-feature";
import MedicalFeatureContainer from "@/containers/home/medical-feature";
import AppointmentContainer from "@/containers/home/appointment";
import TeamContainer from "@/containers/home/team";
import TestimonialContainer from "@/containers/home/testimonial";
import BrandContainer from "@/containers/global/brand";
import PricingContainer from "@/containers/global/pricing";
import BlogAccordion from "@/containers/home/blog-accordion";
import GoogleMapContainer from "/containers/global/map";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/ui/seo";

export default function HomePage() {
  return (
    <Fragment>
        <SEO title="Hope – Health &amp; Medical React JS Template" />
        <div className="wrapper home-default-wrapper">
            <div className="main-content site-wrapper-reveal">
                <IntroContainer />
                <HealthFeatureContainer />
                <MedicalFeatureContainer />
                <AppointmentContainer />
                <TeamContainer />
                <TestimonialContainer />
                <BrandContainer />
                <PricingContainer />
                <BlogAccordion />
                <GoogleMapContainer /> 
            </div>
            <ScrollToTop />
        </div>
</Fragment>
  );
}
