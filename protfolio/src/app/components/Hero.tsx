"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { HERO_IMAGES, optimizedBlur, optimizedSrc } from "@/lib/site-images";
import { useI18n } from "@/lib/i18n";
import styles from "./Hero.module.css";

const SLIDE_INTERVAL = 5.5;
const SLIDE_DURATION = 1.4;

export default function Hero() {
  const { t, lang } = useI18n();
  const heroRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentSlideRef = useRef(0);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (slides.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? "1" : "0";
      });
      return;
    }

    currentSlideRef.current = 0;
    gsap.set(slides, { opacity: 0, scale: 1.06 });
    gsap.set(slides[0], { opacity: 1, scale: 1 });

    const crossfade = () => {
      const current = currentSlideRef.current;
      const next = (current + 1) % slides.length;

      gsap.to(slides[current], {
        opacity: 0,
        scale: 1.06,
        duration: SLIDE_DURATION,
        ease: "power2.inOut",
      });

      gsap.to(slides[next], {
        opacity: 1,
        scale: 1,
        duration: SLIDE_DURATION,
        ease: "power2.inOut",
      });

      currentSlideRef.current = next;
    };

    const intervalId = window.setInterval(crossfade, SLIDE_INTERVAL * 1000);

    const ctx = gsap.context(() => {
      const lines = root.querySelectorAll(`.${styles.headlineLine}`);
      const tagline = root.querySelector(`.${styles.tagline}`);

      gsap.set(lines, {
        opacity: 0,
        y: 80,
        rotateX: -40,
        transformOrigin: "50% 100%",
        filter: "blur(6px)",
      });

      if (tagline) {
        gsap.set(tagline, { opacity: 0, y: 28 });
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.4 });

      tl.to(lines[0], {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1,
      })
        .to(
          lines[1],
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "back.out(1.4)",
          },
          "-=0.65"
        )
        .to(
          lines[2],
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1,
          },
          "-=0.7"
        );

      if (tagline) {
        tl.to(
          tagline,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
          },
          "-=0.55"
        );
      }

      if (lines[1]) {
        gsap.to(lines[1], {
          y: -8,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2.2,
        });
      }

      gsap.from(`.${styles.scrollIndicator}`, {
        opacity: 0,
        x: 16,
        duration: 0.9,
        ease: "power3.out",
        delay: 1.1,
      });

      gsap.to(`.${styles.scrollArrow}`, {
        y: 10,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
    }, root);

    return () => {
      window.clearInterval(intervalId);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    HERO_IMAGES.slice(1).forEach((image) => {
      const img = new window.Image();
      img.src = optimizedSrc(image.source);
    });
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      <svg className={styles.clipSvg} aria-hidden="true">
        <defs>
          <clipPath id="heroCurveClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.76 C1,0.9 0.9,1 0.74,1 H0 Z" />
          </clipPath>
          <clipPath id="heroCurveClipMobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.88 C1,0.96 0.94,1 0.82,1 H0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.heroLayout}>
        <div className={styles.redBar} aria-hidden="true" />

        <div className={styles.mediaArea}>
          <div className={styles.mediaClip}>
            <div className={styles.slides}>
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={image.source}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  className={styles.slide}
                  aria-hidden={index !== 0}
                >
                  <Image
                    src={optimizedSrc(image.source)}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL={optimizedBlur(image.source)}
                    sizes="(max-width: 900px) 100vw, 85vw"
                    className={styles.slideImage}
                  />
                </div>
              ))}
            </div>

            <div className={styles.mediaOverlay} aria-hidden="true" />
          </div>

          <div className={styles.heroContent}>
            <p className={styles.brandName}>
              {t("hero.brand")}
            </p>
            <h1 className={`${styles.headline} ${lang === "ja" ? styles.headlineJa : ""}`}>
              <span className={`${styles.headlineLine} ${styles.solidWord}`}>{t("hero.line1")}</span>
              <span className={`${styles.headlineLine} ${styles.outlineWord}`}>{t("hero.line2")}</span>
              <span className={`${styles.headlineLine} ${styles.solidWord}`}>{t("hero.line3")}</span>
            </h1>
            <p className={styles.tagline}>
              {t("hero.tagline")}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>{t("hero.scroll")}</span>
        <span className={styles.scrollLine} />
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}
