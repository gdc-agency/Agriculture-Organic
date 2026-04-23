"use client";
import BannerV4Data from '@/assets/jsonData/banner/BannerV4Data.json';
import SingleBannerV4 from './SingleBannerV4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const BannerV4 = () => {
    return (
        <>
            <div className="banner-area navigation-circle text-center banner-style-four overflow-hidden">
                <div className="banner-fade">
                    <Swiper
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

                        // If we need pagination
                        pagination={{
                            el: '.banner-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}

                        // Navigation arrows
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                        modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
                    >
                        {BannerV4Data.map(banner =>
                            <SwiperSlide
                                className="banner-style-four bg-cover"
                                style={{ background: `url(/assets/img/banner/${banner.bgImage})` }}
                                key={banner.id}>
                                <SingleBannerV4 banner={banner} />
                            </SwiperSlide>
                        )}
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default BannerV4;