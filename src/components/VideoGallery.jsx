import React from 'react';
import './VideoGallery.css';
import { mockVideos } from '../assets/data/mockData';

const VideoGallery = () => {
  return (
    <section className="video-gallery">
      <div className="section-container">
        <h2 className="section-title">Video Gallery</h2>
        
        <div className="video-grid">
          {mockVideos.map((video, index) => (
            <div key={video.id} className={`video-card ${index === 0 ? 'featured' : ''}`}>
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button-large">
                    <span>▶</span>
                  </div>
                </div>
                <div className="video-duration">{video.duration}</div>
                <div className="video-category">{video.category}</div>
              </div>
              
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <div className="video-presenter">{video.presenter}</div>
                <div className="video-stats">
                  <span className="video-views">{video.views} views</span>
                  <span className="video-dot">•</span>
                  <span className="video-date">2 days ago</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional video items */}
          <div className="video-card">
            <div className="video-thumbnail">
              <div className="thumbnail-placeholder analyst">
                <div className="play-button-large">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-duration">14:30</div>
              <div className="video-category">Interview</div>
            </div>
            
            <div className="video-content">
              <h3 className="video-title">Interview Analyst</h3>
              <div className="video-presenter">Sarah Chen</div>
              <div className="video-stats">
                <span className="video-views">95K views</span>
                <span className="video-dot">•</span>
                <span className="video-date">5 days ago</span>
              </div>
            </div>
          </div>

          <div className="video-card">
            <div className="video-thumbnail">
              <div className="thumbnail-placeholder summit">
                <div className="play-button-large">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-duration">22:15</div>
              <div className="video-category">Analysis</div>
            </div>
            
            <div className="video-content">
              <h3 className="video-title">Sedy Brattert</h3>
              <div className="video-presenter">Policy Expert</div>
              <div className="video-stats">
                <span className="video-views">134K views</span>
                <span className="video-dot">•</span>
                <span className="video-date">1 week ago</span>
              </div>
            </div>
          </div>

          <div className="video-card">
            <div className="video-thumbnail">
              <div className="thumbnail-placeholder briefing">
                <div className="play-button-large">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-duration">16:45</div>
              <div className="video-category">Briefing</div>
            </div>
            
            <div className="video-content">
              <h3 className="video-title">Members QUA Silwa</h3>
              <div className="video-presenter">Intelligence Brief</div>
              <div className="video-stats">
                <span className="video-views">78K views</span>
                <span className="video-dot">•</span>
                <span className="video-date">3 days ago</span>
              </div>
            </div>
          </div>

          <div className="video-card">
            <div className="video-thumbnail">
              <div className="thumbnail-placeholder strategy">
                <div className="play-button-large">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-duration">19:20</div>
              <div className="video-category">Strategy</div>
            </div>
            
            <div className="video-content">
              <h3 className="video-title">Geosinal Aod Analysis</h3>
              <div className="video-presenter">Strategic Review</div>
              <div className="video-stats">
                <span className="video-views">112K views</span>
                <span className="video-dot">•</span>
                <span className="video-date">4 days ago</span>
              </div>
            </div>
          </div>

          <div className="video-card">
            <div className="video-thumbnail">
              <div className="thumbnail-placeholder security">
                <div className="play-button-large">
                  <span>▶</span>
                </div>
              </div>
              <div className="video-duration">11:35</div>
              <div className="video-category">Security</div>
            </div>
            
            <div className="video-content">
              <h3 className="video-title">Incbound Drailets</h3>
              <div className="video-presenter">Security Analysis</div>
              <div className="video-stats">
                <span className="video-views">89K views</span>
                <span className="video-dot">•</span>
                <span className="video-date">6 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;