import AboutV1 from "@/components/about/AboutV1";
import BannerV1 from "@/components/banner/BannerV1";
import BenefitsV1 from "@/components/benefits/BenefitsV1";
import BlogV1 from "@/components/blog/BlogV1";
import ContactV1 from "@/components/contact/ContactV1";
import GalleryV1 from "@/components/gallery/GalleryV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProductCategory from "@/components/products/ProductCategory";
import ServiceV1 from "@/components/services/ServiceV1";
import TestimonialV1 from "@/components/testimonials/TestimonialV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "Agrica - Organic Farm Agriculture React NextJs Template"
};

const Home1 = () => {
    return (
        <>
            <LayoutV1>
                <BannerV1 />
                <AboutV1 />
                <ServiceV1 hasTitle={true} />
                <BenefitsV1 />
                <ProductCategory />
                <TestimonialV1 />
                <GalleryV1 />
                <WhyChooseV1 sectionClass="default-padding-bottom" />
                <ContactV1 />
                <BlogV1 />
            </LayoutV1>
        </>
    );
};

export default Home1;