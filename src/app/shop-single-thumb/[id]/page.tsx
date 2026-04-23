import ProductV1Data from "@/assets/jsonData/products/ProductV1Data.json"
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ShopSingleThumbContent from "@/components/shop/ShopSingleThumbContent";

export const metadata = {
    title: "Agrica - Shop Single Thumb"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ShopSingleThumbPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = ProductV1Data.find(product => product.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Grilled Flank Steak" breadCrumb="shop-single-thumb" />
                {data && <ShopSingleThumbContent productInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ShopSingleThumbPage;