import React from "react";

export default function About() {
  return (
    <div className="w3-white">

      {/* Hero About Title */}
      <section className="w3-container w3-padding-64 w3-center">
        <div className="w3-content" style={{ maxWidth: "900px" }}>
          <h1 className="w3-xxxlarge w3-bold">About <span className="w3-text-blue">Grubox</span></h1>
          <p className="w3-large w3-text-grey w3-padding-16">
            We are on a mission to transform workplace dining — one smart meal at a time.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="w3-container w3-padding-64 w3-light-grey">
        <div className="w3-content w3-row-padding" style={{ maxWidth: "1100px" }}>
          <div className="w3-half w3-padding-32">
            <h3 className="w3-xlarge w3-bold">Our Mission</h3>
            <p className="w3-text-grey">
              To deliver fresh, hygienic, and delightful meals to offices with tech-enabled convenience — empowering companies to care for their employees better.
            </p>
          </div>
          <div className="w3-half w3-padding-32">
            <h3 className="w3-xlarge w3-bold">Our Vision</h3>
            <p className="w3-text-grey">
              Become India’s most loved smart cafeteria partner — combining quality food, tech-first vending, and seamless cafeteria management.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Grubox */}
      <section className="w3-container w3-padding-64">
        <div className="w3-content w3-center" style={{ maxWidth: "1000px" }}>
          <h2 className="w3-xxlarge w3-bold">Why Choose Grubox?</h2>
          <div className="w3-row-padding w3-margin-top">
            {/* Card 1 */}
            <div className="w3-third w3-padding">
              <div className="w3-card w3-white w3-round-large w3-padding-32 w3-center">
                <div className="w3-xxxlarge">🚀</div>
                <h4 className="w3-bold">End-to-End Service</h4>
                <p>From pantry meal boxes to vending and cafeteria setups — we handle it all.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w3-third w3-padding">
              <div className="w3-card w3-white w3-round-large w3-padding-32 w3-center">
                <div className="w3-xxxlarge">🤖</div>
                <h4 className="w3-bold">Tech-Powered</h4>
                <p>Smart vending, real-time tracking, and seamless digital ordering experiences.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w3-third w3-padding">
              <div className="w3-card w3-white w3-round-large w3-padding-32 w3-center">
                <div className="w3-xxxlarge">💼</div>
                <h4 className="w3-bold">Corporate-First</h4>
                <p>Tailored for offices, co-working hubs, and enterprise cafeteria management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w3-container w3-padding-64 w3-light-grey">
        <div className="w3-content" style={{ maxWidth: "900px" }}>
          <h2 className="w3-xxlarge w3-bold w3-center">Our Values</h2>
          <ul className="w3-ul w3-large w3-margin-top">
            <li><strong>✔ Customer Delight:</strong> We go the extra mile to serve meals with care.</li>
            <li><strong>✔ Hygiene & Quality:</strong> Always fresh, always safe.</li>
            <li><strong>✔ Innovation:</strong> We build with tech to make food convenient.</li>
            <li><strong>✔ Sustainability:</strong> We’re working to reduce food & packaging waste.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="w3-container w3-padding-64 w3-center">
        <div className="w3-content" style={{ maxWidth: "700px" }}>
          <h3 className="w3-xxlarge w3-bold">Ready to upgrade your office meals?</h3>
          <p className="w3-large w3-text-grey w3-padding-16">Let’s build a better food experience for your team.</p>
          <button className="btn-primary w3-large w3-round-large">Get in Touch</button>
        </div>
      </section>
    </div>
  );
}
