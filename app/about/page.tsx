import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className={styles.aboutHero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroSubtitle}>
            For over three decades, Akinwale Steel Construction has been shaping
            Nigeria's industrial landscape with precision engineering and
            unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`${styles.section} ${styles.timelineSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <p className={styles.sectionSubtitle}>
            Milestones that define our growth and commitment to industrial
            excellence
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>1985</div>
                <h3>Company Founded</h3>
                <p>
                  Established as a small steel fabrication workshop in Lagos,
                  serving local manufacturing plants
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>1992</div>
                <h3>Incorporation</h3>
                <p>
                  Officially incorporated as Akinwale Steel Construction Ltd,
                  expanding our service offerings
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2001</div>
                <h3>Oil & Gas Expansion</h3>
                <p>
                  Won our first major contract in the oil and gas sector,
                  marking a significant expansion
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2010</div>
                <h3>International Standards</h3>
                <p>
                  Achieved ISO 9001 certification, implementing world-class
                  quality management systems
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>2020</div>
                <h3>35th Anniversary</h3>
                <p>
                  Celebrated 35 years of excellence with over 100 completed
                  projects across multiple industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.section} ${styles.missionVisionSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ color: "white" }}>
            Our Core Philosophy
          </h2>
          <p
            className={styles.sectionSubtitle}
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Guiding principles that drive our operations and client
            relationships
          </p>

          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className={styles.cardTitle}>Mission</h3>
              <p>
                To deliver exceptional industrial engineering solutions through
                innovation, quality craftsmanship, and unwavering commitment to
                safety and client satisfaction.
              </p>
            </div>

            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 className={styles.cardTitle}>Vision</h3>
              <p>
                To be Africa's preferred industrial engineering partner,
                recognized for technical excellence and transformative project
                delivery across all sectors we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HSE Policy */}
      <section className={`${styles.section} ${styles.hseSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Safety Commitment</h2>
          <p className={styles.sectionSubtitle}>
            Health, Safety, and Environment are at the core of everything we do
          </p>

          <div className={styles.hseGrid}>
            <div className={styles.hseCard}>
              <div className={styles.hseIcon}>
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3 className={styles.hseTitle}>Zero Accidents</h3>
              <p>
                We maintain rigorous safety protocols to ensure accident-free
                worksites through continuous training and monitoring.
              </p>
            </div>

            <div className={styles.hseCard}>
              <div className={styles.hseIcon}>
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className={styles.hseTitle}>Health First</h3>
              <p>
                Regular health check-ups and wellness programs for our team
                ensure peak performance and well-being.
              </p>
            </div>

            <div className={styles.hseCard}>
              <div className={styles.hseIcon}>
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className={styles.hseTitle}>Environmental Care</h3>
              <p>
                Sustainable practices minimize our environmental impact, with
                proper waste management and emission controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.section} ${styles.whyChooseSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose ASC</h2>
          <p className={styles.sectionSubtitle}>
            What sets us apart in the industrial engineering sector
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className={styles.featureTitle}>Turnkey Solutions</h3>
              <p className={styles.featureDescription}>
                From design to completion, we handle every aspect with seamless
                integration, ensuring consistency and quality at every stage.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className={styles.featureTitle}>Certified Experts</h3>
              <p className={styles.featureDescription}>
                Our team comprises registered engineers with international
                certifications and decades of hands-on experience.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className={styles.featureTitle}>Safety Culture</h3>
              <p className={styles.featureDescription}>
                Daily safety briefings, rigorous training, and continuous
                monitoring maintain our zero-accident policy.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-medal"></i>
              </div>
              <h3 className={styles.featureTitle}>Proven Excellence</h3>
              <p className={styles.featureDescription}>
                35+ years in business with 100+ successfully completed projects
                across multiple industries speaks to our reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
