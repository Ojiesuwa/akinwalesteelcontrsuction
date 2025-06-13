import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <Link href="/" className={styles.footerLogo}>
            <span className={styles.footerLogoText}>
              AKINWALE <span className={styles.footerLogoHighlight}>STEEL</span>
            </span>
          </Link>
          <div className={styles.footerAbout}>
            <p className={styles.footerAboutText}>
              Providing precision engineering and construction services since
              1985. Our commitment to excellence drives every project we
              undertake.
            </p>
          </div>
        </div>

        <div>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLinkItem}>
              <Link href="/about" className={styles.footerLink}>
                <i className="fa-solid fa-chevron-right"></i> About Us
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="/services" className={styles.footerLink}>
                <i className="fa-solid fa-chevron-right"></i> Our Services
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="/projects" className={styles.footerLink}>
                <i className="fa-solid fa-chevron-right"></i> Projects
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="/clients" className={styles.footerLink}>
                <i className="fa-solid fa-chevron-right"></i> Our Clients
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="/contact" className={styles.footerLink}>
                <i className="fa-solid fa-chevron-right"></i> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.footerHeading}>Services</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLinkItem}>
              <Link href="/services#pipe-fitting" className={styles.footerLink}>
                <i className="fa-solid fa-chevron-right"></i> Pipe Fitting
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link
                href="/services#tank-fabrication"
                className={styles.footerLink}
              >
                <i className="fa-solid fa-chevron-right"></i> Tank Fabrication
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link
                href="/services#fire-protection"
                className={styles.footerLink}
              >
                <i className="fa-solid fa-chevron-right"></i> Fire Protection
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link
                href="/services#structural-works"
                className={styles.footerLink}
              >
                <i className="fa-solid fa-chevron-right"></i> Structural Works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                11, Ola Ore Street, Mafoluku, Oshodi, Lagos State, Nigeria
              </span>
            </div>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-phone"></i>
              <span>+234 802 331 2323</span>
            </div>
            <div className={styles.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <span>akinwalesteelconstruction@gmail.com</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Akinwale Steel Construction. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
