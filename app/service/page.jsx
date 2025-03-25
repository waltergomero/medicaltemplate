import React from "react";
import {Fragment} from "react";
import PageTitleContainer from "@/containers/global/page-title/index.jsx";
import ServiceContainer from "@/containers/service-box/index.jsx";
import TestimonialContainer from "@/containers/home/testimonial/index.jsx";
import BrandContainer from "@/containers/global/brand/index.jsx";
import PricingContainer from "@/containers/global/pricing/index.jsx";
import CallToAction from "@/containers/global/call-to-action/index.jsx";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";

const ServicePage = () => {
    return (
           <Fragment>
                <SEO title="Hope Service" />
                <div className="wrapper">
               
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/slider/main-slide-01.jpg"
                            subTitle="Best solution for your heatlh"
                            title="Services <span>That We Provide</span>"
                        />
                         <ServiceContainer />
                        <TestimonialContainer />
                        <BrandContainer />
                        <PricingContainer pricingClassOption="noborder-line" />
                        <CallToAction />
                    </div>              
                    <ScrollToTop />
                </div>
        </Fragment>
    );
};

export default ServicePage;
