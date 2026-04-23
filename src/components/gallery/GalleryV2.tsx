"use client";
import GalleryV2Data from '@/assets/jsonData/gallery/GalleryV2Data.json';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryV2 = () => {

    const galleryRef = useRef(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = GalleryV2Data.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages && galleryRef.current) {
            import('isotope-layout').then((Isotope) => {
                const iso = new Isotope.default(galleryRef.current!, {
                    itemSelector: '.gallery-item',
                    layoutMode: 'masonry',
                });

                setTimeout(() => {
                    iso.layout();
                }, 500);

                return () => {
                    iso.destroy();
                };
            });
        }
    }, [loadedImagesCount, totalImages]);

    return (
        <>
            <div className="gallery-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Awesome Gallery</h5>
                                <h2 className="title">Explore Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 gallery-content">
                            <div className="magnific-mix-gallery gallery-masonary">
                                <div id="gallery-masonary" className="gallery-items colums-3" ref={galleryRef}>
                                    {GalleryV2Data.map(data =>
                                        <div className={`gallery-item ${data.activeClass ? data.activeClass : ""}`} key={data.id}>
                                            <div className="gallery-style-one">
                                                <Image
                                                    src={`/assets/img/projects/${data.thumb}`}
                                                    alt="Image not Found"
                                                    width={850}
                                                    height={660}
                                                    className="h-auto"
                                                    onLoad={handleImageLoad}
                                                />
                                                <div className="overlay">
                                                    <p>{data.category}</p>
                                                    <h4><Link href={`/project-details/${data.id}`}>{data.title}</Link></h4>
                                                </div>
                                            </div>
                                        </div>
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

export default GalleryV2;