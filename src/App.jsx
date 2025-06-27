import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Import added
import Navbar from './components/Navbar';
import Home from './components/Home';
import Videos from './pages/Videos';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />          {/* ✅ Default route */}
        <Route path="/videos" element={<Videos />} />  {/* ✅ Videos route */}
      </Routes>
    </>
  );
}

export default App;

