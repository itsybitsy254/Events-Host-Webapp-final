import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const companySections = [
  {
    title: "Our Story",
    sub: ["Founding Journey", "Milestones", "Our Heritage"],
  },
  {
    title: "Mission & Vision",
    sub: ["Core Values", "Our Commitment", "Sustainability Goals"],
  },
  {
    title: "Why Choose Us",
    sub: ["Expert Logistics", "Vendor Network", "Safety Standards", "Client Testimonials"],
  },
  {
    title: "Our Team",
    sub: ["Leadership", "Event Coordinators", "Technical Support", "Careers"],
  },
];

const CompanyPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="about-section" id="company-page">
      <div className="about-container fade-up">
        <h2 className="section-title">About Our Company</h2>
        <div className="title-underline"></div>
        
        <p className="enticing-para">
          At JOJO Luxe Events, we don't just plan events; we curate moments that live forever. 
          Born from a passion for flawless execution and aesthetic brilliance, our journey in 
          Nairobi has been defined by a relentless pursuit of excellence. From the first 
          conceptual sketch to the final standing ovation, we blend logistical precision 
          with creative soul to ensure your milestone is nothing short of legendary.
        </p>

        <div className="company-grid">
          {companySections.map((section, idx) => (
            <div
              key={idx}
              className={`company-card ${openIndex === idx ? "expanded" : ""}`}
            >
              <div className="card-header" onClick={() => toggle(idx)}>
                <h3>{section.title}</h3>
                <span className="toggle-icon">{openIndex === idx ? "−" : "+"}</span>
              </div>

              {openIndex === idx && (
                <ul className="card-dropdown">
                  <li>
                    <NavLink to={`/about/${slug(section.title)}`} className="nav-link">
                      {section.title} Overview
                    </NavLink>
                  </li>
                  {section.sub.map((sub, j) => (
                    <li key={j}>
                      <NavLink to={`/about/${slug(section.title)}/${slug(sub)}`} className="nav-link">
                        {sub}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPage;