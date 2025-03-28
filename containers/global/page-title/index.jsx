import React from "react";
import PageTitle from "@/components/page-title";
import PropTypes from "prop-types";

const PageTitleContainer = ({ subTitle, title, image }) => {
    return (
        <div className="page-title-area bg-img bg-img-top"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7 m-auto">
                        <PageTitle subTitle={subTitle} title={title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

PageTitleContainer.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
};

export default PageTitleContainer;
