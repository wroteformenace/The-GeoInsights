import React, { useState, useEffect } from 'react';
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa';
import logoImg from '../assets/image/image3.png';
import './Navbar.css';

function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [darkMode, setDarkMode] = useState(() => document.body.getAttribute('data-theme') === 'dark');

  const navigationItems = ['Home', 'Analysis', 'News', 'Briefings'];

  // Keep darkMode state in sync with actual document
  useEffect(() => {
    const handleThemeChange = () => setDarkMode(document.body.getAttribute('data-theme') === 'dark');
    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setDarkMode(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-logo">
            <img src={logoImg} alt="Logo" className="logo-icon" />
            <span className="brand-text">Global Insights</span>
          </div>
        </div>

        <div className="navbar-menu">
          {navigationItems.map(item => (
            <button 
              key={item}
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="theme-toggle" onClick={handleToggle} title="Toggle Theme" role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleToggle()}>
          {darkMode ? <FaSun className="toggle-icon" /> : <FaMoon className="toggle-icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;