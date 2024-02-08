import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../HomeComponent/Home';
import Menu from '../../MenuComponent/Menu';
import Team from '../../TeamComponent/Team';
import Contact from '../../ContactsComponent/Contact';
import Nav from './Navbar';
import Gallery from '../../GalleryComponent/Gallery';
import About from '../../AboutComponent/About';

function AppRouter() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppRouter;