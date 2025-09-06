"use client";

import Link from "next/link";

export default function About() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="section w3-container" aria-labelledby="about-hero-title">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          <div className="w3-row-padding" style={{ alignItems: "center" }}>
            {/* Left: Title + copy + CTAs */}
            <div className="w3-col s12 m7 l7">
              <h1 id="about-hero-title" className="section-title" style={{ fontSize: "44px" }}>
                About Grubox
              </h1>
              <p className="section-subtitle" style={{ fontSize: "18px" }}>
                We’re on a mission to transform workplace dining — one smart meal at a time.
              </p>

              <div className="cta-row">
                <Link
                  prefetch
                  href="/corporate-services?ref=about-hero#plans"
                  aria-label="Explore Corporate Plans"
                  className="w3-button btn-primary w3-large w3-round-xlarge"
                >
                  Explore Corporate Plans
                </Link>

                <Link
                  prefetch
                  href="/book-a-tasting?ref=about-hero"
                  aria-label="Book a Tasting"
                  className="w3-button btn-ghost w3-large w3-round-xlarge"
                >
                  Book a Tasting
                </Link>
              </div>

              <p className="cta-micro">
                Cafeteria Management · Smart Vending · Daily Meal Plans
              </p>
            </div>

            {/* Right: KPI card */}
            <div className="w3-col s12 m5 l5" aria-label="Key performance indicators">
              <div className="card w3-padding-large">
                <div className="w3-row-padding">
                  <div className="w3-col s6">
                    <div className="kpi-num">2M+</div>
                    <div className="kpi-sub">Meals served</div>
                  </div>
                  <div className="w3-col s6">
                    <div className="kpi-num">120+</div>
                    <div className="kpi-sub">Corporate clients</div>
                  </div>
                  <div className="w3-col s6 w3-margin-top">
                    <div className="kpi-num">95%</div>
                    <div className="kpi-sub">On-time delivery</div>
                  </div>
                  <div className="w3-col s6 w3-margin-top">
                    <div className="kpi-num">3</div>
                    <div className="kpi-sub">Cities in NCR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HIGHLIGHTS (Mission / Vision / Values) ========== */}
      <section className="section w3-container about-highlights" aria-label="Mission, Vision and Values">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          <div className="w3-row-padding">
            {/* Mission */}
            <div className="w3-col s12 m6 l4">
              <div className="card w3-padding-large">
                <div className="highlight-title w3-large">🎯 Mission</div>
                <p className="muted">
                  Deliver fresh, hygienic and delightful meals to offices with tech-enabled convenience —
                  empowering companies to care for their employees better.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="w3-col s12 m6 l4">
              <div className="card w3-padding-large">
                <div className="highlight-title w3-large">🔭 Vision</div>
                <p className="muted">
                  Become India’s most-loved smart cafeteria partner — quality food, tech-first vending and
                  seamless cafeteria management.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="w3-col s12 m12 l4">
              <div className="card w3-padding-large">
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

      {/* ========== OUR STORY (Timeline) ========== */}
      <section className="section w3-container" aria-labelledby="story-title">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          <h2 id="story-title" className="section-title" style={{ fontSize: "36px" }}>
            Our Story
          </h2>

          <div className="timeline">
            {/* 2019 */}
            <div className="tl-item">
              <span className="tl-badge">2019</span>
              <h4 className="tl-title">Founded</h4>
              <p className="muted">
                Launched with a mission to modernize cafeteria experiences.
              </p>
            </div>

            {/* 2021 */}
            <div className="tl-item">
              <span className="tl-badge">2021</span>
              <h4 className="tl-title">Scaled</h4>
              <p className="muted">
                Expanded across Delhi-NCR with robust vendor partnerships.
              </p>
            </div>

            {/* 2023 */}
            <div className="tl-item">
              <span className="tl-badge">2023</span>
              <h4 className="tl-title">Tech-first</h4>
              <p className="muted">
                Introduced smart vending and seamless cafeteria management.
              </p>
            </div>

            {/* Today */}
            <div className="tl-item">
              <span className="tl-badge">Today</span>
              <h4 className="tl-title">Trusted partner</h4>
              <p className="muted">
                120+ corporates served with 95% on-time delivery — and growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOD SAFETY & COMPLIANCE ========== */}
      <section className="section w3-container" aria-labelledby="safety-title">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          <h2 id="safety-title" className="section-title" style={{ fontSize: "32px" }}>
            Food Safety &amp; Compliance
          </h2>
          <p className="section-subtitle">
            We operate with strict SOPs and batch-level traceability.
          </p>

          <div className="w3-row-padding">
            <div className="w3-col s12 m4">
              <div className="card w3-padding-large">
                <span className="badge">FSSAI Compliant</span>
              </div>
            </div>
            <div className="w3-col s12 m4">
              <div className="card w3-padding-large">
                <span className="badge">ISO 9001:2015</span>
              </div>
            </div>
            <div className="w3-col s12 m4">
              <div className="card w3-padding-large">
                <span className="badge">ISO 14001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KITCHENS & SOURCING ========== */}
      <section className="section w3-container" aria-labelledby="kitchen-title">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          <h2 id="kitchen-title" className="section-title" style={{ fontSize: "32px" }}>
            Kitchens &amp; Sourcing
          </h2>

          <div className="w3-row-padding">
            <div className="w3-col s12 m6 l3">
              <div className="card w3-padding-large">
                <div className="highlight-title">Freshly cooked daily</div>
                <p className="muted">Batches planned to office timings.</p>
              </div>
            </div>
            <div className="w3-col s12 m6 l3">
              <div className="card w3-padding-large">
                <div className="highlight-title">Vendor audits</div>
                <p className="muted">Regular hygiene &amp; process checks.</p>
              </div>
            </div>
            <div className="w3-col s12 m6 l3">
              <div className="card w3-padding-large">
                <div className="highlight-title">Nutrition first</div>
                <p className="muted">Balanced menus for all hands.</p>
              </div>
            </div>
            <div className="w3-col s12 m6 l3">
              <div className="card w3-padding-large">
                <div className="highlight-title">Segregation</div>
                <p className="muted">Separate veg / non-veg prep &amp; storage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="section w3-container" aria-labelledby="cta-title">
        <div className="w3-content w3-center" style={{ maxWidth: 900 }}>
          <div className="card w3-padding-large">
            <h3 id="cta-title" className="w3-margin-top w3-margin-bottom">
              Ready to upgrade your office meals?
            </h3>

            <div className="w3-margin-bottom cta-row cta-row-center">
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
