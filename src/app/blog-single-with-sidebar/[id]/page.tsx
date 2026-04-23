import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import LayoutV1 from "@/components/layouts/LayoutV1";
import BlogSingleWithSidebarContent from "@/components/blog/BlogSingleWithSidebarContent";

export const metadata = {
    title: "Agrica - Blog Single With Sidebar"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebarPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogV1Data.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Single Sidebar" breadCrumb="blog-single-sidebar" />
                {data && <BlogSingleWithSidebarContent blogInfo={data} totalBlogs={BlogV1Data.length} />}
            </LayoutV1>
        </>
    );
};

export default BlogSingleWithSidebarPage;