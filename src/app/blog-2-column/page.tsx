import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Blog Two Column"
};

const Blog2ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Two Column" breadCrumb="blog-2-column" />
                <Blog2ColumnContent />
            </LayoutV1>
        </>
    );
};

export default Blog2ColumnPage;