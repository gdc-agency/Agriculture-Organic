import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Blog Standard"
};

const BlogStandardPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Standard" breadCrumb="blog-standard" />
                <BlogStandardContent />
            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;