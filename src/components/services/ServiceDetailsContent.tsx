import Image from "next/image";
import ServiceWidget from "../widgets/ServiceWidget";
import BrochureWidget from "../widgets/BrochureWidget";

interface DataType {
    thumbFull?: string;
    title?: string;
}

const ServiceDetailsContent = ({ serviceInfo }: { serviceInfo: DataType }) => {
    const { thumbFull, title } = serviceInfo

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 pl-45 pl-md-15 pl-xs-15 services-single-content order-lg-last">
                                <div className="thumb">
                                    <Image src={`/assets/img/services/${thumbFull}`} alt="Thumb" width={2000} height={1145} />
                                </div>
                                <h2>{title}</h2>
                                <p>
                                    We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.
                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-12 col-md-6">
                                            <div className="content">
                                                <h3>Services offered</h3>
                                                <ul className="feature-list-item">
                                                    <li>Agriculture Consulting</li>
                                                    <li>Custom farming rules</li>
                                                    <li>Real-time rate shopping</li>
                                                    <li>100 freight shipments / month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-lg-12 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challange</h3>
                                                <p>
                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <blockquote>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.</blockquote>
                                <h2>What we do?</h2>
                                <p>
                                    Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.
                                </p>
                                <div className="common-faq mt-40">
                                    <h2 className="mb-25">Here to help you</h2>

                                    {/* Accordion */}
                                    <div className="accordion accordion-style-two-items" id="faqAccordion">
                                        <div className="accordion-style-two">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What do you add to the soil before you plant?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-style-two">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Do you use herbicides?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-style-two">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Where does the water come on your crops?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-md-100 mt-xs-50 services-sidebar">
                                <ServiceWidget />
                                <BrochureWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;