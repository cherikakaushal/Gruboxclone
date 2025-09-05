// app/contact/page.js
import "./contact.css";
import "../../components/contact/contact.css";
import Contact from "../../components/contact/contact";

export const metadata = {
  title: "Contact Us | Grubox",
  description:
    "Talk to Grubox about corporate meals, partnerships, billing, or support. We reply quickly.",
};

export default function ContactPage() {
  return (
    <div className="cx-page">
      <header className="cx-hero">
        <div className="cx-orb" aria-hidden />
        <div className="w3-content cx-hero-inner">
          <h1 className="cx-title">
            <span className="cx-title-gradient">Contact Us</span>
          </h1>
          <p className="cx-sub">
            We’re here to help — partnerships, billing, support, or custom corporate plans.
          </p>
        </div>
      </header>

      <main className="w3-container cx-main">
        <div className="w3-content">
          <Contact />
        </div>
      </main>
    </div>
  );
}
