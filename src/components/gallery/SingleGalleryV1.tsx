import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    category?: string;
    title?: string;
}

const SingleGalleryV1 = ({ gallery }: { gallery: DataType }) => {
    const { id, thumb, title, category } = gallery

    return (
        <>
            <div className="gallery-style-one">
                <Image src={`/assets/img/projects/${thumb}`} width={800} height={900} className='w-auto' alt="Image not Found" />
                <div className="overlay">
                    <p>{category}</p>
                    <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleGalleryV1;