import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex-grow bg-gray-900 w-max-screen min-h-screen relative">
            <Header />
            {children}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center py-8">
                <img src="/logo.png" alt="Keyone cinema logo" className="w-20 h-20 self-center" />
            </div>
        </div>

    );
};

export default Layout;
