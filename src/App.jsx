import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
/* Added extra icons for the social bar */
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaPinterest, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaTiktok, 
  FaInstagram 
} from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import Carousel from "./Carousel.jsx";
import Navbar from "./Navbar.jsx";
import Tents from "./Tents.jsx";
import Mascots from "./Mascots.jsx";
import Chairs from "./Chairs.jsx";
import Sounds from "./Sounds.jsx";
import GalleryPage from "./GalleryPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import FAQPage from "./FAQPage.jsx";
import ContactPage from "./ContactPage.jsx";
import ServiceDetail from "./ServiceDetail.jsx";
import "./App.css";

/* ================= DATA ================= */
const heroSlides = [
  { title: "Reliable Themed Parties", quote: "From concept to execution, we bring your theme to life with creative décor, seamless coordination, and unforgettable experiences tailored just for you." },
  { title: "Kids Party & Baby Showers", quote: "We create joyful, colorful celebrations filled with fun activities, beautiful setups, and thoughtful details that make every milestone truly special." },
  { title: "Corporate & End of Year Events", quote: "Delivering well-organized, elegant corporate events that reflect your brand, impress your guests, and leave a lasting professional impression." },
  { title: "Picnic Set-Ups", quote: "Enjoy stylish, fully-curated picnic experiences designed for relaxation, connection, and memorable moments in beautifully arranged outdoor settings."},
  { title: "Adult Parties", quote:"Sophisticated and vibrant party concepts crafted to match your style, energy, and vision—perfect for birthdays, celebrations, and private events."},
  { title: "Tents & Bouncing Castles for Hire", quote:"High-quality tents and safe, fun bouncing castles that transform any space into a comfortable and exciting venue for guests of all ages."}
];

const welcomeText = `At Jojo Lux Events, we specialize in transforming every occasion into a spectacular, unforgettable experience that reflects your unique vision and style. Whether it’s an elegant baby shower, a colorful kids’ party, a milestone graduation, a sophisticated adult celebration, a corporate gathering, or a beautifully styled outdoor picnic, our team approaches every event with creativity, precision, and care.  We believe that the smallest details make the biggest impact, which is why we thoughtfully design every element—from décor and entertainment to layouts, ambiance, and guest experience.  Our experienced professionals work closely with you from concept to execution, ensuring seamless coordination, stress-free planning, and flawless delivery on the day of your event.  Driven by passion, professionalism, and a commitment to excellence, we go beyond expectations to create moments that are not only visually stunning but emotionally memorable. With Elite Moments Events, you’re not just hosting an event—you’re creating lasting memories that you and your guests will cherish long after the celebration ends.`;

const balloonImages = [
  "/image/img7.jpeg", "/image/img8.jpeg", "/image/img9.jpeg",
  "/image/img10.jpeg", "/image/img11.jpeg", "/image/img12.jpeg", "/image/img14.jpeg"
];

const services = [
  { title: "Music & Entertainment" }, { title: "Catering" }, { title: "Mascots" },
  { title: "Face Painting" }, { title: "Photography" }, { title: "Games" },
  { title: "Balloon Decoration" },
];

const rentals = ["Event Furniture", "Tents", "Inflatables", "Tables & Chairs", "Mascots"];
const stats = [
  { value: "500+", label: "Satisfied Clients" }, { value: "6", label: "Departments" },
  { value: "20+", label: "Event Experts" }, { value: "10", label: "Awards Won" },
];

const testimonials = [
  { name: "Sarah M.", message: "Everything was perfectly planned and beautifully styled." },
  { name: "James K.", message: "Very professional team and excellent service." },
  { name: "Michael T.", message: "The attention to detail was impressive, highly recommend!" },
  { name: "Emily R.", message: "Seamless coordination and amazing decorations!" },
  { name: "David L.", message: "Our corporate event went off without a hitch thanks to them." },
];

const faqs = [
  { question: "How early should I book?", answer: "We recommend booking at least 2–4 weeks in advance to ensure availability, tailored planning, and sufficient time for setup and decoration to achieve a flawless event." },
  { question: "Do you offer custom themes?", answer: "Yes, every event is fully customized to your preferences, ensuring that colors, décor, activities, and catering reflect your personal style or corporate branding." },
  { question: "Do you provide items for hire?", answer: "Absolutely. We provide high-quality furniture, tents, inflatables, mascots, and other essential items to make your celebration both comfortable and visually stunning." },
  { question: "Can you handle large events?", answer: "Yes, we have experience managing events of all sizes, from intimate gatherings to large-scale corporate functions, ensuring smooth execution and memorable experiences." },
  { question: "Do you offer catering services?", answer: "Yes, we collaborate with trusted catering partners to provide a variety of menu options, including dietary-specific choices, to suit your event's theme and guests' preferences." },
];

