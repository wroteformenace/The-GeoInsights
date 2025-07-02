import React, { useState, useMemo } from "react";
import { localNews } from "../data/localNews";
import "./NewsExplorer.css";
import WorldMap from "react-world-map";

const continentCodeToName = {
  AF: "Africa",
  AN: "Antarctica",
  AS: "Asia",
  EU: "Europe",
  NA: "North America",
  OC: "Oceania",
  SA: "South America",
};

export default function NewsExplorer() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);

  const handleContinentSelect = (continentCode) => {
    setSelectedContinent((prev) =>
      prev === continentCode ? null : continentCode
    );
  };

  const filteredNews = useMemo(() => {
  const continentName = selectedContinent
    ? continentCodeToName[selectedContinent]
    : null;

  return localNews.filter((item) => {
    const titleMatches = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    // ONLY match the selected continent or "Global"
    const regionMatches =
      !continentName ||
      item.region.trim().toLowerCase() === continentName.trim().toLowerCase() ||
      item.region.trim().toLowerCase() === "global";
    return titleMatches && regionMatches;
  });
}, [search, selectedContinent]);


  return (
    <div className="news-explorer">
      <h1 className="ne-heading">World News</h1>

      <div className="ne-search-wrapper">
        <input
          className="ne-search"
          placeholder="🔍 Search news by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search news"
        />
      </div>

      <div className="ne-map-section">
        <label htmlFor="world-map" className="continent-filter-label">
          Filter by Continent:
        </label>
        <WorldMap
          id="world-map"
          selected={selectedContinent}
          onSelect={handleContinentSelect}
        />
        {selectedContinent && (
          <button
            className="ne-clear-btn"
            onClick={() => setSelectedContinent(null)}
          >
            Clear Filter ({continentCodeToName[selectedContinent]})
          </button>
        )}
      </div>

      <ul className="news-list">
        {filteredNews.length === 0 ? (
          <li className="news-item news-empty">
            ❌ No news found for your search or selected continent.
          </li>
        ) : (
          filteredNews.map((news) => (
            <li key={news.id} className="news-card">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}