import ProductTypeData from '@/assets/jsonData/products/ProductTypeData.json';
import SingleProductType from './SingleProductType';

const ProductType = () => {
    return (
        <>
            <div className="product-type-area text-center default-padding mt--30" style={{ backgroundImage: 'url(/assets/img/shape/31.png)' }}>
                <div className="container">
                    <div className="row">
                        {ProductTypeData.map(product =>
                            <div className="col-xl-3 col-lg-6 col-md-6 product-type-single" key={product.id}>
                                <SingleProductType product={product} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductType;