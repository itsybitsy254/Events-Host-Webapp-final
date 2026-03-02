
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram, FaChevronDown, FaTwitter, FaPinterest, FaLinkedin, FaBars } from "react-icons/fa";


const Navbar = () => {
  const [catalogue, setCatalogue] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  // change navbar background when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // helper to create url slugs
  const slug = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const servicesNav = [
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
      sub: ["Face Painting", "Clowns", "Puppet Show", "Magic Tricks"],
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

  const renderMenu = (items) => (
    <ul className="dropdown-menu">
      {items.map((it, i) => (
        <li key={i}>
          <NavLink
            to={`/services/${slug(it.title)}`}
            onClick={() => setServicesOpen(false)}
          >
            {it.title}
          </NavLink>
          {it.sub && (
            <ul className="dropdown-menu">
              {it.sub.map((sub, j) => (
                <li key={j}>
                  <NavLink
                    to={`/services/${slug(it.title)}/${slug(sub)}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {sub}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div
        className={`nav-overlay ${mobileOpen ? "open" : ""}`}
        onClick={toggleMobile}
      ></div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">Jojo Lux Events</div>
      <div className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={toggleMobile}>
        <FaBars />
      </div>
      <ul className={`nav-links ${mobileOpen ? "open" : ""}`}> 
        <li><NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/services" onClick={() => setMobileOpen(false)}>Our Company</NavLink></li>
        <li
          className="nav-dropdown"
          onMouseEnter={() => setCatalogue(true)}
          onMouseLeave={() => setCatalogue(false)}
        >
          <span className="dropdown-toggle">
            Catalogue <FaChevronDown style={{ fontSize: "0.8em", marginLeft: 4 }} />
          </span>
          {catalogue && (
            <ul className="dropdown-menu">
              <li><NavLink to="/tents" onClick={() => {setCatalogue(false); setMobileOpen(false);}}>Tents</NavLink></li>
              <li><NavLink to="/mascots" onClick={() => {setCatalogue(false); setMobileOpen(false);}}>Mascots</NavLink></li>
              <li><NavLink to="/chairs" onClick={() => {setCatalogue(false); setMobileOpen(false);}}>Chairs</NavLink></li>
              <li><NavLink to="/sounds" onClick={() => {setCatalogue(false); setMobileOpen(false);}}>Sounds</NavLink></li>
            </ul>
          )}
        </li>
        <li
          className="nav-dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <span className="dropdown-toggle">
            Services <FaChevronDown style={{ fontSize: "0.8em", marginLeft: 4 }} />
          </span>
          {servicesOpen && renderMenu(servicesNav)}
        </li>
        <li><NavLink to="/gallery" onClick={() => setMobileOpen(false)}>Our Gallery</NavLink></li>
        <li><NavLink to="/faq" onClick={() => setMobileOpen(false)}>FAQ</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink></li>
        <li className="nav-social-container">
          <div className="nav-social">
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com/jojoluxevents" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/jojoluxevents" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/jojoluxevents" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://pinterest.com/jojoluxevents" target="_blank" rel="noopener noreferrer" title="Pinterest">
              <FaPinterest />
            </a>
            <a href="https://linkedin.com/company/jojoluxevents" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
