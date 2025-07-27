import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Import added
import Navbar from './components/Navbar';
import Home from './components/Home';
import Videos from './pages/Videos';
import About from './pages/About';
import NewsExplorer from './pages/NewsExplorer';
import Footer from './components/Footer';
import CompassDock from './pages/CompassDock';
function App() {
  return (
    <>
      <Navbar />
      <CompassDock />
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/videos" element={<Videos />} />  
        <Route path="/news" element={<NewsExplorer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

