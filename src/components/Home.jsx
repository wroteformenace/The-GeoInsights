import React, { useEffect, useState } from "react";
// import "@fontsource/inter";
// import "@fontsource/anton";
import "@fontsource/dm-serif-display";
import BriefingSection from "./BriefingSection";
import NewsSlider from "./NewsSlider";
import VideoSection from "./VideoSection";

const HERO_IMAGE = "https://www.shutterstock.com/image-vector/simple-world-map-flat-style-260nw-1919585165.jpg"; // Unsplash or CDN image

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
          --shadow: 0 24px 72px rgba(0, 229, 255, 0.25);
          --transition: all 0.35s ease;
          --glass: rgba(10, 14, 20, 0.7);
        }

        body {
          background: var(--bg-primary);
          margin: 0;
          font-family: "Inter Variable", sans-serif;
          color: var(--headline);
        }

       .hero {
  /* This wraps the whole hero section */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make this section take full screen height */
  height: 100vh;

  /* Remove padding/margin to avoid white gaps */
  margin: 0;
  padding: 0;

  position: relative;
  background-color: var(--bg-primary); /* fallback if image doesn't load */
}

.hero-inner {
  /* Fill the screen with content, including the image and overlay */
  position: relative;
  width: 100vw;
  height: 100vh; /* Makes it match full screen */
  overflow: hidden;
  border-radius: 0; /* Remove corner radius for full bleed */
  box-shadow: none; /* Optional: remove shadows for fullscreen */
  border: none;
}

        .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        object-position: center;
        filter: brightness(0.85) saturate(1.1);
        z-index: 1;
        transition: transform 3s ease;
      }


        .hero-inner:hover .hero-image {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(14, 20, 27, 0.85) 60%, rgba(0,229,255,0.08));
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          padding: 2rem;
          background: var(--glass);
          border-radius: 20px;
          box-shadow: 0 6px 28px rgba(0, 229, 255, 0.1);
          backdrop-filter: blur(6px);
          max-width: 600px;
          opacity: 0;
          animation: ${fadeIn ? "fadeSlide 1.4s ease forwards" : "none"};
        }

        @keyframes fadeSlide {
          0% { opacity: 0; transform: translate(-50%, -40%); }
          100% { opacity: 1; transform: translate(-50%, -50%); }
        }

        .hero-content h1 {
          font-family: "Anton Variable", sans-serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          letter-spacing: 1px;
          margin-bottom: 1rem;
          text-shadow: 0 3px 12px rgba(0,229,255,0.1);
        }

        .hero-content p {
          font-size: 1.1rem;
          color: var(--subtext);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-content button {
          background: var(--accent);
          color: #000;
          padding: 0.85rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 0.6em;
        }

        .hero-content button:hover {
          background: #00bcd4;
          transform: scale(1.04);
        }

        @media (max-width: 768px) {
          .hero-content {
            max-width: 90vw;
            padding: 1.2rem;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }
        }
      `}</style>

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
      <NewsSlider />
      <BriefingSection />
      <VideoSection />
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
