"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart } from "@/store/slices/cartSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const HeaderCart = () => {

    const [mounted, setMounted] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
        toast.error("Product removed from cart");
    };

    // Render placeholder during SSR to match initial client render
    if (!mounted) {
        return (
            <li className="dropdown">
                <Link href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="far fa-shopping-cart" />
                    <span className="badge">0</span>
                </Link>
                <ul className="dropdown-menu cart-list">
                    <li className="total">
                        <p>Your cart is empty.</p>
                    </li>
                </ul>
            </li>
        );
    }

    return (
        <div className="attr-right">
            <div className="attr-nav">
                <ul>
                    <li className="dropdown">
                        <Link href="#" scroll={false} className="dropdown-toggle" data-toggle="dropdown">
                            <i className="far fa-shopping-cart" />
                            <span className="badge">{totalItems}</span>
                        </Link>

                        <ul className="dropdown-menu cart-list">
                            {cartItems.length > 0 ? (
                                <>
                                    <ul>
                                        {cartItems.map((item) => (
                                            <li key={item.id}>
                                                <div className="thumb">
                                                    <span className="photo">
                                                        <Image src={`/assets/img/products/${item.thumb}`} alt={item.title} width={50} height={50} />
                                                    </span>
                                                    <Link href="#" className="remove-product" onClick={() => handleRemove(item.id)} scroll={false}>
                                                        <i className="fas fa-times" />
                                                    </Link>
                                                </div>
                                                <div className="info">
                                                    <h6>{item.title}</h6>
                                                    <p>{item.quantity}x - <span className="price">${item.price}</span></p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <li className="total">
                                        <span className="pull-right"><strong>Total</strong>: ${totalAmount.toFixed(2)}</span>
                                        <Link href="/cart" className="btn btn-default btn-cart">Cart</Link>
                                        <Link href="/checkout" className="btn btn-default btn-cart">Checkout</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="total">
                                    <p>Your cart is empty.</p>
                                </li>
                            )}
                        </ul>
                    </li>
                    <li className="button"><Link href="/register">Register</Link></li>
                </ul>
            </div>
        </div>
    );
};


export default HeaderCart;