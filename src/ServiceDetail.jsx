import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { category, item } = useParams();

  // convert slugs back to readable text
  const nice = (slug) => slug ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "";

  return (
    <section className="services-section fade-up" id="service-detail">
      <h2 className="fade-up">{nice(category)}</h2>
      {item && <p className="fade-up">{nice(item)}</p>}
      {!item && <p className="fade-up">Explore our {nice(category)} offerings.</p>}
      {/* Placeholder content - can be expanded with real details */}
    </section>
  );
};

export default ServiceDetail;
