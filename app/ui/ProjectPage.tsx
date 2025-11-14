"use client";
import ProjectImg from "@/components/ProjectImg";
import { projectImages } from "@/app/(root)/data/project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const ProjectPage = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to(".hero", {
            height:'0',
            stagger:{
                amount:0.5,
            },
            scrollTrigger: {
                trigger: '.lol',
                
                start:'top 100%',
                end:'top -250%',
                scrub: true
            }
        });
    });

    return (
        <div className="p-3">
            {/* heading */}
            <div className="pt-[60vh] lg:pt-[48vh] text-black">
                <h2 className="font-myfont font-medium text-[7vw] uppercase">
                    Projects<sup className="text-[2vw] align-super">16</sup>{" "}
                </h2>
            </div>
            {/* images */}
            <div className="lol md:-mt-6 lg:-mt-7 xl:-mt-10 2xl:-mt-14">
                {/* image Div */}
                {projectImages.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="hero mb-3 grid grid-cols-1 md:flex gap-3 w-full h-[680px] lg:h-[800px] 2xl:h-[850px]"
                        >
                            <ProjectImg Src={item.Src} Src2={item.Src2} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectPage