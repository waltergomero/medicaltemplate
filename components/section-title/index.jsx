import PropTypes from "prop-types";

const SectionTitle = ({ subTitle, title, classOption }) => {
    
    return (
        <div className={`section-title ${classOption}`}>
            <p>{subTitle}</p>
            <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
};

export default SectionTitle;
