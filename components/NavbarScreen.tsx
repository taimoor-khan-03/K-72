import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import MontrealTime from "./Montreal";
import Link from "next/link";

interface NavbarScreenProps {
    ShowMenu: boolean;
    setShowMenu: (value: boolean) => void;
}

const NavbarScreen: React.FC<NavbarScreenProps> = ({
    ShowMenu,
    setShowMenu,
}) => {
    const img1 = "/images/card6.jpg";
    const img2 = "/images/card.jpg";

    const tl = useRef<gsap.core.Timeline | null>(null); // store timeline

    const gsapAnimation = () => {
        tl.current = gsap.timeline();
        tl.current.from(".stairing", {
            height: 0,
            stagger: {
                amount: -0.2,
            },
        });
        tl.current.from(".link", {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.3,
            },
        });
        tl.current.from(".navlink", {
            opacity: 0,
        });
    };

    const reverseGsapAnimation = () => {
        tl.current = gsap.timeline();
        tl.current.to(".stairing", {
            height: 0,
            stagger: {
                amount: -0.2,
            },
        });
        tl.current.to(".link", {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.3,
            },
        });
        tl.current.to(".navlink", {
            opacity: 1,
        });
    };

    useGSAP(() => {
        tl.current = gsap.timeline();

        if (ShowMenu) {
            gsapAnimation();
        } else {
            reverseGsapAnimation();
        }
    }, [ShowMenu]);

    console.log(ShowMenu);

    return (
        <div className="text-white h-screen w-screen fixed top-0 overflow-x-hidden z-50">
            <div className="h-screen w-full fixed">
                <div className="h-full w-full flex">
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5  bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                </div>
            </div>

            <div className="navlink flex w-full justify-between items-start p-5">
                <div className=" w-[18vw] md:w-30 z-20 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 103 44"
                        className="w-full"
                    >
                        <path
                            fill="white"
                            fillRule="evenodd"
                            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                        ></path>
                    </svg>
                </div>

                <button
                    className="h-10 w-20  relative cursor-pointer"
                    onClick={() => {
                        setShowMenu(false);
                    }}
                >
                    <div className="h-10 w-20  relative cursor-pointer">
                        <div className="h-28 w-0.5 -rotate-45 origin-top absolute bg-white z-20"></div>
                        <div className="h-28 w-0.5 right-0 rotate-45 origin-top absolute bg-white z-20"></div>
                    </div>
                </button>
            </div>

            <div className="py-30 ">
                <Link href="/project" onClick={() => setShowMenu(false)}>
                    <div className="link origin-top relative border-y border-white">
                        <h1 className="font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                            Work
                        </h1>
                        <div className="transition-all duration-1000 ease-in-out absolute flex top-0 bg-[#D3FD50] text-black opacity-0 hover:opacity-100">
                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    See everything
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center">
                                    See everything
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    See everything
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                                    See everything
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/agence" onClick={() => setShowMenu(false)}>
                    <div className="link origin-top relative border-y border-white">
                        <h1 className="font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                            Agency
                        </h1>
                        <div className="transition-all duration-1000 ease-in-out absolute flex top-0 bg-[#D3FD50] text-black opacity-0 hover:opacity-100">
                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Know us
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center">
                                    Know us
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Know us
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                                    Know us
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/contact" onClick={() => setShowMenu(false)}>
                    <div className="link origin-top relative border-y border-white">
                        <h1 className="font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                            contact
                        </h1>
                        <div className="transition-all duration-1000 ease-in-out absolute flex top-0 bg-[#D3FD50] text-black opacity-0 hover:opacity-100">
                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Send us a fax
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center">
                                    Send us a fax
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Send us a fax
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                                    Send us a fax
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/blog" onClick={() => setShowMenu(false)}>
                    <div className="link origin-top relative border-y border-white">
                        <h1 className="font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                            Blog
                        </h1>
                        <div className="transition-all duration-1000 ease-in-out absolute flex top-0 bg-[#D3FD50] text-black opacity-0 hover:opacity-100">
                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Read articles
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center">
                                    Read articles
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex  items-center moveX">
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Read articles
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img2}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                                <h2 className="whitespace-nowrap font-myfont font-light text-[10vw] md:text-[5vw] uppercase leading-[0.8] pt-5 text-center">
                                    Read articles
                                </h2>
                                <div className="rounded-full w-40 h-20 overflow-hidden ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={img1}
                                        alt="logo"
                                        className="h-50 w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="link w-full text-4xl absolute bottom-2 flex justify-between text-white z-60 px-5">
                <div className="flex items-center">
                    <MontrealTime />
                </div>
                <div className="flex gap-2">
                    <Link href="https://facebook.com" className="pill">
                        FB
                    </Link>
                    <Link href="https://instagram.com" className="pill">
                        IG
                    </Link>
                    <Link href="https://linkedin.com" className="pill">
                        IN
                    </Link>
                    <Link href="https://behance.net" className="pill">
                        BE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarScreen;
