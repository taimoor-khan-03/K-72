'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const Slider = () => {
    const [rotation, setRotation] = useState(3);
    let lastScroll = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            // console.log(currentScroll, lastScroll);

            if (currentScroll > lastScroll) {
                // Scrolling down
                setRotation(-3);
            } else {
                // Scrolling up
                setRotation(3);
            }
            lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        }   

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);
   
    return (
        <Link href="mailto:hello@k72.ca">
            <div 
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.3s ease',
            }}
            className="mt-[10vh] link border-y border-white absolute h-[15vh] w-full overflow-hidden"
            >
                <div className="w-full flex top-0 bg-[#D3FD50] h-full text-black hover:bg-white">
                    <div className="flex transition-all items-center moveX">
                        {[1, 2, 3, 4, 5,6,7].map((i) => (
                            <div
                                key={i}
                                className="flex items-center gap-[3vw]"
                            >
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[7vw] uppercase pt-5">
                                    hello@k72.ca
                                </h2>
                                <span className="text-[10vw] font-myfont font-medium pt-6">
                                    &#10084; 
                                </span>
                                <h2 className="whitespace-nowrap font-myfont font-medium text-[10vw] md:text-[7vw] uppercase pt-5">
                                    hello@k72.ca
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Slider;
