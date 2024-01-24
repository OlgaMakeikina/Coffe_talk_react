import ContactForm from "./ContactForm";
import Footer from "../AppComponents/Footer";
import ObjectMap from "./ObjectMap";
import './contact.css';
function Contact() {
return (
<div>
   <h2 className="header">CONTACTS</h2>
   <div className="contacts-footer">
      <Footer />
      <ObjectMap />
   </div>
   <ContactForm />
</div>
);
}

export default Contact;