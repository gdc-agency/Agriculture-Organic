"use client"
import ChooseListV2Data from '@/assets/jsonData/whyChoose/ChooseListV2Data.json';
import ChooseListV2 from './ChooseListV2';
import FactV2Data from '@/assets/jsonData/fact/FactV2Data.json';
import FactV2 from '../fact/FactV2';
import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

const WhyChooseV2 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="choose-us-style-two-area overflow-hidden default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 pr-100 pr-md-15 pr-xs-15 pb-120 pb-md-60 pb-xs-60">
                            <ul className="list-simple text-light">
                                {ChooseListV2Data.map(list =>
                                    <ChooseListV2 list={list} key={list.id} />
                                )}
                            </ul>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="choose-us-style-two-content">
                                <h4 className="sub-title">Why CHoose Us</h4>
                                <h2 className="title">Growing crops and raising livestock. </h2>
                                <div className="choose-us-style-two-info">
                                    <div className="content">
                                        {FactV2Data.map(fact =>
                                            <FactV2 fact={fact} key={fact.id} />
                                        )}
                                    </div>
                                    <div className="thumb">
                                        <Image src="/assets/img/thumb/4.jpg" alt="Image Not Found" className='h-auto' width={1200} height={900} />
                                        <Link href="#" scroll={false} className="popup-youtube video-play-button" onClick={() => setOpen(true)}>
                                            <i className="fas fa-play" />
                                            <div className="effect" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="0yoFrlxKMis" onClose={() => setOpen(false)} />
        </>
    );
};

export default WhyChooseV2;