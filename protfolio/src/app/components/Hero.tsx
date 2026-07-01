"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Hero.module.css";

const SOFTWARE_LETTERS = "SOFTWARE".split("");

const MARQUEE_ITEMS = [
  "Enterprise Software",
  "Mobile Applications",
  "Cloud Infrastructure",
  "AI Integration",
  "UI / UX Design",
  "Digital Transformation",
  "Agile Development",
  "Global Delivery",
];

const TECH_STACK = [
  { label: "React", tag: "Frontend" },
  { label: "Next.js", tag: "Framework" },
  { label: "Node.js", tag: "Backend" },
  { label: "AWS", tag: "Cloud" },
  { label: "AI / ML", tag: "Intelligence" },
  { label: "Mobile", tag: "iOS & Android" },
];

const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Global Clients" },
  { value: 5, suffix: "★", label: "Client Rating" },
];

function SoftwareWord() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = wordRef.current;
    if (!root) return;

    const letters = root.querySelectorAll(`.${styles.softwareLetter}`);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      gsap.set(letters, { opacity: 1, y: 0, rotateX: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set(letters, {
        opacity: 0,
        y: 110,
        rotateX: -92,
        scale: 0.55,
        transformOrigin: "50% 100%",
        filter: "blur(8px)",
      });

      tl.to(letters, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.05,
        stagger: {
          each: 0.09,
          from: "center",
        },
        ease: "back.out(1.6)",
      });

      tl.to(
        letters,
        {
          color: "#D32F2F",
          webkitTextStrokeColor: "rgba(211, 47, 47, 0)",
          duration: 0.45,
          stagger: 0.07,
          ease: "power2.inOut",
        },
        "-=0.35"
      );

      tl.to(
        letters,
        {
          y: -6,
          duration: 0.35,
          stagger: 0.05,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        },
        "-=0.1"
      );

      gsap.to(letters, {
        y: "+=4",
        duration: 2.8,
        stagger: { each: 0.18, repeat: -1, yoyo: true },
        ease: "sine.inOut",
        delay: 1.8,
      });

      const letterCleanups: Array<() => void> = [];

      letters.forEach((letter, index) => {
        const el = letter as HTMLElement;

        const onEnter = () => {
          gsap.to(el, {
            scale: 1.14,
            color: "#B71C1C",
            webkitTextStrokeColor: "transparent",
            duration: 0.28,
            ease: "back.out(2)",
          });
          gsap.to(letters, {
            y: (i) => (i === index ? -10 : (i - index) * 2),
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const onLeave = () => {
          gsap.to(el, {
            scale: 1,
            color: "#D32F2F",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(letters, {
            y: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
          });
        };

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        letterCleanups.push(() => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => {
        letterCleanups.forEach((cleanup) => cleanup());
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={wordRef}
      className={`${styles.accentWord} ${styles.softwareWord}`}
      aria-label="SOFTWARE"
    >
      {SOFTWARE_LETTERS.map((char, index) => (
        <span key={`software-${index}`} className={styles.softwareLetter} aria-hidden="true">
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(`.${styles.badge}`, {
        opacity: 0,
        scale: 0.6,
        y: 24,
        duration: 0.7,
        ease: "back.out(2)",
      })
        .from(
          `.${styles.subheadline}`,
          { opacity: 0, x: -30, duration: 0.6 },
          "-=0.35"
        )
        .from(
          `.${styles.headlineLine}`,
          { opacity: 0, y: 50, duration: 0.75, stagger: 0.12 },
          "-=0.4"
        )
        .from(
          `.${styles.successWord}`,
          {
            opacity: 0,
            scale: 0.7,
            y: 40,
            duration: 0.9,
            ease: "back.out(1.8)",
          },
          "-=0.45"
        )
        .from(
          `.${styles.description}`,
          { opacity: 0, y: 30, duration: 0.65 },
          "-=0.5"
        )
        .from(
          `.${styles.actions} > *`,
          { opacity: 0, y: 24, duration: 0.5, stagger: 0.1 },
          "-=0.4"
        )
        .from(
          `.${styles.stat}`,
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.08 },
          "-=0.35"
        );

      gsap.from(`.${styles.visualCard}`, {
        opacity: 0,
        y: 60,
        scale: 0.92,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.to(`.${styles.orb}`, {
        x: "random(-30, 30)",
        y: "random(-25, 25)",
        duration: "random(14, 22)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(`.${styles.grid}`, {
        backgroundPosition: "36px 36px",
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      STATS.forEach((stat, index) => {
        const el = statRefs.current[index];
        if (!el) return;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 2.2,
          delay: 1.2 + index * 0.15,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(counter.val)}${stat.suffix}`;
          },
        });
      });

      const marquee = marqueeRef.current;
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          duration: 28,
          repeat: -1,
          ease: "none",
        });
      }

      const onMove = (event: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (event.clientX / innerWidth - 0.5) * 2;
        const y = (event.clientY / innerHeight - 0.5) * 2;

        gsap.to(`.${styles.visualPanel}`, {
          x: x * 14,
          y: y * 10,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(`.${styles.orb1}`, { x: x * -22, y: y * -18, duration: 1.8, ease: "power2.out" });
        gsap.to(`.${styles.orb2}`, { x: x * 18, y: y * 14, duration: 2, ease: "power2.out" });
      };

      window.addEventListener("mousemove", onMove);

      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.meshGradient} />
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.noise} />
        <div className={styles.topFade} />
        <div className={styles.bottomFade} />
      </div>

      <div className={`container ${styles.cardContainer}`}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge} role="status">
              <span className={styles.badgeDot} aria-hidden="true" />
              Now Accepting Projects
            </div>

            <span className={styles.subheadline}>
              Building Digital Products That Drive Growth
            </span>

            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>We Build</span>
              <SoftwareWord />
              <span className={styles.headlineLine}>That Enables Digital</span>
              <span className={`${styles.accentWord} ${styles.successWord}`}>SUCCESS</span>
            </h1>

            <p className={styles.description}>
              We design, develop, and scale modern enterprise software solutions —
              delivering robust performance and intelligent design for global brands.
            </p>

            <div className={styles.actions}>
              <Link href="/work" className={styles.primaryBtn} id="hero-cta-work">
                View Our Work
                <span className={styles.btnArrow} aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/contact" className={styles.secondaryBtn} id="hero-cta-contact">
                Contact Us
              </Link>
            </div>

            <div className={styles.statsRow}>
              {STATS.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  {index > 0 && <div className={styles.statDivider} aria-hidden="true" />}
                  <div className={styles.stat}>
                    <span
                      ref={(el) => {
                        statRefs.current[index] = el;
                      }}
                      className={styles.statValue}
                    >
                      0{stat.suffix}
                    </span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.visualPanel} aria-hidden="true">
            <div className={styles.visualGlow} />
            <div className={styles.visualFrame}>
              <div className={styles.frameHeader}>
                <span className={styles.frameDot} />
                <span className={styles.frameDot} />
                <span className={styles.frameDot} />
                <span className={styles.frameTitle}>katsl.dev</span>
              </div>
              <div className={styles.visualGrid}>
                {TECH_STACK.map((item) => (
                  <div key={item.label} className={styles.visualCard}>
                    <span className={styles.cardTag}>{item.tag}</span>
                    <span className={styles.cardLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.codeStrip}>
                <span className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span> build ={" "}
                  <span className={styles.codeString}>&quot;scalable&quot;</span>;
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.codeKeyword}>await</span> deploy(
                  <span className={styles.codeFn}>enterprise</span>);
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marqueeSection} aria-hidden="true">
        <div ref={marqueeRef} className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className={styles.marqueeItem} key={i}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
