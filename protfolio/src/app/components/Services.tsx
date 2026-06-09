import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  const servicesList = [
    {
      number: "01",
      title: "Web Development",
      description: "Scale your reach with premium frontends and secure backends built using Next.js, React, and robust API frameworks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Mobile Apps",
      description: "Deliver high-fidelity cross-platform applications built on React Native with smooth navigation and native experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      number: "03",
      title: "UI/UX Design",
      description: "Craft premium digital design assets, prototypes, and user experiences that align perfectly with enterprise brand structures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Cloud Solutions",
      description: "Deploy scalable, zero-downtime, secure architectures on AWS, GCP, and Vercel. Optimize infrastructure budgets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "AI Integration",
      description: "Implement custom LLM logic, vector databases, search intelligence, and specialized agent tools into your business tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      description: "Analyze workflows, audit existing code codebases, plan technical migrations, and refine engineering architectures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className={`${styles.services} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <h2 className={styles.title}>What We Do</h2>
          <span className={styles.titleLine}></span>
        </div>

        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <span className={styles.cardNumber}>{service.number}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
