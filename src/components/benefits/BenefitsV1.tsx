import Image from "next/image";
import VideoBg1 from "../videos/VideoBg1";

const BenefitsV1 = () => {
    return (
        <>
            <div className="benifits-area default-padding-top video-bg-live bg-cover mt--50 mt-md-0 mt-xs-0" style={{ backgroundImage: 'url(/assets/img/banner/16.jpg)' }}>
                <VideoBg1 />
                <div className="shape-top-center" style={{ backgroundImage: 'url(/assets/img/shape/10.png)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="benifit-items text-light">
                                <div className="shape">
                                    <Image src="/assets/img/illustration/8.png" alt="Image Not Found" width={128} height={112} />
                                </div>
                                <h2 className="title">Distributors of Organic Produce</h2>
                                <p>
                                    Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously.
                                </p>
                                <ul className="list-standard">
                                    <li>Modern Agriculture Equipment</li>
                                    <li>Awesome Harvest of Wheat</li>
                                    <li>Fresh Fruits & Vegetables</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BenefitsV1;