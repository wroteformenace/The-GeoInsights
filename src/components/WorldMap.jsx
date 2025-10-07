import React, { useState } from 'react';
import './WorldMap.css';
import { worldMapData } from '../assets/data/mockData';

// Import each diplomatic image individually
import Diplomat1 from '../assets/image/diplomat1.jpg';
import Diplomat2 from '../assets/image/diplomat2.jpg';
import Diplomat3 from '../assets/image/diplomat3.jpg';
import Diplomat4 from '../assets/image/diplomat4.jpg';


const diplomaticImages = [Diplomat1, Diplomat2, Diplomat3, Diplomat4];

const WorldMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <section className="map-section">
      <div className="map-content-continer">
        <div className="map-section-header">
           <h2>Global Tension Overview</h2>
        </div>

        <div className="info-box-container worldmap-cards-grid">
<div className="info-box wm-book-card">
  <span className="info-box-title wm-card-title">Global Hotspot</span>
  <p className="info-box-desc wm-card-desc">
    Eastern Europe is currently the most active geopolitical hotspot, with 95% tension index.
  </p>

  {/* Line between content */}
  <div className="info-box-separator"></div>

  <span className="info-box-title wm-card-title">Next Hotspot</span>
  <p className="info-box-desc wm-card-desc">
    Some other region has increased tensions.
  </p>
</div>
          <div className="info-box wm-book-card">
            <span className="info-box-title wm-card-title">Current Event</span>
            <p className="info-box-desc wm-card-desc">
              Major trade negotiations are underway between the US and China, impacting global economics.
            </p>

              <div className="info-box-separator"></div>

             <span className="info-box-title wm-card-title">Current Event</span>
            <p className="info-box-desc wm-card-desc">
              Major trade negotiations are underway between the US and China, impacting global economics.
            </p>
          </div>
        </div>

        {/* Diplomatic images compartment */}
        <div className="diplomatic-image-container worldmap-cards-grid">
          {diplomaticImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="wm-book-card diplomatic-card"
              style={{ backgroundImage: `url(${imgSrc})` }}
            >
              <div className="card-overlay" />
              <div className="card-content">
                <span className="wm-card-title">Diplomatic Summit 2025</span>
                <p className="wm-card-desc">
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;