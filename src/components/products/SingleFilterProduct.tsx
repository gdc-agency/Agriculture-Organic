import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { toast } from "react-toastify";
import { RootState } from "@/store/store";

interface DataType {
    id?: number;
    title?: string;
    thumb?: string;
    tags: string[];
    price?: string;
    oldPrice?: string | null;
    onSale?: boolean;
    category?: string
}

interface ProductProps {
    product: DataType;
    sectionClass?: string;
}

const SingleFilterProduct = ({ product, sectionClass }: ProductProps) => {
    const { id, title, thumb, tags, price, oldPrice, onSale, category } = product;

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = () => {
        const alreadyInCart = cartItems.some((item) => item.id === product.id);

        if (alreadyInCart) {
            toast.warning("Product already in cart");
        } else {
            dispatch(
                addToCart({
                    id: product.id!,
                    title: product.title!,
                    price: parseFloat(product.price!.replace("$", "")),
                    thumb: product.thumb!,
                    quantity: 1,
                })
            );
            toast.success("Product added successfully");
        }
    };

    return (
        <div className={`product grid-item ${sectionClass ? sectionClass : ""} ${category}`}>
            <div className="product-contents">
                <div className="product-image">
                    {onSale && <span className="onsale">Sale!</span>}
                    <Link href={`/shop-single/${id}`}>
                        <Image src={`/assets/img/products/${thumb}`} alt="Product" width={450} height={450} />
                    </Link>
                    <div className="shop-action">
                        <ul>
                            <li className="cart">
                                <Link href="#" scroll={false} onClick={handleAddToCart}><span>Add to cart</span></Link>
                            </li>
                            <li className="wishlist">
                                <Link href="#" scroll={false}><span>Add to wishlist</span></Link>
                            </li>
                            <li className="quick-view">
                                <Link href="#" scroll={false}><span>Quick view</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-caption">
                    <div className="product-tags">
                        {tags.map((tag, idx) => (
                            <Link href="#" scroll={false} key={idx}>{tag}</Link>
                        ))}
                    </div>
                    <h4 className="product-title">
                        <Link href={`/shop-single/${id}`}>{title}</Link>
                    </h4>
                    <div className="price">
                        {oldPrice && <span><del>{oldPrice}</del></span>}
                        <span>{price}</span>
                    </div>
                    <Link href="#" className="cart-btn" scroll={false} onClick={handleAddToCart}>
                        <i className="fas fa-shopping-bag" /> Add to cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFilterProduct;
