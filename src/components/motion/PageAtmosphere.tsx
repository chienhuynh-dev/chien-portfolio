"use client";

import { useEffect, useRef } from "react";

export function PageAtmosphere() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollFrame = 0;

    function updateProgress() {
      scrollFrame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${value})`;
    }
    function scroll() {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress);
    }
    const resize = new ResizeObserver(scroll);
    resize.observe(document.body);
    updateProgress();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      cancelAnimationFrame(scrollFrame);
      resize.disconnect();
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);

  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
