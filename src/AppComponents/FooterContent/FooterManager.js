import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Footer from './Footer';
import ScrollToTopButton from '../ScrollContent/Scroll';

function FooterManager() {
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
      <Footer footerStyle={footerStyle} />
      <ScrollToTopButton />
    </div>
  );
}

export default FooterManager;