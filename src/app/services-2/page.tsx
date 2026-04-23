import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqV1 from "@/components/faq/FaqV1";
import FeatureV3 from "@/components/feature/FeatureV3";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import ServiceV2 from "@/components/services/ServiceV2";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "Agrica - Services-2"
};

const Service2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Services" breadCrumb="Services-2" />
                <FeatureV3 sectionClass="default-padding-top bg-gray" />
                <ServiceV2 />
                <WhyChooseV1 sectionClass="default-padding" />
                <TestimonialV2 />
                <FaqV1 />
                <Partner />
            </LayoutV1>
        </>
    );
};

export default Service2Page;