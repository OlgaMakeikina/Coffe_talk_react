import React, { useState } from "react";
import Slider from "react-slick";
import './team.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {data} from './data';
import face from './TeamContent/facebook.png';
import inst from './TeamContent/inst.png'
const Team = () => {
const [person, setPerson] = useState(0);
const NextArrow = ({ onClick }) => (
<div className="arrow next" onClick={onClick}>
   <FaArrowRight />
</div>
);

const PrevArrow = ({ onClick }) => (
<div className="arrow prev" onClick={onClick}>
   <FaArrowLeft />
</div>
);

const settings = {
  infinite: true,
  dots: true,
  lazyLoad: true,
  speed: 300,
  centerMode: true,
  centerPadding: 0,
  nextArrow: 
<NextArrow />
,
  prevArrow: 
<PrevArrow />
,
beforeChange: (current, next) => setPerson(next),
  slidesToShow: 3, 
  responsive: [
{
  breakpoint: 576, 
  settings: {
  slidesToShow: 1,
},
},
],
};

return (
<div className="Team">
   <h2 className="header">MEET THE TEAM</h2>
   <Slider {...settings}>
      {data.map((item) => (
      <div key={item.id} className={item.id === person ? "slide activeSlide" : "slide"}>
      <img className="image" src={item.image} alt={item.name} />
      <div className="worker">
         <p className="staff">{item.name}</p>
         <p className="profession">{item.position}</p>
         <div className="icons">
            <a href={item.face} target="_blank" rel="noopener noreferrer">
            <img className="network" src={face} alt="facebook" />
            </a>
            <a href={item.inst} target="_blank" rel="noopener noreferrer">
            <img className="network" src={inst} alt="instagram" />
            </a>
         </div>
      </div>
</div>
))} 
</Slider>
<hr className="line"/>
<div className="headerAbout">
   <p className="textAbout">We are proud of our coffee shop with the highest-quality products, most inviting stores, friendliest staff and the best coffee in the world.</p>
</div>
<hr className="line"/>
</div>
);
};
export default Team;

