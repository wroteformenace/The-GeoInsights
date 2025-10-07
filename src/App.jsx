import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldMap from './components/WorldMap';
import NewsSection from './components/NewsSection';
import VideoGallery from './components/VideoGallery';
import ConferenceBriefings from './components/ConferenceBriefings';
import Insights from './components/Insights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Insights />
      <WorldMap />
      <div className="content-wrapper">
        <NewsSection />
        <VideoGallery />
        <ConferenceBriefings />
      </div>
    </div>
  );
}

export default App;