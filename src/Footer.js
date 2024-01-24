function Footer({ footerStyle }) {
   return (
     <div className="footer-cont" style={footerStyle}>
       <hr className="footer" />
       <div className="foot">
         <div>
           <p className="cont">PHONE</p>
           <p className="text">+(111) 111-11</p>
         </div>
         <div>
           <p className="cont">ADRESS</p>
           <p className="text">6 SOUTHWARK ST, LONDON</p>
         </div>
         <div>
           <p className="cont">EMAIL</p>
           <p className="text">INFO@COTALKS.COM</p>
         </div>
         <div>
           <p className="cont">HOURS</p>
           <p className="text">8AM - 10PM</p>
         </div>
       </div>
     </div>
   );
 }
 

export default Footer;