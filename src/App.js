import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './HomeComponent/Home';
import Menu from './MenuComponent/Menu';
import Team from './TeamComponent/Team';
import Contact from './ContactsComponent/Contact';
import './App.css';
import Nav from './Navbar';
import Footer from './Footer';
import Gallery from './GalleryComponent/Gallery';
import ScrollToTopButton from './Scroll'
import CartButton from './CartButton';

function App() {
  return (
     <div> 
<Router>
  <Nav/> 
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/gallery" element={<Gallery/>} />
  <Route path="/Menu" element={<Menu/>} />
  <Route path="/Team" element={<Team/>} />
  <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
<Footer/>
<ScrollToTopButton />
<CartButton />  
 </div>
  )
  
  
  }

export default App;