import BlogWithSidebarContent from "@/components/blog/BlogWithSidebarContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Blog With Sidebar"
};

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title='Blog Grid' breadCrumb='blog-2-column' />
                <BlogWithSidebarContent />
            </LayoutV1>
        </>
    );
};

export default BlogWithSidebarPage;