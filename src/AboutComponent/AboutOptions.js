
import { gsap } from 'gsap';
import './about.css';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dataAbout } from './dataAbout'

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
      {dataAbout.map(item => (
        <div className="box" key={item.id}>
          <img src={item.image} width="80px" alt="icon" />
          <p className="one">{item.textOne}</p>
          <p className="two">{item.textTwo}</p>
          <p className="three">{item.textThree}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutOptions;