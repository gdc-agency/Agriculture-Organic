import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    thumb?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { id, title, thumb } = feature;

    return (
        <>
            <div className="product-list-item">
                <Link href={`/service-details/${id}`} >
                    <Image src={`/assets/img/icon/${thumb}`} alt="Icon" width={256} height={256} />
                    <h5>{title}</h5>
                </Link>
            </div>
        </>
    );
};

export default SingleFeatureV1;