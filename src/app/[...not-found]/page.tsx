import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import NotFoundContent from "@/components/notFound/NotFoundContent";

const NotFoundPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb />
                <NotFoundContent />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;