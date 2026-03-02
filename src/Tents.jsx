import React from "react";

const Tents = () => (
  <section className="page-section fade-up" id="tents">
    <h2 className="section-title">Tents for Hire</h2>
    <p className="section-description">
      We offer a wide variety of high-quality tents for all event sizes and styles. Our tents are clean, sturdy, and can be customized with décor to match your theme.
    </p>
    <div className="gallery">
      <img src="/public/image/tent1.jpg" alt="Tent 1" className="gallery-img" />
      <img src="/public/image/tent2.jpg" alt="Tent 2" className="gallery-img" />
      <img src="/public/image/tent3.jpg" alt="Tent 3" className="gallery-img" />
    </div>
    <p className="section-description">
      Contact us for pricing and availability. We ensure safe setup and removal for your peace of mind.
    </p>
  </section>
);

export default Tents;
