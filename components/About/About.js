// components/About/About.js
"use client";

import Link from "next/link";
import "./about.css"; // component-level polish (cards, badges, kpi helpers)

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="section hero w3-container" aria-labelledby="about-hero-title">
        <div className="w3-content">
          <div className="w3-row-padding" style={{ alignItems: "center" }}>
            <div className="w3-col s12 m7 l7">
              <h1 id="about-hero-title" className="section-title hero-title">
                About Grubox
              </h1>
              <p className="section-subtitle hero-sub">
                We’re on a mission to transform workplace dining — one smart meal at a time.
              </p>

              {/* ONLY ONE CTA as requested */}
              <div className="hero-ctas">
                <Link
                  prefetch
                  href="/book-a-tasting?ref=about-hero"
                  aria-label="Book a Tasting"
                  className="w3-button btn-ghost w3-round-xlarge w3-large"
                >
                  Book a Tasting
                </Link>
              </div>

              <p className="cta-micro">Cafeteria Management · Smart Vending · Daily Meal Plans</p>
            </div>

            {/* KPI CARD */}
            <div className="w3-col s12 m5 l5" aria-label="Key performance indicators">
              <div className="card kpi-card">
                <div className="kpi-grid">
                  <div>
                    <div className="kpi-num">2M+</div>
                    <div className="kpi-sub">Meals served</div>
                  </div>
                  <div>
                    <div className="kpi-num">120+</div>
                    <div className="kpi-sub">Corporate clients</div>
                  </div>
                  <div>
                    <div className="kpi-num">95%</div>
                    <div className="kpi-sub">On-time delivery</div>
                  </div>
                  <div>
                    <div className="kpi-num">3</div>
                    <div className="kpi-sub">Cities in NCR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section w3-container" aria-label="Mission, Vision and Values">
        <div className="w3-content">
          <div className="w3-row-padding about-highlights">
            <div className="w3-col s12 m6 l4">
              <div className="card">
                <div className="highlight-title w3-large">🎯 Mission</div>
                <p className="highlight-text">
                  Deliver fresh, hygienic and delightful meals to offices with tech-enabled convenience —
                  empowering companies to care for their employees better.
                </p>
              </div>
            </div>

            <div className="w3-col s12 m6 l4">
              <div className="card">
                <div className="highlight-title w3-large">🔭 Vision</div>
                <p className="highlight-text">
                  Become India’s most-loved smart cafeteria partner — quality food, tech-first vending and
                  seamless cafeteria management.
                </p>
              </div>
            </div>

            <div className="w3-col s12 m12 l4">
              <div className="card">
                <div className="highlight-title w3-large">💛 Values</div>
                <ul className="w3-ul highlight-list">
                  <li>Balanced, honest ingredients</li>
                  <li>FSSAI-compliant kitchens</li>
                  <li>Reliable service &amp; SLAs</li>
                  <li>Sustainable operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section w3-container" aria-labelledby="story-title">
        <div className="w3-content">
          <h2 id="story-title" className="section-title">Our Story</h2>
          <div className="timeline">
            <div className="tl-item">
              <span className="tl-badge">2019</span>
              <h4 className="tl-title">Founded</h4>
              <p className="muted">Launched with a mission to modernize cafeteria experiences.</p>
            </div>
            <div className="tl-item">
              <span className="tl-badge">2021</span>
              <h4 className="tl-title">Scaled</h4>
              <p className="muted">Expanded across Delhi-NCR with robust vendor partnerships.</p>
            </div>
            <div className="tl-item">
              <span className="tl-badge">2023</span>
              <h4 className="tl-title">Tech-first</h4>
              <p className="muted">Introduced smart vending and seamless cafeteria management.</p>
            </div>
            <div className="tl-item">
              <span className="tl-badge">Today</span>
              <h4 className="tl-title">Trusted partner</h4>
              <p className="muted">120+ corporates served with 95% on-time delivery — and growing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="section w3-container" aria-labelledby="safety-title">
        <div className="w3-content">
          <h2 id="safety-title" className="section-title">Food Safety &amp; Compliance</h2>
          <p className="section-subtitle">We operate with strict SOPs and batch-level traceability.</p>
          <div className="w3-row-padding">
            <div className="w3-col s12 m4"><div className="card"><span className="badge">FSSAI Compliant</span></div></div>
            <div className="w3-col s12 m4"><div className="card"><span className="badge">ISO 9001:2015</span></div></div>
            <div className="w3-col s12 m4"><div className="card"><span className="badge">ISO 14001:2015</span></div></div>
          </div>
        </div>
      </section>

      {/* KITCHENS & SOURCING */}
      <section className="section w3-container" aria-labelledby="kitchen-title">
        <div className="w3-content">
          <h2 id="kitchen-title" className="section-title">Kitchens &amp; Sourcing</h2>
          <div className="w3-row-padding">
            <div className="w3-col s12 m6 l3"><div className="card"><div className="highlight-title">Freshly cooked daily</div><p className="muted">Batches planned to office timings.</p></div></div>
            <div className="w3-col s12 m6 l3"><div className="card"><div className="highlight-title">Vendor audits</div><p className="muted">Regular hygiene &amp; process checks.</p></div></div>
            <div className="w3-col s12 m6 l3"><div className="card"><div className="highlight-title">Nutrition first</div><p className="muted">Balanced menus for all hands.</p></div></div>
            <div className="w3-col s12 m6 l3"><div className="card"><div className="highlight-title">Segregation</div><p className="muted">Separate veg / non-veg prep &amp; storage.</p></div></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section w3-container" aria-labelledby="cta-title">
        <div className="w3-content w3-center" style={{ maxWidth: 900 }}>
          <div className="card">
            <h3 id="cta-title" className="w3-margin-top w3-margin-bottom">
              Ready to upgrade your office meals?
            </h3>
            <div className="cta-row cta-row-center w3-margin-bottom">
              <Link
                prefetch
                href="/book-a-tasting?ref=about-cta"
                className="w3-button btn-primary w3-round-xlarge w3-large"
                aria-label="Book a Tasting"
              >
                Book a Tasting
              </Link>
              <Link
                prefetch
                href="/meal-plans?ref=about-cta#plans"
                className="w3-button btn-ghost w3-round-xlarge w3-large"
                aria-label="See Meal Plans"
              >
                See Meal Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
