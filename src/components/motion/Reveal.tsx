"use client";

import { animate } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "span";
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  disabled?: boolean;
};

export function Reveal({ children, as: Tag = "div", className, delay = 0, y = 18, duration = 0.65, disabled = false }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || disabled || preference.matches) return;

    const controls = animate(element, { opacity: [0, 1], y: [y, 0] }, {
      delay, duration, ease: [0.22, 1, 0.36, 1],
    });
    const finish = () => { if (preference.matches) controls.complete(); };
    preference.addEventListener("change", finish);
    return () => {
      controls.stop();
      preference.removeEventListener("change", finish);
    };
  }, [delay, y, duration, disabled]);

  // Server HTML stays readable when JavaScript is unavailable.
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
