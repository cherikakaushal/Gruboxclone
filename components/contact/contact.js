"use client";
import { useEffect, useMemo, useState } from "react";

const TOPICS = [
  { key: "sales", label: "Sales / Corporate", hint: "Same-day reply" },
  { key: "support", label: "Support", hint: "Avg reply ~2h" },
  { key: "partners", label: "Partnerships", hint: "1–2 days" },
  { key: "press", label: "Press", hint: "1–2 days" },
];

const CALLBACK_SLOTS = ["Today 2–4 pm", "Today 4–6 pm", "Tomorrow 10–1", "Tomorrow 2–6"];

export default function Contact() {
  const [topic, setTopic] = useState("sales");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Corporate meal plan enquiry");
  const [message, setMessage] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [sent, setSent] = useState(false);
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = new URLSearchParams(window.location.search).get("t");
    if (t && TOPICS.some(x => x.key === t)) setTopic(t);
  }, []);

  useEffect(() => {
    const map = {
      sales: "Corporate meal plan enquiry",
      support: "Support request",
      partners: "Partnership enquiry",
      press: "Press / media enquiry",
    };
    setSubject(map[topic] || "");
  }, [topic]);

  const activeTopic = useMemo(() => TOPICS.find(t => t.key === topic), [topic]);

  const valid =
    name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(email) &&
    message.trim().length > 8;

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    const id = "GB-" + (Date.now() + "").slice(-6);
    // TODO: send payload to backend/CRM if needed.
    setTicket(id);
    setSent(true);
  };

  if (sent) {
    return (
      <section className="cx-stack">
        <article className="cx-card cx-glass cx-success w3-animate-opacity">
          <div className="cx-emoji">✅</div>
          <h3 className="cx-h3">Thanks, {name.split(" ")[0] || "there"}!</h3>
          <p className="cx-muted">
            We created ticket <strong>{ticket}</strong>.
            {selectedSlot ? ` We’ll call you around "${selectedSlot}".` : ` We’ll reach out via email shortly.`}
          </p>
          <div className="cx-row gap">
            <a className="cx-chip" href="tel:+919999999999">📞 Call</a>
            <a className="cx-chip" href="mailto:sales@grubox.in">✉️ Email</a>
            <a className="cx-chip" href="https://in.linkedin.com/company/grubox" target="_blank" rel="noopener nofollow">
              in LinkedIn
            </a>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="cx-grid">
      {/* LEFT: 3D form card */}
      <article className="cx-card cx-glass cx-card-gradient cx-3d cx-tilt">
        {/* Segmented */}
        <div className="cx-seg">
          {TOPICS.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`cx-seg-btn ${t.key === topic ? "on" : ""}`}
              aria-pressed={t.key === topic}
              onClick={() => {
                setTopic(t.key);
                if (typeof window !== "undefined") {
                  const u = new URL(window.location.href);
                  u.searchParams.set("t", t.key);
                  window.history.replaceState({}, "", u.toString());
                }
              }}
            >
              <span className="cx-seg-label">{t.label}</span>
              <span className="cx-seg-hint">{t.hint}</span>
            </button>
          ))}
          <div
            className="cx-seg-indicator cx-seg-gradient"
            style={{
              transform: `translateX(${Math.max(0, TOPICS.findIndex(x => x.key === topic)) * 100}%)`,
            }}
          />
        </div>

        {/* Form */}
        <form className="cx-form" onSubmit={submit}>
          <div className="cx-two">
            <div className="cx-field">
              <label className="cx-label" htmlFor="cx-name">Your Name</label>
              <input id="cx-name" className="cx-input" type="text" placeholder="Your full name"
                     value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="cx-field">
              <label className="cx-label" htmlFor="cx-email">Your Email</label>
              <input id="cx-email" className="cx-input" type="email" inputMode="email"
                     placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="cx-two">
            <div className="cx-field">
              <label className="cx-label" htmlFor="cx-company">Company</label>
              <input id="cx-company" className="cx-input" type="text" placeholder="Company / Org"
                     value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="cx-field">
              <label className="cx-label" htmlFor="cx-phone">Phone (optional)</label>
              <input id="cx-phone" className="cx-input" type="tel" inputMode="tel"
                     placeholder="+91 ———— ————" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>

          <div className="cx-field">
            <label className="cx-label" htmlFor="cx-subj">Subject</label>
            <input id="cx-subj" className="cx-input" type="text" value={subject}
                   onChange={(e) => setSubject(e.target.value)} />
          </div>

          <div className="cx-field">
            <label className="cx-label" htmlFor="cx-msg">Your Message</label>
            <textarea id="cx-msg" className="cx-input cx-textarea" rows={6}
                      placeholder="Tell us what you need help with…" value={message}
                      onChange={(e) => setMessage(e.target.value)} required />
          </div>

          {/* Callback slots */}
          <fieldset className="cx-field">
            <legend className="cx-label">Prefer a callback?</legend>
            <div className="cx-chips">
              {CALLBACK_SLOTS.map((slot) => (
                <label key={slot} className="cx-chip-select">
                  <input type="radio" name="callback" value={slot}
                         checked={selectedSlot === slot}
                         onChange={() => setSelectedSlot(slot)} />
                  <span className="cx-chip-pill">{slot}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button className="cx-btn cx-primary cx-primary-gradient" type="submit" disabled={!valid}>
            Send Message
          </button>
        </form>
      </article>

      {/* RIGHT: details */}
      <aside className="cx-card cx-glass cx-side cx-card-gradient">
        <div className="cx-status">
          <span className="cx-bullet" /> Systems normal · Avg reply <strong>~1h 45m</strong>
        </div>

        <div className="cx-list">
          <div className="cx-list-item">
            <div className="cx-list-label">Call</div>
            <a className="cx-list-action" href="tel:+919999999999">+91 99999 99999</a>
          </div>
          <div className="cx-list-item">
            <div className="cx-list-label">Email</div>
            <a className="cx-list-action" href="mailto:sales@grubox.in">sales@grubox.in</a>
          </div>
          <div className="cx-list-item">
            <div className="cx-list-label">LinkedIn</div>
            <a className="cx-list-action" target="_blank" rel="noopener nofollow"
               href="https://in.linkedin.com/company/grubox">
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="cx-note">
          Office hours · <strong>Mon–Fri 09:00–19:00 IST</strong><br />
          GST billing & FSSAI compliant.
        </div>
      </aside>
    </section>
  );
}
