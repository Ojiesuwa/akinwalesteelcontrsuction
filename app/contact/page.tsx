"use client";

import { useState } from "react";
import Head from "next/head";
import styles from "./page.module.css";

export default function ContactPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <main>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Let's Connect</h1>
          <p className={styles.heroSubtitle}>
            Reach out to us instantly through WhatsApp or email. Our team is
            ready to assist you with your industrial construction needs.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Direct Contact Channels</h2>
          <p className={styles.sectionSubtitle}>
            Choose your preferred method to get in touch with our team
          </p>

          <div className={styles.contactChannels}>
            {/* WhatsApp Card */}
            <div className={styles.channelCard}>
              <div className={`${styles.channelIcon} ${styles.whatsappIcon}`}>
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3 className={styles.channelTitle}>WhatsApp</h3>
              <p className={styles.channelDescription}>
                Chat with us instantly for quick responses to your inquiries and
                project discussions.
              </p>
              <a
                href="https://wa.me/+2348038511816"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.channelButton} ${styles.whatsappButton}`}
              >
                <i className="fab fa-whatsapp"></i> Message Us
              </a>
            </div>

            {/* Gmail Card */}
            <div className={styles.channelCard}>
              <div className={`${styles.channelIcon} ${styles.gmailIcon}`}>
                <i className="fab fa-google"></i>
              </div>
              <h3 className={styles.channelTitle}>Gmail</h3>
              <p className={styles.channelDescription}>
                Send us detailed project inquiries and documents. We typically
                respond within 24 hours.
              </p>
              <a
                href="mailto:akinwalesteelconstruction@gmail.com"
                className={`${styles.channelButton} ${styles.gmailButton}`}
              >
                <i className="far fa-envelope"></i> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className={`${styles.section} ${styles.contactInfo}`}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Address Card */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className={styles.infoTitle}>Our Location</h3>
              <p className={styles.infoContent}>
                11, Ola Ore Street, Mafoluku,
                <br />
                Oshodi, Lagos State, Nigeria
              </p>
            </div>

            {/* Phone Card */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className={styles.infoTitle}>Call Us</h3>
              <p className={styles.infoContent}>
                <a href="tel:+2348023312323">+234 802 331 2323</a>
                <br />
                <a href="tel:+2348038511816">+234 803 851 1816</a>
                <br />
                <a href="tel:+2348028588419">+234 802 858 8419</a>
              </p>
            </div>

            {/* Hours Card */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <h3 className={styles.infoTitle}>Working Hours</h3>
              <p className={styles.infoContent}>
                Monday - Friday: 8am - 6pm
                <br />
                Saturday: 9am - 2pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.367295414266732!3d6.5276316452783825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7c33b0e5c1%3A0x1f1a3e3e3e3e3e3e!2s11%20Ola%20Ore%20St%2C%20Mafoluku%2C%20Oshodi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348023312323"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingButton}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </main>
  );
}
