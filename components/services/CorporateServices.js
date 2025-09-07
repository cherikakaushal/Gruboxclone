// components/services/CorporateServices.js
"use client";

// Single-section Corporate Services page (theme-aware)
// Images expected in /public/assets/corporate/ :
//  - hero-office-cafe.jpg   (16:9)
//  - img-vending.jpg        (4:3)
//  - img-ops-dash.jpg       (4:3)
//  - img-cafe-team.jpg      (optional, 4:3)
//  - press-strip.png        (wide strip, optional)

export default function CorporateServices({ theme = "dark" }) {
  return (
    <section className={`corp theme-${theme}`}>
      <div className="co-wrap">

        {/* HERO ROW */}
        <div className="co-hero">
          <div className="co-hero-copy">
            <h1 className="co-title">
              <span className="co-grad">Corporate Services</span> for modern offices
            </h1>
            <p className="co-sub">
              Cafeteria management, daily meal plans and smart vending—delivered with
              SLAs, analytics and proven playbooks.
            </p>

            <div className="co-cta-row">
              <a className="co-btn co-btn-primary" href="/book-a-tasting">
                Book a Discovery Call
              </a>

              {/* Updated: open the mini web deck instead of a PDF */}
              <a className="co-btn co-btn-ghost" href="/deck">
                View Quick Deck
              </a>
            </div>

            <ul className="co-chips">
              <li>SLAs &amp; uptime</li>
              <li>Hygiene audits</li>
              <li>Cashless &amp; wallet</li>
              <li>CSAT dashboards</li>
            </ul>
          </div>

          {/* Main banner image (minimal imagery) */}
          <div className="co-hero-art">
            <img
              className="co-hero-img"
              src="/assets/corporate/hero-office-cafe.jpg"
              alt="Modern office cafeteria with efficient service"
              loading="eager"
            />
          </div>
        </div>

        {/* SERVICE PILLARS */}
        <div className="co-pillars">
          <article className="pillar">
            <div className="p-icn" aria-hidden>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Cafeteria Management</h3>
            <p>End-to-end ops, menu engineering, vendor onboarding and cost controls.</p>
          </article>

          <article className="pillar">
            <div className="p-icn" aria-hidden>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 21a6 6 0 0 1 12 0" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Daily Meal Plans</h3>
            <p>Subscriptions with predictable billing, feedback loops and retention.</p>
          </article>

          <article className="pillar">
            <div className="p-icn" aria-hidden>
              <svg viewBox="0 0 24 24">
                <rect x="5" y="3" width="14" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="18" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h3>Smart Vending</h3>
            <p>Unmanned kiosks for hybrid floors; 24/7 availability with auto-refill.</p>
          </article>
        </div>

        {/* KPIs */}
        <div className="co-kpis">
          <div className="k"><strong>97–99%</strong><span>Lunch peak SLA</span></div>
          <div className="k"><strong>30–60 days</strong><span>Go-live timeline</span></div>
          <div className="k"><strong>4.6/5</strong><span>CSAT score</span></div>
          <div className="k"><strong>~40%</strong><span>60-day repeat</span></div>
        </div>

        {/* VISUAL PANELS (2–3 simple images) */}
        <div className="co-panels">
          <figure className="panel">
            <img className="panel-img" src="/assets/corporate/img-vending.jpg" alt="Smart vending in office lobby" loading="lazy"/>
            <figcaption>Self-learning vending: auto-refill, uptime alerts, cashless.</figcaption>
          </figure>

          <figure className="panel">
            <img className="panel-img" src="/assets/corporate/img-ops-dash.jpg" alt="Operations and CSAT dashboards" loading="lazy"/>
            <figcaption>Dashboards: CSAT, SKUs, feedback loops and spend.</figcaption>
          </figure>

          <figure className="panel optional">
            <img className="panel-img" src="/assets/corporate/img-cafe-team.jpg" alt="Team running cafeteria with SOPs" loading="lazy"/>
            <figcaption>Launch playbooks &amp; SOPs for consistent quality.</figcaption>
          </figure>
        </div>

        {/* PROOF / QUOTES */}
        <div className="co-proof">
          <div className="co-quotes">
            <blockquote>
              “Grubox improved our cafeteria experience and reduced queues within weeks.”
              <cite>— Office Admin, NCR</cite>
            </blockquote>
            <blockquote>
              “The vending rollout was seamless and the analytics are genuinely useful.”
              <cite>— HR, Bengaluru</cite>
            </blockquote>
          </div>
          <div className="co-press">
            <img src="/assets/corporate/press-strip.png" alt="Press mentions" loading="lazy"/>
          </div>
        </div>

        {/* MICRO FAQ */}
        <div className="co-faq">
          <details>
            <summary>How do you price?</summary>
            <p>
              Based on model mix (cafeteria, meal plans, vending), site volume and SLAs.
              We share a clear proposal after a discovery call.
            </p>
          </details>
          <details>
            <summary>Can we customize menus?</summary>
            <p>Yes—within a tested framework to maintain quality and cost control.</p>
          </details>
          <details>
            <summary>What’s the go-live timeline?</summary>
            <p>Typically 30–60 days, subject to site readiness and licensing.</p>
          </details>
        </div>

        {/* FINAL CTA */}
        <div className="co-final">
          <div>
            <h2 className="sec-title">Ready to upgrade your office food experience?</h2>
            <p className="sec-sub">We’ll share menu options, pricing and a go-live plan for your sites.</p>
          </div>
          <a className="co-btn co-btn-primary" href="/book-a-tasting">Book a Discovery Call</a>
        </div>

      </div>

      {/* background bloom */}
      <div className="co-bg-glow" aria-hidden />
    </section>
  );
}
