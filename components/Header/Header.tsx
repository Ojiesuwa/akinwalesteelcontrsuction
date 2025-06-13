"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            AKINWALE <span className={styles.logoHighlight}>STEEL</span>
          </span>
        </Link>

        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <i
            className={
              mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </button>

        <nav
          className={`${styles.nav} ${mobileMenuOpen ? styles.navActive : ""}`}
        >
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/clients"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Clients
          </Link>
          <Link
            href="/contact"
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className={styles.ctaButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
