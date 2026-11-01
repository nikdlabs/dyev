"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const path = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = !reduced && "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }) : null;
    if (observer) {
      document.documentElement.classList.add("motion-ready");
      items.forEach((item) => observer.observe(item));
    } else {
      items.forEach((item) => item.classList.add("is-visible"));
    }
    const header = document.querySelector(".site-header");
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--scroll-progress", String(height > 0 ? window.scrollY / height : 0));
        document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
        header?.classList.toggle("is-scrolled", window.scrollY > 72);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [path]);
  return null;
}
