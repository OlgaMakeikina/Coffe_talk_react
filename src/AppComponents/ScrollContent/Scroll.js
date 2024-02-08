import React, { useState, useEffect } from 'react';
import './scroll.css';
import scroll from './scroll.png'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <img src={scroll} width="40px" alt="scroll"/>
    </div>
  );
};

export default ScrollToTopButton;
