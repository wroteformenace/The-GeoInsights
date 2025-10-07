import React from 'react';
import './NewsSection.css';
import { mockNews } from '../assets/data/mockData';

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="section-container">
        <div className="news-content">
          <div className="latest-news">
            <h2 className="section-title">Latest News</h2>
            
            <div className="news-grid">
              {mockNews.map((article) => (
                <article key={article.id} className="news-card">
                  <div className="news-category">
                    <span className="category-tag">{article.category}</span>
                    <span className="news-time">{article.time}</span>
                  </div>
                  
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  
                  <div className="news-footer">
                    <span className="news-author">By {article.author}</span>
                    <button className="read-more-btn">Read More →</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="featured-commentary">
            <h2 className="section-title">Featured Commentary</h2>
            
            <div className="commentary-grid">
              <div className="commentary-card large">
                <div className="commentary-image">
                  <div className="placeholder-image"></div>
                  <div className="play-button">▶</div>
                </div>
                <div className="commentary-content">
                  <span className="commentary-type">Political Analysis</span>
                  <h3 className="commentary-title">Russian QUA Shift</h3>
                  <p className="commentary-description">
                    Comprehensive analysis of recent policy changes and their global implications.
                  </p>
                  <div className="commentary-meta">
                    <span className="commentary-duration">12 min</span>
                    <span className="commentary-views">45K views</span>
                  </div>
                </div>
              </div>

              <div className="commentary-card">
                <div className="commentary-image">
                  <div className="placeholder-image"></div>
                  <div className="play-button">▶</div>
                </div>
                <div className="commentary-content">
                  <span className="commentary-type">Economic Analysis</span>
                  <h3 className="commentary-title">Interview with Analyst</h3>
                  <p className="commentary-description">
                    Expert insights on current market conditions and economic policies.
                  </p>
                  <div className="commentary-meta">
                    <span className="commentary-duration">8 min</span>
                    <span className="commentary-views">23K views</span>
                  </div>
                </div>
              </div>

              <div className="commentary-card">
                <div className="commentary-image">
                  <div className="placeholder-image"></div>
                  <div className="play-button">▶</div>
                </div>
                <div className="commentary-content">
                  <span className="commentary-type">Security Brief</span>
                  <h3 className="commentary-title">IndHound Detailed</h3>
                  <p className="commentary-description">
                    Security briefing on regional developments and threat assessments.
                  </p>
                  <div className="commentary-meta">
                    <span className="commentary-duration">15 min</span>
                    <span className="commentary-views">67K views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;