"use client";
import Image from 'next/image';
import Link from 'next/link';

interface Blog {
    id?: number;
    thumb?: string;
    title: string;
    full_date?: string;
}

interface SingleRecentPostProps {
    blog: Blog;
}

const SingleRecentPost: React.FC<SingleRecentPostProps> = ({ blog }) => {
    const { id, thumb, title, full_date } = blog;

    const truncateString = (str: string): string => {
        if (str.length <= 47) {
            return str;
        }
        return `${str.slice(0, 47)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <li>
            <div className="thumb">
                <Link href={`/blog-single-with-sidebar/${id}`}>
                    <Image src={`/assets/img/blog/${thumb}`} width={500} height={500} alt="Thumb" />
                </Link>
            </div>
            <div className="info">
                <div className="meta-title">
                    <span className="post-date">{full_date}</span>
                </div>
                <Link href={`/blog-single-with-sidebar/${id}`}>{truncatedTitle}</Link>
            </div>
        </li>
    );
};

export default SingleRecentPost;