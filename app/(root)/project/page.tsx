"use client";
import ProjectImg from "@/components/ProjectImg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projectImages } from "../data/project";
const project = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.utils.toArray(".hero").forEach((hero: any, i) => {
            gsap.from(hero, {
                height: "100px",
                stagger: { amount: 0.4 },
                scrollTrigger: {
                    trigger: ".lol",
                    start: "top 100%",
                    end: "top -150%",
                    toggleActions: "play none play reverse reverse",
                    scrub: true,
                },
            });
        });
    });

    return (
        <div className="p-4 bg-white mb-[100vh]">
            <div className=" pt-[45vh]">
                <h2 className="font-myfont text-black font-medium text-[5vw] uppercase bottom-1">
                    work<sup className="text-[2vw] align-super">16</sup>
                </h2>
            </div>

            {/* cards */}
            <div className="lg:-mt-10 lol">
                {projectImages.map((item, index) => {
                    return (
                        <div
                            key={`${item.Title}-${index}`}
                            className="w-full mb-2 h-40 lg:h-[850px] grid grid-cols-1  md:flex lg:gap-4 gap-2 hero"
                        >
                            <ProjectImg
                                Src={item.Src}
                                Title={item.Title}
                                Src2={item.Src2}
                                Title2={item.Title2}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default project;
