"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO_SOURCE, optimizedBlur, optimizedSrc } from "@/lib/site-images";
import { useI18n } from "@/lib/i18n";
import styles from "./Header.module.css";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLetsTalkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we are already on the contact page, force the scroll to the section.
    if (pathname === "/contact") {
      e.preventDefault();
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src={optimizedSrc(LOGO_SOURCE)}
              alt="Kawaii Advance Logo"
              width={200}
              height={55}
              className={styles.logoImage}
              priority
              placeholder="blur"
              blurDataURL={optimizedBlur(LOGO_SOURCE)}
            />
          </Link>

          <nav>
            <ul className={styles.navList}>
              <li>
                <Link href="/about" className={styles.navLink}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.navLink}>
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/work" className={styles.navLink}>
                  {t("nav.work")}
                </Link>
              </li>
              <li>
                <Link href="/why-us" className={styles.navLink}>
                  {t("nav.whyUs")}
                </Link>
              </li>
              <li>
                <Link href="/team" className={styles.navLink}>
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.navLink}>
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.rightActions}>
            <Link href="/contact#contact" className={styles.ctaBtn} onClick={handleLetsTalkClick}>
              {t("nav.letsTalk")}
            </Link>
            <div className={styles.langSwitch} aria-label="Language">
              <button
                type="button"
                className={`${styles.langBtn} ${lang === "en" ? styles.langBtnActive : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <span className={styles.langDivider}>/</span>
              <button
                type="button"
                className={`${styles.langBtn} ${lang === "ja" ? styles.langBtnActive : ""}`}
                onClick={() => setLang("ja")}
              >
                JP
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnActive : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile navigation drawer */}
      <div
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerActive : ""}`}
      >
        <ul className={styles.mobileNavList}>
          <li>
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("nav.services")}
            </Link>
          </li>
          <li>
            <Link href="/work" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("nav.work")}
            </Link>
          </li>
          <li>
            <Link href="/why-us" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("nav.whyUs")}
            </Link>
          </li>
          <li>
            <Link href="/team" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("nav.team")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("nav.contact")}
            </Link>
          </li>
        </ul>
        <Link
          href="/contact#contact"
          className={styles.ctaBtn}
          style={{ display: "block", textAlign: "center" }}
          onClick={(e) => {
            handleLetsTalkClick(e);
            closeMenu();
          }}
        >
          {t("nav.letsTalk")}
        </Link>
      </div>
    </>
  );
}

