import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import CheckoutContent from "@/components/cart/CheckoutContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Checkout"
};

const CheckoutPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Checkout Page" breadCrumb="checkout" />
                <CheckoutContent />
            </LayoutV1>
        </>
    );
};

export default CheckoutPage;