import HomeItem from "./HomeItem";
import interior from './HomeContent/1.jpg';
import './home.css';
import AboutOptions from "./AboutOptions";
import videoMobile from './HomeContent/videoThree.mp4'

function Home() {
    return (
        <div>
            <h1>COFFEE WITH YOUR STORY</h1>
            <h2>visit us with your friends</h2>
            
 <div className="aboutCoffee">
        <HomeItem />
        <video className="video-mobile"
          autoPlay
          muted
          loop
          src={videoMobile} type="video/mp4" />   
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

export default Home;