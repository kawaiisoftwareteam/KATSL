"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if the browser natively supports scroll-driven animations
    if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      // Give a tiny delay for Next.js to render/mount elements post-navigation
      const timer = setTimeout(() => {
        document.querySelectorAll(".scroll-reveal").forEach((el) => {
          observer.observe(el);
        });
      }, 100);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }
  }, [pathname]);

  return null;
}
