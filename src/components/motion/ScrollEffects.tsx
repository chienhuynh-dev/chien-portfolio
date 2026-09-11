"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const played = new WeakSet<Element>();
    const animations = new Map<Element, Animation>();
    let observer: IntersectionObserver | undefined;

    function stop() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }

    function start() {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer?.unobserve(target);
          played.add(target);
          if (target.contains(document.activeElement)) return;
          const animation = target.animate([
            { opacity: 0.35, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
          animations.set(target, animation);
          animation.onfinish = () => animations.delete(target);
        });
      }, { threshold: 0.08 });
      document.querySelectorAll("[data-scroll-reveal]").forEach((element) => {
        // Never replay on content already visible when hydration or preference changes occur.
        if (element.getBoundingClientRect().top < window.innerHeight) played.add(element);
        if (!played.has(element)) observer?.observe(element);
      });
    }

    function focus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest("[data-scroll-reveal]");
      if (!element) return;
      observer?.unobserve(element);
      played.add(element);
      animations.forEach((animation, target) => {
        if (element.contains(target)) {
          animation.cancel();
          animations.delete(target);
        }
      });
    }

    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", focus);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", focus);
    };
  }, []);

  return null;
}
