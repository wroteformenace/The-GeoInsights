import React from 'react';
import './ConferenceBriefings.css';
import { mockBriefings } from '../assets/data/mockData';

const ConferenceBriefings = () => {
  return (
    <section className="conference-briefings">
      <div className="section-container">
        <h2 className="section-title">Conference Briefings</h2>
        
        <div className="briefings-grid">
          {mockBriefings.map((briefing) => (
            <div key={briefing.id} className="briefing-card">
              <div className="briefing-header">
                <span className="briefing-type-badge">{briefing.type}</span>
                <span className="briefing-time">{briefing.time}</span>
              </div>
              
              <h3 className="briefing-title">{briefing.title}</h3>
              <p className="briefing-description">{briefing.description}</p>
              
              <div className="briefing-actions">
                <button className="join-btn btn-primary">
                  Join Meeting
                </button>
                <button className="info-btn btn-secondary">
                  More Info
                </button>
              </div>
            </div>
          ))}
          
          {/* Additional briefing cards to match the design */}
          <div className="briefing-card">
            <div className="briefing-header">
              <span className="briefing-type-badge">Alert</span>
              <span className="briefing-time">Oct 8, 4:00 PM</span>
            </div>
            
            <h3 className="briefing-title">Critical Security Update</h3>
            <p className="briefing-description">
              Urgent briefing on developing security situations and immediate response protocols.
            </p>
            
            <div className="briefing-actions">
              <button className="join-btn btn-primary">
                Join Meeting
              </button>
              <button className="info-btn btn-secondary">
                More Info
              </button>
            </div>
          </div>

          <div className="briefing-card">
            <div className="briefing-header">
              <span className="briefing-type-badge">Policy</span>
              <span className="briefing-time">Oct 9, 11:30 AM</span>
            </div>
            
            <h3 className="briefing-title">International Relations Update</h3>
            <p className="briefing-description">
              Comprehensive review of diplomatic developments and policy implications across regions.
            </p>
            
            <div className="briefing-actions">
              <button className="join-btn btn-primary">
                Join Meeting
              </button>
              <button className="info-btn btn-secondary">
                More Info
              </button>
            </div>
          </div>

          <div className="briefing-card">
            <div className="briefing-header">
              <span className="briefing-type-badge">Trade</span>
              <span className="briefing-time">Oct 10, 9:00 AM</span>
            </div>
            
            <h3 className="briefing-title">Global Trade Analysis</h3>
            <p className="briefing-description">
              Analysis of recent trade agreements and their impact on global economic stability.
            </p>
            
            <div className="briefing-actions">
              <button className="join-btn btn-primary">
                Join Meeting
              </button>
              <button className="info-btn btn-secondary">
                More Info
              </button>
            </div>
          </div>
        </div>

        <div className="briefings-footer">
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">24</span>
              <span className="stat-label">Active Briefings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">156</span>
              <span className="stat-label">Participants</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Regions Covered</span>
            </div>
          </div>
          
          <button className="view-all-briefings btn-primary">
            View All Briefings
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBriefings;