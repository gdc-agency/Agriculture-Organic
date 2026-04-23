import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import GalleryV2 from '@/components/gallery/GalleryV2';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Agrica - Project"
};

const ProjectPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title='Recent Projects' breadCrumb='Project' />
                <GalleryV2 />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;