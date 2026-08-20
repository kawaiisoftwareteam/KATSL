"use client";

import React from "react";
import Image from "next/image";
import { LOGO_SOURCE, optimizedBlur, optimizedSrc } from "@/lib/site-images";
import { useI18n } from "@/lib/i18n";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.logo}>
              <Image
                src={optimizedSrc(LOGO_SOURCE)}
                alt="Kawaii Advance Logo"
                width={200}
                height={55}
                loading="lazy"
                placeholder="blur"
                blurDataURL={optimizedBlur(LOGO_SOURCE)}
                style={{ objectFit: "contain", height: "55px", width: "auto" }}
              />
            </span>
            <p className={styles.copyright} style={{ maxWidth: "420px", marginBottom: "1rem" }}>
              {t("footer.blurb")}
            </p>
          </div>

          <div className={styles.contactInfo}>
            <h4 className={styles.infoTitle}>{t("footer.office")}</h4>
            <div className={styles.contactItems}>
              <a href="tel:+8801901850570" className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+88 01901850570</span>
              </a>
              <a href="mailto:info@kawaiibd.com" className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>info@kawaiibd.com</span>
              </a>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura, Dhaka-1219</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Kawaii Advanced Technology & Solution Ltd. {t("footer.rights")}
          </p>
          <ul className={styles.socialList}>
            <li>
              <a href="https://www.linkedin.com/company/katsl/" target="_blank" rel="noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
