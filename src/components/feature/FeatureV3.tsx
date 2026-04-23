"use client"
import FeatureV2Data from "@/assets/jsonData/feature/FeatureV2Data.json"
import SingleFeatureV2 from "./SingleFeatureV2";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";

interface DataType {
    sectionClass?: string
}

const FeatureV3 = ({ sectionClass }: DataType) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`feature-style-two-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="feature-style-two-items">

                        <div className="feature-style-two info text-light bg-dark" style={{ backgroundImage: 'url(/assets/img/shape/19.png)' }}>
                            <div className="info">
                                <h4 className="sub-title">Healthy Foods</h4>
                                <h2 className="title mb-25">Best Organic <br /> Agriculture Firms</h2>
                                <p>
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out.
                                </p>
                                <div className="button">
                                    <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube text-play-button mt-20">
                                        <div className="effect" />
                                        <span><i className="fas fa-play" /> OUR STORY</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {FeatureV2Data.map(feature =>
                            <SingleFeatureV2 feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="0yoFrlxKMis" onClose={() => setOpen(false)} />
        </>
    );
};

export default FeatureV3;