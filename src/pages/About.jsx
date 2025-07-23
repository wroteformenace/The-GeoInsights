import React, { useEffect, useRef, useState } from "react";
import "./About.css";

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


  return (
    <div className="about-wrapper">

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
           <div className="glass-panel">
            <h2>{panel.title}</h2>
            <p>{panel.text}</p>
            </div>
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
    </div>
  );
}