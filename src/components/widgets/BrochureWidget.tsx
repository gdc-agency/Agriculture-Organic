import Link from "next/link";


const BrochureWidget = () => {
    return (
        <>
            <div className="single-widget quick-contact-widget text-light" style={{ backgroundImage: 'url(/assets/img/thumb/7.jpg)' }}>
                <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                        Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                    </p>
                    <h2><a href="tel:+(012) 6679545">+(012) 6679545</a></h2>
                    <h4><a href="mailto:info@agrika.com">info@agrika.com</a></h4>
                    <Link className="btn mt-30 circle btn-theme animation btn-md" href="/contact">Contact Us</Link>
                </div>
            </div>
        </>
    );
};

export default BrochureWidget;