"use client";
import ShopSingleTab from "./ShopSingleTab";
import Link from 'next/link';
import RatingsStar from '../utilities/RatingsStar';
import ProductCarousel from "../products/ProductCarousel";
import RelatedProducts from "../products/RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { toast } from "react-toastify";
import { RootState } from "@/store/store";
import { useState } from "react";

interface DataType {
    id: number;
    title?: string;
    thumb?: string;
    tags: string[];
    price?: string;
    oldPrice?: null | string;
    onSale?: boolean;
    reviews?: number;
    ratings: number;
}

const ShopSingleContent = ({ productInfo }: { productInfo: DataType }) => {
    const { title, reviews, ratings, oldPrice, price, tags } = productInfo;

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [quantity, setQuantity] = useState<number>(1); // default quantity

    const handleAddToCart = () => {
        if (quantity < 1) {
            toast.warning("Please enter a valid quantity");
            return;
        }

        const alreadyInCart = cartItems.some((item) => item.id === productInfo.id);

        if (alreadyInCart) {
            toast.warning("Product already in cart");
        } else {
            dispatch(
                addToCart({
                    id: productInfo.id!,
                    title: productInfo.title!,
                    price: parseFloat(productInfo.price!.replace("$", "")),
                    thumb: productInfo.thumb!,
                    quantity,
                })
            );
            toast.success("Product added successfully");
        }
    };

    return (
        <div className="validtheme-shop-single-area default-padding">
            <div className="container">
                <div className="product-details">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-thumb">
                                <div id="timeline-carousel" className="carousel slide" data-bs-ride="carousel">
                                    <ProductCarousel />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-product-contents">
                                <div className="summary-top-box">
                                    <div className="product-tags">
                                        {tags && tags.map((data, index) =>
                                            <Link key={index} href="#" scroll={false}>
                                                {data}
                                            </Link>
                                        )}
                                    </div>
                                    <div className="review-count">
                                        <RatingsStar ratings={ratings} />
                                        <span>({reviews} Review)</span>
                                    </div>
                                </div>
                                <h2 className="product-title">{title}</h2>
                                <div className="price">
                                    <span className={`${oldPrice === null ? 'd-none' : ''} me-2`}>
                                        <del>{oldPrice}</del>
                                    </span>
                                    <span>{price}</span>
                                </div>
                                <div className="product-stock validthemes-in-stock">
                                    <span>In Stock</span>
                                </div>
                                <p>
                                    The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display...
                                </p>
                                <div className="product-purchase-list">
                                    <input
                                        type="number"
                                        id="quantity"
                                        step={1}
                                        name="quantity"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        placeholder='1'
                                        className="form-control"
                                    />
                                    <Link
                                        href="#"
                                        scroll={false}
                                        className="btn secondary btn-theme btn-sm animation"
                                        onClick={handleAddToCart}
                                    >
                                        <i className="fas fa-shopping-cart" />
                                        Add to cart
                                    </Link>
                                    <div className="shop-action">
                                        <ul>
                                            <li className="wishlist">
                                                <Link href="#" scroll={false}><span>Add to wishlist</span></Link>
                                            </li>
                                            <li className="compare">
                                                <Link href="#" scroll={false}><span>Compare</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-estimate-delivary">
                                    <i className="fas fa-box-open" />
                                    <strong> 2-day Delivery</strong>
                                    <span>Speedy and reliable parcel delivery!</span>
                                </div>
                                <div className="product-meta">
                                    <span className="sku">
                                        <strong>SKU:</strong> BE45VGRT
                                    </span>
                                    <span className="posted-in">
                                        <strong>Category:</strong>
                                        <Link href="#">Computer</Link> ,
                                        <Link href="#">Speaker</Link>,
                                        <Link href="#">Headphone</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ShopSingleTab />
                <RelatedProducts />
            </div>
        </div>
    );
};

export default ShopSingleContent;
