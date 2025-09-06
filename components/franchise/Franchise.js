// components/Franchise.js
// Uses /public/assets/franchise/*
// Theme: add theme-dark or theme-light on the wrapper.

import "./franchise.css";

export default function Franchise() {
  return (
    <section className="franchise theme-light">{/* theme-dark or theme-light */}
      {/* HERO */}
      <header className="fra-hero">
        <div className="fra-wrap">
          <div className="fra-hero-copy">
            <h1 className="hero-title">
              <span className="grad-text">Bring Grubox</span> to Your City
            </h1>
            <p className="sub">
              A tech-enabled cafeteria &amp; meal program that modern offices already love.
              Launch fast with our playbooks, tech and corporate demand.
            </p>

            <div className="cta-row">
              <a className="btn-primary" href="/book-a-tasting">Book a Discovery Call</a>
            </div>

            <p className="press-line">Press mentions: ET Now, YourStory, Outlook and more</p>
          </div>

          <div className="fra-hero-art">
            <img
              src="/assets/franchise/hero-office-cafeteria.jpg"
              alt="Modern office cafeteria"
              className="hero-img"
              loading="eager"
            />
          </div>
        </div>
        <div className="hero-glow" aria-hidden />
      </header>

      {/* WHY GRUBOX */}
      <section className="fra-section" id="why">
        <div className="fra-wrap">
          <h2 className="sec-title">Why partner with Grubox</h2>
          <p className="sec-sub">
            Multiple revenue streams, proven playbooks, and a tech stack built for offices.
          </p>

          <ul className="cards-4">
            <li className="card">
              <img src="/assets/franchise/vp-cafeteria-management.jpg" alt="Cafeteria Management" className="card-img" />
              <h3>Cafeteria Management</h3>
              <p>End-to-end operations, menu engineering and vendor SOPs tuned for office crowds.</p>
            </li>
            <li className="card">
              <img src="/assets/franchise/vp-meal-plans.jpg" alt="Daily Meal Plans" className="card-img" />
              <h3>Daily Meal Plans</h3>
              <p>Predictable subscriptions that smooth demand and increase retention.</p>
            </li>
            <li className="card">
              <img src="/assets/franchise/vp-smart-vending.jpg" alt="Smart Vending" className="card-img" />
              <h3>Smart Vending</h3>
              <p>Unmanned kiosks for hybrid offices and off-peak revenue.</p>
            </li>
            <li className="card">
              <img src="/assets/franchise/vp-analytics.jpg" alt="Tech & Analytics" className="card-img" />
              <h3>Tech &amp; Analytics</h3>
              <p>Preorders, feedback loops, dashboards and SKU-level insights.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="fra-section" id="support">
        <div className="fra-wrap">
          <h2 className="sec-title">What you get</h2>
          <ul className="cards-3">
            <li className="card">
              <img src="/assets/franchise/support-sops.jpg" alt="Playbooks & Training" className="card-img" />
              <h3>Playbooks &amp; Training</h3>
              <ul className="bullets">
                <li>Kitchen layout &amp; equipment SOPs</li>
                <li>Hiring templates &amp; onboarding</li>
                <li>Menu &amp; vendor onboarding</li>
              </ul>
            </li>
            <li className="card">
              <img src="/assets/franchise/support-tech-toolkit.jpg" alt="Tech & Marketing Toolkit" className="card-img" />
              <h3>Tech &amp; Marketing Toolkit</h3>
              <ul className="bullets">
                <li>Preorders, feedback, dashboards</li>
                <li>Launch marketing kit</li>
                <li>Ongoing ops reviews</li>
              </ul>
            </li>
            <li className="card">
              <img src="/assets/franchise/franchise-cta.jpg" alt="Corporate pipeline" className="card-img" />
              <h3>Corporate Pipeline</h3>
              <ul className="bullets">
                <li>Intros &amp; RFP guidance</li>
                <li>Anchor client playbook</li>
                <li>Multi-model expansion</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESS (Apply → Evaluate → Onboard → Launch) */}
      <section className="fra-section" id="process">
        <div className="fra-wrap">
          <h2 className="sec-title">How it works</h2>

          <ol className="steps">
            <li>
              <div className="step-media">
                <img src="/assets/franchise/step-apply.png" alt="" />
                <span className="step-num">1</span>
              </div>
              <h3>Apply</h3>
              <p>Share your city, capital range and experience.</p>
            </li>

            <li>
              <div className="step-media">
                <img src="/assets/franchise/step-evaluate.png" alt="" />
                <span className="step-num">2</span>
              </div>
              <h3>Evaluate</h3>
              <p>Market sizing &amp; site shortlisting together.</p>
            </li>

            <li>
              <div className="step-media">
                <img src="/assets/franchise/step-onboard.png" alt="" />
                <span className="step-num">3</span>
              </div>
              <h3>Onboard</h3>
              <p>Training, kitchen setup, supplier network.</p>
            </li>

            <li>
              <div className="step-media">
                <img src="/assets/franchise/step-launch.png" alt="" />
                <span className="step-num">4</span>
              </div>
              <h3>Launch &amp; Scale</h3>
              <p>Go live, build corporate pipeline, optimize unit mix.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* QUOTES */}
      <section className="fra-section" id="proof">
        <div className="fra-wrap proof-grid">
          <figure className="quote">
            <img src="/assets/franchise/founder-quote-1.jpg" alt="Franchise operator portrait" className="avatar-img" />
            <figcaption>
              <blockquote>
                “Grubox gave us the playbook and tech to start fast. Within months we had stable meal
                plan revenue and a cafeteria anchor.”
              </blockquote>
              <div className="byline">— Franchise Operator, NCR</div>
            </figcaption>
          </figure>

          <figure className="quote">
            <img src="/assets/franchise/founder-quote-2.jpg" alt="Franchise partner portrait" className="avatar-img" />
            <figcaption>
              <blockquote>
                “The corporate intros and vending model helped us de-risk lunch peaks and use the kitchen all day.”
              </blockquote>
              <div className="byline">— Franchise Partner, Bengaluru</div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fra-cta">
        <div className="fra-wrap cta-inner">
          <h2>Ready to build a profitable food business?</h2>
          <div className="cta-row">
            <a className="btn-primary" href="/book-a-tasting">Book a Discovery Call</a>
          </div>
        </div>
      </section>
    </section>
  );
}
