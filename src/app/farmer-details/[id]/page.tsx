import TeamV2Data from '@/assets/jsonData/team/TeamV2Data.json';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import FarmerDetailsContent from '@/components/team/FarmerDetailsContent';

export const metadata = {
    title: "Agrica - Farmer Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const FarmerDetails = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV2Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb title='Team Details' breadCrumb='farmer-details' />
                {data && <FarmerDetailsContent teamInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default FarmerDetails;