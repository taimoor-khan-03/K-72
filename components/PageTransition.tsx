"use client";
import { useEffect, useState } from "react";
import Animation from "./Animation";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarScreen from "./NavbarScreen";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const Pathname = usePathname();
    const [isAnimation, setIsAnimation] = useState(false);
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        setIsAnimation(true);

        const timeout = setTimeout(() => {
            setIsAnimation(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [Pathname]);

    const navbarTheme = Pathname === "/" ? "white" : Pathname === "/project" || Pathname === "/agence" ? 'black' : 'white' ; 

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
                { !showMenu && <Navbar ShowMenu= { setShowMenu } TextColor={navbarTheme}/>}
                {children}
            </div>
        </>
    );
};

export default PageTransition;
