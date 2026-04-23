import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ContactV2 from "@/components/contact/ContactV2";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Agrica - Contact"
};

const ContactPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Contact Us" breadCrumb="Contact" />
                <ContactV2 />
            </LayoutV1>
        </>
    );
};

export default ContactPage;