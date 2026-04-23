import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    image?: string;
    title: string;
    description?: string;
}

const SingleServiceV1 = ({ service }: { service: DataType }) => {
    const { id, image, title, description } = service

    return (
        <>
            <div className="service-style-one-item">
                <div className="thumb">
                    <Image src={`/assets/img/illustration/${image}`} alt="Image Not Found" className="w-auto" width={720} height={740} />
                </div>
                <div className="info">
                    <div className="top">
                        <h4>
                            <Link href={`/service-details/${id}`}>
                                {title.split(" ")[0]} <span>{title.split(" ").slice(1).join(" ")}</span>
                            </Link>
                        </h4>
                    </div>
                    <p>{description} </p>
                </div>
                <Link href={`/service-details/${id}`} className="btn-angle"><i className="fas fa-arrow-right" /></Link>
            </div>
        </>
    );
};

export default SingleServiceV1;