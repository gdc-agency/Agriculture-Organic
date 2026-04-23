import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import LoginContent from '@/components/register/LoginContent';

export const metadata = {
    title: "Agrica - Login"
};

const LoginPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title='Login Page' breadCrumb='login' />
                <LoginContent />
            </LayoutV1>
        </>
    );
};

export default LoginPage;