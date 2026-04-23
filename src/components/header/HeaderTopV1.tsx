const HeaderTopV1 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8">
                            <ul className="item-flex">
                                <li>
                                    <i className="fas fa-clock" /> Opening Hours : Sunday- Friday, 08:00 am - 05:00pm
                                </li>
                                <li>
                                    <a href="tel:+4733378901"><i className="fas fa-phone-alt" /> +4733378901</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.x.com/" target='_blank' rel="noreferrer">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target='_blank' rel="noreferrer">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV1;