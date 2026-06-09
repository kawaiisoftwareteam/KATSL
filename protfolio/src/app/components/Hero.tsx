import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

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
              <span className={`${styles.accentWord} ${styles.softwareWord} ${styles.strokeWord}`}>
                SOFTWARE
              </span>
              <span className={styles.headlineLine}>That Enables Digital</span>
              <span className={`${styles.accentWord} ${styles.strokeWord}`}>
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
