import React from "react";
import { Link } from "react-router-dom";
import "./VideoSection.css";

const videoData = [
  {
    title: "Geopolitical Tensions in 2025",
    src: "https://www.youtube.com/embed/rdvuDByLmig?si=XTxVUs8ZFHa5SGwQ",
  },
  {
    title: "Cyberwarfare & Policy",
    src: "https://www.youtube.com/embed/Ai1W5kX-BRA?si=pCO2mCsnj6RdMrzg",
  },
  {
    title: "Understanding Modern Conflicts",
    src: "https://www.youtube.com/embed/s2i6c9cV3CQ?si=sGxh8lLgQymR5Xyc",
  },
  {
    title: "What is Pakistan Upto?",
    src: "https://www.youtube.com/embed/l6HiztV656g?si=8Y8OounAj4ytHzvB",
  },
  {
    title: "Game Changer",
    src: "https://www.youtube.com/embed/RIMFTq4paCg?si=NJir6yu6npwkIf2r",
  },
];

export default function VideoSection() {
  return (
    <section className="video-section">
      <h2 className="video-heading">Featured Videos</h2>
      <div className="video-carousel no-mask">
        {videoData.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={video.src}
              title={video.title}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>

      <div className="view-more-wrapper">
        <Link to="/videos" className="view-more-button">
          View All Videos →
        </Link>
      </div>
    </section>
  );
}
