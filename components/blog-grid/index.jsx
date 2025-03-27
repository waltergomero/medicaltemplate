import PropTypes from "prop-types";
import Link from "next/link";
import { slugify } from "@/utils";

const BlogGrid = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link
                className="category"
                href={`/category/${slugify(value)}`}
                key={i}
            >
                {value}
                {i !== data.categories.length - 1 && ","}
            </Link>
        );
    });
    return (
        <div className="post-item">
            <div className="thumb">
                <Link href={ `/blog/blog-details/${data.id}`}>
                    <img
                        src={data.media.gridImage}
                        alt="hope-Blog"
                    />
                </Link>
            </div>
            <div className="content">
                {cate}
                <h4 className="title">
                    <Link
                        href={ `/blog/blog-details/${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h4>
            </div>
        </div>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
};

export default BlogGrid;
