"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import GalleryV1Data from "@/assets/jsonData/gallery/GalleryV1Data.json"
import SingleGalleryV1 from "./SingleGalleryV1";

const GalleryV1 = () => {
    return (
        <>
            <div className="gallery-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Awesome Gallery</h5>
                                <h2 className="title">Explore Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <Swiper
                            className="gallery-style-one-carousel"
                            loop={true}
                            freeMode={true}
                            grabCursor={true}
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={false}
                            pagination={{
                                el: ".swiper-pagination",
                                clickable: true,
                            }}
                            breakpoints={{
                                991: {
                                    slidesPerView: 2,
                                },
                                1400: {
                                    slidesPerView: 3,
                                }
                            }}
                            modules={[Keyboard, Autoplay, Pagination, EffectFade]}
                        >
                            {GalleryV1Data.map(gallery =>
                                <SwiperSlide key={gallery.id}>
                                    <SingleGalleryV1 gallery={gallery} />
                                </SwiperSlide>
                            )}
                            <div className="swiper-pagination" />
                        </Swiper>
                    </div>
                </div>
            </div >
        </>
    );
};

export default GalleryV1;