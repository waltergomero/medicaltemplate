import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const SidebarTitle = ({ title, classOption }) => {
    return (
        <Fragment>
            <h4 className={`widget-title ${classOption}`}>{title}</h4>
        </Fragment>
    );
};

SidebarTitle.propTypes = {
    title: PropTypes.string,
    classOption: PropTypes.string,
};

SidebarTitle.defaultProps = {
    classOption: "widget-title",
};

export default SidebarTitle;
