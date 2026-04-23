import BannerV3 from "@/components/banner/BannerV3";
import BlogV1 from "@/components/blog/BlogV1";
import FeatureV2 from "@/components/feature/FeatureV2";
import LayoutV3 from "@/components/layouts/LayoutV3";
import ProductCategoryV2 from "@/components/products/ProductCategoryV2";
import ProductFilter from "@/components/products/ProductFilter";
import ProductSpeciality from "@/components/products/ProductSpeciality";
import ProductV1 from "@/components/products/ProductV1";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";
import WhyChooseV3 from "@/components/whyChoose/WhyChooseV3";

export const metadata = {
    title: "Agrica - Home 3"
};

const Home3 = () => {
    return (
        <>
            <LayoutV3>
                <BannerV3 />
                <FeatureV2 sectionClass="default-padding" />
                <ProductSpeciality />
                <ProductCategoryV2 />
                <ProductV1 />
                <WhyChooseV3 />
                <ProductFilter />
                <TestimonialV2 />
                <BlogV1 />
            </LayoutV3>
        </>
    );
};

export default Home3;