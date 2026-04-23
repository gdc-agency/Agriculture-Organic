import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import ProductCategory from "@/components/products/ProductCategory";
import ServiceV1 from "@/components/services/ServiceV1";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "Agrica - Services"
};

const ServicesPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="Services" />
                <ServiceV1 />
                <ProductCategory />
                <TestimonialV2 />
                <WhyChooseV1 sectionClass="default-padding" />
                <Partner />
            </LayoutV1>
        </>
    );
};

export default ServicesPage;