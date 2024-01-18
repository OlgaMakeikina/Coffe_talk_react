import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import logo from './Content/logo.png';
import { useState } from "react";
import './App.css';

function Overlay({ isOpen, onClose }) {
  return createPortal(
    <div className={`overlay-body ${isOpen ? "visible" : ""}`} onClick={onClose}></div>,
    document.body
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // При клике на рубрику закрываем меню
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Overlay isOpen={isOpen} onClose={toggleMenu} />
      <nav className={`header-nav ${isOpen ? "active" : ""}`}>
        <div className="logo">
          <img className='logotype' src={logo} width="100px" alt="logo"/>
          <p className="name">
            <span className="coffee">Coffee</span>
            <span className="talks">Talk</span>
          </p>
        </div>
        <Link to="/" className='link' onClick={handleLinkClick}>Home</Link>
        <Link to="/menu" className='link' onClick={handleLinkClick}>Menu</Link>
        <Link to="/gallery" className='link' onClick={handleLinkClick}>Gallery</Link>
        <Link to="/Team" className='link' onClick={handleLinkClick}>Team</Link>
        <Link to="/contact" className='link' onClick={handleLinkClick}>Contacts</Link>
      </nav>
      <button className="header-menu-btn" onClick={toggleMenu}>
        &equiv;
      </button>
    </div>
  );
}

export default Nav;