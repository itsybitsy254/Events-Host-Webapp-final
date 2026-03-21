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

  const itemsToShow = type === "hero" ? 1 : 3;

  useEffect(() => {
    // Basic safety check for "about" type which doesn't use items array the same way
    const length = type === "about" ? images.length : items.length;
    if (!autoSlide || length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (type === "hero" || type === "about") return (prev + 1) % length;
        return prev + 1 > length - itemsToShow ? 0 : prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, images.length, autoSlide, interval, type, itemsToShow]);

  // Renders the overlapping circles for the "About" section
  const renderAboutCircles = () => (
    <div className="about-circles-container">
      <div className="circle-large">
        <img src={images[currentIndex]} alt="Event Main" className="fade-in" key={`main-${currentIndex}`} />
      </div>
      <div className="circle-small-overlay">
        {/* Shows the next image in the array for variety */}
        <img src={images[(currentIndex + 1) % images.length]} alt="Event Sub" className="fade-in" key={`sub-${currentIndex}`} />
      </div>
    </div>
  );

  if (type !== "about" && !items.length) return null;

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

  /* ================= SERVICES SLIDES ================= */
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
      {type === "hero" ? renderHeroSlides() : type === "about" ? renderAboutCircles() : renderServiceSlides()}
    </div>
  );
};

export default Carousel;