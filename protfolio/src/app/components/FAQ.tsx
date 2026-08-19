"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What services does KATSL provide?",
    answer:
      "We provide custom software development, SaaS solutions (including ERP), web and mobile app development, AI/ML integration, UI/UX design, cloud infrastructure, and offshore team augmentation.",
  },
  {
    question: "Where are your offices located?",
    answer:
      "Our headquarters is in Dhaka, Bangladesh with additional offices in Tokyo, Japan; Montreal, Canada; and Kuala Lumpur, Malaysia.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve enterprises, SMEs, and startups across fintech, healthcare, construction, e-commerce, real estate, and education sectors globally.",
  },
  {
    question: "Do you offer offshore development or team augmentation?",
    answer:
      "Yes. We provide dedicated offshore development teams and staff augmentation services, allowing you to scale your engineering capacity without the overhead of in-house hiring.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our team specializes in React, Next.js, Node.js, Python, Java, .NET, Flutter, cloud platforms (AWS, Azure, GCP), and AI/ML frameworks. We choose the best stack based on project requirements.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Reach out through our contact form or email us at info@kawaiibd.com. We'll schedule a discovery call to understand your requirements and propose a tailored solution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`${styles.faq} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <h2 className={styles.title}>FAQ</h2>
          <span className={styles.titleLine}></span>
          <p className={styles.subtitle}>
            Common questions about our services, process, and company.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.item} ${openIndex === index ? styles.active : ""}`}
            >
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <svg
                  className={`${styles.icon} ${openIndex === index ? styles.rotated : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
