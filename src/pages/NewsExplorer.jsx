import React, { useState, useMemo } from "react";
import ContinentSVG from "../assets/Continent.svg"; // Assuming SVG uses paths with IDs
import { localNews } from "../data/localNews";
import "./NewsExplorer.css";
import NewsBubbles from "../components/NewsBubble";

const CONTINENTS = ["africa", "europe", "asia", "north america", "south america", "australia", "antarctica", "global"];

const NewsExplorer = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);

  // Memoized filtering logic
  const filteredNews = useMemo(() => {
    if (!selectedContinent) return localNews;
    return localNews.filter(({ region }) => {
      if (typeof region !== "string") return false;
      const reg = region.toLowerCase();
      return reg === selectedContinent || reg === "global";
    });
  }, [selectedContinent]);

  // Handle continent click
  const handleContinentClick = (continent) => {
    setSelectedContinent(prev =>
      prev === continent.toLowerCase() ? null : continent.toLowerCase()
    );
  };

  return (
    <>
      <div className="news-explorer">
        

        {/* === Continent Filter === */}
        {/* <div className="ne-map-section"> */}
          {/* <label className="continent-filter-label">Select a Continent:</label> */}
          <h1 className="ne-heading">Global News</h1>

          {/* <div className="map-wrapper"> */}
          {/* <img src={ContinentSVG} alt="World Map" className="continent-img" /> */}
          <NewsBubbles />
          
          {/* {CONTINENTS.map((continent) => (
            <button
              key={continent}
              className={`map-button ${
                selectedContinent === continent ? "active" : ""
              }`}
              data-continent={continent}
              onClick={() => handleContinentClick(continent)}
            >
              {continent.charAt(0).toUpperCase() + continent.slice(1)}
            </button>
          ))} */}
        {/* </div> */}


          {/* Clear Filter */}
          {selectedContinent && (
            <button
              className="ne-clear-btn"
              onClick={() => setSelectedContinent(null)}
            >
              Clear Filter ({selectedContinent})
            </button>
          )}
        {/* </div> */}

        {/* === News List === */}
        <ul className="news-list">
          {filteredNews.length === 0 ? (
            <li className="news-item news-empty">
              No news found for this continent!!!
            </li>
          ) : (
            filteredNews.map((news) => (
              <li key={news.id} className="news-cardy">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <span className="news-tag">{news.region}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default NewsExplorer;