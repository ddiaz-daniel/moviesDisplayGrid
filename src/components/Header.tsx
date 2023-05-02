import Link from "next/link";
import React from "react";
import { SearchOutline } from 'react-ionicons'
import SearchBar from "./SearchBar";


const Header = () => {
    return (
        <header className="bg-gray-900 w-max-screen
        text-white mx-auto sticky top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-4 py-2 w-11/12 ml-auto">
                <div className="flex flex-grow items-center justify-between">
                    <Link href="/">
                        <img src="/thelogo.png" alt="Keyone cinema logo" className="w-60" />
                    </Link>
                    <SearchBar />
                </div>
            </nav>
        </header>
            
    );
};
            
export default Header;
