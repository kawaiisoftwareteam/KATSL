import React from "react";
import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  const servicesList = [
    {
      number: "01",
      title: "Web Development",
      image: "/services/web_development.png",
      description: "Scale your reach with premium frontends and secure backends built using Next.js, React, and robust API frameworks.",
      tags: ["Next.js", "React", "TypeScript", "REST/GraphQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Mobile Apps",
      image: "/services/mobile_apps.png",
      description: "Deliver high-fidelity cross-platform applications built on React Native with smooth navigation and native experiences.",
      tags: ["React Native", "iOS & Android", "Expo", "Mobile UI"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      number: "03",
      title: "UI/UX Design",
      image: "/services/ui_ux_design.png",
      description: "Craft premium digital design assets, prototypes, and user experiences that align perfectly with enterprise brand structures.",
      tags: ["Figma", "Design Systems", "User Research", "Wireframing"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Cloud Solutions",
      image: "/services/cloud_solutions.png",
      description: "Deploy scalable, zero-downtime, secure architectures on AWS, GCP, and Vercel. Optimize infrastructure budgets.",
      tags: ["AWS", "GCP", "Docker", "DevOps & CI/CD"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "AI Integration",
      image: "/services/ai_integration.png",
      description: "Implement custom LLM logic, vector databases, search intelligence, and specialized agent tools into your business tools.",
      tags: ["LLM Agents", "OpenAI & Gemini", "Vector DB", "RAG Pipeline"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2V6" />
          <path d="M12 18V22" />
          <path d="M4.93 4.93L7.76 7.76" />
          <path d="M16.24 16.24L19.07 19.07" />
          <path d="M2 12H6" />
          <path d="M18 12H22" />
          <path d="M7.76 16.24L4.93 19.07" />
          <path d="M19.07 4.93L16.24 7.76" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Software Consulting",
      image: "/services/software_consulting.png",
      description: "Analyze workflows, audit existing codebases, plan technical migrations, and refine engineering architectures.",
      tags: ["Code Audit", "Architecture", "Tech Migration", "Strategy"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className={`${styles.services} scroll-reveal`}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.titleSection}>
            <span className={styles.badge}>WHAT WE DO</span>
            <h2 className={styles.title}>
              Engineering Excellence <span className="text-brand">&amp;</span> Innovation
            </h2>
            <span className={styles.titleLine}></span>
          </div>
          <p className={styles.subtitle}>
            We craft high-performance digital products, scalable cloud systems, and intelligent AI solutions tailored for enterprise growth.
          </p>
        </div>

        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                />
                <div className={styles.imageOverlay} />
                <span className={styles.glassNumber}>{service.number}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardDescription}>{service.description}</p>

                <div className={styles.tagList}>
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <a href="#contact" className={styles.learnMore}>
                    <span>Request Service</span>
                    <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
