import Link from "next/link";
import PropTypes from "prop-types";
import { slugify } from "@/utils";

const BlogListItem = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link
                className="category"
                href={ `/blog/category/${slugify(value)}`}
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
                    <img  src={data.media.mediumImage}
                        alt="hope-Blog"
                    />
                </Link>
            </div>
            <div className="content">
                {cate}
                <h4 className="title">
                    <Link  href={ `/blog/blog-details/${data.id}`}>
                        {data.title}
                    </Link>
                </h4>
                <div className="meta">
                    <Link href={`/date/${slugify(data.date)}`}>
                        {data.date}
                    </Link>
                    <span>by</span>
                    <Link className="author"
                        href={`/author/${slugify(data.author)}`} >
                        {data.author}
                    </Link>
                </div>
            </div>
        </div>
    );
};

BlogListItem.propTypes = {
    data: PropTypes.object,
};

export default BlogListItem;
