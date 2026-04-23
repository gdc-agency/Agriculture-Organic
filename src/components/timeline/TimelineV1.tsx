import TimelineV1Data from "@/assets/jsonData/timeline/TimelineV1Data.json";

interface DataType {
    sectionClass?: string
}

const TimelineV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`timeline-area ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: 'url(/assets/img/shape/21.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading">
                                <h2 className="title">Farming have been <br /> since 1866</h2>
                                <div className="row">
                                    <div className="col-xl-10 offset-xl-2">
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque laborum ad asperiores dolorem. Adipisci error eaque dolorem, itaque aliquam animi fuga dolor ipsam! Velit ratione hic corporis veritatis odit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="timeline-items">
                                {TimelineV1Data.map(item =>
                                    <div className="timeline-item" key={item.id}>
                                        <h2>{item.year}</h2>
                                        <h4>{item.title}</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelineV1;