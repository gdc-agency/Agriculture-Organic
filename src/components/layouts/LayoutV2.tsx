import FooterV1 from "../footer/FooterV1";
import HeaderV2 from "../header/HeaderV2";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV2 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV2 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV2;