"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/hero-background.jpg" // Replace with your high-quality industrial image
            alt="Industrial construction site"
            fill
            priority
            quality={100}
          />
        </div>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <h1 className={styles.heroTagline}>
            Precision in <span>Engineering</span>.<br />
            Excellence in <span>Delivery</span>.
          </h1>
          <p className={styles.heroSubtitle}>
            Trusted industrial engineering and construction services since 1985.
            We deliver innovative solutions with uncompromising quality and
            safety standards for your most demanding projects.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              <i
                className="fas fa-paper-plane"
                style={{ marginRight: "10px" }}
              ></i>
              Request a Quote
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              <i
                className="fas fa-hard-hat"
                style={{ marginRight: "10px" }}
              ></i>
              Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={styles.scrollIndicator}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className={styles.scrollText}>SCROLL DOWN</span>
          <i className={`fas fa-chevron-down ${styles.scrollArrow}`}></i>
        </div>
      </section>

      {/* About Summary */}
      <section className={styles.aboutSummary}>
        <div className={`${styles.container} ${styles.aboutContent}`}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>About ASC</h2>
            <p className={styles.sectionSubtitle}>
              Akinwale Steel Construction is a leading provider of industrial
              engineering services, specializing in steel construction, pipe
              fitting, and fire protection systems. With over 35 years of
              experience, we bring expertise and reliability to every project.
            </p>
            <Link href="/about" className={styles.primaryButton}>
              Learn More
            </Link>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/about-image.jpg" // Replace with your actual image path
              alt="ASC team working"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className={styles.keyServices}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Key Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive solutions tailored to meet your industrial
            construction needs
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Pipe Fitting & Welding</h3>
                <p className={styles.serviceDescription}>
                  Precision TIG/MIG welding with certified global standards for
                  all pipe materials including stainless steel, mild steel, and
                  HDPE.
                </p>
                <Link
                  href="/services#pipe-fitting"
                  className={styles.serviceLink}
                >
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fa-solid fa-fire-extinguisher"></i>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Fire Protection Systems</h3>
                <p className={styles.serviceDescription}>
                  Complete fire protection solutions including pump sizing,
                  hydrant installation, sprinkler systems, and fire
                  suppressants.
                </p>
                <Link
                  href="/services#fire-protection"
                  className={styles.serviceLink}
                >
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fa-solid fa-industry"></i>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Structural Steel Works</h3>
                <p className={styles.serviceDescription}>
                  Fabrication of steel structures with precision welding and
                  anti-rust coatings for durability and aesthetic finish.
                </p>
                <Link
                  href="/services#structural-works"
                  className={styles.serviceLink}
                >
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.viewAllButton}>
            <Link href="/services" className={styles.primaryButton}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Stats */}
      <section className={styles.clientsStats}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ color: "white" }}>
            Our Achievements
          </h2>
          <p
            className={styles.sectionSubtitle}
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Trusted by industry leaders across multiple sectors
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>35+</div>
              <div className={styles.statLabel}>Years in Business</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Satisfied Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>Accidents Last Year</div>
            </div>
          </div>

          <div className={styles.clientsLogos}>
            <h3 className={styles.clientsTitle}>
              Some of Our Esteemed Clients
            </h3>
            <div className={styles.logosContainer}>
              <Image
                src="/client-nestle.png" // Replace with actual client logos
                alt="Nestle"
                width={120}
                height={60}
                className={styles.clientLogo}
              />
              <Image
                src="/client-friesland.png"
                alt="FrieslandCampina"
                width={120}
                height={60}
                className={styles.clientLogo}
              />
              <Image
                src="/client-perfetti.png"
                alt="Perfetti Van Melle"
                width={120}
                height={60}
                className={styles.clientLogo}
              />
              <Image
                src="/client-standard-chartered.png"
                alt="Standard Chartered"
                width={120}
                height={60}
                className={styles.clientLogo}
              />
              <Image
                src="/client-a&p.png"
                alt="A&P Food Limited"
                width={120}
                height={60}
                className={styles.clientLogo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className={styles.quoteCTA}>
        <div className={`${styles.container} ${styles.quoteContent}`}>
          <h2 className={styles.sectionTitle}>Ready to Start Your Project?</h2>
          <p className={styles.quoteText}>
            Let's discuss how we can bring our engineering expertise to your
            next industrial construction project.
          </p>
          <Link href="/contact" className={styles.primaryButton}>
            Request a Project Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
