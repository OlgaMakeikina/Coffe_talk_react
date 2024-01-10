import { Link } from "react-router-dom";
import logo from './Content/logo.png';
import { useState, useLayoutEffect } from "react";
import { FaBars } from "react-icons/fa";


function Nav() {


  const [isOpen, setIsOpen] = useState();

    return (
        <div>
        <nav className={`header-nav ${!isOpen ? "active" : ""}`}>
  <div className="logo">
  <img className='logotype' src={logo} width="100px" alt="logo"/>
  <p className="name"><span className="coffee">Coffee</span><span className="talks">Talk</span></p>
  </div>

  <Link to="/" className='link'>Home</Link>
  <Link to="/about" className='link'>About us</Link>
  <Link to="/menu" className='link'>Menu</Link>
  <Link to="/Team" className='link'>Team</Link>
  <Link to="/contact" className='link'>Contacts</Link>
    </nav> 
  <button className="header-menu-btn" onClick={() => setIsOpen(!isOpen)}>
  <FaBars className="icon-nav"/>
  </button>
    </div>
    )
  }
  export default Nav;