import Image from "next/image";
import Link from "next/link";

interface DataType {
    activeClass?: string;
    thumb?: string;
    title?: string;
    description?: string;
    buttonText?: string;
}

const HistoryInfo = ({ history }: { history: DataType }) => {
    const { activeClass, thumb, title, description, buttonText } = history

    return (
        <>
            <div className={`carousel-item ${activeClass ? activeClass : ""}`}>
                <div className="row align-center">
                    <div className="col-lg-5">
                        <Image src={`/assets/img/thumb/${thumb}`} alt="Image Not Found" width={600} height={600} />
                    </div>
                    <div className="col-lg-7 pl-70 pl-md-15 pl-xs-15">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="button">
                            <Link className="animated-btn" href="/about-us">
                                <i className="fas fa-angle-right" /> {buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoryInfo;