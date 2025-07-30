import "./Videos.css";
import React, { useRef } from "react";
import YouTube from "react-youtube";
import {
  FaPlay,
  FaGlobeAmericas,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import {
  featuredCreators,
  latestVideos,
  interviews
} from "../data/videosData";

// Extract YouTube ID from embed URL
function extractId(url) {
  const match = url.match(/(?:embed\/|v=|be\/)([A-Za-z0-9_\-]+)/);
  return match ? match[1] : url;
}

export default function Videos() {
  const playersRef = useRef([]);
  const creatorsRef = useRef();
  const latestRef = useRef();
  const interviewsRef = useRef();

  const onPlay = (idx) => {
    playersRef.current.forEach((player, i) => {
      if (player && i !== idx) player.pauseVideo();
    });
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -ref.current.offsetWidth * 0.8,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: ref.current.offsetWidth * 0.8,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="videos-page">
      {/* <header className="videos-header">
        <h1 className="videos-title">
          <span className="letter">VIDE</span>
          <span className="globe-wrap">
            <FaGlobeAmericas className="globe-icon" />
          </span>
          <span className="letter">S</span>
          <FaPlay className="play-icon" />
        </h1>
      </header> */}

      {/* === Featured Creators === */}
      <div className="glass-panel">
        <section className="featured-creators">
          <h2 className="section-subtitle">Featured Creators</h2>
          <div className="scroller-container">
            <button
              className="scroller-arrow left"
              onClick={() => scrollLeft(creatorsRef)}
            >
              <FaChevronLeft />
            </button>

            <div className="creator-scroller" ref={creatorsRef}>
              {featuredCreators.map((creator, idx) => (
                <div className="creator-card scroll-card" key={idx}>
                  <div className="creator-video-wrapper">
                    <YouTube
                      videoId={extractId(creator.video)}
                      onReady={(e) => (playersRef.current[idx] = e.target)}
                      onPlay={() => onPlay(idx)}
                      opts={{ width: "100%", height: "100%" }}
                    />
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

            <button
              className="scroller-arrow right"
              onClick={() => scrollRight(creatorsRef)}
            >
              <FaChevronRight />
            </button>
          </div>
        </section>
      </div>

      {/* === Latest Videos === */}
      <div className="glass-panel">
        <section className="latest-videos">
          <h2 className="section-subtitle">Latest Videos</h2>
          <div className="scroller-container">
            <button
              className="scroller-arrow left"
              onClick={() => scrollLeft(latestRef)}
            >
              <FaChevronLeft />
            </button>

            <div className="video-scroller" ref={latestRef}>
              {latestVideos.map((video, idx) => (
                <div className="video-thumb scroll-card" key={idx}>
                  <div className="thumb-wrapper">
                    <YouTube
                      videoId={extractId(video.src)}
                      onReady={(e) =>
                        (playersRef.current[featuredCreators.length + idx] =
                          e.target)
                      }
                      onPlay={() => onPlay(featuredCreators.length + idx)}
                      opts={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
            </div>

            <button
              className="scroller-arrow right"
              onClick={() => scrollRight(latestRef)}
            >
              <FaChevronRight />
            </button>
          </div>
        </section>
      </div>

      {/* === Interviews Section === */}
      <div className="glass-panel">
        <section className="interviews-section">
          <h2 className="section-subtitle">Interviews of Foreign Ministers</h2>
          <div className="scroller-container">
            <button
              className="scroller-arrow left"
              onClick={() => scrollLeft(interviewsRef)}
            >
              <FaChevronLeft />
            </button>

            <div className="video-scroller" ref={interviewsRef}>
              {interviews.map((video, idx) => (
                <div className="video-thumb scroll-card" key={idx}>
                  <div className="thumb-wrapper">
                    <YouTube
                      videoId={extractId(video.src)}
                      onReady={(e) =>
                        (playersRef.current[
                          featuredCreators.length + latestVideos.length + idx
                        ] = e.target)
                      }
                      onPlay={() =>
                        onPlay(
                          featuredCreators.length +
                            latestVideos.length +
                            idx
                        )
                      }
                      opts={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
            </div>

            <button
              className="scroller-arrow right"
              onClick={() => scrollRight(interviewsRef)}
            >
              <FaChevronRight />
            </button>
          </div>
        </section>
      </div>

    </div>
  );
}
