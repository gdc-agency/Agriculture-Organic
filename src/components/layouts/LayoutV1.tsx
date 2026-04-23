import FooterV1 from "../footer/FooterV1";
import HeaderTopV1 from "../header/HeaderTopV1";
import HeaderV1 from "../header/HeaderV1";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderTopV1 />
            <HeaderV1 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV1;