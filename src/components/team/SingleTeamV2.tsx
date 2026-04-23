import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import Link from "next/link";

interface DataType {
    id?: number;
    name?: string;
    title?: string;
    thumb?: string;
}

const SingleTeamV2 = ({ team }: { team: DataType }) => {
    const { id, name, title, thumb } = team;

    return (
        <>
            <div className="farmer-style-one-item">
                <div className="thumb">
                    <Image
                        src={`/assets/img/farmers/${thumb}`}
                        alt="Image Not Found"
                        width={800}
                        height={800}
                        className="h-auto"
                    />
                    <div className="social">
                        <i className="fas fa-share-alt" />
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <span>{title}</span>
                    <h4>
                        <Link href={`/farmer-details/${id}`}>{name}</Link>
                    </h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV2;