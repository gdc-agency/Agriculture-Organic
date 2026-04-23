"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity } from "@/store/slices/cartSlice";
import { toast } from "react-toastify";

const CartPageContent = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
        toast.error("Product removed from cart");
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <div className="cart-page default-padding overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shop-cart-info">
                            <form className="woocommerce-cart-form">
                                <table className="shop-cart-table">
                                    <thead>
                                        <tr>
                                            <th>Remove</th>
                                            <th>Thumbnail</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id} className="woocommerce-cart-form">
                                                <td className="product-remove">
                                                    <Link
                                                        href="#"
                                                        scroll={false}
                                                        className="remove"
                                                        onClick={() => handleRemove(item.id)}
                                                    >
                                                        <i className="fas fa-times" />
                                                    </Link>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <Link href="#" scroll={false}>
                                                        <Image
                                                            src={`/assets/img/products/${item.thumb}`}
                                                            alt={item.title}
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link href="#" scroll={false}>
                                                        {item.title}
                                                    </Link>
                                                </td>
                                                <td className="product-price">${item.price}</td>
                                                <td className="product-quantity">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        title="Qty"
                                                        min={1}
                                                        step={1}
                                                        onChange={(e) =>
                                                            handleQuantityChange(
                                                                item.id,
                                                                Number(e.target.value)
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="product-subtotal">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={6} className="actions">
                                                <div className="coupon">
                                                    <input type="text" placeholder="Coupon code" />
                                                    <button type="submit">Apply coupon</button>
                                                </div>
                                                <Link href="/checkout">Checkout</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        <div className="shop-cart-totals mt-50">
                            <h2>Cart totals</h2>
                            <div className="table-responsive table-bordered">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Subtotal</th>
                                            <th scope="col">${subtotal.toFixed(2)}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Shipping</th>
                                            <td>
                                                <p>Free shipping</p>
                                                <p>Shipping to Australia.</p>
                                                <Link href="#" scroll={false}>Change address</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total</th>
                                            <td>${subtotal.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPageContent;