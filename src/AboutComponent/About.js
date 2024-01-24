import AboutOptions from "./AboutOptions";
import interior from './AboutContent/1.jpg';
import cups from './AboutContent/cups.jpg';

function About() {

    return (
        <div>
            <h2 className="header">ABOUT US</h2>
            <div className="aboutCoffee">
                  <img className="interior" src={cups} alt="interior" />
            <div className="info-container">
               <p className="textBoxTwo">HAND CRAFTED & FRESH ROASTED COFFEE</p>
               <p className="everyMonth"> always fresh from the best coffee varieties</p>
               <hr/>
               <p className="fresh">Fresh ground or freshly roasted, high quality and great tasting. Try it with your friends.</p>
            </div>
         </div>
            <AboutOptions />
         <div className="aboutCoffee">
            <div className="info-container">
                <br/> <br/> 
               <p className="textBoxTwo">YOUR COMFORT IS OUR PRIORITY</p>
               <p className="everyMonth">comfort created especially for you</p>
               <hr/>
               <p className="fresh">The green oasis among the concrete jungle to relax from the hustle and bustle and enjoy freshly brewed coffee</p>
            </div>
            <img className="interior" src={interior} alt="interior" />
         </div>
        </div>
        
    )
}
export default About;