import PropTypes from "prop-types";
import Link from "next/link";

const CasesItem = ({ data }) => {
    return (
        <div className="case-item">
            <div className="thumb">
                <img
                    src={data.image}
                    alt="Hope"
                />
            </div>
            <div className="content">
                <h5 className="name">
                    <Link href="/">{data.name}</Link>
                </h5>
                <h6 className="category">{data.department}</h6>
            </div>
        </div>
    );
};

CasesItem.propTypes = {
    data: PropTypes.object,
};

export default CasesItem;
