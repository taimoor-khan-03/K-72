"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { peopleImages } from "@/app/(root)/data/peopleImages";

const TextCard = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const imageDivRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(".pin-wrapper", {
            scrollTrigger: {
                trigger: ".pin-wrapper",
                start: "top 21.2%",
                end: "top -80%",
                scrub: true,
                pin: true,
                pinSpacing: false,
                onUpdate: (elem) => {
                    let Index;
                    if (elem.progress < 1) {
                        Index = Math.floor(elem.progress * peopleImages.length);
                    } else {
                        Index = peopleImages.length - 1;
                    }

                    setImageIndex(Index);
                },
            },
        });

        ScrollTrigger.create({
            trigger: ".section2",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: false,
            onEnter: () =>
                gsap.to(".mainWrapper", {
                    backgroundColor: "#000",
                    color: "#fff",
                    duration: 1.2,
                }),
            onLeaveBack: () =>
                gsap.to(".mainWrapper", {
                    backgroundColor: "#fff",
                    color: "#000",
                    duration: 0.5,
                }),
        });
    });

    return (
        <div className="mainWrapper transition-colors duration-0 ease-in-out">
            <div className="section1 relative min-h-screen flex flex-col justify-center items-center overflow-hidden  ">
                {/* Image Div */}
                <div className="pin-wrapper w-screen">
                    <div
                        ref={imageDivRef}
                        className="will-change-transform z-1 top-155 md:top-25 lg:top-70 2xl:top-15 left-[30vw] md:h-[35vh] lg:h-[28vh] xl:h-[25vh] 2xl:h-[37vh] md:w-[30vw] lg:w-[23vw] xl:w-[20vw] 2xl:w-[15vw] overflow-hidden absolute rounded-4xl"
                    >
                        <Image
                            ref={imageRef}
                            src={peopleImages[imageIndex]}
                            alt="image"
                            fill
                            className="object-fit"
                        ></Image>
                    </div>
                </div>

                {/* Text Section */}
                <div className="relative z-10 font-myfont font-medium text-black">
                    <div className=" mt-[70vh] lg:mt-[50vh]">
                        <h1 className="text-[19vw] text-center uppercase leading-[17vw] lg:leading-[15vw]">
                            SEVEN7Y <br /> TWO
                        </h1>
                    </div>

                    <div className=" md:pl-[40%]">
                        <p className="text-md lg:text-5xl w-full lg:w-[55vw]">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&apos;re
                            inquisitive and open-minded, and we make sure
                            creativity crowds out ego from every corner. A brand
                            is a living thing, with values, a personality and a
                            story. If we ignore that, we can achieve short-term
                            success, but not influence that goes the distance.
                            We bring that perspective to every brand story we
                            help tell.
                        </p>
                    </div>

                    <div className="mt-70 lg:mt-50">
                        <div className="grid text-black  grid-cols-3 items-start justify-items-center">
                            <div className="text-xl w-1/2">
                                <h1>Expertise</h1>
                            </div>
                            <div className="text-xl w-1/2">
                                <ul className="list-none">
                                    <li>Strategy</li>
                                    <li>Advertising</li>
                                    <li>Branding</li>
                                    <li>Design</li>
                                    <li>Content</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-black grid  grid-cols-3 items-start justify-items-center mt-40 gap-2 md:gap-0">
                            <div className=" p-10 lg:p-0 lg:w-1/2 text-xl">
                                <p>
                                    Our Work_ Born in curiosity, raised by
                                    dedication and fed with a steady diet of
                                    creativity.
                                </p>
                            </div>
                            <div className="p-10 lg:p-0 lg:w-1/2 text-xl">
                                <p>
                                    Our Creative_ Simmering in an environment
                                    where talent can come to a full boil.
                                    Encouraged to become the best versions of
                                    ourselves.
                                </p>
                            </div>
                            <div className="p-10 lg:p-0 lg:w-1/2 text-xl">
                                <p>
                                    Our Culture_ We’re open to each other.
                                    Period. The team works together to create a
                                    space that makes us proud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section2 min-h-screen pt-[20vh]  flex flex-col justify-center overflow-x-hidden relative">
                {/* images */}
                <div className="w-full flex flex-col gap-[10vh] md:gap-[15vh] lg:gap-[20vh] pb-[40vh]">
                    <div className="w-full flex flex-col justify-center items-center gap-[10vh] md:gap-[15vh] lg:gap-[20vh]">
                        <div className="h-[800px] w-[30vw] bg-white relative overflow-hidden z-10 rounded-3xl">
                            <Image
                                src="/images/man.jpg"
                                alt="image"
                                fill
                                className="object-cover"
                            ></Image>
                        </div>

                        <div className="transition-all duration-1000 ease-in-out absolute flex top-1/5 text-[#D3FD50] w-full z-1">
                            <div className="flex  items-center moveX gap-[90vw]">
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Carl
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Carl
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Carl
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Carl
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    Carl
                                </h2>
                            </div>
                        </div>

                        <div className="transition-all duration-1000 ease-in-out absolute flex top-1/3 text-[#D3FD50] w-full z-15">
                            <div className="flex  items-center moveXReverse gap-[90vw]">
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    GODBOUT
                                    <span className="text-white text-xl">
                                        Business Lead
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    GODBOUT
                                    <span className="text-white text-xl">
                                        Business Lead
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    GODBOUT
                                    <span className="text-white text-xl">
                                        Business Lead
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    GODBOUT
                                    <span className="text-white text-xl">
                                        Business Lead
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    GODBOUT
                                    <span className="text-white text-xl">
                                        Business Lead
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-[10vh] md:gap-[15vh] lg:gap-[20vh]">
                        <div className="h-[800px] w-[30vw] bg-white relative overflow-hidden z-10 rounded-3xl">
                            <Image
                                src="/images/girl.jpg"
                                alt="image"
                                fill
                                className="object-cover"
                            ></Image>
                        </div>

                        <div className="transition-all duration-1000 ease-in-out absolute flex top-[140vh] text-[#D3FD50] w-full z-1">
                            <div className="flex  items-center moveX gap-[90vw]">
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    SOPHIE
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    SOPHIE
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    SOPHIE
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    SOPHIE
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    SOPHIE
                                </h2>
                            </div>
                        </div>

                        <div className="transition-all duration-1000 ease-in-out absolute flex top-[170vh] text-[#D3FD50] w-full z-15">
                            <div className="flex  items-center moveXReverse gap-[90vw]">
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    AUGER
                                    <span className="text-white text-xl">
                                        Account executive
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    AUGER
                                    <span className="text-white text-xl">
                                        Account executive
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    AUGER
                                    <span className="text-white text-xl">
                                        Account executive
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    AUGER
                                    <span className="text-white text-xl">
                                        Account executive
                                    </span>
                                </h2>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[10vw]  uppercase leading-[0.8] pt-5 text-center ">
                                    AUGER
                                    <span className="text-white text-xl">
                                        Account executive
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3 h-screen">
                {/* hovering bars */}
                <div className="border-t border-b border-white w-full h-[70px] relative transition-colors duration-500">
                    <div className="h-full w-full flex justify-between items-center px-8 hover:font-bold">
                        <h1>Copywriter</h1>
                        <h3 className="text-3xl">Camille Brière</h3>
                    </div>
                    <div className="absolute h-[60vh]  w-[20vw] bg-red-200 left-1/3 -translate-x-1/2  -translate-y-1/2 z-10 overflow-hidden rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <Image
                            src="/images/man.jpg"
                            alt="#"
                            fill
                            className="object-cover"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextCard;
