"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LOGO_SOURCE, optimizedBlur, optimizedSrc } from "@/lib/site-images";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.navLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className={styles.navLink}>
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/why-us" className={styles.navLink}>
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/team" className={styles.navLink}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="/contact" className={styles.ctaBtn}>
            Let's Talk
          </Link>

          <button
            type="button"
            className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnActive : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              Who We Are
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/work" className={styles.mobileNavLink} onClick={closeMenu}>
              Selected Work
            </Link>
          </li>
          <li>
            <Link href="/why-us" className={styles.mobileNavLink} onClick={closeMenu}>
              Why Us
            </Link>
          </li>
          <li>
            <Link href="/team" className={styles.mobileNavLink} onClick={closeMenu}>
              Our Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/contact" className={styles.ctaBtn} style={{ display: "block", textAlign: "center" }} onClick={closeMenu}>
          Let's Talk
        </Link>
      </div>
    </>
  );
}

