import { Link } from "react-router-dom";
import logo from './AppContent/logo.png';
import { useState } from "react";
import '../App.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
        <div className="logo">
          <img className='logotype' src={logo} width="100px" alt="logo"/>
          <p className="name">
            <span className="coffee">Coffee</span>
            <span className="talks">Talk</span>
          </p>
        </div>
        <Link to="/" className='link' onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className='link' onClick={handleLinkClick}>About</Link>
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