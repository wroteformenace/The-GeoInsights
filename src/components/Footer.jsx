import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2025 GeoInsight</span>
      <nav>
        {["About","Contact","Privacy"].map(link=>(
          <a key={link} href="#">{link}</a>
        ))}
      </nav>
    </footer>
  );
}