// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import heroImg from "../assets/hero-image.png"; // Replace with your real image

// export default function Home() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 1000);
//   }, []);

//   return (
//     <section className={`hero-section ${visible ? "fade-in" : ""}`} id="home">
//       <div className="hero-img-wrapper">
//         <img src={heroImg} alt="Hero" className="hero-img" />
//         <div className="overlay" />
//         <div className="hero-content">
//           <h1>Welcome to Zyrography</h1>
//           <p>Your trusted source for the latest global news, blogs, and videos.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";

// // Optional: import DM Serif Display via npm or add to your index.html
// import "@fontsource/dm-serif-display"; // npm install @fontsource/dm-serif-display

// const HERO_IMAGE_URL = "data:image/jpeg;base64,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"; // Change this to your image path

// const Home = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setVisible(true), 400);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <style>{`
// :root {
//   --primary-bg: #181c22;
//   --secondary-bg: #23272f;
//   --overlay-gradient: linear-gradient(120deg, rgba(24,28,34,0.85) 65%, rgba(164,120,100,0.25) 100%);
//   --headline: #f5f5f7;
//   --subtext: #c7c7c7;
//   --accent: #a47864;
//   --shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
//   --transition-smooth: all 0.35s cubic-bezier(0.65, 0, 0.35, 1);
// }

// body {
//   background-color: var(--primary-bg);
//   margin: 0;
//   font-family: "Inter", "Segoe UI", sans-serif;
//   color: var(--headline);
// }

// .hero-section {
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   opacity: 0;
//   transition: opacity 1.4s ease-in-out;
//   position: relative;
//   background: var(--primary-bg);
//   overflow: hidden;
// }

// .hero-section.fade-in {
//   opacity: 1;
// }

// .hero-img-wrapper {
//   width: 92vw;
//   max-width: 1400px;
//   height: 82vh;
//   min-height: 340px;
//   position: relative;
//   border-radius: 28px;
//   overflow: hidden;
//   background: var(--secondary-bg);
//   border: 2px solid rgba(255, 255, 255, 0.05);
//   box-shadow: var(--shadow);
//   transition: var(--transition-smooth);
// }

// .hero-img-wrapper::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 26px;
//   pointer-events: none;
//   z-index: 2;
//   border: 1.5px solid transparent;
//   background: linear-gradient(120deg, var(--accent), transparent 70%);
//   background-origin: border-box;
//   background-clip: border-box;
//   opacity: 0.7;
//   animation: borderPulse 3.5s infinite alternate;
// }

// @keyframes borderPulse {
//   0% { opacity: 0.5; }
//   100% { opacity: 1; }
// }

// .hero-img-wrapper::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   z-index: 3;
//   pointer-events: none;
//   opacity: 0.10;
//   background: url('https://www.transparenttextures.com/patterns/asfalt-light.png');
//   mix-blend-mode: overlay;
// }

// .hero-img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   filter: brightness(0.9) saturate(1.1);
//   transform: scale(1.02);
//   transition: opacity 1.8s cubic-bezier(.77,0,.18,1), transform 3s ease;
//   opacity: 0;
//   z-index: 0;
//   position: relative;
// }

// .hero-section.fade-in .hero-img {
//   opacity: 1;
// }

// .hero-img-wrapper:hover .hero-img {
//   transform: scale(1.05);
// }

// .overlay {
//   position: absolute;
//   inset: 0;
//   background: 
//     radial-gradient(ellipse at 60% 40%, rgba(24,28,34,0.50) 0%, rgba(24,28,34,0.18) 60%, transparent 100%),
//     var(--overlay-gradient);
//   z-index: 1;
//   backdrop-filter: blur(2px);
// }

// .hero-content {
//   position: absolute;
//   z-index: 4;
//   top: 52%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: var(--headline);
//   text-align: center;
//   max-width: 620px;
//   padding: 2.2rem 1.8rem;
//   background: rgba(35, 39, 47, 0.76);
//   border-radius: 20px;
//   box-shadow: 0 6px 38px rgba(0,0,0,0.25);
//   backdrop-filter: blur(3px);
//   animation: slideInUp 1.2s ease-out;
// }

