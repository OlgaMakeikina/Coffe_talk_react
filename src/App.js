import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './AboutComponent/About';
import Home from './Home';
import Menu from './MenuComponent/Menu';
import Team from './TeamComponent/Team';
import Contact from './Contact';
import './App.css';
import Nav from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <div>
<Router>
  
  <Nav/> 
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/Menu" element={<Menu/>} />
  <Route path="/Team" element={<Team/>} />
  <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
<Footer/>
    </div>
  )
  
  
  }

export default App;