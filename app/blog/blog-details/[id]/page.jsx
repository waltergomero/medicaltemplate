import PropTypes from "prop-types";
import React, {Fragment} from "react";
import Breadcrumb from "@/containers/global/breadcrumb/index.jsx";
import BlogDetailsContainer from "@/containers/blog/blog-details";
// import CommentContainer from "@/containers/comment-container/index.jsx";
import BlogData from "@/data/blog.json";
import ScrollToTop from "@/components/scroll-to-top";
import SEO from "@/components/seo";

const BlogDetailsPage = async ({params}) => {
    const _params = await params;
    const id =_params.id[0];

    const blogId = parseInt(id, 10);
    const data = BlogData.filter((blogItem) => blogItem.id === blogId);
    return (
        <Fragment>
                <SEO title="Hope – Blog Details" />
                <div className="wrapper">
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Blog", path: "/blog" },
                            ]}
                            contentThree={data[0]?.title}
                        />
                        <BlogDetailsContainer data={data[0]} />
                        {/* <CommentContainer /> */}
                    </div>
                    <ScrollToTop />
                </div>
        </Fragment>
    );
};

BlogDetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default BlogDetailsPage;
