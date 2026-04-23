"use client"
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import FooterRecentPost from "./FooterRecentPost";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV1 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/8.png)' }}>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 item">
                                <div className="footer-item about">
                                    <Link href="/">
                                        <Image className="logo w-auto" src="/assets/img/logo-light.png" alt="Logo" width={790} height={240} />
                                    </Link>
                                    <p>
                                        Happen active county. Winding morning ambition shyness evident to poor. Because elderly new to the point to main success.
                                    </p>
                                    <form onSubmit={handleForm}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete="off" required />
                                        <button type="submit"> Go</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 item">
                                <div className="footer-item link">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/team">Meet Our Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-single-with-sidebar/1">News & Media</Link>
                                        </li>
                                        <li>
                                            <Link href="/services">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/team-details/1">Volunteers</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item recent-post">
                                    <h4 className="widget-title">Recent Posts</h4>
                                    <ul>
                                        {BlogV1Data.slice(1, 3).map(blog =>
                                            <FooterRecentPost blog={blog} key={blog.id} />
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-home" />
                                            </div>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                5919 Trussville Crossings Pkwy, Birmingham
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone" />
                                            </div>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:2151234567">+123 34598768</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://globaldigitalcare.pk" target="_blank">Global Digital Care</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-right-bottom">
                    <Image src="/assets/img/shape/7.png" alt="Image Not Found" width={1000} height={500} />
                </div>
            </footer>
        </>
    );
};

export default FooterV1;