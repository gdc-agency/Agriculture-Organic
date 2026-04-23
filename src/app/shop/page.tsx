import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ShopPageContent from "@/components/shop/ShopPageContent";

export const metadata = {
    title: "Agrica - Shop"
};

const ShopPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Products" breadCrumb="Shop" />
                <ShopPageContent />
            </LayoutV1>
        </>
    );
};

export default ShopPage;