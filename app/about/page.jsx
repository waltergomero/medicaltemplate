import React, {Fragment} from "react";
import PageTitleContainer from "@/containers/global/page-title/index.jsx";
import AboutContainer from "@/containers/about";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";

const AboutPage = () => {
    return (
        <Fragment>
                <SEO title="Hope – About" />
                <div className="wrapper">
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="/img/photos/about-bg1.jpg"
                            subTitle="Hope medical center"
                            title="About <span>Hope</span>"
                        />
                        <AboutContainer />
                    </div>
                    <ScrollToTop />
                </div>
        </Fragment>
    );
};

export default AboutPage;
