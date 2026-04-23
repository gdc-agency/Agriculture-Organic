import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import RegisterContent from "@/components/register/RegisterContent";

export const metadata = {
    title: "Agrica - Register"
};

const RegisterPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Register Page" breadCrumb="register" />
                <RegisterContent />
            </LayoutV1>
        </>
    );
};

export default RegisterPage;