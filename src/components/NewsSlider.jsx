import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./NewsSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


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

const newsData = [
  {
    title: "Russia-China Strategic Pact Raises Eyebrows",
    description: "The recent meeting between Moscow and Beijing hints at deeper strategic alliances.",
    image: "http://www.xinhuanet.com/english/2019-06/07/138124711_15599137507861n.jpg",
  },
  {
    title: "Taiwan Conducts Military Drills Amid Rising Tensions",
    description: "Defensive maneuvers showcased in response to increased regional pressure.",
    image: "https://images.unsplash.com/photo-1702925181659-b31df53edded",
  },
  {
    title: "EU Faces Energy Crisis as Winter Approaches",
    description: "With gas reserves low, countries scramble to ensure household supply.",
    image: "https://plus.unsplash.com/premium_photo-1682310149425-1dc9966c3ad6",
  },
  {
    title: "Middle East Talks Spark Hope for Ceasefire",
    description: "Diplomats suggest a temporary ceasefire might be in sight as talks resume.",
    image: "https://images.unsplash.com/photo-1706212074940-d1f7638bdfdb",
  },
  {
    title: "Africa's Digital Revolution Gains Momentum",
    description: "With new investments, startups thrive in Nairobi and Lagos.",
    image: "https://images.unsplash.com/photo-1717934444759-41d4794edcca",
  },
  {
    title: "AI Warfare: Defense Sectors Race for Algorithms",
    description: "Autonomous tech begins shaping tomorrow’s military doctrines.",
    image: "https://newo.ai/wp-content/uploads/2024/12/1-Artificial-Intelligence-in-Military-Revolutionizing-Defense-and-Warfare.jpg",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const NewsSlider = () => {
  const creatorsRef = useRef(null);
  return (
    <div className="glass-panel">
      <section className="news-card-slider">
        {/* Fixed Heading outside the drag area */}
        <h2 className="slider-heading">Global Affairs</h2>
        <button
              className="scroller-arrow left"
              onClick={() => scrollLeft(creatorsRef)}
            >
              <FaChevronLeft />
            </button>

        {/* Drag Wrapper */}
        <div className="static-slider-container"  ref={creatorsRef}>
          <motion.div
            className="motion-slider-wrapper"
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {newsData.map((item, i) => (
              <motion.div
                className="news-card"
                key={i}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`${item.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.title}
                  className="card-image"
                />
                <div className="card-content">
                  <div className="card-title">{item.title}</div>
                  <div className="card-description">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
};

export default NewsSlider;