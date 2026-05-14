import React from "react";
import "./App.css";

const soundCatalog = [
  {
    id: 1,
    name: "Acoustic Elite PA",
    tier: "Concert Grade",
    specs: "2.1 Surround | 2000W",
    image: "/image/sound1.jpg",
    details: "High-fidelity sound system perfect for wedding receptions and indoor banquet halls."
  },
  {
    id: 2,
    name: "The Clubmaster Rig",
    tier: "DJ Performance",
    specs: "Dual Subs | Pioneer Setup",
    image: "/image/sound2.jpg",
    details: "Premium DJ booth with industry-standard mixing decks and powerful low-end bass."
  },
  {
    id: 3,
    name: "Sky-High Line Array",
    tier: "Outdoor Festivals",
    specs: "Modular | Long-Throw Audio",
    image: "/image/sound3.jpg",
    details: "Professional outdoor audio solution designed to cover large crowds with crisp clarity."
  },
  {
    id: 4,
    name: "Wireless Speech Kit",
    tier: "Corporate Events",
    specs: "UHF Mic | Interference-Free",
    image: "/image/sound4.jpg",
    details: "Elegant, low-profile speakers and wireless microphones for seminars and awards."
  }
];

const Sounds = () => (
  <section className="glass-sounds-section" id="sounds">
    {/* Amber and Gold floating blobs */}
    <div className="sound-blob sound-blob-1"></div>
    <div className="sound-blob sound-blob-2"></div>

    <div className="glass-content-container">
      <header className="catalog-header">
        <span className="audio-tag">Sonic Excellence</span>
        <h2 className="catalog-title">Audio & DJ Gear</h2>
        <p className="catalog-subtitle">
          Immersive soundscapes and professional audio engineering. 
          We provide the heartbeat of your event with precision and power.
        </p>
      </header>

      <div className="glass-grid">
        {soundCatalog.map((item) => (
          <div key={item.id} className="glass-card sound-card">
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.name} className="card-img" />
              <div className="card-gloss-overlay"></div>
              <div className="sound-specs-tag">{item.specs}</div>
            </div>
            
            <div className="card-content">
              <span className="sound-tier">{item.tier}</span>
              <h3 className="tent-name">{item.name}</h3>
              
              <div className="tent-details">
                <p>{item.details}</p>
              </div>

              <div className="card-actions">
                <button className="btn-secondary">Specs</button>
                <button className="btn-sound-action">Hire System</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Sounds;