import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Agrica - Blog Three Column"
};

const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Three Column" breadCrumb="blog-3-column" />
                <Blog3ColumnContent />
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnPage;