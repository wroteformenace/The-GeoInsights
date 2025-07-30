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

  useEffect(() => {
    const revealOnScroll = () => {
      const threshold = window.innerHeight - 100;

      panelRefs.current.forEach((ref, i) => {
        if (ref && ref.getBoundingClientRect().top < threshold) {
          ref.classList.add(i % 2 === 0 ? "slide-in-left" : "slide-in-right");
        }
      });

      statRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top < threshold) {
          ref.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll, { passive: true });
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="about-wrapper">
      {/* Hero */}
      

      {/* Panels */}
      <section className="slide-panels-section">
        {panels.map((panel, i) => (
          <div
            key={i}
            ref={(el) => (panelRefs.current[i] = el)}
            className={`slide-panel ${i % 2 === 0 ? "left-panel" : "right-panel"}`}
          >
            <div className="glass-panel">
              <h2>{panel.title}</h2>
              <p>{panel.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="stats-bubbles">
        {stats.map((stat, i) => (
          <div
            key={i}
            ref={(el) => (statRefs.current[i] = el)}
            className="stat-bubble"
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