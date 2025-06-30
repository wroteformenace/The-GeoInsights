import React from "react";
import "./Videos.css";
import { FaPlay } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

const featuredCreators = [
  {
    name: "Caspian Report",
    avatar:
      "https://yt3.googleusercontent.com/zTPr0Jg_Xg3qQ0PtpMLspaKm54x4trKqyyKbaob8IjTjx9O5GZGZCRzMpR9dOOeJB4u2ps_F=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/embed/Evm4t4prtWo",
  },
  {
    name: "Zeihan on Geopolitics",
    avatar:
      "https://yt3.ggpht.com/SjXtqswYvURCBih8Kn2TffHbjAozT49FIZXBsl0KWbIicT55mGMk45U3npQjzbZ7Edjh0XEUlg=s176-c-k-c0x00ffffff-no-rj-mo",
    video: "https://www.youtube.com/embed/S6mXqOk63Ss",
  },
  {
    name: "KJ Vids",
    avatar:
      "https://yt3.googleusercontent.com/ytc/AIdro_lNN-5TtS6L5x2MFq-M-btnKvREzbEmweJa1QdkpDlW88s=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/embed/B9A9N6evwus?si=7zktTq1S2OP1iiMi",
  },
];

const latestVideos = [
  {
    title: "Is Putin Playing Both Sides in the Middle East?",
    src: "https://www.youtube.com/embed/9NrxtdYQYss?si=7bu6fQpvt7_jjvbr",
  },
  {
    title: "Who Controls Eastern Congo?",
    src: "https://www.youtube.com/embed/Y7NiZI9YL6A?si=p3SsNJsPqV_MQab1",
  },
  {
    title: "How China Outplayed Russia",
    src: "https://www.youtube.com/embed/phfDV5p-wZQ?si=A6YvXrUM7N5rT6oX",
  },
  {
    title: "No More Nuclear Blackmail",
    src: "https://www.youtube.com/embed/mySBHVgi8qg?si=hSB4ClXbH3IvI02S",
  },
];

export default function Videos() {
  return (
    <div className="videos-page">
      {/* Header */}
      <header className="videos-header">
        <h1 className="videos-title">
          <span className="letter">VIDE</span>
          <span className="globe-wrap">
            <FaGlobeAmericas className="globe-icon" />
          </span>
          <span className="letter">S</span>
          <FaPlay className="play-icon" />
        </h1>
      </header>

      {/* Featured Creators */}
      <section className="featured-creators">
        <h2 className="section-subtitle">Featured Creators</h2>
        <div className="creator-scroller">
          {featuredCreators.map((creator, index) => (
            <div className="creator-card" key={index}>
              <div className="creator-video-wrapper">
                <iframe
                  src={creator.video}
                  title={`${creator.name} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="creator-info-row">
                <img
                  src={creator.avatar}
                  alt={`${creator.name} Avatar`}
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
        <div className="video-scroller">
          {latestVideos.map((video, index) => (
            <div className="video-thumb" key={index}>
              <div className="thumb-wrapper">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
