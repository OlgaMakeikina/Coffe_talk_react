import { Link } from "react-router-dom";
import logo from './Content/logo.png';
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // При клике на рубрику закрываем меню
    setIsOpen(false);

    // Убираем класс "active" у навигационной панели
    const nav = document.querySelector('.header-nav');
    if (nav) {
      nav.classList.remove('active');
    }
  };

  return (
    <div>
      <nav className={`header-nav ${isOpen ? "active" : ""}`}>
  <div className="logo">
  <img className='logotype' src={logo} width="100px" alt="logo"/>
  <p className="name"><span className="coffee">Coffee</span><span className="talks">Talk</span></p>
  </div>
        <Link to="/" className='link' onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className='link' onClick={handleLinkClick}>About us</Link>
        <Link to="/menu" className='link' onClick={handleLinkClick}>Menu</Link>
        <Link to="/Team" className='link' onClick={handleLinkClick}>Team</Link>
        <Link to="/contact" className='link' onClick={handleLinkClick}>Contacts</Link>
      </nav>
      <button className="header-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        &equiv;
      </button>
    </div>
  );
}

export default Nav;

