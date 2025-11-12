"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const Animation = () => {
    const currPath = usePathname();
    console.log(currPath);

    const StairParentRef = useRef<HTMLDivElement | null>(null);

    useGSAP (() => {
        const tl = gsap.timeline();

        tl.to(StairParentRef.current, {
            display: 'flex',
        });
        tl.from('.stair',{
            height:0,
            stagger: {
                amount: -0.3,
            }
        });
        tl.to('.stair',{
            y:'100%',
            stagger:{
                amount: -0.3,
            }
        });
        tl.to(StairParentRef.current,{
            display:'none',
        })
        tl.to('.stair',{
            y:'0%',
        })
    },[currPath]);


    return (
        <div ref={StairParentRef} className="h-screen w-full fixed z-20 top-0">
            <div  className="h-full w-full flex">
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
            </div>
        </div>
    );
};

export default Animation;
