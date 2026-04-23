import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceV2Data from '@/assets/jsonData/services/ServiceV2Data.json';

export const metadata = {
    title: "Agrica - Service Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = ServiceV2Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Service Details" breadCrumb="service-details" />
                {data && <ServiceDetailsContent serviceInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;