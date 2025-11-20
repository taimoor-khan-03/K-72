"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Slider from "@/components/contact/Slider";

const ContactPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll to the middle copy
    const singleHeight = el.scrollHeight / 3;
    window.scrollTo(0, singleHeight);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= singleHeight * 2) {
        // Reached bottom copy → teleport to middle copy
        window.scrollTo(0, scrollY - singleHeight);
      } else if (scrollY <= 0) {
        // Reached top copy → teleport to middle copy
        window.scrollTo(0, scrollY + singleHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-screen min-h-screen text-white font-sans px-0 pt-[5vh] bg-black relative"
        >
          {/* Text-section */}
          <div className="font-myfont font-light p-5 lg:text-center flex flex-col justify-center text-white pt-[10vh]">
            <div className="text-[6vw] justify-center flex items-center uppercase leading-[6vw]">
              To talk
            </div>
            <div className="text-[6vw] justify-center flex items-center uppercase leading-[6vw]">
              about
            </div>
            <div className="text-[6vw] justify-center flex items-center uppercase leading-[6vw]">
              your
            </div>
            <div className="text-[6vw] justify-evenly flex items-center uppercase leading-[6vw]">
              <Link href="mailto:">
                <p className="text-white text-xs hover:underline hover:text-[#D3FD50]">
                  Onscreen or in an office.
                  <br /> Here. There.
                  <br /> Anywhere.
                </p>
              </Link>
              project
              <Link href="mailto:">
                <p className="text-white text-xs hover:underline hover:text-[#D3FD50]">
                  Onscreen or in an office.
                  <br /> Here. There.
                  <br /> Anywhere.
                </p>
              </Link>
            </div>
          </div>

          {/* slider section */}
          <div className="h-full w-full">
            <Slider />
          </div>

          <div className="flex flex-col justify-center items-center text-white mt-[40vh] absolute left-1/2 -translate-x-1/2 gap-4">
            <div className="text-md uppercase">Follow us</div>
            <div className="flex gap-2">
              <Link href="https://facebook.com" className="pill text-3xl">
                FB
              </Link>
              <Link href="https://instagram.com" className="pill text-3xl">
                IG
              </Link>
              <Link href="https://linkedin.com" className="pill text-3xl">
                IN
              </Link>
              <Link href="https://behance.net" className="pill text-3xl">
                BE
              </Link>
            </div>
          </div>

          <div className="h-screen"></div>
        </div>
      ))}
    </div>
  );
};

export default ContactPage;
