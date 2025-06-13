import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function ClientsPage() {
  const clients = [
    { name: "Nestlé Nigeria Plc.", logo: "/client-nestle.png" },
    { name: "FrieslandCampina", logo: "/client-friesland.png" },
    { name: "Perfetti Van Melle", logo: "/client-perfetti.png" },
    { name: "Standard Chartered", logo: "/client-standard-chartered.png" },
    { name: "A&P Food Ltd.", logo: "/client-a&p.png" },
    { name: "Flux Logistix Ltd.", logo: "/flux-logistix.png" },
  ];

  const testimonials = [
    {
      id: 1,
      content:
        "Akinwale Steel Construction delivered our factory expansion project ahead of schedule while maintaining exceptional quality standards. Their attention to safety and detail is unmatched in the industry.",
      author: "Saheed Kareem",
      position: "Factory Engineering Manager at Nestlé Agbara Factory",
      avatar: "/saheed.jpg",
    },
    {
      id: 2,
      content:
        "We've worked with ASC on multiple tank fabrication projects and they consistently deliver precision work. Their team understands the strict hygiene requirements of the food industry.",
      author: "Gbenga Akintoye",
      position: "Stakeholder at Perfetti Van Melle",
      avatar: "/unknown.png",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.clientsHero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Clients</h1>
          <p className={styles.heroSubtitle}>
            Trusted by leaders in food production, logistics, and financial
            services
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Esteemed Partners</h2>
          <p className={styles.sectionSubtitle}>
            We're proud to collaborate with industry leaders who trust us with
            their most important projects
          </p>

          <div className={styles.clientsGrid}>
            {clients.map((client) => (
              <div key={client.name} className={styles.clientItem}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className={styles.clientLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.section} ${styles.testimonials}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Client Testimonials</h2>
          <p className={styles.sectionSubtitle}>
            Hear what our partners say about working with us
          </p>

          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <p className={styles.testimonialContent}>
                  {testimonial.content}
                </p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className={styles.authorAvatar}
                  />
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to join our list of satisfied clients?
          </h2>
          <p
            className={styles.sectionSubtitle}
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Let's discuss how we can bring our expertise to your next project
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            <i className="fas fa-paper-plane"></i> Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
