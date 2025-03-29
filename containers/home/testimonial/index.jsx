'use client';

import SectionTitle from "@/components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import HomeData from "@/data/home.json";
import Testimonial from "@/components/testimonial";

SwiperCore.use([Navigation]);
const TestimonialContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 360,
        slidesPerView: 1,
        pagination: { clickable: true },
    };
    return (
        <section
            className="testimonial-area testimonial-default-area testimonial-bg-img bg-img"
            style={{backgroundImage: `url(/img/photos/testimonial-bg1.jpg)`,}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            subTitle="Testimonial"
                            title="<span>Trusted</span> From Clients"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" data-aos-duration="1100">
                        <Swiper className="relative team-slider-container" {...swiperOption}>
                            {HomeData[5].testimonial &&
                                HomeData[5].testimonial.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Testimonial
                                                key={key}
                                                data={single}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
         
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialContainer;
