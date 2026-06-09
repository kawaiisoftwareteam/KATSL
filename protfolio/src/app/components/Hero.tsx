import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

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
    <span
      className={`${styles.accentWord} ${styles.softwareWord}`}
      aria-label={word}
    >
      {word.split("").map((char, index) => (
        <span
          key={`${word}-${index}`}
          className={styles.softwareLetter}
          aria-hidden="true"
          style={
            {
              "--fill": SOFTWARE_LETTERS[index].fill,
              "--stroke": SOFTWARE_LETTERS[index].stroke,
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.cardContainer}`}>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.subheadline}>
              Building Digital Products That Drive Growth
            </span>
            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>We Build</span>
              <SoftwareWord word="SOFTWARE" />
              <span className={styles.headlineLine}>That Enables Digital</span>
              <span className={`${styles.accentWord} ${styles.successWord}`}>
                SUCCESS
              </span>
            </h1>
            <p className={styles.description}>
              We design, develop, and scale modern enterprise software solutions. Delivering robust performance and intelligent design for global brands.
            </p>
            <div className={styles.actions}>
              <Link href="/work" className={styles.primaryBtn}>
                View Work
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.videoWrapper}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
