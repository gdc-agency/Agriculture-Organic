"use client";
import TeamV2Data from '@/assets/jsonData/team/TeamV2Data.json';
import SingleTeamV2 from './SingleTeamV2';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const TeamV2 = () => {
    return (
        <>
            <div className="team-style-one-area default-padding-bottom pt-md-120">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <h4 className="sub-title">Our Farmers</h4>
                            <h2 className="title">Meet our professional farm experts</h2>
                            <Link className="btn btn-theme secondary mt-10 btn-md radius animation" href="/farmers">Meet all Farmers</Link>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <Swiper
                                className="team-style-one-carousel"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                // Navigation arrows
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    }
                                }}
                                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                            >
                                {TeamV2Data.slice(0, 3).map(team =>
                                    <SwiperSlide key={team.id}>
                                        <SingleTeamV2 team={team} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TeamV2;