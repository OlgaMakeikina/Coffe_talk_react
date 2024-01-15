
import wallpaper from './AboutContent/4.jpg';
import './about.css';
import TabsContent from './Tabs/TabsContent';

function About() {

    return ( 
    <div> 
      <div id="headerOne">
         <img className="main" src={wallpaper} width="100%" height="150px" alt="wallpaper" />
         <div className="header">
            <h1 className="heading">SMALL CAFE IN THE HEART OF CITY</h1>
         </div>
      </div>
      <TabsContent />
</div>  
    )
}
export default About;