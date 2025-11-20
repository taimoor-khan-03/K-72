"use client";
import { useEffect, useState } from "react";
import Animation from "./Animation";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarScreen from "./NavbarScreen";
import Footer from "./Footer";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const Pathname = usePathname();
    const [isAnimation, setIsAnimation] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isFooter, setIsFooter] = useState(false);

    useEffect(() => {
        setIsAnimation(true);

        const timeout = setTimeout(() => {
            setIsAnimation(false);
        }, 1500);

        {Pathname === '/project' || Pathname === '/agence' ? setIsFooter(true) : setIsFooter(false)}

        return () => clearTimeout(timeout);
    }, [Pathname]);

    const Color = Pathname === "/project" ? "bg-white" : undefined;
    const navbarTheme = Pathname === "/" || Pathname === "/contact"  ? "white" : Pathname === "/project" || Pathname === "/agence" || Pathname === "/blog" ? 'black' : 'white' ; 

    return (
        <>
            {isAnimation && (
                <div className="fixed inset-0 z-100">
                    <Animation />
                </div>
            )}
            <div
                className={
                    isAnimation ? "opacity-0" : "opacity-100 duration-500"
                }
            >
                {showMenu && <NavbarScreen  ShowMenu={showMenu} setShowMenu={setShowMenu}/> }
                { !showMenu && <Navbar ShowMenu= { setShowMenu } TextColor={navbarTheme} bgColor={Color}/>}
                {children}
                {isFooter && <Footer />}
            </div>
        </>
    );
};

export default PageTransition;
