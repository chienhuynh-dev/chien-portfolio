"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function FloatingNavigation() {
  const [active, setActive] = useState("work");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const work = document.getElementById("work");
      setVisible(Boolean(work && work.getBoundingClientRect().top < innerHeight * 0.75));
      let current = "work";
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= innerHeight * 0.4) current = id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <nav className="floating-nav" aria-label="Section navigation" hidden={!visible}>
      <span className="floating-nav-indicator" aria-hidden="true" style={{ transform: `translateX(${links.findIndex((link) => link.id === active) * 100}%)` }} />
      {links.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>)}
    </nav>
  );
}
