import React from "react";
import "./App.css";

const ContactPage = () => {
  const contactMethods = [
    {
      title: "Email Us",
      value: "info@jojoluxevents.com",
      link: "mailto:info@jojoluxevents.com",
      icon: "✉️", // Replace with <i className="fas fa-envelope"></i> if using FontAwesome
    },
    {
      title: "Call/WhatsApp",
      value: "+254 700 000 000",
      link: "https://wa.me/254700000000",
      icon: "📞",
    },
    {
      title: "Our Studio",
      value: "Nairobi, Kenya",
      link: "#",
      icon: "📍",
    },
  ];

  return (
    <section className="contact-section" id="contact-page">
      <div className="cinematic-overlay"></div>
      
      <div className="contact-container fade-up">
        <h2 className="section-title">Let’s Create Magic</h2>
        <div className="title-underline"></div>
        
        <p className="section-description">
          Whether it's a grand wedding or an intimate corporate launch, 
          we are here to bring your vision to life.
        </p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <a 
              href={method.link} 
              key={index} 
              className="contact-card"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="card-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p>{method.value}</p>
              <span className="card-action">Get in touch →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;