import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="geo-footer">
      <div className="footer-left">
        <h2>TheGeoInsights</h2>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className="footer-center">
        <a href="/about">About</a>
        <a href="/support">Support</a>
        <a href="/contact">Contact</a>
        <a href="/news">News</a>
      </div>

      <div className="footer-right">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
