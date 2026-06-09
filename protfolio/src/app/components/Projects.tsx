import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projectsList = [
    {
      title: "Aura SaaS Platform",
      tag: "Web App / Cloud",
      description: "An enterprise analytical interface delivering real-time logs and user telemetry mapping on multi-tenant backends.",
      image: "/project_enterprise.png",
      slug: "aura-saas-platform",
    },
    {
      title: "Velo Mobile Finance",
      tag: "Mobile App",
      description: "A secure banking portfolio platform built for instant transactions, ledger monitoring, and high-frequency queries.",
      image: "/project_mobile.png",
      slug: "velo-mobile-finance",
    },
    {
      title: "Apex Agentic AI",
      tag: "AI / Workflows",
      description: "A visual customer-support automation workflow builder driven by secure on-device models and API hooks.",
      image: "/project_ai.png",
      slug: "apex-agentic-ai",
    }
  ];

  return (
    <section id="work" className={`${styles.work} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <div>
            <h2 className={styles.title}>Selected Work</h2>
            <span className={styles.titleLine}></span>
          </div>
          <p className={styles.subtitle}>
            A curated showcase of scalable software platforms engineered for global reach and enterprise performance.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsList.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{project.tag}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <a href={`/projects/${project.slug}`} className={styles.link}>
                  View Details
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
