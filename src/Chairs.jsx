import React from "react";
import "./App.css";

const chairCatalog = [
  {
    id: 1,
    name: "Ghost Chiavari",
    series: "Luxe Crystal Collection",
    material: "Transparent Polycarbonate",
    image: "/image/chair1.jpg",
    details: "Iconic design that blends into any décor for a spacious, modern feel."
  },
  {
    id: 2,
    name: "Velvet Banquet",
    series: "Royal Seating",
    material: "Crushed Velvet & Gold Steel",
    image: "/image/chair2.jpg",
    details: "Plush cushioning with a high back for ultimate guest comfort."
  },
  {
    id: 3,
    name: "Rustic Cross-Back",
    series: "Vineyard Series",
    material: "Oak Wood & Rattan",
    image: "/image/chair3.jpg",
    details: "Hand-finished wood perfect for outdoor weddings and rustic themes."
  },
  {
    id: 4,
    name: "Modern Foldable",
    series: "Essential Series",
    material: "Reinforced Resin",
    image: "/image/chair4.jpg",
    details: "Sleek, lightweight, and durable for large scale corporate gatherings."
  }
];

const Chairs = () => (
  <section className="glass-chairs-section" id="chairs">
    {/* Emerald and Slate floating blobs */}
    <div className="chair-blob chair-blob-1"></div>
    <div className="chair-blob chair-blob-2"></div>

    <div className="glass-content-container">
      <header className="catalog-header">
        <span className="emerald-tag">Sophisticated Seating</span>
        <h2 className="catalog-title">Designer Chairs</h2>
        <p className="catalog-subtitle">
          From grand banquets to intimate ceremonies, our seating collection 
          prioritizes both aesthetic elegance and ergonomic comfort.
        </p>
      </header>

      <div className="glass-grid">
        {chairCatalog.map((chair) => (
          <div key={chair.id} className="glass-card chair-card">
            <div className="card-image-wrapper">
              <img src={chair.image} alt={chair.name} className="card-img" />
              <div className="card-gloss-overlay"></div>
              <div className="chair-material-tag">{chair.material}</div>
            </div>
            
            <div className="card-content">
              <span className="chair-series">{chair.series}</span>
              <h3 className="tent-name">{chair.name}</h3>
              
              <div className="tent-details">
                <p>{chair.details}</p>
              </div>

              <div className="card-actions">
                <button className="btn-secondary">View Set</button>
                <button className="btn-chair-action">Request Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Chairs;