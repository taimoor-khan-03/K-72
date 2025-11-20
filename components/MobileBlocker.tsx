"use client";

import { ReactNode, useEffect, useState } from "react";

export default function MobileBlocker({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-center p-6 text-xl z-100">
        This website is not available on mobile devices. <br />
        Please open it on a desktop.
      </div>
    );
  }

  return children;
}
