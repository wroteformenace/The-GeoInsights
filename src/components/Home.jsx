import React, { useEffect, useState } from "react";
import "@fontsource/dm-serif-display";
import "./Home.css";
import BriefingSection from "./BriefingSection";
import NewsSlider from "./NewsSlider";
import VideoSection from "./VideoSection";
import HERO_IMAGE from '../assets/hero-image.png';
import { CommodityTicker } from "./CommodityTicker";
// import NewsBubbles from "./NewsBubble";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
         <img
  src={HERO_IMAGE}
  className="hero-image"
  // autoPlay
  // loop
  // muted
  // playsInline
  alt="hero image"
/>

           {/* <NewsBubbles /> */}
          <div className="overlay" />
          {/* <div className="hero-content">
            <h1>Inside the Pulse of the Planet</h1>
            <p>Global headlines, community blogs, and deep analysis — all in one intelligent hub, curated just for you.</p>
            <button>
              Explore Now
              <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5l5 5-5 5" /></svg>
            </button>
          </div> */}
        </div>
      </section>

      <CommodityTicker />

      {/* Section Separator */}
      <div className="section-separator" />


      {/* News Slider */}
      <NewsSlider />

      {/* Briefing Section */}
      <BriefingSection />

      {/* Video Section */}
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
