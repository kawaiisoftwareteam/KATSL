"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_IMAGE_SOURCE, optimizedBlur, optimizedSrc } from "@/lib/site-images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
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

export default function About({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      root.classList.add(styles.isRevealed);
      return;
    }

    const ctx = gsap.context(() => {
      const eyebrow = root.querySelector(`.${styles.eyebrow}`);
      const title = root.querySelector<HTMLElement>(`.${styles.title}`);
      const intro = root.querySelector(`.${styles.introText}`);
      const pillars = gsap.utils.toArray<HTMLElement>(`.${styles.pillar}`, root);
      const mediaInner = root.querySelector(`.${styles.mediaInner}`);
      const mediaImage = root.querySelector(`.${styles.mediaImage}`);
      const mediaClip = root.querySelector(`.${styles.mediaClip}`);
      const curtain = root.querySelector(`.${styles.curtain}`);
      const curtainRed = root.querySelector(`.${styles.curtainRed}`);
      const badge = root.querySelector(`.${styles.experienceBadge}`);
      const badgeValue = root.querySelector<HTMLElement>(`.${styles.badgeValue}`);
      const redBar = root.querySelector(`.${styles.redBar}`);
      const watermark = root.querySelector(`.${styles.watermark}`);
      const spinBadge = root.querySelector(`.${styles.spinBadge}`);
      const spinRing = root.querySelector(`.${styles.spinRing}`);

      // Headline: masked line-by-line reveal (re-splits automatically when fonts load / on resize)
      if (title) {
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          linesClass: styles.titleLine,
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 115,
              duration: 1.05,
              stagger: 0.12,
              ease: "power4.out",
              scrollTrigger: {
                trigger: root,
                start: "top 72%",
                toggleActions: "play none none reverse",
              },
            }),
        });
      }

      // Triggers the CSS-driven underline sweep on the highlighted word
      ScrollTrigger.create({
        trigger: root,
        start: "top 60%",
        once: true,
        onEnter: () => root.classList.add(styles.isRevealed),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      if (redBar) {
        tl.from(redBar, { scaleY: 0, duration: 1.1, transformOrigin: "top center" }, 0);
      }

      if (eyebrow) {
        tl.from(eyebrow, { opacity: 0, x: -32, duration: 0.7 }, 0.15);
      }

      if (intro) {
        tl.from(intro, { opacity: 0, y: 30, filter: "blur(6px)", duration: 0.85 }, 0.5);
      }

      pillars.forEach((pillar, i) => {
        const line = pillar.querySelector(`.${styles.pillarLine}`);

        tl.from(pillar, { opacity: 0, y: 28, duration: 0.7 }, 0.65 + i * 0.14);

        if (line) {
          tl.from(
            line,
            { scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power2.inOut" },
            0.7 + i * 0.14
          );
        }
      });

      // Image: double curtain wipe (red leads, dark follows) + scale settle
      if (curtainRed) {
        tl.to(curtainRed, { scaleX: 0, duration: 0.9, ease: "power4.inOut" }, 0.35);
      }

      if (curtain) {
        tl.to(curtain, { scaleX: 0, duration: 0.95, ease: "power4.inOut" }, 0.55);
      }

      if (mediaInner) {
        tl.from(mediaInner, { scale: 1.28, duration: 1.6, ease: "power3.out" }, 0.45);
      }

      if (spinBadge) {
        tl.from(spinBadge, { opacity: 0, scale: 0.5, duration: 0.8, ease: "back.out(1.7)" }, 1.0);
      }

      if (badge) {
        tl.from(badge, { opacity: 0, y: 26, scale: 0.85, duration: 0.75, ease: "back.out(1.8)" }, 1.05);
      }

      // Counts the experience badge up from 0 to 5
      if (badgeValue) {
        const counter = { value: 0 };

        tl.to(
          counter,
          {
            value: 5,
            duration: 1.1,
            ease: "power1.out",
            onUpdate: () => {
              badgeValue.textContent = `${Math.round(counter.value)}+`;
            },
          },
          1.05
        );
      }

      if (spinRing) {
        gsap.to(spinRing, { rotate: 360, duration: 26, repeat: -1, ease: "none" });
      }

      if (watermark) {
        gsap.fromTo(
          watermark,
          { xPercent: 6 },
          {
            xPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
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

      <span className={styles.watermark} aria-hidden="true">
        About
      </span>

      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.contentColumn}>
            <div className={styles.redBar} aria-hidden="true" />

            <div className={styles.contentInner}>
              <span className={styles.eyebrow}>Who We Are</span>
              <Heading id="about-title" className={styles.title}>
                Engineering <span className={styles.highlight}>excellence</span> for ambitious
                brands
              </Heading>
              <p className={styles.introText}>
                Kawaii Advanced Technology &amp; Solution Ltd (KATSL), also known as Kawaii
                Advanced and Kawaii Advanced Technology, delivers scalable software solutions
                for modern businesses. We bridge the gap between complex engineering challenges
                and elegant digital products.
              </p>

              <div className={styles.pillarList}>
                {PILLARS.map((pillar) => (
                  <article key={pillar.title} className={styles.pillar}>
                    <span className={styles.pillarIndex}>{pillar.index}</span>
                    <div className={styles.pillarBody}>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      <p className={styles.pillarDescription}>{pillar.description}</p>
                    </div>
                    <span className={styles.pillarArrow} aria-hidden="true">
                      →
                    </span>
                    <span className={styles.pillarLine} aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.mediaColumn}>
            <div className={styles.mediaFrame}>
              <div className={styles.spinBadge} aria-hidden="true">
                <svg className={styles.spinRing} viewBox="0 0 120 120">
                  <defs>
                    <path
                      id="aboutSpinPath"
                      d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
                      fill="none"
                    />
                  </defs>
                  <text className={styles.spinText}>
                    <textPath href="#aboutSpinPath">who we are • who we are • who we are •</textPath>
                  </text>
                </svg>
                <span className={styles.spinCenter}>✦</span>
              </div>

              <div className={styles.mediaClip}>
                <div className={styles.mediaInner}>
                  <Image
                    src={optimizedSrc(ABOUT_IMAGE_SOURCE)}
                    alt="Developer reviewing code with a global digital network overlay"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={optimizedBlur(ABOUT_IMAGE_SOURCE)}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.mediaImage}
                  />
                  <div className={styles.mediaOverlay} aria-hidden="true" />
                </div>
                <div className={styles.curtain} aria-hidden="true" />
                <div className={styles.curtainRed} aria-hidden="true" />
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
