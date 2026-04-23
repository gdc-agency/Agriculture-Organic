import FeatureV1Data from '@/assets/jsonData/feature/FeatureV1Data.json';
import Image from 'next/image';
import SingleFeatureV1 from './SingleFeatureV1';
import Link from 'next/link';

const FeatureV1 = () => {
    return (
        <>
            <div className="feature-style-one-area default-padding" style={{ backgroundImage: 'url(/assets/img/shape/18.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-3 col-lg-6">
                            <div className="feature-style-one-item">
                                <Image src="/assets/img/thumb/1.jpg" alt="Image Not Found" className='h-auto' width={800} height={1200} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 pl-50 pr-50 pl-md-15 pr-md-15 pl-xs-15 pr-xs-15">
                            <div className="feature-style-one-info">
                                <h2 className="title">Best Organic <br /> Agriculture Firms</h2>
                                <p>
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.
                                </p>
                                <ul className="item-list">
                                    <li>Best Quality Standards</li>
                                    <li>Natural Healthy Products</li>
                                </ul>
                                <Link className="btn btn-theme mt-30 btn-md radius animation" href="/about-us">Discover More</Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12">
                            <div className="featured-product">
                                {FeatureV1Data.map(feature =>
                                    <SingleFeatureV1 feature={feature} key={feature.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;