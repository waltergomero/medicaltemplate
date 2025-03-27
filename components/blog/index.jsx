import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { slugify } from "@/utils";

const BlogList = ({ data }) => {
    return (
        <div className="post-item">
            <div className="thumb">
                <Link href={`/blog/blog-details/${data.id}`}>
                    <img
                        src={data.media.smallImage}
                        alt="hope-Blog"
                    />
                </Link>
            </div>
            <div className="content">
                <h4 className="title">
                    <Link href={`/blog/blog-details/${data.id}`}>
                        {data.title}
                    </Link>
                </h4>
                <div className="meta">
                    <Link  href={`/date/${slugify(data.date)}`}>
                        {data.date}
                    </Link>
                    <span>by</span>
                    <Link className="author"
                        href={ `/author/${slugify(data.author)}`}>
                        {data.author}
                    </Link>
                </div>
            </div>
        </div>
    );
};

BlogList.propTypes = {
    data: PropTypes.object,
};

export default BlogList;
