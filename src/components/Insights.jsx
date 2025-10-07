import React from "react";
import { mockInsights } from "../assets/data/mockData";
import { FiArrowRight } from "react-icons/fi";

const Insights = () => {
  return (
    <div className="insight-cards-container">
      <div className="insight-cards-row">
        {mockInsights.map((insight) => (
          <div key={insight.id} className="insight-card floating cards">
            <div className="insight-header">
              <div className={`status-indicator status-${insight.status === 'critical' ? 'danger' : insight.status === 'warning' ? 'warning' : 'active'}`}></div>
              <span className="insight-region">{insight.region}</span>
            </div>
            <h3 className="insight-title">{insight.title}</h3>
            <p className="insight-description">{insight.description}</p>
            <div className="insight-metrics">
              <div className="metric-item">
                <span className="metric-label">Tension Level</span>
                <span className="metric-value">{insight.percentage}</span>
              </div>
              <button className="btn-secondary">
                {/* Use React Icon for the arrow */}
                <FiArrowRight className="update-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;