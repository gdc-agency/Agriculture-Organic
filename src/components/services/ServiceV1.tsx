import ServiceV1Data from '@/assets/jsonData/services/ServiceV1Data.json'
import SingleServiceV1 from './SingleServiceV1';

interface DataType {
    hasTitle?: boolean
}

const ServiceV1 = ({ hasTitle }: DataType) => {
    return (
        <>
            <div className="services-style-one-area bg-gray default-padding bottom-less">
                <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }} />
                <div className="container">

                    {/* Title */}
                    {hasTitle &&
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="site-heading text-center">
                                    <h5 className="sub-title">What we do</h5>
                                    <h2 className="title">Currently we are <br /> selling organic food</h2>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="row">
                        {ServiceV1Data.map(service =>
                            <div className="col-lg-4 col-md-6 service-one-single" key={service.id}>
                                <SingleServiceV1 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV1;