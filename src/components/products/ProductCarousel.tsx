"use client"
import Image from 'next/image';
import ProductV1Data from "@/assets/jsonData/products/ProductV1Data.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProductCarousel = () => {
    return (
        <>
            <div id="timeline-carousel" className="carousel slide" data-bs-ride="carousel">

                {/* ProductCarouselInner */}
                <div className="carousel-inner item-box">
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        {ProductV1Data.map(data =>
                            <div className={`carousel-item product-item ${data.activeClass}`} key={data.id}>
                                <PhotoView src={`/assets/img/products/${data.thumb}`}>
                                    <Image
                                        src={`/assets/img/products/${data.thumb}`}
                                        alt="Thumb"
                                        width={450}
                                        height={450}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </PhotoView>
                                <span className="onsale theme">-{data.discount}%</span>
                            </div>
                        )}
                    </PhotoProvider>
                </div>

                {/* ProductCarouselIndicators */}
                <div className="carousel-indicators">
                    <Swiper
                        className="product-gallery-carousel"
                        modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        loop={true}
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        <div className="swiper-wrapper">
                            {ProductV1Data.map(data =>
                                <SwiperSlide key={data.id}>
                                    <div className={`item ${data.activeClass}`} data-bs-target="#timeline-carousel" data-bs-slide-to={data.dataSlideTo}>
                                        <Image
                                            src={`/assets/img/products/${data.thumb}`}
                                            alt="image"
                                            width={450}
                                            height={450}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductCarousel;