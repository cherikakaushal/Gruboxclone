// app/get-started/page.js
import React from 'react';

export default function GetStartedPage() {
  return (
    <div className="w3-container w3-padding-64 w3-white">
      <div className="w3-content">
        <h2 className="w3-xxlarge w3-bold">🚀 Let's Get You Started</h2>
        <p className="w3-large w3-text-grey">
          Fill in your details and our team will connect with you shortly.
        </p>

        <form className="w3-container w3-white w3-card w3-padding w3-round-large" style={{ maxWidth: 600 }}>
          <p>
            <label className="w3-text-black">Name</label>
            <input className="w3-input w3-border w3-round" type="text" required />
          </p>
          <p>
            <label className="w3-text-black">Email</label>
            <input className="w3-input w3-border w3-round" type="email" required />
          </p>
          <p>
            <label className="w3-text-black">Message</label>
            <textarea className="w3-input w3-border w3-round" rows="4"></textarea>
          </p>
          <button
            className="w3-button w3-round-large"
            style={{ backgroundColor: '#ffd75c', color: '#333', fontWeight: 'bold' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
