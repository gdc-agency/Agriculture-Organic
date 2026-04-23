import BlogSingleContent from "@/components/blog/BlogSingleContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Blog Single"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSinglePage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogV1Data.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Single" breadCrumb="blog-single" />
                {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogV1Data.length} />}
            </LayoutV1>
        </>
    );
};

export default BlogSinglePage;