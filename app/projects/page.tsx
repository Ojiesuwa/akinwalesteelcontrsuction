"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

// Project data
const projects = [
  {
    id: 1,
    title: "Nestle Factory Expansion",
    image: "/nestle-factory.jpg",
    tags: ["Structural Works", "Pipe Welding"],
    category: "food",
  },
  {
    id: 2,
    title: "Oil Refinery Pipeline",
    image: "/oil-pipeline.jpg",
    tags: ["Pipe Fitting", "Insulation"],
    category: "oil-gas",
  },
  {
    id: 3,
    title: "Pharmaceutical Storage Tanks",
    image: "/pharma-tanks.jpg",
    tags: ["Tank Fabrication", "Stainless Steel"],
    category: "pharmaceutical",
  },
  {
    id: 4,
    title: "Beverage Plant Fire System",
    image: "/fire-system.jpg",
    tags: ["Fire Protection", "Electrical"],
    category: "food",
  },
  {
    id: 5,
    title: "Industrial Complex Steel Frame",
    image: "/steel-frame.jpg",
    tags: ["Structural Works", "Anti-rust Coating"],
    category: "industrial",
  },
  {
    id: 6,
    title: "Chilled Water Pipeline",
    image: "/chilled-water.jpg",
    tags: ["Insulation", "Pipe Welding"],
    category: "industrial",
  },
];

// Categories for filtering
const categories = ["All", "Food", "Oil & Gas", "Pharmaceutical", "Industrial"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() ===
            activeFilter.toLowerCase().replace(" & ", "-")
        );

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.projectsHero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Projects</h1>
          <p className={styles.heroSubtitle}>
            A showcase of our completed and ongoing projects across various
            industries
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Project Portfolio</h2>
          <p className={styles.sectionSubtitle}>
            A glimpse into our past and ongoing projects across industries
          </p>

          {/* Filter Controls */}
          <div className={styles.filterControls}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  activeFilter === category ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => openLightbox(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <div
        className={`${styles.lightbox} ${lightboxOpen ? styles.active : ""}`}
      >
        <div className={styles.lightboxContent}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          <Image
            src={currentImage}
            alt="Project preview"
            width={1200}
            height={800}
            className={styles.lightboxImage}
          />
          <div className={styles.lightboxNav}>
            <button className={styles.lightboxButton}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className={styles.lightboxButton}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
