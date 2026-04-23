"use client"
import HistoryData from "@/assets/jsonData/history/HistoryData.json"
import HistoryInfo from "./HistoryInfo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const History = () => {
    return (
        <>
            <div className="history-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/brush-down.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">how we started</h4>
                                <h2 className="title">The Openfield Timeline</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="history-items">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="carousel slide" data-ride="carousel" id="timeline-carousel" data-interval={5000000}>

                                    {/* Carousel Indicators */}
                                    <ol className="carousel-indicators text-center">
                                        <Swiper
                                            className="timeline-carousel"
                                            loop={true}
                                            freeMode={true}
                                            grabCursor={true}
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            autoplay={false}

                                            // Navigation arrows
                                            navigation={{
                                                nextEl: ".timeline-button-next",
                                                prevEl: ".timeline-button-prev"
                                            }}

                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                992: {
                                                    slidesPerView: 3,
                                                },
                                                1400: {
                                                    slidesPerView: 5,
                                                },
                                            }}
                                            modules={[Navigation, Pagination, Autoplay, Keyboard]}
                                        >
                                            {HistoryData.listData.map(slider =>
                                                <SwiperSlide key={slider.id}>
                                                    <li data-bs-target="#timeline-carousel"
                                                        data-bs-slide-to={slider.dataSlideTo}
                                                        className={`${slider.activeClass}`}
                                                        aria-current="true"
                                                        aria-label={slider.ariaLabel}>
                                                        <h4>{slider.year}</h4>
                                                    </li>
                                                </SwiperSlide>
                                            )}
                                        </Swiper>

                                        {/* Navigation */}
                                        <div className="timeline-navigation">
                                            <div className="timeline-button-prev" />
                                            <div className="timeline-button-next" />
                                        </div>
                                    </ol>

                                    <div className="carousel-inner">
                                        {HistoryData.infoData.map(history =>
                                            <HistoryInfo history={history} key={history.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;