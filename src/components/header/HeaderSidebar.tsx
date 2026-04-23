import Link from "next/link";
import Image from "next/image";
import HeaderNewsLetter from "../form/HeaderNewsLetter";
import SocialShareV2 from "../social/SocialShareV2";

interface SidebarInfoProps {
    isInfoOpen?: boolean;
    closeInfoBar?: () => void;
    addClasses?: () => void;
    openInfoBar?: () => void;
}

const HeaderSidebar = ({ isInfoOpen, closeInfoBar, openInfoBar }: SidebarInfoProps) => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link href="#" scroll={false} onClick={openInfoBar}>
                                <span className="bar-1" />
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`side ${isInfoOpen ? "on" : ""}`}>
                    <Link href="#" className="close-side" scroll={false} onClick={closeInfoBar}>
                        <i className="fas fa-times" />
                    </Link>
                    <div className="widget">
                        <div className="logo">
                            <Image src="/assets/img/logo-light.png" alt="Logo" width={790} height={240} />
                        </div>
                    </div>
                    <div className="widget">
                        <p>
                            Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.
                        </p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p>
                                        <strong>California, TX 70240</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p>
                                        <strong>support@validtheme.com</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p>
                                        <strong>+44-20-7328-4499</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <HeaderNewsLetter />
                    </div>
                    <div className="widget social">
                        <ul className="link">
                            <SocialShareV2 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;