import React from "react";

const Chairs = () => (
  <section className="page-section fade-up" id="chairs">
    <h2 className="section-title">Chairs for Hire</h2>
    <p className="section-description">
      Choose from a range of stylish and comfortable chairs to suit your event. We provide delivery, setup, and collection for hassle-free service.
    </p>
    <div className="gallery">
      <img src="/public/image/chair1.jpg" alt="Chair 1" className="gallery-img" />
      <img src="/public/image/chair2.jpg" alt="Chair 2" className="gallery-img" />
      <img src="/public/image/chair3.jpg" alt="Chair 3" className="gallery-img" />
    </div>
    <p className="section-description">
      Contact us for a quote and to discuss your seating needs.
    </p>
  </section>
);

export default Chairs;
