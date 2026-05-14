import React from "react";
import "./App.css";

const mascotCatalog = [
  {
    id: 1,
    name: "Golden Lion King",
    type: "Premium Character",
    vibe: "Majestic & Interactive",
    image: "/image/mascot1.jpg",
    details: "High-quality faux fur, professional performer included."
  },
  {
    id: 2,
    name: "Cosmic Astronaut",
    type: "Sci-Fi Series",
    vibe: "Futuristic & Engaging",
    image: "/image/mascot2.jpg",
    details: "LED-integrated suit, perfect for tech launches and space themes."
  },
  {
    id: 3,
    name: "Enchanted Unicorn",
    type: "Fantasy Collection",
    vibe: "Magical & Photogenic",
    image: "/image/mascot3.jpg",
    details: "Pastel aesthetics with iridescent detailing for dream-like events."
  },
  {
    id: 4,
    name: "Velvet Teddy Bear",
    type: "Classic Series",
    vibe: "Warm & Gentle",
    image: "/image/mascot4.jpg",
    details: "Ultra-soft premium velvet finish, ideal for children's meet-and-greets."
  }
];

const Mascots = () => (
  <section className="glass-mascots-section" id="mascots">
    <div className="mascot-blob mascot-blob-1"></div>
    <div className="mascot-blob mascot-blob-2"></div>

    <div className="glass-content-container">
      <header className="catalog-header">
        <span className="vibrant-tag">The Performance Collection</span>
        <h2 className="catalog-title">Luxury Mascots</h2>
        <p className="catalog-subtitle">
          Bring your vision to life with our elite character performers. 
        </p>
      </header>

      <div className="glass-grid">
        {/* FIXED: changed tentCatalog to mascotCatalog */}
        {mascotCatalog.map((mascot) => (
          <div key={mascot.id} className="glass-card mascot-card">
            <div className="card-image-wrapper">
              <img src={mascot.image} alt={mascot.name} className="card-img" />
              <div className="card-gloss-overlay"></div>
              <div className="mascot-badge">{mascot.type}</div>
            </div>
            
            <div className="card-content">
              <h3 className="tent-name">{mascot.name}</h3>
              <span className="mascot-vibe">{mascot.vibe}</span>
              
              <div className="tent-details">
                <p>{mascot.details}</p>
              </div>

              <div className="card-actions">
                <button className="btn-secondary">Gallery</button>
                <button className="btn-mascot-action">Book Character</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mascots;