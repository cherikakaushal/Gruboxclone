"use client";

import { useMemo, useState } from "react";

const steps = [
  { key: "company", label: "Company" },
  { key: "requirements", label: "Requirements" },
  { key: "contact", label: "Contact" },
];

export default function GetStarted() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    companyName: "",
    headcount: "",
    city: "Gurgaon",
    cuisine: [],
    vegOnly: "No",
    daysPerWeek: "5",
    budget: "250–350",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const pct = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);
  const setField = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const toggleCuisine = (c) =>
    setData((d) => {
      const s = new Set(d.cuisine);
      s.has(c) ? s.delete(c) : s.add(c);
      return { ...d, cuisine: [...s] };
    });

  const canNext =
    (step === 0 && data.companyName.trim() && data.headcount && data.city) ||
    (step === 1 && data.daysPerWeek && data.budget) ||
    (step === 2 &&
      data.contactName.trim() &&
      /^\S+@\S+\.\S+$/.test(data.email) &&
      (data.phone || "").trim().length >= 8);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canNext) return;
    // TODO: POST to your API route or CRM here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="gs-success">
        <div className="gs-success-badge">🎉</div>
        <h3>Request received!</h3>
        <p className="w3-text-grey">
          Our team will reach out within 1 business day with a tailored plan and pricing.
        </p>
        <a href="/" className="btn primary">Back to Home</a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="gs-form">
      {/* Progress */}
      <div className="gs-progress">
        <div className="gs-progress-bar" style={{ width: `${pct}%` }} />
        <div className="gs-progress-steps">
          {steps.map((s, i) => (
            <div key={s.key} className={`gs-step ${i <= step ? "active" : ""}`}
                 aria-current={i === step ? "step" : undefined}>
              <span className="gs-step-dot" />
              <span className="gs-step-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 0 && (
        <div className="gs-fields">
          <div className="field">
            <label>Company Name *</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => setField("companyName", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Approx. Headcount *</label>
            <input
              type="number"
              min="1"
              value={data.headcount}
              onChange={(e) => setField("headcount", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>City / Location *</label>
            <select
              value={data.city}
              onChange={(e) => setField("city", e.target.value)}
              required
            >
              <option>Gurgaon</option>
              <option>Noida</option>
              <option>Delhi</option>
              <option>Other NCR</option>
            </select>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 1 && (
        <div className="gs-fields">
          <div className="field">
            <label>Weekly Coverage *</label>
            <select
              value={data.daysPerWeek}
              onChange={(e) => setField("daysPerWeek", e.target.value)}
              required
            >
              <option value="5">5 days / week</option>
              <option value="6">6 days / week</option>
              <option value="7">7 days / week</option>
            </select>
          </div>

          <div className="field">
            <label>Budget per Meal *</label>
            <select
              value={data.budget}
              onChange={(e) => setField("budget", e.target.value)}
              required
            >
              <option>200–250</option>
              <option>250–350</option>
              <option>350–450</option>
              <option>450+</option>
            </select>
          </div>

          <div className="field">
            <label>Preferred Cuisines</label>
            <div className="chips">
              {["North Indian", "South Indian", "Continental", "Chinese", "Healthy Bowls"].map(
                (c) => (
                  <button
                    type="button"
                    key={c}
                    className={`chip ${data.cuisine.includes(c) ? "active" : ""}`}
                    onClick={() => toggleCuisine(c)}
                  >
                    {c}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="field">
            <label>Vegetarian Only?</label>
            <div className="radios">
              {["No", "Yes", "Mostly Veg"].map((v) => (
                <label key={v} className="radio">
                  <input
                    type="radio"
                    name="vegOnly"
                    value={v}
                    checked={data.vegOnly === v}
                    onChange={(e) => setField("vegOnly", e.target.value)}
                  />
                  <span>{v}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 2 && (
        <div className="gs-fields">
          <div className="field">
            <label>Your Name *</label>
            <input
              type="text"
              value={data.contactName}
              onChange={(e) => setField("contactName", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Work Email *</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setField("email", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Phone *</label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => setField("phone", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Anything else?</label>
            <textarea
              rows={4}
              value={data.message}
              onChange={(e) => setField("message", e.target.value)}
              placeholder="Allergies, shift timings, delivery windows, etc."
            />
          </div>
        </div>
      )}

      {/* Live summary */}
      <div className="gs-summary">
        <h4>Quick Summary</h4>
        <ul>
          <li><strong>Company:</strong> {data.companyName || "—"} ({data.headcount || "—"} ppl, {data.city})</li>
          <li><strong>Plan:</strong> {data.daysPerWeek} days, ₹{data.budget} per meal</li>
          <li><strong>Cuisine:</strong> {data.cuisine.length ? data.cuisine.join(", ") : "Any"}</li>
          <li><strong>Veg:</strong> {data.vegOnly}</li>
          <li><strong>Contact:</strong> {data.contactName || "—"} / {data.email || "—"} / {data.phone || "—"}</li>
        </ul>
      </div>

      {/* Controls */}
      <div className="gs-controls">
        {step > 0 && (
          <button type="button" className="btn ghost" onClick={() => setStep((s) => s - 1)}>
            ← Back
          </button>
        )}
        {step < steps.length - 1 && (
          <button
            type="button"
            className="btn primary"
            disabled={!canNext}
            onClick={() => canNext && setStep((s) => s + 1)}
          >
            Continue →
          </button>
        )}
        {step === steps.length - 1 && (
          <button type="submit" className="btn primary" disabled={!canNext}>
            Submit Request
          </button>
        )}
      </div>
    </form>
  );
}
