import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import heart from './heart.jpg';
function ContactForm() {

const [state, handleSubmit] = useForm("mkndgjqr");

if (state.succeeded) {
return (
<div className="thanks-cont">
   <p className="thanks">Thanks for your message!</p>
   <img className="thanks-img" src={heart} width="500px" alt="thank you!"/>
</div>
);
}

return (
<form onSubmit={handleSubmit}>
   <label htmlFor="email">
   Any Questions? Send Us a Message!
   </label>
   <input
      id="email"
      type="email" 
      name="email"
      placeholder="Enter your email..."
      />
   <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
      />
   <textarea
      id="message"
      name="message"
      placeholder="Type your message..."
      />
   <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
      />
   <button id="submit" type="submit" disabled={state.submitting}>
   Submit
   </button>
</form>
);
}
export default ContactForm;