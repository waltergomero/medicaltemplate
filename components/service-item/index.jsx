import PropTypes from "prop-types";
import Link from "next/link";

const ServiceItem = ({ data }) => {
    return (
        <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
                <i className={data.icon}></i>
            </div>
            <div className="content">
                <h5 className="service-name">{data.title}</h5>
                <p>{data.excerpt}</p>
                <Link
                    className="btn-link"
                href={process.env.PUBLIC_URL + `/service-details/${data.id}`}
                >
                    More <i className="icofont-simple-right"></i>
                </Link>
            </div>
        </div>
    );
};

ServiceItem.propTypes = {
    data: PropTypes.object,
};

export default ServiceItem;
