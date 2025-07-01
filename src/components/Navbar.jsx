import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
}, [menuOpen]);


  return (
    <div className={`navbar-container${scrolled ? " sticky" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="brand" tabIndex={0}>
          TheGeoInsights
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Nav Links */}
        <ul
          id="main-nav"
          className={`nav-links${menuOpen ? " menu-active" : ""}`}
          onClick={closeMenu}
        >
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>News</NavLink></li>
          <li><NavLink to="/videos" className={({ isActive }) => isActive ? "active" : ""}>Videos</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
