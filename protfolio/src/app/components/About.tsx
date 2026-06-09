import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} scroll-reveal`}>
      <div className="container">
        <div className={styles.headerGrid}>
          <div>
            <h2 className={styles.title}>Who We Are</h2>
            <span className={styles.titleLine}></span>
          </div>
          <div>
            <p className={styles.introText}>
              A technology company delivering scalable software solutions for modern businesses. We bridge the gap between complex engineering challenges and elegant digital solutions.
            </p>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {/* Innovation Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Innovation</h3>
            <p className={styles.cardDescription}>
              Continuously pioneering new architectures and adopting modern AI integrations to keep your enterprise ahead of the technological curve.
            </p>
          </div>

          {/* Quality Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Quality</h3>
            <p className={styles.cardDescription}>
              Uncompromising standards in clean code, automated testing pipelines, and responsive performance ensuring robust product stability.
            </p>
          </div>

          {/* Reliability Card */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Reliability</h3>
            <p className={styles.cardDescription}>
              On-time delivery, clear architecture documentation, and 24/7 service monitoring to support and scale your operations seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
