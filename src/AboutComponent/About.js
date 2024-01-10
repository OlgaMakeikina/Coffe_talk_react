import imageOne from './AboutContent/5.png';
import imageTwo from './AboutContent/6.png';
import imageThree from './AboutContent/7.png';
import imageFour from './AboutContent/8.png';
import video from './AboutContent/video.mp4';
import wallpaper from './AboutContent/4.jpg';
import './about.css';
import TabsContent from './Tabs/TabsContent';
import { gsap } from "gsap";
import { useLayoutEffect } from 'react';

function About() {

   useLayoutEffect( () => {
      gsap.from(".box", {x: -600, opacity: 0, delay: 1, duration: 2, stagger: 0.7})
     }, [])

    return ( 
    <div> 
      <div id="headerOne">
         <img className="main" src={wallpaper} width="100%" height="150px" alt="wallpaper" />
         <div className="header">
            <h1 className="heading">SMALL CAFE IN THE HEART OF CITY</h1>
         </div>
      </div>
      <TabsContent />
    <div className="container">
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
 
 <div class="aboutCoffee">
 <video className="handAndCup"autoPlay muted loop>
     <source src={video} type="video/mp4"/>
  </video>
    <div className="boxTwo">
       <p className="textBoxTwo">HAND CRAFTED & FRESH ROASTED COFFEE</p>
       <p className="everyMonth">to your door every month</p>
       <hr/>
       <p className="fresh">Fresh ground or freshly roasted, high quality and great tasting delivered right to your door. This way, you receive your coffee in peak condition.</p>
    </div>
 </div>
</div>  
    )
}
export default About;