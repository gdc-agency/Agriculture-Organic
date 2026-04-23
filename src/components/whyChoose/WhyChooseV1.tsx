import Image from "next/image";
import AchievementListData from "@/assets/jsonData/achievement/AchievementListData.json"
import ProgressV1Data from "@/assets/jsonData/progress/ProgressV1Data.json"
import SingleProgressV1 from "../progress/SingleProgressV1";

interface DataType {
    sectionClass?: string
}

const WhyChooseV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`choose-us-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="choose-us-thumb">
                                <Image src="/assets/img/illustration/9.png" alt="Image Not Found" width={575} height={360} />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="achivement-items">
                                <ul className="list-details">
                                    {AchievementListData.map(list =>
                                        <li key={list.id}>
                                            <h4>{list.title}</h4>
                                            <p>
                                                {list.description}
                                            </p>
                                        </li>
                                    )}
                                </ul>
                                <div className="achivement-content">
                                    {ProgressV1Data.map(progress =>
                                        <SingleProgressV1 progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;