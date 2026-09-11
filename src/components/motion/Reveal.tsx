import type { CSSProperties, ReactNode } from "react";

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
  const style: CSSProperties & { "--reveal-y": string } = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    "--reveal-y": `${y}px`,
  };

  // CSS starts at first paint, so hydration never hides visible server content.
  return <Tag className={`${disabled ? "" : "reveal"} ${className ?? ""}`} style={style}>{children}</Tag>;
}
