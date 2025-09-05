// app/getStarted/page.js
import "../../components/getStarted/getStarted.css";
import GetStarted from "../../components/getStarted/GetStarted";

export const metadata = {
  title: "Get Started | Grubox Corporate Meals",
  description:
    "Tell us about your team and we’ll tailor a corporate meal plan for your office in Delhi-NCR.",
};

export default function GetStartedPage() {
  return (
    <div className="w3-white gs-page">
      {/* Optional JSON-LD for richer SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Grubox",
            url: "https://services.grubox.in",
            sameAs: [
              "https://www.instagram.com/grubox.in/reels/",
              "https://in.linkedin.com/company/grubox"
            ],
            areaServed: "Delhi NCR",
            description:
              "Corporate meal plans and office food delivery across Gurgaon, Noida and Delhi.",
          }),
        }}
      />

      {/* Hero */}
      <header className="gs-hero gradient-panel w3-text-white">
        <div className="gs-hero-shapes" aria-hidden="true" />
        <div className="w3-content gs-hero-inner">
          <div>
            <h1 className="gs-title">
              Let’s Get You Started <span className="gs-emoji">🚀</span>
            </h1>
            <p className="gs-sub">
              Share a few details and we’ll craft the perfect office meal
              plan—fresh, hygienic, and always on time.
            </p>

            {/* Hidden keyword helpers (accessible, not visible) */}
            <span className="sr-only">
              corporate meals in Gurgaon, Noida, Delhi; office lunch catering; daily healthy thali
            </span>

            <div className="gs-badges">
              <span>✓ FSSAI Compliant</span>
              <span>✓ On-time Delivery</span>
              <span>✓ GST Billing</span>
              <span>✓ Dedicated Support</span>
            </div>
          </div>
        </div>
        <div className="gs-hero-wave" />
      </header>

      {/* Form + Sidebar */}
      <section className="w3-container w3-padding-64">
        <div className="w3-content gs-grid">
          <div className="gs-card gs-form-wrap glass-2 lift">
            <GetStarted />
          </div>

          <aside className="gs-aside">
            <div className="gs-card glass lift">
              <h3 className="w3-margin-top-0">Why Grubox for Teams?</h3>
              <ul className="gs-list">
                <li>Custom menus & dietary preferences</li>
                <li>Slot-based deliveries across shifts</li>
                <li>Consolidated monthly GST invoices</li>
                <li>Dedicated on-site coordinator</li>
              </ul>
            </div>

            <div className="gs-card glass lift">
              <h3 className="w3-margin-top-0">Talk to a Human</h3>
              <p className="w3-text-grey">Prefer a quick chat?</p>
              <div className="gs-contact">
                <a
                  href="tel:+919999988888"
                  className="btn white block"
                  aria-label="Call Grubox Sales"
                >
                  📞 +91 99999 88888
                </a>
                <a
                  href="mailto:sales@grubox.in"
                  className="btn ghost block"
                  aria-label="Email Grubox Sales"
                >
                  ✉️ sales@grubox.in
                </a>

                {/* Instagram – SEO-friendly label */}
                <a
                  href="https://www.instagram.com/grubox.in/reels/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Follow Grubox on Instagram"
                  title="Follow Grubox on Instagram"
                  className="btn ig block"
                >
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.5 1.2.5.5.9.9 1.2 1.5.3.5.5 1.2.6 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.2 1.5-.5.5-.9.9-1.5 1.2-.5.3-1.2.5-2.4.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.5-1.2a5 5 0 0 1-1.2-1.5c-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.2-1.5.5-.5.9-.9 1.5-1.2.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.6.6-.7 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.6 1.1.7.4.2 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.6-.6.7-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1a3 3 0 0 0-1.1-.7c-.4-.2-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Zm0 2.2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.6-2.6a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"
                    />
                  </svg>
                  Follow <strong>Grubox</strong> on Instagram
                </a>

                {/* LinkedIn – SEO-friendly label */}
                <a
                  href="https://in.linkedin.com/company/grubox"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Connect with Grubox on LinkedIn"
                  title="Connect with Grubox on LinkedIn"
                  className="btn li block"
                >
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.9V24H.5V8.5Zm7.6 0h4.7v2.1h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-4.9v-6.9c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V24H8.1V8.5Z"
                    />
                  </svg>
                  Connect with <strong>Grubox</strong> on LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="w3-container w3-padding-48 gs-faq-wrap">
        <div className="w3-content" style={{ maxWidth: 980 }}>
          <h2 className="section-title w3-center">FAQs</h2>
          <div className="faq">
            {[
              {
                q: "What minimum team size do you support?",
                a: "We start from 25 daily meals per location and scale to 1,000+.",
              },
              {
                q: "Can we get vegetarian-only or Jain meals?",
                a: "Yes—menus can be fully customized to dietary preferences and no-onion/no-garlic options.",
              },
              {
                q: "Do you deliver across multiple offices?",
                a: "Absolutely. We support multi-location scheduling, consolidated billing, and slot-based deliveries.",
              },
              {
                q: "How does billing work?",
                a: "Monthly GST invoices with cost centers, PO/GRN mapping, and clear meal counts.",
              },
            ].map((f) => (
              <details key={f.q} className="faq-item glass">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
