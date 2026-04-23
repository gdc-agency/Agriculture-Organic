import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    name?: string;
    thumb?: string;
}

const SingleProductCategory = ({ product }: { product: DataType }) => {
    const { id, name, thumb } = product

    return (
        <>
            <div className="product-list-item">
                <Link href={`/service-details/${id}`}>
                    <Image src={`/assets/img/icon/${thumb}`} alt="Icon" className="w-auto" width={512} height={512} />
                    <h5>{name}</h5>
                </Link>
            </div>
        </>
    );
};

export default SingleProductCategory;