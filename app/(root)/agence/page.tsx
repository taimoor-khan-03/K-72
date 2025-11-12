"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { peopleImages } from "../data/peopleImages";

gsap.registerPlugin(ScrollTrigger);
const Agence = () => {
    const imageDivRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: "top 20%",
                end: "top -110%",
                scrub: true,
                pin: true,
                onUpdate: (elem) => {
                    let Index;
                    if(elem.progress < 1){

                        Index = Math.floor(
                            elem.progress * peopleImages.length
                        );
                    }else{
                        Index = peopleImages.length -1;
                    }

                    setImageIndex(Index);
                    
                },
            },
        });
    });

    return (
        <div className="h-screen w-screen bg-white">
            <div className="section">
                <div
                    ref={imageDivRef}
                    className="overflow-x-hidden z-1 h-[40vh] w-[15vw] absolute top-1/5 left-[35vw] rounded-3xl"
                >
                    <Image
                        ref={imageRef}
                        key={imageIndex}
                        src={peopleImages[imageIndex]}
                        alt="man"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="font-myfont font-light relative z-10">
                    <div className=" mt-[50vh]">
                        <h1 className="text-black text-[20vw] text-center uppercase leading-[15vw]">
                            {" "}
                            SEVEN7Y <br /> TWO
                        </h1>
                    </div>
                    <div className="pl-[35%] md:pl-[40%] mt-12 md:mt-20 flex justify-center">
                        <p className="text-black text-5xl w-[50vw] text-left leading-relaxed">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&apos;re
                            inquisitive and open-minded, and we make sure
                            creativity crowds out ego from every corner. A brand
                            is a living thing, with values, a personality and a
                            story. If we ignore that, we can achieve short-term
                            success, but not influence that goes the distance.
                            We bring that perspective to every brand story we
                            help tell.
                        </p>
                    </div>
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
                    <div className="text-black grid  grid-cols-3 items-start justify-items-center mt-40">
                        <div className="w-1/2 text-xl">
                            <p>
                                Our Work_ Born in curiosity, raised by
                                dedication and fed with a steady diet of
                                creativity.
                            </p>
                        </div>
                        <div className="w-1/2 text-xl">
                            <p>
                                Our Creative_ Simmering in an environment where
                                talent can come to a full boil. Encouraged to
                                become the best versions of ourselves.
                            </p>
                        </div>
                        <div className="w-1/2 text-xl">
                            <p>
                                Our Culture_ We’re open to each other. Period.
                                The team works together to create a space that
                                makes us proud
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2 h-screen"></div>
        </div>
    );
};

export default Agence;
