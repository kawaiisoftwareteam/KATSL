"use client";

import React from "react";
import Image from "next/image";
import { optimizedBlur, optimizedSrc } from "@/lib/site-images";
import { useI18n } from "@/lib/i18n";
import styles from "./Projects.module.css";

export default function Projects({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const { t } = useI18n();
  const projectsList = [
    {
      title: "Aura SaaS Platform",
      tag: t("work.p1Tag"),
      description: t("work.p1Desc"),
      image: "/project_enterprise.png",
      slug: "aura-saas-platform",
    },
    {
      title: "Velo Mobile Finance",
      tag: t("work.p2Tag"),
      description: t("work.p2Desc"),
      image: "/project_mobile.png",
      slug: "velo-mobile-finance",
    },
    {
      title: "Apex Agentic AI",
      tag: t("work.p3Tag"),
      description: t("work.p3Desc"),
      image: "/project_ai.png",
      slug: "apex-agentic-ai",
    }
  ];

  return (
    <section id="work" className={`${styles.work} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <div>
            <Heading className={styles.title}>{t("work.title")}</Heading>
            <span className={styles.titleLine}></span>
          </div>
          <p className={styles.subtitle}>
            {t("work.subtitle")}
          </p>
        </div>

        <div className={styles.grid}>
          {projectsList.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={optimizedSrc(project.image)}
                  alt={project.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={optimizedBlur(project.image)}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{project.tag}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <a href={`/projects/${project.slug}`} className={styles.link}>
                  {t("work.viewDetails")}
                  <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
