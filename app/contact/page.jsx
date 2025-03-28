import React, {Fragment} from "react";

import GoogleMapContainer from "@/containers/global/map";
import ContactPageContainer from "@/containers/contact";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";

const ContactPage = () => {
    return (
        <Fragment>
                <SEO title="Hope – Contact" />
                <div className="wrapper">
                    <div className="main-content site-wrapper-reveal">
                        <GoogleMapContainer classOption="contact-map-area" />
                        <ContactPageContainer />
                    </div>
                    <ScrollToTop />
                </div>
        </Fragment>
    );
};

export default ContactPage;
