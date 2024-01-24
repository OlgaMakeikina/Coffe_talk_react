import imageOne from './AboutContent/5.png';
import imageTwo from './AboutContent/6.png';
import imageThree from './AboutContent/7.png';
import imageFour from './AboutContent/8.png';
import { gsap } from 'gsap';
import './about.css';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const AboutOptions = () => {
  const container = useRef();

  useEffect(() => {
    const boxes = container.current.querySelectorAll('.box');

    gsap.fromTo(
      boxes,
      { x: -600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        duration: 2,
        stagger: 0.7,
      }
    );

    ScrollTrigger.batch(boxes, {
      start: 'top 80%',
      onEnter: (batch) => gsap.to(batch, { opacity: 1, duration: 1 }),
    });
  }, []);


    return ( 
    <div className="container" ref={container}>
    <div className="box">
       <img src={imageOne} width="80px" alt="coffee"/>
       <p className="one">VISIT US</p>
       <p className="two">find our cafe</p>
       <p className="three">We purchase the best coffee beans all over the world</p>
    </div>
    <div className="box">
       <img src={imageTwo} width="80px" alt="coffee"/>
       <p className="one">TAKEAWAY</p>
       <p className="two">taste coffee every day</p>
       <p className="three">Take coffee with you on the road</p>
    </div>
    <div className="box">
       <img src={imageThree} width="80px" alt="coffee"/>
       <p className="one">MASTERCLASSES</p>
       <p className="two">book a class</p>
       <p className="three">Events take place throughout the day without a break</p>
    </div>
    <div className="box">
       <img src={imageFour} width="80px" alt="coffee"/>
       <p className="one">BREWING</p>
       <p className="two">view the recipes</p>
       <p className="three">A brewed drink prepared from roasted beans is coffee</p>
    </div>

 
</div>  
    )
}
export default AboutOptions;