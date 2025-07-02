import React, { useEffect, useState } from "react";
import "@fontsource/dm-serif-display";
import BriefingSection from "./BriefingSection";
import NewsSlider from "./NewsSlider";
import VideoSection from "./VideoSection";
import Footer from "./Footer";
import HERO_IMAGE from '../assets/heroimage.png';

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg-primary: #0e141b;
          --bg-secondary: #1a2028;
          --headline: #e0f7fa;
          --subtext: #b0bec5;
          --accent: #00e5ff;
          --accent-hover: #00bcd4;
          --glass: rgba(10, 14, 20, 0.35);
          --shadow: 0 18px 42px rgba(0, 229, 255, 0.15);
          --transition: all 0.3s ease;
        }

        body {
          background: var(--bg-primary);
          margin: 0;
          font-family: "Inter Variable", sans-serif;
          color: var(--headline);
        }

        /* HERO */
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          position: relative;
          background-color: var(--bg-primary);
          margin: 0;
          padding: 0;
        }

        .hero-inner {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          object-position: center;
          filter: brightness(1.15) contrast(1.1);
          z-index: 1;
          transition: transform 3s ease;
        }

        .hero-inner:hover .hero-image {
          transform: scale(1.02);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(14, 20, 27, 0.7) 55%, rgba(0,229,255,0.05));
          z-index: 2;
        }

        .hero-content {
          position: absolute;
          z-index: 2;
          top: 56%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          padding: 2rem 2.5rem;
          border-radius: 20px;
          background: var(--glass);
          backdrop-filter: blur(1.2px);
          box-shadow: none;
          max-width: 540px;
          width: 92%;
          opacity: 0;
          animation: ${fadeIn ? "fadeSlide 1.3s ease forwards" : "none"};
        }

        @keyframes fadeSlide {
          0% { opacity: 0; transform: translate(-50%, -40%); }
          100% { opacity: 1; transform: translate(-50%, -50%); }
        }

        .hero-content h1 {
          font-family: "Inter", sans-serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--headline);
        }

        .hero-content p {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--subtext);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-content button {
          background: var(--accent);
          color: #000;
          padding: 0.9rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 0.6em;
        }

        .hero-content button:hover {
          background: var(--accent-hover);
          transform: scale(1.05);
        }

      .section-separator {
  width: 100%;
  height: 7px;
  margin: 4rem 0 3rem;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #3fa7ff 18%,
    #8acfff 50%,
    #3fa7ff 82%,
    transparent 100%
  );
  box-shadow:
    0 2px 18px 0 #3fa7ff44,
    0 0 0 1.5px #8acfff33;
  position: relative;
  overflow: visible;
}
.section-separator::after {
  content: "";
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, #eaf6ff77 0%, transparent 100%);
  opacity: 0.25;
  pointer-events: none;
}


        /* Responsive */
        @media (max-width: 768px) {
          .hero-content {
            max-width: 92vw;
            padding: 1.5rem;
          }

          .hero-content h1 {
            font-size: 2.2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <img src={HERO_IMAGE} alt="News Hero" className="hero-image" draggable="false" />
          <div className="overlay" />
          <div className="hero-content">
            <h1>Inside the Pulse of the Planet</h1>
            <p>Global headlines, community blogs, and deep analysis — all in one intelligent hub, curated just for you.</p>
            <button>
              Explore Now
              <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5l5 5-5 5" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="section-separator" />

      {/* News Slider */}
      <NewsSlider />

      {/* Section Separator */}
      <div className="section-separator" />

      {/* Briefing Section */}
      <BriefingSection />

      {/* Video Section */}
      <VideoSection />

      <Footer />
    </>
  );
};

export default Home;




//  .hero {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//           overflow: hidden;
//           position: relative;
//           background-color: var(--bg-primary);
//         }

//         .hero-inner {
//           width: 92vw;
//           max-width: 1400px;
//           height: 80vh;
//           position: relative;
//           border-radius: 24px;
//           overflow: hidden;
//           border: 1px solid rgba(255,255,255,0.06);
//           box-shadow: var(--shadow);
//         }
