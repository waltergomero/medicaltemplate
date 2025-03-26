//'use client';

import React from "react";
import {Fragment} from "react";
import PropTypes from "prop-types";
import ServiceData from "@/data/service.json";
import Breadcrumb from "@/containers/global/breadcrumb/index.jsx";
import ServiceDetailsContainer from "@/containers/service-details";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";

const ServiceDetails = async ({params}) => {
    const _params = await params;
    const id =_params.id[0];
    console.log("id: ", id);
    const serviceId = parseInt(id, 10);
    const data = ServiceData.filter((service) => service.id === serviceId);
    return (
        <Fragment>
        <SEO title="Hope – Service Details" />
        <div className="wrapper">
            <div className="main-content site-wrapper-reveal">
                <Breadcrumb
                    prevs={[
                        { text: "Home", path: "/" },
                        { text: "Service", path: "/service" },
                    ]}
                    contentThree={data[0]?.title}
                />
                <ServiceDetailsContainer data={data[0]} />
            </div>
                <ScrollToTop />
            </div>
        </Fragment>
);
};

ServiceDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default ServiceDetails;
