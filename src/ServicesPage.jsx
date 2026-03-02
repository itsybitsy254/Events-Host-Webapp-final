import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

// helper that turns text into url-friendly slug
const slug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// top‑level services with nested sub‑services where applicable
const services = [
  {
    title: "Kids Entertainment",
    sub: [
      "Bouncing Castles",
      "Trampolines",
      "Water Slides",
      "Inflatable Pools",
      "Climbing Towers",
      "Dry Slides",
    ],
  },
  {
    title: "Activities",
    sub: [
      "Face Painting",
      "Clowns",
      "Puppet Show",
      "Magic Tricks",
    ],
  },
  {
    title: "Tents & Chairs for Hire",
    sub: [
      "Bar Furniture Hire",
      "Tents for Hire",
      "Tables and Chairs Hire",
    ],
  },
  {
    title: "Additional Services",
    sub: [
      "Rustic Furniture Hire",
      "Picnic Setup Services",
      "Themed Party Nairobi",
      "Balloons Decoration",
      "Mobile/Portable Toilets",
      "Wedding Planning Services",
      "Baby Shower Planning",
      "Graduation Parties Services",
      "Adult Parties Planning",
    ],
  },
];

const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="services-section fade-up" id="services-page">
      <h2 className="fade-up">Our Services</h2>
      <div className="services-list">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`service-dropdown ${openIndex === idx ? "open" : ""}`}
          >
            <div
              className="dropdown-toggle"
              onClick={() => toggle(idx)}
            >
              {service.title}
            </div>

            {openIndex === idx && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to={`/services/${slug(service.title)}`}
                    className="service-link"
                  >
                    {service.title} Overview
                  </NavLink>
                </li>
                {service.sub &&
                  service.sub.map((sub, j) => (
                    <li key={j}>
                      <NavLink
                        to={`/services/${slug(service.title)}/${slug(sub)}`}
                        className="service-link"
                      >
                        {sub}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
