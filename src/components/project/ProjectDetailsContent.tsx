import Image from "next/image";

interface DataType {
    thumbFull?: string;
    title?: string;
}

const ProjectDetailsContent = ({ projectInfo }: { projectInfo: DataType }) => {
    const { thumbFull, title } = projectInfo

    return (
        <>
            <div className="project-details-style-one default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-top">
                                <Image src={`/assets/img/projects/${thumbFull}`} alt="Image Not Found" width={1920} height={865} />
                            </div>
                        </div>
                    </div>
                    <div className="project-detail-content">
                        <div className="row">
                            <div className="col-lg-4">
                                <ul className="project-info bg-theme-secondary text-light">
                                    <li>
                                        <h4>Client</h4> ValidThemes
                                    </li>
                                    <li>
                                        <h4>Services</h4> Organic Products
                                    </li>
                                    <li>
                                        <h4>Duration</h4> 8 Month
                                    </li>
                                    <li>
                                        <h4>Category</h4>  Agriculture , Eco
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8 pl-80 pl-md-15 pl-xs-15 mt-md-50 mt-xs-30">
                                <div className="item-grid-container">
                                    <div className="single-grid">
                                        <div className="item-grid-colum">
                                            <div className="left-info">
                                                <h3>{title}</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>
                                                    Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                                </p>
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-grid">
                                        <div className="item-grid-colum">
                                            <div className="left-info">
                                                <h3>Harvest Innovations</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>
                                                    Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                                </p>
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                                </p>
                                                <h4>Continue indulged speaking the was out horrible for domestic.</h4>
                                                <ul className="list-disc">
                                                    <li>Modern Agriculture Equipment</li>
                                                    <li>Awesome Harvest of Wheat</li>
                                                    <li>Fresh Fruits &amp; Vegetables</li>
                                                </ul>
                                                <Image src="/assets/img/projects/8.jpg" alt="Image Not Found" width={1500} height={750} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-grid">
                                        <div className="item-grid-colum">
                                            <div className="left-info">
                                                <h3>Livestock Breeding</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>
                                                    Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                                </p>
                                                <p>
                                                    New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-static-gallery">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <Image src="/assets/img/projects/9.jpg" alt="Thumb" width={800} height={600} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <Image src="/assets/img/projects/10.jpg" alt="Thumb" width={800} height={600} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;