const serviceAreas = [
  "Westlands","Karen","Runda","Kileleshwa","Lavington","Kilimani",
  "Langata","South B","Roysambu","Gigiri","Hurlingham","Muthaiga",
  "Kasarani","Rongai","Parklands","Upper Hill","And Many More Areas",
];

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .zoom-in, .stagger-child");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("active"); }
      });
    }, { threshold: 0.1 });
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="app">
      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/254700000000" className="whatsapp-float" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp">
        <FaWhatsapp />
      </a>

      <div className="top-bar">
        <div className="top-bar-item">
          <FaMapMarkerAlt />
          <a href="https://www.google.com/maps?q=Nairobi,Kenya" target="_blank" rel="noopener noreferrer">Find us on Map</a>
        </div>
        <div className="top-bar-item">
          <FaEnvelope />
          <a href="mailto:info@jojoluxevents.com">info@jojoluxevents.com</a>
        </div>
        <div className="top-bar-item">
          <FaPhone />
          <a href="tel:+254700000000">+254 700 000 000</a>
        </div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <section className="hero-section" id="home">
              <Carousel type="hero" items={heroSlides} />
              
              {/* SOCIAL ICONS BAR ADDED HERE */}
              <div className="hero-social-bar fade-up">
                <a href="#" className="s-btn pin"><FaPinterest /> <span>Pinterest</span></a>
                <a href="#" className="s-btn fb"><FaFacebookF /> <span>Facebook</span></a>
                <a href="#" className="s-btn wa"><FaWhatsapp /> <span>WhatsApp</span></a>
                <a href="#" className="s-btn x-soc"><FaTwitter /> <span>X</span></a>
                <a href="#" className="s-btn ln"><FaLinkedinIn /> <span>LinkedIn</span></a>
                <a href="#" className="s-btn tk"><FaTiktok /> <span>TikTok</span></a>
                <a href="#" className="s-btn ig"><FaInstagram /> <span>Instagram</span></a>
              </div>
            </section>

          {/* ===== WELCOME SECTION ===== */}
<section className="circle-section section-light fade-up" id="about">
  <div className="circle-container">

    <div className="circle-images">
      <div className="circle-large">
        <img src={balloonImages[0]} alt="Event decor" />
      </div>

      <div className="circle-small">
        <img src={balloonImages[1]} alt="Event setup" />
      </div>
    </div>

    <div className="circle-text">
      <h2>Welcome to Jojo Lux Events</h2>
      <p>{welcomeText}</p>
    </div>

  </div>
</section>


{/* ===== BALLOON SECTION ===== */}
<section className="circle-section section-grey">

  <div className="circle-container reverse">

    <div className="circle-images">
      <div className="circle-large">
        <img src="/image/img8.jpeg" alt="Balloon Decor" />
      </div>

      <div className="circle-small">
        <img src="/image/img6.jpeg" alt="Event Setup" />
      </div>
    </div>

    <div className="circle-text">
      <h2 className="gold-title">Balloon Decorations</h2>
      <p>
        Our bespoke balloon installations bring a modern, refined touch to any event.
        Each arrangement is handcrafted using rich textures, elegant colors and
        meticulous styling for a look that feels curated and exclusive.
      </p>
    </div>

  </div>
</section>

            <section className="services-section fade-up" id="services">
              <h2 className="fade-up">Our Services</h2>
              <Carousel type="services" items={services} />
            </section>

            <section className="rentals-section fade-up" id="rentals">
              <h2 className="fade-up">Items Available for Hire</h2>
              <p className="rentals-text fade-up">We provide a wide range of high-quality items for hire to elevate your event.</p>
              <div className="rentals-list">
                {rentals.map((item, index) => (
                  <div key={index} className="rental-item stagger-child">{item}</div>
                ))}
              </div>
            </section>

            <section className="quote-banner fade-up">
              <div className="quote-content">
                <h2>Turn Your Occasion Into a Masterpiece!</h2>
                <p>Premium décor. Elegant rentals. Flawless execution. Let us handle the details while you enjoy the celebration.</p>
              </div>
            </section>

            <section className="stats-section fade-up">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box fade-up">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </section>

            <section className="testimonials-section fade-up" id="testimonials">
              <h2 className="fade-up">Client Reviews</h2>
              {testimonials.map((item, index) => (
                <div key={index} className="testimonial-card fade-up">
                  <p className="testimonial-text">"{item.message}"</p>
                  <span className="testimonial-name">— {item.name}</span>
                </div>
              ))}
            </section>

            <section className="faq-section fade-up" id="faq">
              <h2 className="fade-up">Frequently Asked Questions</h2>
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item stagger-child">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

            <section className="service-areas-section fade-up" id="areas">
              <h2 className="fade-up">Service Areas</h2>
              <div className="areas-list">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="area-pill stagger-child">{area}</span>
                ))}
              </div>
            </section>

            <section className="quote-banner fade-up">
              <div className="quote-content">
                <h2>Plan Your Perfect Event Today!</h2>
                <p>Contact us now to get a personalized quote tailored to your celebration.</p>
                <div className="quote-buttons">
                  <a href="#contact" className="btn-get-quote">Get a Quote</a>
                  <a href="tel:+254700000000" className="btn-call-us">Call Us</a>
                </div>
              </div>
            </section>

            <footer className="footer fade-up" id="contact">
              <div className="footer-column fade-up">
                <h3>Jojo Lux Events</h3>
                <p>We plan and host elegant events for baby showers, graduations, themed parties, kids celebrations, and corporate functions. Every detail is carefully curated to ensure unforgettable experiences.</p>
              </div>
              <div className="footer-column fade-up">
                <h4>Quick Links</h4>
                <ul><li>Home</li><li>Services</li><li>Gallery</li><li>Book Event</li><li>Contact</li></ul>
              </div>
              <div className="footer-column fade-up">
                <h4>Our Services</h4>
                <ul><li>Baby Showers</li><li>Graduation Parties</li><li>Kids Parties</li><li>Themed Events</li><li>Corporate Events</li></ul>
              </div>
              <div className="footer-column fade-up">
                <h4>Contact</h4>
                <p>Email: info@jojoluxevents.com</p>
                <p>Phone: +254 700 000 000</p>
                <p>Location: Kenya</p>
              </div>
            </footer>
          </>
        } />
        <Route path="/tents" element={<Tents />} />
        <Route path="/mascots" element={<Mascots />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/sounds" element={<Sounds />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:category/:item?" element={<ServiceDetail />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<div style={{padding:'3rem',textAlign:'center',color:'#f00'}}>Route not found</div>} />
      </Routes>
    </div>
  );
};

export default App;