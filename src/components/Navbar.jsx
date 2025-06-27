import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const Logo_img = "../assets/logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`navbar-container ${scrolled ? "sticky" : ""}`}>
      <nav className="navbar">
        <div className="brand">TheGeoInsights</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "menu-active" : ""}`}>
        <li><NavLink to="/" end >Home</NavLink></li>
        <li><NavLink to="/news" >News</NavLink></li>
        <li><NavLink to="/blogs" >Blogs</NavLink></li>
        <li><NavLink to="/videos" >Videos</NavLink></li>
        <li><NavLink to="/about" >About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
