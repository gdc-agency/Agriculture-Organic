import ProductV1Data from "@/assets/jsonData/products/ProductV1Data.json"
import SingleProductCategoryV2 from "./SingleProductCategoryV2";

const ProductV1 = () => {
    return (
        <>
            <div className="product-style-one-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Customers’ Choice</h5>
                                <h2 className="title">Featured Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="vt-products text-center columns-4">
                                {ProductV1Data.slice(0, 8).map(product =>
                                    <SingleProductCategoryV2 product={product} key={product.id} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductV1;