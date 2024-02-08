import { dataFooter } from './dataFooter';
import './footer.css'

function Footer({ footerStyle }) {
   return (
    <div style={footerStyle}>
      <hr className="footer" /> 
     <div className="footer-cont" >
        {dataFooter.map(item => (
       <div className="foot" key={item.id}>
           <p className="cont">{item.cont}</p>
           <p className="text">{item.text}</p>
       </div>
         ))}
     </div>
    </div>
    
   );
 }
 

export default Footer;