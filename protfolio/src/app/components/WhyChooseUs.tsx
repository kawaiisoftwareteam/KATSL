import React from "react";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const stats = [
    {
      number: "50+",
      label: "Projects",
      sublabel: "Delivered successfully",
    },
    {
      number: "20+",
      label: "Clients",
      sublabel: "Global enterprise partners",
    },
    {
      number: "99%",
      label: "Satisfaction",
      sublabel: "Client retention rate",
    },
    {
      number: "24/7",
      label: "Support",
      sublabel: "Continuous site uptime monitoring",
    },
  ];

  return (
    <section id="why-us" className={`${styles.whyUs} scroll-reveal`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>
              Why <br />
              <span className={styles.titleRed}>Kawaii</span>
            </h2>
            <p className={styles.description}>
              We combine robust engineering practices with modern aesthetics to deliver software that doesn't just work, but scales and empowers your enterprise.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.number}>{stat.number}</span>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.sublabel}>{stat.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
