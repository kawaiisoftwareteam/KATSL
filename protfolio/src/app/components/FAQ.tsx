"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`${styles.faq} scroll-reveal`}>
      <div className="container">
        <div className={styles.titleSection}>
          <h2 className={styles.title}>{t("faq.title")}</h2>
          <span className={styles.titleLine}></span>
          <p className={styles.subtitle}>
            {t("faq.subtitle")}
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
