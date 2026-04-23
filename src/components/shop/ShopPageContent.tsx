"use client"
import ProductV1Data from '@/assets/jsonData/products/ProductV1Data.json'
import SingleProductCategoryV2 from '../products/SingleProductCategoryV2';
import SingleProductList from './SingleProductList';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import Pagination from 'react-paginate';

const ShopPageContent = () => {

    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get page from URL query
    const currentPageNumber = Number(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProductData = ProductV1Data.slice(startIndex, endIndex);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        router.push(`/shop?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(ProductV1Data.length / itemsPerPage);

    return (
        <>
            <div className="validtheme-shop-area default-padding">
                <div className="container">
                    <div className="shop-listing-contentes">
                        <div className="row item-flex center">
                            <div className="col-lg-7">
                                <div className="content">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                                            <button className="nav-link active" id="grid-tab-control" data-bs-toggle="tab" data-bs-target="#grid-tab" type="button" role="tab" aria-controls="grid-tab" aria-selected="true">
                                                <i className="fas fa-th-large" />
                                            </button>

                                            <button className="nav-link" id="list-tab-control" data-bs-toggle="tab" data-bs-target="#list-tab" type="button" role="tab" aria-controls="list-tab" aria-selected="false">
                                                <i className="fas fa-th-list" />
                                            </button>

                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-5 text-right">
                                <p>
                                    Showing {startIndex + 1}–{Math.min(endIndex, ProductV1Data.length)} of {ProductV1Data.length} results
                                </p>
                                <select name="cars" id="cars">
                                    <option value="volvo">Short by latest</option>
                                    <option value="saab">Short by Recent</option>
                                    <option value="mercedes">Short by Popular</option>
                                    <option value="audi">Short by Relevant</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content tab-content-info text-center" id="shop-tabContent">
                                <div className="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                                    <ul className="vt-products columns-4">
                                        {currentProductData.map(product =>
                                            <SingleProductCategoryV2 product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div>

                                <div className="tab-pane fade" id="list-tab" role="tabpanel" aria-labelledby="list-tab-control">
                                    <ul className="vt-products colums-2">
                                        {currentProductData.map(product =>
                                            <SingleProductList product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* Pagination */}
                            <nav className="woocommerce-pagination">
                                <Pagination
                                    previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-left'></i>}
                                    nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-right'></i>}
                                    breakLabel={'...'}
                                    pageCount={totalPages}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={' page-numbers text-center'}
                                    activeClassName={'current'}
                                    pageClassName={''}
                                    pageLinkClassName={'page-numbers'}
                                    previousLinkClassName={'page-numbers'}
                                    nextLinkClassName={'page-numbers'}
                                />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPageContent;