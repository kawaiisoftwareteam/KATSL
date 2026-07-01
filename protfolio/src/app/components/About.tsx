"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

const PILLARS = [
  {
    index: "01",
    title: "Innovation",
    description:
      "Pioneering modern architectures and AI integrations to keep your enterprise ahead of the curve.",
  },
  {
    index: "02",
    title: "Quality",
    description:
      "Clean code, automated testing, and responsive performance for robust product stability.",
  },
  {
    index: "03",
    title: "Reliability",
    description:
      "On-time delivery, clear documentation, and 24/7 monitoring to scale your operations.",
  },
] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      const eyebrow = root.querySelector(`.${styles.eyebrow}`);
      const title = root.querySelector(`.${styles.title}`);
      const intro = root.querySelector(`.${styles.introText}`);
      const pillars = root.querySelectorAll(`.${styles.pillar}`);
      const mediaClip = root.querySelector(`.${styles.mediaClip}`);
      const mediaImage = root.querySelector(`.${styles.mediaImage}`);
      const badge = root.querySelector(`.${styles.experienceBadge}`);
      const redBar = root.querySelector(`.${styles.redBar}`);

      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      if (redBar) {
        entranceTl.from(redBar, { scaleY: 0, duration: 1.1, transformOrigin: "top center" });
      }

      if (eyebrow) {
        entranceTl.from(eyebrow, { opacity: 0, x: -36, duration: 0.7 }, "-=0.7");
      }

      if (title) {
        entranceTl.from(
          title,
          { opacity: 0, y: 48, duration: 0.95 },
          "-=0.45"
        );
      }

      if (intro) {
        entranceTl.from(intro, { opacity: 0, y: 32, duration: 0.8 }, "-=0.55");
      }

      if (pillars.length) {
        entranceTl.from(
          pillars,
          { opacity: 0, y: 24, duration: 0.7, stagger: 0.12 },
          "-=0.45"
        );
      }

      if (mediaClip) {
        entranceTl.from(
          mediaClip,
          { opacity: 0, x: 80, scale: 0.94, duration: 1.1, ease: "power4.out" },
          "-=0.9"
        );
      }

      if (badge) {
        entranceTl.from(
          badge,
          { opacity: 0, y: 24, scale: 0.9, duration: 0.75, ease: "back.out(1.8)" },
          "-=0.35"
        );
      }

      if (mediaImage && mediaClip) {
        const parallaxMm = gsap.matchMedia();

        parallaxMm.add("(min-width: 769px)", () => {
          gsap.to(mediaImage, {
            yPercent: 12,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: mediaClip,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
      }

      const accent = root.querySelector(`.${styles.curveAccent}`);
      if (accent) {
        const accentMm = gsap.matchMedia();

        accentMm.add("(min-width: 769px)", () => {
          gsap.to(accent, {
            rotate: 360,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className={styles.about} aria-labelledby="about-title">
      <svg className={styles.clipSvg} aria-hidden="true">
        <defs>
          <clipPath id="aboutCurveClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.76 C1,0.9 0.9,1 0.74,1 H0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.topCurve} aria-hidden="true" />

      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.contentColumn}>
            <div className={styles.redBar} aria-hidden="true" />

            <div className={styles.contentInner}>
              <span className={styles.eyebrow}>Who We Are</span>
              <h2 id="about-title" className={styles.title}>
                Engineering excellence for ambitious brands
              </h2>
              <p className={styles.introText}>
                A technology company delivering scalable software solutions for modern
                businesses. We bridge the gap between complex engineering challenges and
                elegant digital products.
              </p>

              <div className={styles.pillarList}>
                {PILLARS.map((pillar) => (
                  <article key={pillar.title} className={styles.pillar}>
                    <span className={styles.pillarIndex}>{pillar.index}</span>
                    <div className={styles.pillarBody}>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      <p className={styles.pillarDescription}>{pillar.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.mediaColumn}>
            <div className={styles.mediaFrame}>
              <div className={styles.curveAccent} aria-hidden="true" />
              <div className={styles.mediaClip}>
                <Image
                  src="/html-css-collage-concept-with-person.jpg"
                  alt="Developer reviewing code with a global digital network overlay"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.mediaImage}
                />
                <div className={styles.mediaOverlay} aria-hidden="true" />
              </div>

              <div className={styles.experienceBadge}>
                <span className={styles.badgeValue}>5+</span>
                <span className={styles.badgeLabel}>Years of trusted delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
