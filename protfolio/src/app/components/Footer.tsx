import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.logo}>
              <Image
                src="/KATSL_Logo.3692a9b70d427f6902c5.png"
                alt="Kawaii Advance Logo"
                width={200}
                height={55}
                style={{ objectFit: "contain", height: "55px", width: "auto" }}
              />
            </span>
            <p className={styles.copyright} style={{ maxWidth: "420px", marginBottom: "1rem" }}>
              Kawaii Advance Technology & Solution Limited is a registered enterprise software development company delivering premium engineering systems.
            </p>
          </div>

          <div className={styles.contactInfo}>
            <div>
              <h4 className={styles.infoTitle}>Connect with us</h4>
              <a href="mailto:info@kawaiiadvan.tech" className={styles.infoLink}>
                info@kawaiiadvan.tech
              </a>
            </div>
            <div>
              <h4 className={styles.infoTitle}>Call sales</h4>
              <a href="tel:+880212345678" className={styles.infoLink}>
                +880 2 12345678
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Kawaii Advance Technology & Solution Limited. All rights reserved.
          </p>
          <ul className={styles.socialList}>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
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
