import Image from "next/image";

interface DataType {
    id?: number;
    icon?: string;
    title?: string;
    description?: string;
}

const ProductFeature = ({ feature }: { feature: DataType }) => {
    const { icon, title, description } = feature;

    return (
        <>
            <li>
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={256} height={256} />
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </li>
        </>
    );
};

export default ProductFeature;