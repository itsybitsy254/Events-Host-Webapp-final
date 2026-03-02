import React from "react";
import "./App.css";

const faqs = [
  { question: "How early should I book?", answer: "We recommend booking at least 2–4 weeks in advance to ensure availability, tailored planning, and sufficient time for setup and decoration to achieve a flawless event." },
  { question: "Do you offer custom themes?", answer: "Yes, every event is fully customized to your preferences, ensuring that colors, décor, activities, and catering reflect your personal style or corporate branding." },
  { question: "Do you provide items for hire?", answer: "Absolutely. We provide high-quality furniture, tents, inflatables, mascots, and other essential items to make your celebration both comfortable and visually stunning." },
  { question: "Can you handle large events?", answer: "Yes, we have experience managing events of all sizes, from intimate gatherings to large-scale corporate functions, ensuring smooth execution and memorable experiences." },
  { question: "Do you offer catering services?", answer: "Yes, we collaborate with trusted catering partners to provide a variety of menu options, including dietary-specific choices, to suit your event's theme and guests' preferences." },
];

const FAQPage = () => (
  <section className="faq-section fade-up" id="faq-page">
    <h2 className="fade-up">Frequently Asked Questions</h2>
    {faqs.map((faq, index) => (
      <div key={index} className="faq-item stagger-child">
        <h4>{faq.question}</h4>
        <p>{faq.answer}</p>
      </div>
    ))}
  </section>
);

export default FAQPage;
