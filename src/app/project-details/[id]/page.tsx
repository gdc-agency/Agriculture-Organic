import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import GalleryV2Data from '@/assets/jsonData/gallery/GalleryV2Data.json';

export const metadata = {
    title: "Agrica - Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = GalleryV2Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Organic Healthy Food" breadCrumb="Project-Details" />
                {data && <ProjectDetailsContent projectInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;