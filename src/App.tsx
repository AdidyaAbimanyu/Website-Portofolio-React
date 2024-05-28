import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Project from './components/Project';
import Social from './components/Social';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
