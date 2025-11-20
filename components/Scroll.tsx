"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // smoother = higher
      // smooth: true, // important
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // buttery smooth
      // smoothTouch: true, // also smooth on touchpads/mobile
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}
