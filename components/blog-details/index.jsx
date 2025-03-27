import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import SidebarTag from "@/components/sidebar/sidebar-tag";
import { slugify } from "@/utils";
import BlogData from "@/data/blog.json";

const BlogDetailsWrap = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link
                className="category"
                href={ `/category/${slugify(value)}`}
                key={i}
            >
                {value}
                {i !== data.categories.length - 1 && ","}
            </Link>
        );
    });
    return (
        <div className="blog-details-wrpa">
            <div className="content">
                <h2 className="title">{data.title}</h2>
                <img
                    src={data.media.largeImage}
                    alt="hope-Blog"
                />
                <div className="meta">
                    {cate}
                    <span>-</span>
                    <Link className="author"
                        href={`/date/${slugify(data.date)}`}>
                        {data.date}
                    </Link>
                    <span>by</span>
                    <Link className="author"
                        href={ `/author/${slugify(data.author)}`}>
                        {data.author}
                    </Link>
                </div>
                {data.body.map((single, key) => {
                    return (
                        <div
                            className="desc"
                            key={key}
                            dangerouslySetInnerHTML={{ __html: single }}
                        ></div>
                    );
                })}
                <SidebarTag data={BlogData} />
            </div>
        </div>
    );
};

BlogDetailsWrap.propTypes = {
    data: PropTypes.object,
};

export default BlogDetailsWrap;
