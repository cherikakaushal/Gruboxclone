'use client';
import React from 'react';
import './franchise.css'; // Optional if you want to split CSS from JS

export default function Franchise() {
  return (
    <section className="w3-container franchise-section w3-padding-64">
      <div className="w3-content">

        {/* Hero */}
        <div className="w3-center w3-margin-bottom">
          <h1 className="w3-xxxlarge w3-bold w3-text-black">Join the Grubox Franchise Revolution</h1>
          <p className="w3-large w3-text-grey w3-padding-16">
            Be a part of India’s fastest-growing smart food solutions brand.
          </p>
        </div>

        {/* Cards */}
        <div className="w3-row-padding w3-margin-top">
          {[
            ['💸', 'Low Investment, High Returns', 'Start with minimal infra and generate recurring revenue.'],
            ['🎓', 'Full Training & Support', 'We help you set up, train staff & operate smoothly.'],
            ['🏢', 'Brand Leverage', 'Capitalize on our strong corporate presence & trust.'],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="w3-third w3-padding">
              <div className="franchise-card w3-card w3-white">
                <div className="w3-xxlarge">{icon}</div>
                <h3 className="w3-bold w3-margin-top">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="w3-padding-64 w3-margin-top w3-white w3-round-large w3-padding-large">
          <h2 className="w3-xlarge w3-bold">Franchise Requirements</h2>
          <ul className="w3-ul w3-large w3-margin-top franchise-list">
            <li>💰 Investment: ₹3L – ₹5L</li>
            <li>📍 Location: 50–150 sq.ft commercial space</li>
            <li>💡 Passion for Food & Business</li>
            <li>📦 Basic understanding of retail or food service</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="w3-center w3-padding-64">
          <a href="/contact" className="w3-button w3-round-large w3-xlarge franchise-btn">
            Contact Us to Start Your Franchise
          </a>
        </div>
      </div>
    </section>
  );
}
