import BannerV4 from "@/components/banner/BannerV4";
import BlogV1 from "@/components/blog/BlogV1";
import FaqV2 from "@/components/faq/FaqV2";
import History from "@/components/history/History";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProductType from "@/components/products/ProductType";
import TeamV1 from "@/components/team/TeamV1";
import VideoV1 from "@/components/videos/VideoV1";
import WhyChooseV4 from "@/components/whyChoose/WhyChooseV4";

export const metadata = {
    title: "Agrica - Home 4"
};

const Home4 = () => {
    return (
        <>
            <LayoutV1>
                <BannerV4 />
                <WhyChooseV4 />
                <History />
                <ProductType />
                <VideoV1 />
                <TeamV1 />
                <FaqV2 />
                <BlogV1 />
            </LayoutV1>
        </>
    );
};

export default Home4;