"use client"
import TestimonialV2Data from '@/assets/jsonData/testimonial/TestimonialV2Data.json';
import SingleTestimonialV2 from './SingleTestimonialV2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const TestimonialV2 = () => {
    return (
        <>
            <div className="testimonial-style-two-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/27.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Customers’ Review</h5>
                                <h2 className="title">What people say?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <Swiper
                                className="testimonial-style-two-carousel text-center"
                                direction={"horizontal"}
                                loop={true}
                                autoplay={true}
                                effect={"fade"}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
                            >
                                {TestimonialV2Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV2 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                                <div className="swiper-pagination" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV2;