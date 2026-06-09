"use client";
import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

/* ---- Per-letter stroke animation for "SOFTWARE" ---- */
const SOFTWARE_LETTERS = [
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
  { fill: "transparent", stroke: "#D32F2F" },
];

function SoftwareWord({ word }: { word: string }) {
  return (
    <span className={`${styles.accentWord} ${styles.softwareWord}`} aria-label={word}>
      {word.split("").map((char, index) => (
        <span
          key={`${word}-${index}`}
          className={styles.softwareLetter}
          aria-hidden="true"
          style={
            {
              "--fill": SOFTWARE_LETTERS[index]?.fill ?? "transparent",
              "--stroke": SOFTWARE_LETTERS[index]?.stroke ?? "#D32F2F",
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}

/* ---- Marquee items ---- */
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

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* ── Background Layer ── */}
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.grid} />
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.topFade} />
        <div className={styles.bottomFade} />
      </div>

      {/* ── Main Content ── */}
      <div className={`container ${styles.cardContainer}`}>
        <div className={styles.card}>

          {/* ══ Left — Copy ══ */}
          <div className={styles.content}>

            {/* Availability badge */}
            <div className={styles.badge} role="status">
              <span className={styles.badgeDot} aria-hidden="true" />
              Now Accepting Projects
            </div>

            {/* Label */}
            <span className={styles.subheadline}>
              Building Digital Products That Drive Growth
            </span>

            {/* Headline */}
            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>We Build</span>
              <SoftwareWord word="SOFTWARE" />
              <span className={styles.headlineLine}>That Enables Digital</span>
              <span className={`${styles.accentWord} ${styles.successWord}`}>
                SUCCESS
              </span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
              We design, develop, and scale modern enterprise software solutions —
              delivering robust performance and intelligent design for global brands.
            </p>

            {/* CTA */}
            <div className={styles.actions}>
              <Link href="/work" className={styles.primaryBtn} id="hero-cta-work">
                View Our Work
                <span className={styles.btnArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.secondaryBtn} id="hero-cta-contact">
                Contact Us
              </Link>
            </div>

            {/* Stats row */}
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statValue}>50+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <span className={styles.statValue}>12+</span>
                <span className={styles.statLabel}>Global Clients</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <span className={styles.statValue}>5★</span>
                <span className={styles.statLabel}>Client Rating</span>
              </div>
            </div>
          </div>

          {/* ══ Right — Visual ══ */}
          <div className={styles.visual}>
            <div className={styles.videoWrapper}>
              {/* Corner accent lines */}
              <span className={styles.accentLine} aria-hidden="true" />
              <span className={styles.accentLineBottomRight} aria-hidden="true" />

              {/* Video */}
              <div className={styles.videoInner}>
                <video
                  className={styles.heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Global business connectivity animation"
                >
                  <source src="/White_background_Large_outlin.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Floating glass card — top left */}
              <div className={`${styles.floatCard} ${styles.floatCard1}`} aria-hidden="true">
                <div className={styles.floatIcon}>🚀</div>
                <div className={styles.floatInfo}>
                  <span className={styles.floatValue}>Fast Delivery</span>
                  <span className={styles.floatLabel}>Agile Process</span>
                </div>
              </div>

              {/* Floating glass card — bottom right */}
              <div className={`${styles.floatCard} ${styles.floatCard2}`} aria-hidden="true">
                <div className={styles.floatIcon}>🏆</div>
                <div className={styles.floatInfo}>
                  <span className={styles.floatValue}>Award Winning</span>
                  <span className={styles.floatLabel}>Design & Dev</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Marquee Strip ── */}
      <div className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeTrack}>
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
