import Button from "@/components/ui/button";
import PropTypes from "prop-types";

const Intro = ({ data }) => {
    return (

        <div className="absolute top-1/2 -translate-y-1/2  slider-content">
            <p className="text animated delay1">
                {data.subTitle}
            </p>
            <h2 className="title animated delay2"
                dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <Button
                path={process.env.PUBLIC_URL + "/"}
                classOption="btn btn-danger me-3 animated delay1"
                text="Get a quote"
            />
            <Button
                path={process.env.PUBLIC_URL + "/"}
                classOption="btn btn-outline-secondary animated delay2"
                text="our services"
            />
        </div>

    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
