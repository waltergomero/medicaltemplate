import React, {Fragment} from "react";
import Breadcrumb from "@/containers/global/breadcrumb";
import BlogListContainer from "@/containers/blog/blog-list/index.jsx";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";


const BlogPage = () => {
    return (
        <Fragment>
                <SEO title="Hope – Blog" />
                <div className="wrapper">
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            classOptionOne="content-style3"
                            classOptionTwo="bread-crumbs-style2"
                            prevs={[{ text: "Home", path: "/" }]}
                            contentThree="Blog"
                            title="<span>Latest From</span> Our Blog"
                        />
                        <BlogListContainer />
                    </div>
                    <ScrollToTop />
                </div>
        </Fragment>
    );
};

export default BlogPage;
