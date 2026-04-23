import Link from "next/link";

interface DataType {
    thumb?: string;
    title: string;
    description?: string;
    buttonText?: string;
    buttonIcon?: string;
}

const SingleBannerV2 = ({ banner }: { banner: DataType }) => {
    const { thumb, title, description, buttonText, buttonIcon } = banner;

    // Split title for optional styling, e.g. bold last word
    const [firstWord, ...rest] = title.split(" ");
    const restTitle = rest.join(" ");

    return (
        <div className="banner-style-two">
            <div className="banner-thumb bg-cover shadow dark" style={{ backgroundImage: `url(/assets/img/banner/${thumb})` }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="content">
                            <h2>
                                {firstWord} <strong>{restTitle}</strong>
                            </h2>
                            <p>{description}</p>
                            <div className="button">
                                <Link className="animated-btn" href="/about-us">
                                    <i className={buttonIcon} /> {buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBannerV2;
