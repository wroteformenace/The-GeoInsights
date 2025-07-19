import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./VideoSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const scrollLeft = (ref) => {
  if (ref.current) {
    ref.current.scrollBy({
      left: -ref.current.offsetwidth * 0.6,
      behavior: "smooth"
    });
  }
};

const scrollRight = (ref) => {
  if(ref.current) {
    ref.current.scrollBy({
     left: ref.current.offsetwidth * 0.6,
     behavior: "smooth"
    });
  }
};

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
  const creatorsRef = useRef(null);
  return (
    <div className="glass-panel">
      <section className="video-section">
        <div className="section-header">
          <h2 className="video-heading">Featured Videos</h2>
          <Link to="/videos" className="view-more-button">
            View All Videos →
          </Link>
        </div>

        <button
              className="scroller-arrow left"
              onClick={() => scrollLeft(creatorsRef)}
            >
              <FaChevronLeft />
            </button>

        {/* Scrollable Carousel */}
        <div className="video-carousel" ref={creatorsRef}>
          {videoData.map((video, index) => (
            <article className="video-card" key={index}>
              <div className="video-frame">
                <iframe
                  src={video.src}
                  title={video.title}
                  allowFullScreen
                  loading="lazy"
                  aria-label={`Video: ${video.title}`}
                ></iframe>
              </div>
              <p className="video-title">{video.title}</p>
            </article>
          ))}
        </div>
        <button
              className="scroller-arrow right"
              onClick={() => scrollRight(creatorsRef)}
            >
              <FaChevronRight />
            </button>
      </section>
    </div>
  );
}