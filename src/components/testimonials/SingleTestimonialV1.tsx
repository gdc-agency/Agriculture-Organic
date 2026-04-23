import Image from "next/image";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    thumb?: string;
    quoteImage?: string;
    testimonial?: string;
    name?: string;
    designation?: string;
    ratings: number;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { thumb, quoteImage, testimonial: text, name, designation, ratings } = testimonial;

    return (
        <>
            <div className="testimonial-style-one">
                <div className="thumb">
                    <Image src={`/assets/img/farmers/${thumb}`} alt="Image Not Found" className="w-auto" width={800} height={800} />
                </div>
                <div className="info">
                    <Image src={`/assets/img/shape/${quoteImage}`} alt="Image Not Found" className="w-auto" width={400} height={400} />
                    <p>“{text}”</p>
                    <div className="provider">
                        <div className="content">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                        <div className="rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;