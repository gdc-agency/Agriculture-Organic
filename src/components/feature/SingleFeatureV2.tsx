import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    featureData: {
        id?: number;
        title: string;
        thumb?: string;
    }[];
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { featureData } = feature;

    return (
        <div className="feature-style-two">
            {featureData.map(data => (
                <div className="product-feature-item" key={data.id}>
                    <div className="thumb">
                        <Image src={`/assets/img/icon/${data.thumb}`} alt={data.title} width={256} height={256} />
                    </div>
                    <h4><Link href={`/service-details/${data.id}`}>{data.title}</Link></h4>
                </div>
            ))}
        </div>
    );
};

export default SingleFeatureV2;
