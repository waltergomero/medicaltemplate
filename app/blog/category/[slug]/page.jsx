import PropTypes from "prop-types";
import React from "react";
import Breadcrumb from "@/containers/global/breadcrumb/index.jsx";
import BlogData from "@/data/blog.json";
import { slugify } from "@/utils";
import BlogItemContainer from "@/containers/blog/blog-item";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";
import { Fragment } from "react";

const BlogCategory = async ({params}) => {
    const _params = await params;
    console.log("_params: ", _params)
    const slug =_params.slug;
    console.log("slug: ", slug)
    const data = BlogData.map((blog) => {
        return {
            ...blog,
            categories: blog.categories.filter((cat) => slugify(cat) === slug),
        };
    }).filter((blog) => blog.categories.length > 0);
    const categoryTitle = data[0].categories[0];
    return (
        <Fragment>
                <div className="wrapper">
                    <SEO title="Hope – Blog Category" />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Blog", path: "/blog" },
                            ]}
                            contentThree={categoryTitle}
                        />
                        <BlogItemContainer data={data} />
                    </div>
                    <ScrollToTop />
                </div>
        </Fragment>
    );
};

BlogCategory.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogCategory;
