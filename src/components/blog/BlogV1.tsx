import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import Image from "next/image";
import Link from "next/link";
import SingleBlogV1 from "./SingleBlogV1";

const BlogV1 = () => {
    return (
        <>
            <div className="blog-area home-blog default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Latest News</h5>
                                <h2 className="title">Check out our blog posts </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-xl-6 col-md-12 mb-30">
                            <div className="blog-style-one">
                                <div className="thumb">
                                    <Image src="/assets/img/blog/1.jpg" alt="Image Not Found" className="h-auto" width={900} height={600} />
                                    <div className="overlay text-light">
                                        <h3 className="post-title">
                                            <Link href="/blog-single-with-sidebar/1">Miscovery incommode earnestly commanded if.</Link>
                                        </h3>
                                        <p>
                                            Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p>
                                        <Link href="/blog-single-with-sidebar/1" className="button-regular">
                                            Continue Reading <i className="fas fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {BlogV1Data.slice(1, 3).map(blog =>
                            <div className="col-xl-3 col-md-6 mb-30" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;