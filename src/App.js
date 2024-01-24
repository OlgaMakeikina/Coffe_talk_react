import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from './HomeComponent/Home';
import Menu from './MenuComponent/Menu';
import Team from './TeamComponent/Team';
import Contact from './ContactsComponent/Contact';
import './App.css';
import Nav from './AppComponents/Navbar';
import Footer from './AppComponents/Footer';
import Gallery from './GalleryComponent/Gallery';
import ScrollToTopButton from './AppComponents/Scroll'
import CartButton from './AppComponents/CartButton';
import About from './AboutComponent/About';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [footerStyle, setFooterStyle] = useState({ marginTop: '0' });

  useEffect(() => {
    const updateFooterStyle = () => {
      const screenWidth = window.innerWidth;
      let marginTop = '0';

      if (location.pathname === '/') {
        if (screenWidth >= 912) {
          marginTop = '65%';
        } else if (screenWidth >= 540) {
          marginTop = '60%';
        } else {
          marginTop = '100%';
        }
      }

      setFooterStyle({ marginTop });
    };

    window.addEventListener('resize', updateFooterStyle);
    updateFooterStyle();

    return () => {
      window.removeEventListener('resize', updateFooterStyle);
    };
  }, [location.pathname]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer footerStyle={footerStyle} />
      <ScrollToTopButton />
      <CartButton />
    </div>
  );
}

export default App;