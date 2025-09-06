// components/Booking/Booking.js
"use client";

import "./booking.css";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const initial = (ref) => ({
  name: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  headcount: "",
  date: "",
  time: "",
  tastingMode: "On-site",
  interests: ["Cafeteria Management"], // default selected
  dietary: "",
  notes: "",
  source: ref || "",
});

export default function Booking() {
  const ref = useSearchParams()?.get("ref") || "";
  const [data, setData] = useState(initial(ref));
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const toggleInterest = (label) =>
    setData((d) => {
      const has = d.interests.includes(label);
      return {
        ...d,
        interests: has ? d.interests.filter((x) => x !== label) : [...d.interests, label],
      };
    });

  const validate = () => {
    if (!data.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Enter a valid email.";
    if (!data.company.trim()) return "Enter your company.";
    if (!data.location.trim()) return "Enter your office location.";
    if (!data.headcount.trim()) return "Enter approximate employee headcount.";
    if (!data.date) return "Pick a preferred date.";
    return "";
  };

  const submit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) return setErr(v);
    setErr("");

    // Build prefilled email
    const to = "sales@grubox.in";
    const subject = `Tasting Request — ${data.company} (${data.name})`;
    const body = [
      "New Tasting Request",
      "-------------------",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Company: ${data.company}`,
      `Location: ${data.location}`,
      `Headcount: ${data.headcount}`,
      `Preferred: ${data.date}${data.time ? " " + data.time : ""} (${data.tastingMode})`,
      `Interests: ${data.interests.join(", ") || "-"}`,
      `Dietary: ${data.dietary || "-"}`,
      `Notes: ${data.notes || "-"}`,
      `Source: ${data.source || "-"}`,
    ].join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOk(true);
  };

  if (ok) {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "sales@grubox.in"
    )}&su=${encodeURIComponent(`Tasting Request — ${data.company || "Company"} (${data.name || "Name"})`)}&body=${encodeURIComponent(
      "Hi Grubox team,\n\nI'd like to book a tasting.\n\n— Sent from the Grubox website"
    )}`;

    return (
      <section className="tasting-hero w3-container tasting-page">
        <div className="w3-content" style={{ maxWidth: 900 }}>
          <div className="tasting-card w3-padding-large">
            <h2 className="w3-margin-top">Thanks! 🎉</h2>
            <p className="w3-large">We opened your email app with a prefilled message. Just hit send!</p>
            <div className="w3-margin-top">
              <a className="w3-button btn-primary w3-round-xlarge w3-margin-right" href={gmailUrl} target="_blank" rel="noopener noreferrer">
                Use Gmail instead
              </a>
              <Link href="/corporate-services" className="w3-button btn-ghost w3-round-xlarge">
                Explore Corporate Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="tasting-hero w3-container tasting-page">
        <div className="w3-content" style={{ maxWidth: 900 }}>
          <h1 className="section-title">Book a Tasting</h1>
          <p className="section-subtitle">
            10–15 minute tasting for your team. Tell us your preferences and a convenient time—we’ll handle the rest.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="w3-container tasting-page" style={{ paddingBottom: 64 }}>
        <div className="w3-content" style={{ maxWidth: 900 }}>
          <form onSubmit={submit} className="tasting-card w3-padding-large">
            <div className="form-grid">
              <Field id="name" label="Full Name *" value={data.name} onChange={(v) => set("name", v)} />
              <Field id="email" type="email" label="Work Email *" value={data.email} onChange={(v) => set("email", v)} />
              <Field id="phone" label="Phone" helper="Optional. Helps us coordinate quickly." value={data.phone} onChange={(v) => set("phone", v)} />
              <Field id="company" label="Company *" value={data.company} onChange={(v) => set("company", v)} />
              <Field id="location" label="Office Location (City/Area) *" value={data.location} onChange={(v) => set("location", v)} />
              <Field id="headcount" label="Approx. Headcount *" placeholder="e.g., 120" value={data.headcount} onChange={(v) => set("headcount", v)} />
            </div>

            <div className="form-grid-3 w3-margin-top">
              <Field id="date" type="date" label="Preferred Date *" value={data.date} onChange={(v) => set("date", v)} />
              <Field id="time" type="time" label="Preferred Time" value={data.time} onChange={(v) => set("time", v)} />
              <div className="field">
                <label htmlFor="mode">Mode</label>
                <select id="mode" className="select" value={data.tastingMode} onChange={(e) => set("tastingMode", e.target.value)}>
                  <option>On-site</option>
                  <option>Virtual</option>
                </select>
              </div>
            </div>

            {/* INTEREST CHIPS — your requested block (full) */}
            <div className="w3-margin-top">
              <label style={{ fontWeight: 800, display: "block", marginBottom: 8, color: "var(--brand-ink)" }}>I’m interested in</label>
              <div className="badges">
                {["Cafeteria Management", "Smart Vending", "Daily Meal Plans"].map((label) => {
                  const active = data.interests.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggleInterest(label)}
                      className={`badge chip ${active ? "chip-active" : ""}`}
                      aria-pressed={active}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-grid w3-margin-top">
              <Field
                id="dietary"
                label="Dietary Preferences"
                placeholder="Veg / Non-veg / Jain / Allergies"
                value={data.dietary}
                onChange={(v) => set("dietary", v)}
              />
              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="notes">Anything else?</label>
                <textarea
                  id="notes"
                  className="textarea"
                  placeholder="Any special requirements or questions"
                  value={data.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </div>
            </div>

            {err && <div className="error w3-margin-top">{err}</div>}

            <div className="w3-margin-top">
              <button className="w3-button btn-primary w3-round-xlarge">Request Tasting (opens email)</button>
              <Link href="/corporate-services" className="w3-button btn-ghost w3-round-xlarge w3-margin-left">
                Explore Corporate Plans
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* ------- small input helper ------- */
function Field({ id, label, value, onChange, helper, type = "text", placeholder }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea id={id} className="textarea" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input id={id} type={type} className="input" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      )}
      {helper && <div className="helper">{helper}</div>}
    </div>
  );
}
