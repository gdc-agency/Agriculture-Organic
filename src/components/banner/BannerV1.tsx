"use client"
import BannerV1Data from '@/assets/jsonData/banner/BannerV1Data.json';
import SingleBannerV1 from './SingleBannerV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
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
                    {BannerV1Data.map(banner =>
                        <SwiperSlide className="banner-style-one" key={banner.id}>
                            <SingleBannerV1 banner={banner} />
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

export default BannerV1;