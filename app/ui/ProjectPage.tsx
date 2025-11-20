"use client";
import ProjectImg from "@/components/ProjectImg";
import { projectImages } from "@/app/(root)/data/project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState, useRef } from "react";

const ProjectPage = () => {
    const infoPlanelRef = useRef<HTMLDivElement>(null);
    const [hoveredProject, setHoveredProject] = useState<{
        title: string;
        subtitle: string;
        title2: string;
        subtitle2: string;
    } | null>(null);

    const handleMouseEnter = (project: {
        title: string;
        subtitle: string;
        title2: string;
        subtitle2: string;
    }) => {
        setHoveredProject(project);
        gsap.to(infoPlanelRef.current, {
            y: "7.5vh",
            duration: 0.4,
            ease: "power2.out",
            lazy: false,
        });
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
        gsap.to(infoPlanelRef.current, {
            y: "0",
            duration: 0.2,
            ease: "power2.out",
        });
    };

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".hero", {
            height: "0",
            stagger: {
                amount: 0.5,
            },
            scrollTrigger: {
                trigger: ".lol",

                start: "top 100%",
                end: "top -180%",
                scrub: true,
            },
        });
    });

    return (
        <>
            <div
                ref={infoPlanelRef}
                className="px-6 flex justify-between items-center h-[7vh] w-screen fixed top-0 left-0 border-black border-t-2 border-b-2 bg-white z-10"
            >
                <div className="text-black text-2xl">
                    {hoveredProject && (
                        <h2>{hoveredProject.title || hoveredProject.title2}</h2>
                    )}
                </div>
                <div className="text-black text-2xl">
                    {hoveredProject && (
                        <h2>
                            {hoveredProject.subtitle ||
                                hoveredProject.subtitle2}
                        </h2>
                    )}
                </div>
            </div>

            <div className="p-3">
                {/* heading */}
                <div className="pt-[60vh] lg:pt-[48vh] text-black">
                    <h2 className="font-myfont font-medium text-[7vw] uppercase">
                        Projects<sup className="text-[2vw] align-super">16</sup>{" "}
                    </h2>
                </div>
                {/* images */}
                <div className="lol md:-mt-6 lg:-mt-7 xl:-mt-10 2xl:-mt-14 pb-16">
                    {/* image Div */}
                    {projectImages.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="hero mb-3 grid grid-cols-1 md:flex gap-3 w-full h-[680px] lg:h-[800px] 2xl:h-[850px]"
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <ProjectImg Src={item.Src} Src2={item.Src2} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
