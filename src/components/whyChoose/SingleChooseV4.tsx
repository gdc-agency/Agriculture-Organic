import Image from "next/image";

interface DataType {
    id?: number;
    icon?: string;
    alt: string;
    title?: string;
    description?: string;
}

const SingleChooseV4 = ({ list }: { list: DataType }) => {
    const { icon, alt, title, description } = list;

    return (
        <li>
            <div className="icon">
                <Image src={`/assets/img/icon/${icon}`} alt={alt} width={256} height={256} />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default SingleChooseV4;
