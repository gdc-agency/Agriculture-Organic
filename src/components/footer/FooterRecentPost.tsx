import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    full_date?: string;
    thumb?: string;
}

const FooterRecentPost = ({ blog }: { blog: DataType }) => {
    const { id, title, full_date, thumb } = blog;

    return (
        <>
            <li>
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/thumbs/${thumb}`} alt="Thumb" width={400} height={400} className="h-auto" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{full_date}</span>
                    </div>
                    <h5>
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            {title}
                        </Link>
                    </h5>
                </div>
            </li>
        </>
    );
};

export default FooterRecentPost;