"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";
import { useI18n } from "@/lib/i18n";

export default function WhyChooseUs({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const { t } = useI18n();
  const stats = [
    {
      number: "50+",
      label: t("why.s1"),
      sublabel: t("why.s1sub"),
    },
    {
      number: "20+",
      label: t("why.s2"),
      sublabel: t("why.s2sub"),
    },
    {
      number: "99%",
      label: t("why.s3"),
      sublabel: t("why.s3sub"),
    },
    {
      number: "24/7",
      label: t("why.s4"),
      sublabel: t("why.s4sub"),
    },
  ];

  return (
    <section id="why-us" className={`${styles.whyUs} scroll-reveal`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Heading className={styles.title}>
              {t("why.title")} <br />
              <span className={styles.titleRed}>Kawaii</span>
            </Heading>
            <p className={styles.description}>
              {t("why.description")}
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
