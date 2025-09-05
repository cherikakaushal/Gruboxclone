import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help — reach out to us for any queries, feedback, or partnership opportunities.</p>
      </div>

      <div className="contact-wrapper">
        {/* Contact Info Section */}
        <div className="contact-info w3-animate-left">
          <h3>📍 Corporate Office</h3>
          <p>Grubox Foodworks, Plot 87, Sector 44, Gurgaon, Haryana, India</p>

          <h3>📞 Phone</h3>
          <p><a href="tel:+919999999999">+91 99999 99999</a></p>

          <h3>✉️ Email</h3>
          <p><a href="mailto:hello@grubox.in">hello@grubox.in</a></p>

          <h3>🌐 Website</h3>
          <p><a href="https://www.grubox.in">www.grubox.in</a></p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form w3-animate-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

<section className="animated-aura-section">
  <div className="animated-gradient-aura">
    <h2 className="w3-xxlarge w3-text-white w3-animate-opacity">Let’s Talk ✨</h2>
    <p className="w3-large w3-text-white w3-opacity">Drop a message and our panda will get back to you in no time!</p>
  </div>
</section>

export default Contact;
