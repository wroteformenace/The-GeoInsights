import React from 'react';
// import Insights from './Insights';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Global Geopolitical<br />Insights
        </h1>
      </div>
      {/* Floating cards BELOW the hero-content, but inside `.hero-container` */}
      {/* <Insights /> */}
    </div>
    <div className="hero-background">
      <div className="bg-gradient-1"></div>
      <div className="bg-gradient-2"></div>
      <div className="bg-particles"></div>
    </div>
  </section>
);

export default Hero;