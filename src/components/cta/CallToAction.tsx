"use client";
import Image from 'next/image';
import CallToActionData from '@/assets/jsonData/cta/CallToActionData.json'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const CallToAction = () => {
    return (
        <>
            <div className="call-to-action-area overflow-hidden default-padding-top bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/24.png)' }}>
                <div className="shape">
                    <Image src="/assets/img/illustration/13.png" alt="Image Not Found" width={485} height={325} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="callto-action text-light">
                                <h2 className="title">Built the best agriculture market</h2>
                                <p>
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult.
                                </p>
                                <Link href="/about-us">Discover More</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="brand">
                                <Swiper
                                    className="brand-style-one-carousel"
                                    loop={true}
                                    slidesPerView={2}
                                    spaceBetween={15}
                                    autoplay={true}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        }
                                    }}
                                    modules={[Navigation, Pagination, Autoplay, Keyboard]}
                                >
                                    {CallToActionData.map(brand =>
                                        <SwiperSlide key={brand.id}>
                                            <Image src={`/assets/img/brand/${brand.thumb}`} alt="Thumb" width={256} height={256} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default CallToAction;