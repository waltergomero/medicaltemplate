import SectionTitle from "@/components/section-title";
import HomeData from "@/data/home.json";
import MedicalFeature from "@/components/medical-feature";

const MedicalFeatureContainer = () => {
    return (
        <section className="feature-section bg-gray-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <SectionTitle
                            subTitle="Why Choose hope Medical"
                            title="<span>The Best</span> For Your Health"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xl-8">
                        <div
                            className="row icon-box-style"
                            data-aos-duration="1100"
                        >
                            {HomeData[3].medicalFeature &&
                                HomeData[3].medicalFeature.map(
                                    (single, key) => {
                                        return (
                                            <div key={key} className="col-md-6">
                                                <MedicalFeature
                                                    key={key}
                                                    data={single}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="thumb"
                data-aos-duration="1500"
            >
                <img src="/img/photos/doctor-01.webp" alt="hope"/>
            </div>
        </section>
    );
};

export default MedicalFeatureContainer;
