import React from "react";
import "./Videos.css";
import { FaPlay, FaThumbsUp, FaCommentDots } from "react-icons/fa";
import { FaGlobeAmericas} from "react-icons/fa";


const featuredCreators = [
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/100?u=1",
    video: "https://www.youtube.com/embed/rdvuDByLmig",
  },
  {
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/100?u=2",
    video: "https://www.youtube.com/embed/Ai1W5kX-BRA",
  },
  {
    name: "Carlos Vega",
    avatar: "https://i.pravatar.cc/100?u=3",
    video: "https://www.youtube.com/embed/s2i6c9cV3CQ",
  },
];

const latestVideos = [
  {
    title: "Understanding Global Alliances",
    src: "https://www.youtube.com/embed/tjN1xVgJZIw",
  },
  {
    title: "Russia & Ukraine: Timeline",
    src: "https://www.youtube.com/embed/k6g5U2iYHn4",
  },
  {
    title: "Middle East Strategic Chokepoints",
    src: "https://www.youtube.com/embed/Evm4t4prtWo",
  },
  {
    title: "China’s Navy & Pacific Ambitions",
    src: "https://www.youtube.com/embed/S6mXqOk63Ss",
  },
];

const patreonExclusives = [
  "https://via.placeholder.com/320x180",
  "https://via.placeholder.com/320x180",
  "https://via.placeholder.com/320x180",
  "https://via.placeholder.com/320x180",
];

export default function Videos() {
  return (
    <div className="videos-page">
      {/* Header with Hero Video */}
      <header className="videos-header">      
<h1 className="videos-title">
  <span className="letter">VIDE</span>
  <span className="globe-wrap">
    <FaGlobeAmericas className="globe-icon" />
  </span>
  <span className="letter">S</span>
  <FaPlay className="play-icon" />
</h1>
        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/rdvuDByLmig"
            title="Geopolitical Tensions in 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-meta">
            <span><FaThumbsUp /> 1,234</span>
            <span><FaCommentDots /> 56</span>
          </div>
        </div>
      </header>

      {/* Featured Creators */}
      <section className="featured-creators">
        <h2 className="section-subtitle">Featured Creators</h2>
        <div className="creator-grid">
          {featuredCreators.map((creator, index) => (
            <div className="creator-card" key={index}>
              <div className="creator-video-wrapper">
                <iframe
                  src={creator.video}
                  title={creator.name + " Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="creator-info-row">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="creator-avatar"
                />
                <span className="creator-name">{creator.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Videos */}
      <section className="latest-videos">
        <h2 className="section-subtitle">Latest Videos</h2>
        <div className="video-grid">
          {latestVideos.map((video, index) => (
            <div className="video-thumb" key={index}>
              <div className="thumb-wrapper">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patreon Exclusives */}
      <section className="patreon-section">
        <div className="patreon-header">
          <h2 className="section-subtitle">Exclusive on Patreon</h2>
          <button className="patreon-btn">PATREON</button>
        </div>
        <div className="patreon-grid">
          {patreonExclusives.map((img, index) => (
            <div className="patreon-thumb" key={index}>
              <img src={img} alt={`Exclusive Patreon ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
