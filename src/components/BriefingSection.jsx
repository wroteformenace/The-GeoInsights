import React from "react";
import { motion } from "framer-motion";
import "./BriefingSection.css";

const briefings = [
  {
    id: 1,
    label: "UPDATE",
    title: "Indo-Pacific Becomes Strategic Chessboard",
    summary: "The region emerges as a key front in shaping future diplomatic alignments.",
    url: "https://example.com/blog/indo-pacific",
  },
  {
    id: 2,
    label: "REPORT",
    title: "Resource Wars: Oil, Water & Conflict",
    summary: "How access to resources continues to mold the global geopolitical landscape.",
    url: "https://example.com/blog/resource-wars",
  },
  {
    id: 3,
    label: "CYBER",
    title: "Digital Borders: Sovereignty in the Data Age",
    summary: "States grapple with identity and control in cyber infrastructures.",
    url: "https://example.com/blog/cyber-borders",
  },
  {
    id: 4,
    label: "SITUATION",
    title: "After meeting goals in Israel-Iran war, IDF turns back to Gaza",
    summary: "Finally, one of the founders of Hamas,also one of the planners of its onslaught of October 7, was killed in an airstrike in Gaza City on Friday night.",
    url: "https://www.timesofisrael.com/daily-briefing-june-29-day-632-after-meeting-goals-in-israel-iran-war-idf-turns-back-to-gaza/",
  },
  {
    id: 5,
    label: "ASIA",
    title: "New Financial Rules in India Effective July 1, 2025",
    summary: "From income tax to GSTR filing, new financial rules bring a wave of reforms designed to boost transparency.",
  },
  {
    id: 6,
    label: "EUROPE",
    title: "Tuesday Briefing",
    summary: "Uprise of dollars, china demolution, gaza got killed.",
    url: "https://www.nytimes.com/2025/07/01/briefing/dollar-china-gaza.html",
  },
];

const BriefingSection = () => {
  return (
    <div class="glass-panel">
    <section className="briefing-section">
      <h2 className="briefing-heading">Strategic Briefings</h2>
      <div className="briefing-list">
        {briefings.map((post, index) => (
          <motion.div
            className="briefing-card"
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="briefing-tag">{post.label}</span>
            <h3 className="briefing-title">{post.title}</h3>
            <p className="briefing-summary">{post.summary}</p>
            <a
              href={post.url}
              className="briefing-readmore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Brief →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default BriefingSection;
