"use client";
import ServiceV2Data from "@/assets/jsonData/services/ServiceV2Data.json";
import SingleServiceV2 from "./SingleServiceV2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

const ServiceV2 = () => {
    return (
        <>
            <div className="service-style-two-area half-bg-dark-bottom default-padding-top pb-md-120 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="text-center mb-60 mb-md-40 mb-xs-40">
                                <h2 className="mask-text large" style={{ backgroundImage: 'url(/assets/img/banner/18.jpg)' }}>Healthy life with fresh products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                className="service-style-two-carousel mb--30"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={true}

                                // Navigation arrows
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1400: {
                                        slidesPerView: 3,
                                        spaceBetween: 60,
                                    }
                                }}
                                modules={[Navigation, Autoplay, Keyboard]}
                            >
                                {ServiceV2Data.map(service =>
                                    <SwiperSlide key={service.id}>
                                        <SingleServiceV2 service={service} />
                                    </SwiperSlide>
                                )}
                                <div className="swiper-button-prev" />
                                <div className="swiper-button-next" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ServiceV2;