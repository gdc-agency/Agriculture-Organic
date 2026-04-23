"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import ProductV1Data from "@/assets/jsonData/products/ProductV1Data.json";
import SingleProductCategoryV2 from './SingleProductCategoryV2';

const RelatedProducts = () => {
    return (
        <>
            <div className="related-products carousel-shadow">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Related Products</h3>
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="vt-products text-center related-product-carousel"
                            modules={[Keyboard, Autoplay]}
                        >
                            <div className="swiper-wrapper">
                                {ProductV1Data.map(product =>
                                    <SwiperSlide key={product.id}>
                                        <SingleProductCategoryV2 product={product} />
                                    </SwiperSlide>
                                )}
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatedProducts;