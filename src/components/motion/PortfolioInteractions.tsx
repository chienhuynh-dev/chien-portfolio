"use client";

import { useEffect } from "react";

export function PortfolioInteractions() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 1100px) and (min-height: 800px)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const hero = document.querySelector<HTMLElement>("[data-hero-stage]");
    const portrait = document.querySelector<HTMLElement>("[data-depth]");
    const button = document.querySelector<HTMLElement>("[data-magnetic]");
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-project-panel]"));
    const running = new Map<HTMLDetailsElement, { animation: Animation; open: boolean }>();
    const cleanups: (() => void)[] = [];
    let frame = 0;
    let pointerFrame = 0;

    function update() {
      frame = 0;
      const enabled = !reduced.matches && desktop.matches;
      const y = Math.min(window.scrollY, hero?.offsetHeight ?? 0);
      if (hero) hero.style.translate = enabled && !hero.contains(document.activeElement) ? `0 ${y * 0.12}px` : "";
      if (portrait) portrait.style.translate = enabled ? `0 ${Math.min(y * 0.055, 38)}px` : "";
      panels.forEach((panel) => {
        panel.dataset.sticky = String(enabled && panel.offsetHeight < innerHeight - 160);
      });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function resetButton() {
      cancelAnimationFrame(pointerFrame);
      if (button) button.style.translate = "";
    }
    function move(event: PointerEvent) {
      if (!button || reduced.matches || !fine.matches) return;
      const rect = button.getBoundingClientRect();
      const x = Math.max(-6, Math.min(6, (event.clientX - rect.left - rect.width / 2) * 0.06));
      const y = Math.max(-4, Math.min(4, (event.clientY - rect.top - rect.height / 2) * 0.1));
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => { button.style.translate = `${x}px ${y}px`; });
    }
    function finish(details: HTMLDetailsElement, open: boolean) {
      running.get(details)?.animation.cancel();
      running.delete(details);
      details.open = open;
      details.style.height = "";
      details.style.overflow = "";
      delete details.dataset.expanded;
      schedule();
    }
    document.querySelectorAll<HTMLDetailsElement>("#products details").forEach((details) => {
      const summary = details.querySelector("summary");
      if (!summary) return;
      function toggle(event: MouseEvent) {
        if (reduced.matches) return;
        event.preventDefault();
        const previous = running.get(details);
        const open = !(previous?.open ?? details.open);
        const from = details.getBoundingClientRect().height;
        previous?.animation.cancel();
        details.style.height = "";
        details.open = true;
        const border = parseFloat(getComputedStyle(details).borderBottomWidth) + parseFloat(getComputedStyle(details).borderTopWidth);
        const to = open ? details.getBoundingClientRect().height : summary!.getBoundingClientRect().height + border;
        details.style.overflow = "hidden";
        details.dataset.expanded = String(open);
        const animation = details.animate([{ height: `${from}px` }, { height: `${to}px` }], {
          duration: 380, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both",
        });
        running.set(details, { animation, open });
        animation.onfinish = () => finish(details, open);
      }
      summary.addEventListener("click", toggle);
      cleanups.push(() => summary.removeEventListener("click", toggle));
    });
    function settle() {
      Array.from(running).forEach(([details, state]) => finish(details, state.open));
      resetButton();
      schedule();
    }
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", settle);
    document.addEventListener("focusin", schedule);
    reduced.addEventListener("change", settle);
    desktop.addEventListener("change", settle);
    fine.addEventListener("change", resetButton);
    button?.addEventListener("pointermove", move, { passive: true });
    button?.addEventListener("pointerleave", resetButton);
    button?.addEventListener("blur", resetButton);
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      Array.from(running).forEach(([details, state]) => finish(details, state.open));
      cancelAnimationFrame(frame);
      resetButton();
      resize.disconnect();
      if (hero) hero.style.translate = "";
      if (portrait) portrait.style.translate = "";
      panels.forEach((panel) => delete panel.dataset.sticky);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", settle);
      document.removeEventListener("focusin", schedule);
      reduced.removeEventListener("change", settle);
      desktop.removeEventListener("change", settle);
      fine.removeEventListener("change", resetButton);
      button?.removeEventListener("pointermove", move);
      button?.removeEventListener("pointerleave", resetButton);
      button?.removeEventListener("blur", resetButton);
    };
  }, []);

  return null;
}
