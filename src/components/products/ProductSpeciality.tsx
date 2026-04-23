import Link from 'next/link';

const ProductSpeciality = () => {
    return (
        <>
            <div className="product-speciality-arae bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-8">
                            <div className="product-speciality-info default-padding-bottom">
                                <div className="product-badge">
                                    <h1>100 <strong>Organic</strong></h1>
                                </div>
                                <h2><strong>Fresh & Natural</strong> Produc in Our Store</h2>
                                <p>
                                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.
                                </p>
                                <Link className="btn btn-dark btn-md radius animation" href="/shop">Purchase Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSpeciality;