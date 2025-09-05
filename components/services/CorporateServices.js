import React from "react";

export default function CorporateServices() {
  return (
    <div className="w3-light-grey">

      {/* Hero Section */}
      <section className="w3-container w3-padding-64 w3-white w3-center">
        <div className="w3-content" style={{ maxWidth: "900px" }}>
          <h1 className="w3-jumbo w3-bold" style={{ color: "#333" }}>
            🚀 Your one‑stop solution for <span style={{ color: "#ffb347" }}>corporate F&B</span> needs.
          </h1>
          <p className="w3-xlarge w3-text-grey w3-opacity">
            From smart vending machines to full-scale cafeteria setups — Grubox delivers future-ready dining.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="w3-container w3-padding-64 w3-white">
        <div className="w3-content" style={{ maxWidth: "1100px" }}>
          <div className="w3-row-padding w3-margin-top w3-center">
            {[
              {
                emoji: "🍽️",
                title: "Corporate Meals",
                desc: "Fresh, delicious meals served daily at your office. Nutrition meets flavor.",
              },
              {
                emoji: "🛒",
                title: "Digital Tuck Shop",
                desc: "Smart snack stations at your fingertips. Curated, cashless, convenient.",
              },
              {
                emoji: "📦",
                title: "Office Deliveries",
                desc: "Premium snacks & meals delivered for events, meetings or daily hunger.",
              },
            ].map((service, i) => (
              <div key={i} className="w3-third w3-padding">
                <div
                  className="w3-card-4 w3-round-large w3-white w3-hover-shadow"
                  style={{
                    padding: "40px",
                    border: "1px solid #eee",
                    transition: "0.3s",
                    background: "#fff",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="w3-jumbo">{service.emoji}</div>
                  <h3 className="w3-large w3-bold w3-margin-top">{service.title}</h3>
                  <p className="w3-text-grey">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grubox Cafeteria Platform */}
      <section className="w3-container w3-padding-64" style={{ background: "#fff8e1" }}>
        <div className="w3-content w3-center" style={{ maxWidth: "900px" }}>
          <h2 className="w3-xxlarge w3-bold" style={{ color: "#333" }}>
            ⚙️ Grubox Cafeteria Platform
          </h2>
          <p className="w3-large w3-text-grey w3-padding-16">
            Manage meals, control access, and monitor reports — all through one powerful system.
          </p>
          <button className="w3-button w3-round-large w3-large" style={{ background: "#ffd75c", color: "#333" }}>
            Contact Us to Get Started
          </button>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="w3-container w3-padding-64 w3-white w3-center">
        <div className="w3-content" style={{ maxWidth: "1000px" }}>
          <h3 className="w3-xxlarge w3-bold">Trusted by Leading Corporates</h3>
          <div className="w3-row-padding w3-padding-32">
            {[
              "AmericanExpress",
              "KPMG",
              "SunLife",
              "Aon",
              "Clifford",
              "Honda",
              "Panasonic",
              "CushmanWakefield",
            ].map((client, idx) => (
              <div key={idx} className="w3-col l3 m4 s6 w3-padding-16">
                <img
                  src={`/assets/clients/${client}.png`}
                  alt={client}
                  className="w3-image"
                  style={{ maxWidth: "120px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="w3-container w3-padding-64" style={{ background: "#fafafa" }}>
        <div className="w3-content" style={{ maxWidth: "600px" }}>
          <h3 className="w3-xlarge w3-bold w3-text-black">📩 Get in Touch with Us</h3>
          <form className="w3-margin-top">
            <input
              className="w3-input w3-round-large w3-margin-bottom"
              type="text"
              placeholder="Your Name"
              style={{ border: "1px solid #ddd" }}
            />
            <input
              className="w3-input w3-round-large w3-margin-bottom"
              type="email"
              placeholder="Your Email"
              style={{ border: "1px solid #ddd" }}
            />
            <textarea
              className="w3-input w3-round-large w3-margin-bottom"
              rows="4"
              placeholder="Your Requirement"
              style={{ border: "1px solid #ddd" }}
            />
           <button
  className="w3-button w3-round-large w3-large"
  style={{ background: "#ffd75c", color: "#333" }}
>
  Contact Us to Get Started
</button>

          </form>
        </div>
      </section>
    </div>
  );
}
