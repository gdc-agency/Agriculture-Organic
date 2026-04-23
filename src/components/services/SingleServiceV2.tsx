import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    icon?: string;
    title: string;
    category?: string;
}

const SingleServiceV2 = ({ service }: { service: DataType }) => {
    const { id, thumb, icon, title, category } = service;

    return (
        <div className="service-style-two">
            <div className="thumb">
                <Image
                    src={`/assets/img/services/${thumb}`}
                    alt={title}
                    width={800}
                    height={800}
                    className='h-auto'
                />
            </div>
            <div className="overlay">
                <div className="icon">
                    <Image
                        src={`/assets/img/icon/${icon}`}
                        alt={`${title} icon`}
                        width={256}
                        height={256}
                        className='h-auto'
                    />
                </div>
                <div className="info">
                    <h4><Link href={`/service-details/${id}`}>{title}</Link></h4>
                    <span>{category}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceV2;