// @keyframes slideInUp {
//   from {
//     transform: translate(-50%, 20%);
//     opacity: 0;
//   }
//   to {
//     transform: translate(-50%, -50%);
//     opacity: 1;
//   }
// }

// .hero-content h1 {
//   font-family: 'DM Serif Display', 'Merriweather', serif;
//   font-size: clamp(2.5rem, 6vw, 4.2rem);
//   font-weight: 800;
//   margin-bottom: 1rem;
//   letter-spacing: 0.8px;
//   color: var(--headline);
//   text-shadow: 0 3px 18px rgba(24, 28, 34, 0.2);
//   border-left: 6px solid var(--accent);
//   padding-left: 18px;
// }

// .hero-content p {
//   font-size: clamp(1.08rem, 2vw, 1.3rem);
//   color: var(--subtext);
//   margin-bottom: 2rem;
//   opacity: 0.95;
//   line-height: 1.6;
// }

// .hero-content .hero-btn {
//   background: var(--accent);
//   color: var(--headline);
//   padding: 0.95rem 2.2rem;
//   font-size: 1.1rem;
//   font-weight: 700;
//   border: none;
//   border-radius: 24px;
//   cursor: pointer;
//   box-shadow: 0 2px 12px rgba(164, 120, 100, 0.15);
//   transition: var(--transition-smooth);
//   display: inline-flex;
//   align-items: center;
//   gap: 0.7em;
// }

// .hero-content .hero-btn svg {
//   width: 1.2em;
//   height: 1.2em;
//   fill: currentColor;
//   transition: transform 0.25s;
// }

// .hero-content .hero-btn:hover svg {
//   transform: translateX(6px) scale(1.1);
// }

// .hero-content .hero-btn:hover {
//   background: #7c5a47;
//   color: #fff;
//   transform: scale(1.04);
// }

// /* Responsive */
// @media (max-width: 1024px) {
//   .hero-img-wrapper {
//     height: 68vh;
//     border-radius: 22px;
//   }

//   .hero-content {
//     max-width: 88vw;
//     padding: 1.5rem 1rem;
//     border-radius: 14px;
//   }
// }

// @media (max-width: 600px) {
//   .hero-img-wrapper {
//     width: 96vw;
//     height: 60vh;
//     border-radius: 14px;
//   }

//   .hero-content h1 {
//     font-size: 2rem;
//   }

//   .hero-content p {
//     font-size: 1rem;
//   }

//   .hero-content .hero-btn {
//     padding: 0.75rem 1.6rem;
//     font-size: 1rem;
//   }
// }
//       `}</style>
//       <section className={`hero-section${visible ? " fade-in" : ""}`}>
//         <div className="hero-img-wrapper">
//           <img
//             src={HERO_IMAGE_URL}
//             alt="Hero"
//             className="hero-img"
//             draggable="false"
//           />
//           <div className="overlay" />
//           <div className="hero-content">
//             <h1>Stay Informed, Stay Ahead</h1>
//             <p>
//               The latest headlines, in-depth blogs, and curated videos—delivered with clarity, context, and credibility. Welcome to your next-generation news experience.
//             </p>
//             <button className="hero-btn">
//               Explore Now
//               <svg viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;


// --------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
// import "@fontsource/inter";
// import "@fontsource/anton";
import "@fontsource/dm-serif-display";
import BriefingSection from "./BriefingSection";
import NewsSlider from "./NewsSlider";
import VideoSection from "./VideoSection";
import HERO_IMAGE from '../assets/heroimage.png';

// const HERO_IMAGE = "../assets/heroimage.png"; // Unsplash or CDN image

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
          --glass: rgba(10, 14, 20, 0.47);
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
        filter: brightness(1.85) saturate(1.1);
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
          backdrop-filter: blur(2px);
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
          box-shadow: 0 6px 28px rgba(0, 229, 255, 0);
          backdrop-filter: blur(1px);
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