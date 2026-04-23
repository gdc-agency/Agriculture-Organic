import Link from "next/link";

interface DataType {
    id?: number;
    backgroundImage?: string;
    subheading?: string;
    heading: string;
    buttonText?: string;
}

const SingleBannerV3 = ({ banner }: { banner: DataType }) => {
    const { backgroundImage, subheading, heading, buttonText } = banner;

    // Split the heading into words
    const words = heading.split(" ");
    const firstTwoWords = words.slice(0, 2).join(" ");
    const restWords = words.slice(2).join(" ");

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ backgroundImage: `url(/assets/img/banner/${backgroundImage})` }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-8">
                        <div className="content">
                            <h4>{subheading}</h4>
                            <h2>
                                <strong>{firstTwoWords}</strong> {restWords}
                            </h2>
                            <div className="button">
                                <Link className="btn btn-theme btn-md radius animation" href="/about-us">{buttonText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV3;