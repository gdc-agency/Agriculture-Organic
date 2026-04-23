import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import SingleTeamList from "./SingleTeamList";
import SkillProgress from "../progress/SkillProgress";

interface DataType {
    name?: string;
    title?: string;
    thumb?: string;
    phone?: string;
    skillProgress: {
        id: number;
        title: string;
        end: number;
    }[];
    memberData: {
        id: number;
        listTitle: string;
        memberInfo: {
            id: number;
            title: string;
            description: string;
        }[];
    }[];
}

const FarmerDetailsContent = ({ teamInfo }: { teamInfo: DataType }) => {
    const { thumb, title, name, phone, memberData, skillProgress } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row align-center">
                            <div className="col-lg-5 left-info mb-md-50 mb-xs-40">
                                <div className="thumb">
                                    <Image src={`/assets/img/farmers/${[thumb]}`} alt="Thumb" width={800} height={800} />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info pl-80 pl-md-15 pl-xs-15">
                                <h2>{[name]}</h2>
                                <span>{[title]}</span>
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touch points for offshoring house in never fruit up. Pasture imagine my garrets..
                                </p>
                                <ul>
                                    <li>
                                        <strong>Email:</strong>
                                        <a href={`mailto:${[name]}@digital.com`}>{`${[name]}@digital.com`}</a>
                                    </li>
                                    <li>
                                        <strong>Phone:</strong>
                                        <a href={`tel:123-456-7890`}>{[phone]}</a>
                                    </li>
                                </ul>
                                <div className="social">
                                    <a className="btn circle btn-sm btn-dark animation" href="contact-us.html">Contact Me</a>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt" />
                                        <ul>
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Bottom */}
            <div className="bottom-info bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="team-single-list">
                                {memberData.map(list =>
                                    <SingleTeamList list={list} key={list.id} />
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 pl-md-15 pl-xs-15">
                            <div className="skill-items">
                                <h3>Personal Skills</h3>
                                {skillProgress.map(skill =>
                                    <SkillProgress skill={skill} key={skill.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FarmerDetailsContent;