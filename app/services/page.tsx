import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroSubtitle}>
            Comprehensive industrial construction and management services
            covering the entire project lifecycle
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Core Services</h2>
          <p className={styles.sectionSubtitle}>
            Specialized solutions tailored to meet your industrial construction
            needs
          </p>

          <div className={styles.servicesGrid}>
            {/* Pipe Fitting & Welding */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/services-pipe-fitting.webp"
                  alt="Pipe fitting and welding"
                  fill
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-pipe-circle-check"></i>
                </div>
                <h3 className={styles.serviceTitle}>Pipe Fitting & Welding</h3>
                <p className={styles.serviceDescription}>
                  Precision TIG/MIG welding with certified global standards for
                  stainless steel, mild steel, and HDPE pipes. Our certified
                  welders deliver flawless joints for critical industrial
                  applications.
                </p>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Tank Fabrication */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/services-tank-fabrication.jpg"
                  alt="Tank fabrication"
                  fill
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className={styles.serviceTitle}>Tank Fabrication</h3>
                <p className={styles.serviceDescription}>
                  Custom stainless & mild steel tanks in all capacities and
                  orientations. We specialize in jacketed tanks and vessels with
                  precision fabrication for chemical, food, and pharmaceutical
                  industries.
                </p>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Fire Protection */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/services-fire-protection.jpg"
                  alt="Fire protection system"
                  fill
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-fire-extinguisher"></i>
                </div>
                <h3 className={styles.serviceTitle}>Fire Protection Systems</h3>
                <p className={styles.serviceDescription}>
                  Complete fire protection solutions including hydraulic
                  calculations, sprinkler systems, FM 200 suppressants, and foam
                  generators. We design for compliance with all NFPA standards.
                </p>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Structural Works */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/services-structural-works.jpeg"
                  alt="Structural steel works"
                  fill
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-building"></i>
                </div>
                <h3 className={styles.serviceTitle}>Structural Works</h3>
                <p className={styles.serviceDescription}>
                  Prefabricated steel structures with precision welding and
                  anti-rust epoxy coatings. Our modular designs allow for future
                  expansion while maintaining structural integrity.
                </p>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Insulation & Cladding */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/services-insulation.webp"
                  alt="Insulation and cladding"
                  fill
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-layer-group"></i>
                </div>
                <h3 className={styles.serviceTitle}>Insulation & Cladding</h3>
                <p className={styles.serviceDescription}>
                  High-performance insulation for steam, hot and chilled water
                  lines using rockwool and polystyrene. Finished with durable
                  aluminum cladding in custom colors for utility coding.
                </p>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Electrical Installations */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/services-electrical.jpg"
                  alt="Electrical installations"
                  fill
                />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className={styles.serviceTitle}>
                  Electrical Installations
                </h3>
                <p className={styles.serviceDescription}>
                  Industrial electrical systems including cable tray networks,
                  LV/MV terminations, explosion-proof lighting, and underground
                  cable laying. We ensure compliance with IEC and NEC standards.
                </p>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className={`${styles.section} ${styles.otherServices}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Additional Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive solutions for complete project execution
          </p>

          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <i className="fas fa-truck-moving"></i>
              </div>
              <span>Heavy Equipment Ingress</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <i className="fas fa-hammer"></i>
              </div>
              <span>Civil Construction</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <i className="fas fa-boxes"></i>
              </div>
              <span>Industrial Procurement</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <i className="fas fa-crane"></i>
              </div>
              <span>Equipment Rigging</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <i className="fas fa-tools"></i>
              </div>
              <span>Plant Maintenance</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceItemIcon}>
                <i className="fas fa-project-diagram"></i>
              </div>
              <span>Project Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to discuss your project?</h2>
          <p
            className={styles.sectionSubtitle}
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Our team of experts is ready to deliver tailored solutions for your
            industrial needs
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            <i className="fas fa-paper-plane"></i> Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
