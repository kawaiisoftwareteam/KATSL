"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useI18n } from "@/lib/i18n";

export default function Contact({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || t("contact.error"));
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t("contact.error"));
    }
  };

  return (
    <section id="contact" className={`${styles.contact} scroll-reveal`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.titleSection}>
            <Heading className={styles.title}>
              {t("contact.titleLine1")} <br />
              {t("contact.titleLine2")}
            </Heading>
            <span className={styles.titleLine}></span>
            <p className={styles.subtitle}>
              {t("contact.subtitle")}
            </p>
          </div>

          <div>
            {status === "success" ? (
              <div className={styles.successMessage}>
                <h3 className={styles.successTitle}>{t("contact.successTitle")}</h3>
                <p className={styles.successText}>
                  {t("contact.successText")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="name@company.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    {t("contact.details")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    placeholder={t("contact.detailsPlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={styles.submitBtn}
                >
                  {status === "submitting" ? t("contact.sending") : t("contact.submit")}
                  {status !== "submitting" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </button>

                {status === "error" && errorMessage ? (
                  <p className={styles.errorMsg} role="alert">
                    {errorMessage}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
