import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import CartPageContent from "@/components/cart/CartPageContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Cart"
};

const CartPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Cart Page" breadCrumb="cart" />
                <CartPageContent />
            </LayoutV1>
        </>
    );
};

export default CartPage;