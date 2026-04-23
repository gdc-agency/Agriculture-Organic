import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    shapeImage: string;
    title: string;
    tags: string[];
    buttonText: string;
}

const SingleBannerV4 = ({ banner }: { banner: DataType }) => {
    const { shapeImage, title, tags } = banner

    return (
        <>
            <div className="shape">
                <Image src={`/assets/img/shape/${shapeImage}`} alt="Image Not Found" width={865} height={745} />
            </div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-10 offset-lg-1">
                        <div className="content">
                            <div className="info">
                                <h2>{title}</h2>
                                <ul>
                                    {tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                </ul>
                                <div className="button">
                                    <Link className="btn btn-theme secondary btn-md radius animation" href="/about-us">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV4;