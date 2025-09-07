"use client";

export default function DeckMini({ theme = "dark" }) {
  return (
    <section className={`deck theme-${theme}`}>
      <div className="dk-wrap">

        {/* Header */}
        <header className="dk-head">
          <h1 className="dk-title">
            <span className="dk-grad">Grubox</span> • Capability Snapshot
          </h1>
          <p className="dk-sub">
            A short, skimmable overview for office admins, HR and facilities teams.
          </p>
        </header>

        {/* Cover card (click → YouTube) */}
        <a
          className="dk-cover"
          href="https://www.youtube.com/@grubox_fnb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Grubox YouTube channel"
        >
          <img
            src="/assets/deck/deck-cover.jpg"
            alt="Grubox capability cover — click to open YouTube"
          />
          <span className="dk-cover-badge">Watch demos &amp; walkthroughs</span>
        </a>

        {/* 4-step flow */}
        <section className="dk-steps">
          <h2 className="sec-title">How we work with you</h2>
          <div className="steps-grid">
            <article className="step">
              <div className="s-num">1</div>
              <h3>Assess</h3>
              <p>Understand sites, peak loads, cafeteria constraints and policy needs.</p>
            </article>
            <article className="step">
              <div className="s-num">2</div>
              <h3>Propose</h3>
              <p>Model mix (cafeteria, meal plans, vending), SLAs, and launch plan.</p>
            </article>
            <article className="step">
              <div className="s-num">3</div>
              <h3>Pilot</h3>
              <p>Short pilot with feedback loops, CSAT, SKU tuning and audits.</p>
            </article>
            <article className="step">
              <div className="s-num">4</div>
              <h3>Launch &amp; Scale</h3>
              <p>Go live within 30–60 days; dashboards and reviews to keep quality high.</p>
            </article>
          </div>
        </section>

        {/* Value bullets */}
        <section className="dk-values">
          <ul className="chips">
            <li>SLAs &amp; uptime</li>
            <li>Hygiene audits</li>
            <li>Cashless wallet</li>
            <li>CSAT dashboards</li>
            <li>Vendor playbooks</li>
          </ul>
        </section>

        {/* Micro KPIs */}
        <section className="dk-kpis">
          <div className="k"><strong>97–99%</strong><span>Lunch peak SLA</span></div>
          <div className="k"><strong>30–60 days</strong><span>Go-live</span></div>
          <div className="k"><strong>4.6/5</strong><span>CSAT</span></div>
          <div className="k"><strong>~40%</strong><span>60-day repeat</span></div>
        </section>

        {/* Final CTA */}
        <section className="dk-cta">
          <div>
            <h2 className="sec-title">Want the detailed plan for your sites?</h2>
            <p className="sec-sub">We’ll share menu options, pricing and SLA proposals.</p>
          </div>
          <a className="dk-btn dk-btn-primary" href="/book-a-tasting">
            Book a Discovery Call
          </a>
        </section>

      </div>
      <div className="dk-bg-glow" aria-hidden />
    </section>
  );
}
