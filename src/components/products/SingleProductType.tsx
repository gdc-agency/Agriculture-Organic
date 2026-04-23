import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumb?: string;
    number?: string;
    title?: string;
    description?: string;
}

const SingleProductType = ({ product }: { product: DataType }) => {
    const { thumb, number, title, description } = product;

    return (
        <div className="product-type-item">
            <div className="thumb">
                <Image src={`/assets/img/product/${thumb}`} alt="Image Not Found" width={512} height={512} />
                <span>{number}</span>
            </div>
            <div className="info">
                <h4><Link href="#">{title}</Link></h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleProductType;
