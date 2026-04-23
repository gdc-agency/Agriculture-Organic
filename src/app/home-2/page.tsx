import BannerV2 from "@/components/banner/BannerV2";
import BlogV1 from "@/components/blog/BlogV1";
import CallToAction from "@/components/cta/CallToAction";
import FaqV1 from "@/components/faq/FaqV1";
import FeatureV1 from "@/components/feature/FeatureV1";
import GalleryV2 from "@/components/gallery/GalleryV2";
import LayoutV2 from "@/components/layouts/LayoutV2";
import ServiceV2 from "@/components/services/ServiceV2";
import TeamV2 from "@/components/team/TeamV2";
import TimelineV1 from "@/components/timeline/TimelineV1";
import WhyChooseV2 from "@/components/whyChoose/WhyChooseV2";

export const metadata = {
    title: "Agrica - Home 2"
};

const Home2 = () => {
    return (
        <>
            <LayoutV2>
                <BannerV2 />
                <FeatureV1 />
                <WhyChooseV2 />
                <ServiceV2 />
                <TimelineV1 sectionClass="default-padding" />
                <TeamV2 />
                <FaqV1 sectionClass="bg-gray" />
                <GalleryV2 />
                <CallToAction />
                <BlogV1 />
            </LayoutV2>
        </>
    );
};

export default Home2;