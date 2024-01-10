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
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setPerson(next),
  };
  

    return (
      <div className="Team">
           <h1>Meet The Team</h1>
        <Slider {...settings}>
          {data.map((item) => (
            <div className={item.id === person ? "slide activeSlide" : "slide"}>
              <img className="image" src={item.image} alt={item.name} />
              <div className="worker">
                   <p className="staff">{item.name}</p>
              <p className="profession">{item.position}</p>  
              <div className="icons">
                 <img className="network" src={face} alt="instagram"/>
              <img className="network" src={inst} alt="instagram"/>
              </div>
             
              </div>
              
            </div>
          ))} 
        </Slider>
  <hr/>
      <div class="headerAbout">
      
         <p class="textAbout">We are proud of our coffee shop with the highest-quality products, most inviting stores, friendliest staff and the best coffee in the world.</p>
      </div>
      <hr/>
      </div>
  );
};

export default Team;

