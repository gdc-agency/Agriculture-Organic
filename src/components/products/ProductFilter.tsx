"use client"
import ProductFilterData from '@/assets/jsonData/products/ProductFilterData.json';
import SingleFilterProduct from './SingleFilterProduct';
import usePortfolioIsotope from '@/hooks/usePortfolioIsotope';

const ProductFilter = () => {

    const { gridRef, activeFilter, handleFilter } = usePortfolioIsotope();

    return (
        <>
            <div className="mix-product-area default-padding bottom-less">
                <div className="container">
                    <div className="site-heading">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-info">
                                    <h5 className="sub-title">Seasonal Fruits</h5>
                                    <h2 className="title">Featured Products</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mix-item-menu product-mix-menu text-center">

                                <button className={activeFilter == '*' ? 'active' : ''} onClick={() => handleFilter('*')}>All</button>
                                <button className={activeFilter == '.fruit' ? 'active' : ''} onClick={() => handleFilter('.fruit')}>Fruit</button>
                                <button className={activeFilter == '.vegetables' ? 'active' : ''} onClick={() => handleFilter('.vegetables')}>Vegetables</button>

                            </div>

                            {/* End Mixitup Nav*/}
                            <ul id="shop-masonary" className="vt-products grid columns-2" ref={gridRef}>
                                {ProductFilterData.map(product =>
                                    <SingleFilterProduct product={product} key={product.id} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductFilter;