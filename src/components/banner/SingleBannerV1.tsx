"use client";
import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    image?: string;
    shape?: string;
    badgeText?: string;
    title?: string;
    description?: string;
    buttonText?: string;
}

const SingleBannerV1 = ({ banner }: { banner: DataType }) => {
    const { image, shape, badgeText, title, description, buttonText } = banner;

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ backgroundImage: `url(/assets/img/banner/${image})` }} />
            <div className="shape">
                <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={714} height={827} />
            </div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-9">
                        <div className="content">
                            <div className="badge">
                                <div className="curve-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
                                        <text><textPath href="#textPath">{badgeText}</textPath></text>
                                    </svg>
                                    <Link href="#" scroll={false} className="popup-youtube">
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="info">
                                <h2><strong>{title?.split(" ")[0]}</strong> {title?.split(" ").slice(1).join(" ")}</h2>
                                <p>{description}</p>
                                <div className="button">
                                    <Link className="btn btn-theme btn-md radius animation" href="/about-us">
                                        {buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV1;
