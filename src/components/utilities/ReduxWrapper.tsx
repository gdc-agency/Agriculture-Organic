"use client"

import store from "@/store/store";
import { Provider } from "react-redux";

interface LayoutProps {
    children?: React.ReactNode;
}

const ReduxWrapper = ({ children }: LayoutProps) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    );
};

export default ReduxWrapper;