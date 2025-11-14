"use client";
import { useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { peopleImages } from "@/app/(root)/data/peopleImages";
import { triggerAsyncId } from "async_hooks";
import { start } from "repl";

const TextCard = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const imageDivRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
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
                    duration:1.2
                }),
        });
    });

    return (
        <div className="mainWrapper">
            <div className="section1">
                {/* Image Div */}
                <div
                    ref={imageDivRef}
                    className="will-change-transform z-1 top-155 md:top-155 lg:top-70 2xl:top-50 left-[30vw] md:h-[22vh] lg:h-[28vh] xl:h-[25vh] 2xl:h-[37vh] md:w-[33vw] lg:w-[23vw] xl:w-[20vw] 2xl:w-[15vw] overflow-hidden absolute rounded-4xl"
                >
                    <Image
                        ref={imageRef}
                        src={peopleImages[imageIndex]}
                        alt="image"
                        fill
                        className="object-fit"
                    ></Image>
                </div>

                {/* Text Section */}
                <div className="relative z-10 font-myfont font-medium text-black">
                    <div className=" mt-[60vh] lg:mt-[50vh]">
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

                    <div className="mt-50">
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
                            <div className="lg:w-1/2 text-xl">
                                <p>
                                    Our Work_ Born in curiosity, raised by
                                    dedication and fed with a steady diet of
                                    creativity.
                                </p>
                            </div>
                            <div className="lg:w-1/2 text-xl">
                                <p>
                                    Our Creative_ Simmering in an environment
                                    where talent can come to a full boil.
                                    Encouraged to become the best versions of
                                    ourselves.
                                </p>
                            </div>
                            <div className="lg:w-1/2 text-xl">
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

            <div className="section2 h-screen mt-100%"></div>
        </div>
    );
};

export default TextCard;
