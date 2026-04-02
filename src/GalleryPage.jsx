import React from "react";
import "./App.css";

// minimalist placeholder SVGs to visualize the "look" before you have photos
const PlaceholderSVG = () => (
  <svg className="placeholder-svg" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="rgba(255,255,255,0.03)" />
    <path d="M 150,150 L 250,150" stroke="rgba(230,184,0,0.2)" strokeWidth="1" />
    <path d="M 200,100 L 200,200" stroke="rgba(230,184,0,0.2)" strokeWidth="1" />
    <circle cx="200" cy="150" r="10" stroke="rgba(230,184,0,0.2)" strokeWidth="1" fill="none"/>
  </svg>
);

const GalleryPage = () => {
  // Array of placeholder data for structure
  const placeholderImages = Array(6).fill({
    title: "JOJO Luxe Event",
    category: "Event Highlight",
  });

  return (
    <section className="gallery-section fade-up" id="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="title-underline"></div>
        <p className="gallery-description">
          A curated collection of extraordinary moments, from grand corporate launches 
          to intimate garden weddings. (Your high-resolution images arriving soon.)
        </p>

        {/* The high-end grid structure */}
        <div className="gallery-grid">
          {placeholderImages.map((img, index) => (
            <div key={index} className="gallery-item stagger-child">
              <PlaceholderSVG />
              <div className="gallery-overlay">
                <span className="category-tag">{img.category}</span>
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;