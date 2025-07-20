import React, { useEffect } from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import BG from "../assets/CTA.png";

export default function Footer() {
  useEffect(() => {
    const cta = document.querySelector(".footer-cta");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cta.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );
    if (cta) observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* CTA SECTION */}
      {/* <section
  className="footer-cta enhanced-cta"
  img src={BG}>
        <div className="cta-glow-bg" />
        <h3 className="cta-title">Stay ahead of the curve.</h3>
        <p className="cta-subtitle">
          Weekly geopolitical briefings. Zero noise. Maximum clarity.
        </p>
        <form className="cta-form">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email"
            required
          />
          <button type="submit" className="cta-button">
            Get Intel Briefs
          </button>
        </form>
        <p className="cta-note">
          Trusted by analysts from <strong>20+ countries</strong>
        </p>
      </section> */}

      {/* FOOTER */}
      <footer className="geo-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <h2 className="footer-logo">
                <img src={Logo} alt="TheGeoInsights Logo" />
              </h2>
              <p>
                20619 Torrence Chapel Rd<br />
                Suite 116 #1040<br />
                Cornelius, NC 28031<br />
                United States
              </p>
              <p className="footer-contact">
                Phone: 1-800-201-1019<br />
                Email: support@thegeoinsights.com
              </p>
            </div>

            <div className="footer-links">
              <h4>Quick links</h4>
              <a href="/pricing">Pricing</a>
              <a href="/resources">Resources</a>
              <a href="/about">About Us</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact Us</a>
            </div>

            <div className="footer-social-legal">
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                </div>
              </div>
              <div className="footer-legal">
                <h4>Legal</h4>
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/cookies">Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} TheGeoInsights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}