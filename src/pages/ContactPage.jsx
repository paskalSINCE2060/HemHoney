import React from 'react';

const ContactPage = () => (
  <div>
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" rows="5"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default ContactPage;
