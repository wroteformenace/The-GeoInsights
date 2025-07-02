import React, { useState, useMemo } from "react";
import WorldMapSVG from "./WorldMapSVG"; // ✅ Your custom SVG map
import { localNews } from "../data/localNews";
import "./NewsExplorer.css";
import Footer from "../components/Footer";


const NewsExplorer = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);

  const filteredNews = useMemo(() => {
    if (!selectedContinent) return localNews;

    return localNews.filter(
      (item) =>
        item.region === selectedContinent ||
        item.region.toLowerCase() === "global"
    );
  }, [selectedContinent]);

  const handleContinentSelect = (continentName) => {
    setSelectedContinent((prev) =>
      prev === continentName ? null : continentName
    );
  };

  return (
    <>
    <div className="news-explorer">
      <h1 className="ne-heading">Global News</h1>

      <div className="ne-map-section">
        <label htmlFor="world-map" className="continent-filter-label">
          Filter by Continent:
        </label>
        <WorldMapSVG
          selectedContinent={selectedContinent}
          onSelect={handleContinentSelect}
        />
        {selectedContinent && (
          <button
            className="ne-clear-btn"
            onClick={() => setSelectedContinent(null)}
          >
            Clear Filter ({selectedContinent})
          </button>
        )}
      </div>

      <ul className="news-list">
        {filteredNews.length === 0 ? (
          <li className="news-item news-empty">
            ❌ No news found for your selected continent.
          </li>
        ) : (
          filteredNews.map((news) => (
            <li key={news.id} className="news-card">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <span className="news-tag">{news.region}</span>
            </li>
          ))
        )}
      </ul>
    </div>
     <Footer className="geo-footer"/>
     </>
  );
};

export default NewsExplorer;

