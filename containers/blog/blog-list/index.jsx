import React from "react";
import Link from "next/link";
import BlogListItem from "@/components/blog-list";
import SidebarSearch from "@/components/sidebar/search";
import SidebarCategories from "@/components/sidebar/sidebar-categories";
import SidebarPost from "@/components/sidebar/sidebar-post";
import SidebarTag from "@/components/sidebar/sidebar-tag";
import SidebarTitle from "@/components/sidebar/sidebar-title";
import BlogData from "@/data/blog.json";

const BlogListContainer = () => {
    return (
        <div className="blog-area section-py blog-border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="post-items-style2">
                            {BlogData &&
                                BlogData.map((single, i) => {
                                    return (
                                        <BlogListItem key={i} data={single} />
                                    );
                                })}
                        </div>
                        <div className="pagination-area mb-md-80">
                            <nav>
                                <ul className="page-numbers">
                                    <li>
                                        <span className="page-number current">
                                            1
                                        </span>
                                    </li>
                                    <li>
                                        <Link className="page-number" href="/">
                                            2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="page-number" href="/">
                                            3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="page-number" href="/">
                                            4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="page-number next" href="/"
                                        >
                                            <i className="icofont-thin-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-wrapper blog-sidebar-wrapper">
                            <div className="widget-item">
                                <SidebarTitle title="Search" />
                                <SidebarSearch />
                            </div>
                            <div className="widget-item">
                                <SidebarTitle title="Categories" />
                                <SidebarCategories data={BlogData} />
                            </div>
                            <div className="widget-item">
                                <SidebarTitle title="Recent posts" />
                                <SidebarPost data={BlogData} />
                            </div>
                            <div className="widget-item">
                                <SidebarTitle title="TAGS" />
                                <SidebarTag data={BlogData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListContainer;
