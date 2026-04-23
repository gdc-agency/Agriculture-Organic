import FooterV1 from "../footer/FooterV1";
import HeaderTopV2 from "../header/HeaderTopV2";
import HeaderV3 from "../header/HeaderV3";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV3 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderTopV2 />
            <HeaderV3 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV3;