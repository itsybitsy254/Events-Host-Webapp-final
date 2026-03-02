import React, { useEffect, useState } from "react";
import "./Carousel.css"; // Ensure you create this file

const heroImages = [
  "/image/img13.jpeg", "/image/img15.jpeg", "/image/img4.jpeg",
  "/image/img12.jpeg", "/image/img3.jpeg", "/image/img2.jpeg"
];

const serviceImages = [
  "/image/img1.jpeg", "/image/img17.jpeg", "/image/img24.jpeg",
  "/image/img20.jpeg", "/image/img18.jpeg", "/image/img19.jpeg", "/image/img22.jpeg",
];

const Carousel = ({
  items = [],
  type = "hero",
  autoSlide = true,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = type === "hero" ? heroImages : serviceImages;

  // Responsive items to show (1 on mobile, 3 on desktop)
  const itemsToShow = type === "hero" ? 1 : 3;

  useEffect(() => {
    if (!autoSlide || items.length <= itemsToShow) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (type === "hero") return (prev + 1) % items.length;
        return prev + 1 > items.length - itemsToShow ? 0 : prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, autoSlide, interval, type, itemsToShow]);

  if (!items.length) return null;

  /* ================= HERO SLIDES ================= */
  const renderHeroSlides = () => (
    <div className="hero-container">
      <div className="carousel-slides">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${images[index % images.length]})` }}
          >
            <div className="carousel-overlay">
              <h1 className={`fade-up ${index === currentIndex ? "active" : ""}`}>{item.title}</h1>
              <p className={`fade-up ${index === currentIndex ? "active" : ""}`}>{item.quote}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {items.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)} />
        ))}
      </div>
    </div>
  );

  /* ================= SERVICES SLIDES (THE NEW LOOK) ================= */
  const renderServiceSlides = () => (
    <div className="services-section-wrapper">
      <div className="services-carousel-window">
        <div
          className="services-track"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="service-card-item">
              <div className="service-image-container">
                <img src={images[index % images.length]} alt={item.title} className="service-img" />
                <div className="service-floating-card">
                  <span className="service-card-text">{item.title}</span>
                  <div className="service-arrow-btn">
                    <span className="arrow-icon">›</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashed Pagination */}
      <div className="dashed-pagination">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dash ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(Math.min(index, items.length - itemsToShow))}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={`carousel-main ${type}`}>
      {type === "hero" ? renderHeroSlides() : renderServiceSlides()}
    </div>
  );
};

export default Carousel;