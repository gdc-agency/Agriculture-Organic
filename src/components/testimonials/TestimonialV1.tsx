"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json"
import SingleTestimonialV1 from "./SingleTestimonialV1";

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/13.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="testimonial-heading">
                                <h2>Testimonials</h2>
                            </div>
                            <Swiper
                                className="testimonial-carousel testimonial-style-one"
                                direction={"horizontal"}
                                loop={true}
                                autoplay={true}
                                effect={"fade"}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                modules={[Keyboard, Autoplay, EffectFade]}
                            >
                                {TestimonialV1Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV1 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;