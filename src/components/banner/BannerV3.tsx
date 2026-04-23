"use client";
import BannerV3Data from "@/assets/jsonData/banner/BannerV3Data.json";
import SingleBannerV3 from "./SingleBannerV3";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const BannerV3 = () => {
    return (
        <>
            <div className="banner-area navigation-circle text-light banner-style-three zoom-effect overflow-hidden">
                <Swiper className="banner-fade"
                    direction={"horizontal"}
                    loop={true}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.banner-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
                >
                    {BannerV3Data.map(banner =>
                        <SwiperSlide key={banner.id}>
                            <SingleBannerV3 banner={banner} />
                        </SwiperSlide>
                    )}
                    {/* Navigation */}
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </Swiper>
            </div >

        </>
    );
};

export default BannerV3;