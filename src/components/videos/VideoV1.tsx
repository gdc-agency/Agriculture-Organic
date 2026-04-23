"use client";
import { useState } from "react";
import VideoBg1 from "./VideoBg1";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const VideoV1 = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="video-area text-center text-light video-bg-live bg-cover" style={{ backgroundImage: 'url(/assets/img/banner/26.jpg)' }}>
                <VideoBg1 videoURL="0yoFrlxKMis" />
                <div className="shadow dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="video-content">
                                    <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                        <div className="effect" />
                                    </Link>
                                    <h2 className="title">Visit Our Farm</h2>
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

export default VideoV1;