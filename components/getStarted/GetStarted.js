import React from 'react';
import './getStarted.css';

export default function GetStarted() {
  return (
    <section className="w3-container w3-padding-64 w3-white get-started-section">
      <div className="w3-content">
        <h2 className="w3-xxlarge w3-bold">Ready to Get Started with Grubox?</h2>
        <p className="w3-large w3-margin-top">
          Whether you're looking to install a smart vending machine, subscribe to corporate meals,
          or become our partner — you're at the right place.
        </p>

        <div className="w3-panel w3-card-4 w3-padding w3-margin-top w3-round get-started-card">
          <h4>Let's connect and set up a personalized solution for your workplace.</h4>
          <a href="/contact" className="w3-button w3-yellow w3-round-large w3-margin-top">
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
