import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaInstagram, FaCompass } from "react-icons/fa";

const panels = [
  {
    title: "Our Mission",
    text: "Deliver sharp, reliable geopolitical insights with curated sources and real-time context.",
  },
  {
    title: "Our Vision",
    text: "Make global intelligence clear, accessible, and empowering to anyone navigating complex international narratives.",
  },
  {
    title: "Our Growth",
    text: "Fueled by purpose and clarity, we evolve through innovation, user trust, and a razor-sharp focus on accuracy.",
  },
];

const stats = [
  { value: 30, label: "Countries" },
  { value: 150, label: "Videos" },
  { value: 20, label: "Contributors" },
  { value: 60, label: "Sources" },
];

export default function About() {
  const statRefs = useRef([]);
  const panelRefs = useRef([]);
  const [showMobileDock, setShowMobileDock] = useState(false);

  // Animate stats and panels on scroll
  useEffect(() => {
    const handleScroll = () => {
      statRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          ref.classList.add("visible");
        }
      });

      panelRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          ref.classList.add(i % 2 === 0 ? "slide-in-left" : "slide-in-right");
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile dock is open
  useEffect(() => {
    if (showMobileDock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileDock]);

  return (
    <div className="about-wrapper">
      {/* Desktop Compass Dock */}
      <nav className="social-compass-dock" aria-label="Social links">
        <div className="compass-circle">
          <a
            href="https://github.com/wroteformenace"
            className="compass-point github"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="compass-point linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/yourprofile"
            className="compass-point instagram"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <span className="compass-arrow" aria-hidden="true" />
        </div>
      </nav>

      {/* Mobile Compass Button & Overlay */}
      <div className="mobile-compass-container">
        <button
          className="mobile-compass-toggle"
          onClick={() => setShowMobileDock(true)}
          aria-label="Open social menu"
        >
          <FaCompass />
        </button>

        {showMobileDock && (
          <div
            className="mobile-compass-overlay"
            onClick={() => setShowMobileDock(false)}
            aria-label="Close social menu"
            tabIndex={-1}
          >
            <div
              className="compass-circle mobile"
              onClick={e => e.stopPropagation()}
            >
              <a
                href="https://github.com/wroteformenace"
                className="compass-point github"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="compass-point linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                className="compass-point instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                <FaInstagram />
              </a>
              <span className="compass-arrow" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <header className="about-hero">
        <h1 className="kinetic-headline">
          <span>Geo-Intelligence</span>
          <span className="highlight">&nbsp;with Clarity&nbsp;</span>
          <span>and Power.</span>
        </h1>
        <p className="hero-sub">
          We decode the world’s power shifts with data, context, and diverse voices.
        </p>
      </header>

      {/* Sliding Panels Left/Right */}
      <section className="slide-panels-section">
        {panels.map((panel, i) => (
          <div
            className={`slide-panel ${i % 2 === 0 ? "left-panel" : "right-panel"}`}
            key={i}
            ref={el => (panelRefs.current[i] = el)}
          >
            <h2>{panel.title}</h2>
            <p>{panel.text}</p>
          </div>
        ))}
      </section>

      {/* Stats Bubbles */}
      <section className="stats-bubbles">
        {stats.map((stat, i) => (
          <div
            className="stat-bubble"
            key={i}
            ref={el => (statRefs.current[i] = el)}
            style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
          >
            <div className="bubble-number">{stat.value}</div>
            <div className="bubble-label">{stat.label}</div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}