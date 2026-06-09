"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
              src="/KATSL_Logo.3692a9b70d427f6902c5.png"
              alt="Kawaii Advance Logo"
              width={200}
              height={55}
              style={{ objectFit: "contain", height: "55px", width: "auto" }}
              priority
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
            className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
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
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerActive : ""}`}>
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

