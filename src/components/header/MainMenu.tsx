import Link from 'next/link';

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarPlacement?: string;
}

const MainMenu = ({ toggleSubMenu, navbarPlacement }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} navbar-right`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle active" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/">Home Agriculture</Link></li>
                        <li><Link href="/home-2">Home Farming</Link></li>
                        <li><Link href="/home-3">Agriculture Shop</Link></li>
                        <li><Link href="/home-4">Dairy Farm</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/farmers">Team</Link></li>
                        <li><Link href="/farmer-details/1">Team Details</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/register">Register</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Projects</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/project">Project</Link></li>
                        <li><Link href="/project-details/1">Project Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/service-details/1">Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Column</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Column</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Shop</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/shop">Shop Product</Link></li>
                        <li><Link href="/shop-single/1">Shop Single</Link></li>
                        <li><Link href="/shop-single-thumb/1">Shop Single Version Two</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;