import React from "react";
import "./Videos.css";
import { FaPlay, FaThumbsUp, FaCommentDots } from "react-icons/fa";
import { FaGlobeAmericas} from "react-icons/fa";


const featuredCreators = [
  {
    name: "Caspian Report",
    avatar: "https://yt3.googleusercontent.com/zTPr0Jg_Xg3qQ0PtpMLspaKm54x4trKqyyKbaob8IjTjx9O5GZGZCRzMpR9dOOeJB4u2ps_F=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/embed/Evm4t4prtWo",
  },
  {
    name: "Zeihan on Geopolitics",
    avatar: "https://yt3.ggpht.com/SjXtqswYvURCBih8Kn2TffHbjAozT49FIZXBsl0KWbIicT55mGMk45U3npQjzbZ7Edjh0XEUlg=s176-c-k-c0x00ffffff-no-rj-mo",
    video: "https://www.youtube.com/embed/S6mXqOk63Ss",
  },
  {
    name: "KJ Vids",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_lNN-5TtS6L5x2MFq-M-btnKvREzbEmweJa1QdkpDlW88s=s160-c-k-c0x00ffffff-no-rj",
    video: "https://www.youtube.com/embed/B9A9N6evwus?si=7zktTq1S2OP1iiMi",
  },
];

const latestVideos = [
  {
    title: "Is Putin Playing both sides in Middle East?",
    src: "https://www.youtube.com/embed/9NrxtdYQYss?si=7bu6fQpvt7_jjvbr",
  },
  {
    title: "Who controls eastern congo",
    src: "https://www.youtube.com/embed/Y7NiZI9YL6A?si=p3SsNJsPqV_MQab1",
  },
  {
    title: "How China out played russia",
    src: "https://www.youtube.com/embed/phfDV5p-wZQ?si=A6YvXrUM7N5rT6oX",
  },
  {
    title: "No more Nuclear blackmail",
    src: "https://www.youtube.com/embed/mySBHVgi8qg?si=hSB4ClXbH3IvI02S",
  },
];

const patreonExclusives = [
  "https://www.patreon.com/posts/will-america-go-131768578?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share",
  "",
  "",
  "",
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
