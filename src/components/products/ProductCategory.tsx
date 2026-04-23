import ProductCategoryData from "@/assets/jsonData/products/ProductCategoryData.json"
import SingleProductCategory from "./SingleProductCategory";
import Image from "next/image";

const ProductCategory = () => {
    return (
        <>
            <div className="product-cat-area default-padding">
                <div className="shape-right-bottom-mini">
                    <Image src="/assets/img/shape/11.png" alt="Image Not Found" width={350} height={360} />
                </div>
                <div className="container">
                    <div className="product-cat-items">
                        <div className="row align-center">
                            <div className="col-lg-5 product-cat-info">
                                <h2 className="mask-text" style={{ backgroundImage: 'url(/assets/img/banner/17.jpg)' }}>Healthy Life With Fresh Products</h2>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="product-cat-lists text-light">
                                    <div className="product-list-box">
                                        {ProductCategoryData.map(product =>
                                            <SingleProductCategory product={product} key={product.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCategory;