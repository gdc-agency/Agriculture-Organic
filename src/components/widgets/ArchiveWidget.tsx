import Link from 'next/link';
import ArchiveWidgetData from "@/assets/jsonData/widgets/ArchiveWidgetData.json";
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ArchiveWidget = () => {
    return (
        <>
            <div className="sidebar-item archives">
                <h4 className="title">Archives</h4>
                <div className="sidebar-info">
                    <ul>
                        {ArchiveWidgetData.map(data =>
                            <li key={data.id}><Link href="#" onClick={handleSmoothScroll}>{data.month}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ArchiveWidget;