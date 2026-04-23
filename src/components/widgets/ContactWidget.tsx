import Link from 'next/link';

const ContactWidget = () => {
    return (
        <>
            <div className="single-widget quick-contact-widget text-light"
                style={{ backgroundImage: 'url(/assets/img/services/2.jpg)' }}>
                <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                        Speak with a human to filling out a form? call corporate office and we will connect.
                    </p>
                    <h2><a href="tel:+(012) 6679545">+(012) 6679545</a></h2>
                    <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                    <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact">Contact Us</Link>
                </div>
            </div>
        </>
    );
};

export default ContactWidget;