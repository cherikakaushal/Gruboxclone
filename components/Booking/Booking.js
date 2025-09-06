// components/Booking/Booking.js
"use client";

import { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import "./booking.css";

const CHIP_OPTIONS = ["Cafeteria Management", "Smart Vending", "Daily Meal Plans"];

export default function Booking() {
  const search = useSearchParams();
  const refTag = search?.get("ref") || "";

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    headcount: "",
    date: "",
    time: "",
    mode: "On-site",
    interests: [],
    diet: "",
    notes: "",
  });

  const toggleInterest = (label) => {
    setData((d) => {
      const exists = d.interests.includes(label);
      return {
        ...d,
        interests: exists ? d.interests.filter((x) => x !== label) : [...d.interests, label],
      };
    });
  };

  const update = (key) => (e) => setData((d) => ({ ...d, [key]: e.target.value }));

  const waMessage = useMemo(() => {
    const parts = [
      `*Book a Tasting*`,
      data.name && `Name: ${data.name}`,
      data.email && `Email: ${data.email}`,
      data.phone && `Phone: ${data.phone}`,
      data.company && `Company: ${data.company}`,
      data.headcount && `Headcount: ${data.headcount}`,
      (data.date || data.time) && `Preferred: ${data.date || ""} ${data.time || ""}`.trim(),
      `Mode: ${data.mode}`,
      data.interests.length ? `Interests: ${data.interests.join(", ")}` : "",
      data.diet && `Dietary: ${data.diet}`,
      data.notes && `Notes: ${data.notes}`,
      refTag && `Ref: ${refTag}`,
    ]
      .filter(Boolean)
      .join("\n");

    return encodeURIComponent(parts);
  }, [data, refTag]);

  const sendWhatsApp = useCallback(() => {
    // Put your target number here (with country code, no + or spaces)
    const SALES_NUMBER = "919999999999";
    const url = `https://wa.me/${SALES_NUMBER}?text=${waMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, [waMessage]);

  return (
    <section className="booking-card">
      <h2 className="sr-only">Tasting form</h2>

      <form
        className="booking-grid"
        onSubmit={(e) => {
          e.preventDefault();
          sendWhatsApp();
        }}
      >
        {/* Row 1 */}
        <div className="field span-6">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            required
            value={data.name}
            onChange={update("name")}
            placeholder="Jane Doe"
          />
        </div>

        <div className="field span-6">
          <label htmlFor="email">Work email *</label>
          <input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={update("email")}
            placeholder="name@company.com"
          />
        </div>

        {/* Row 2 */}
        <div className="field span-6">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            value={data.phone}
            onChange={update("phone")}
            placeholder="+91 98765 43210"
          />
        </div>

        <div className="field span-6">
          <label htmlFor="company">Company *</label>
          <input
            id="company"
            required
            value={data.company}
            onChange={update("company")}
            placeholder="Acme Pvt Ltd"
          />
        </div>

        {/* Row 3 */}
        <div className="field span-5">
          <label htmlFor="headcount">Approx. headcount</label>
          <input
            id="headcount"
            value={data.headcount}
            onChange={update("headcount")}
            placeholder="e.g., 120"
          />
        </div>

        <div className="field span-3">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" value={data.date} onChange={update("date")} />
        </div>

        <div className="field span-2">
          <label htmlFor="time">Time</label>
          <input id="time" type="time" value={data.time} onChange={update("time")} />
        </div>

        <div className="field span-2">
          <label htmlFor="mode">Mode</label>
          <select id="mode" value={data.mode} onChange={update("mode")}>
            <option>On-site</option>
            <option>Virtual</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Row 4 – chips */}
        <div className="span-12 chips">
          {CHIP_OPTIONS.map((label) => {
            const active = data.interests.includes(label);
            return (
              <button
                key={label}
                type="button"
                className={`chip ${active ? "chip-active" : ""}`}
                onClick={() => toggleInterest(label)}
                aria-pressed={active}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Row 5 */}
        <div className="field span-6">
          <label htmlFor="diet">Dietary preferences (Veg / Non-veg / Jain / Allergies)</label>
          <input
            id="diet"
            value={data.diet}
            onChange={update("diet")}
            placeholder="Veg only, peanut allergy"
          />
        </div>

        <div className="field span-6">
          <label htmlFor="notes">Anything else?</label>
          <textarea
            id="notes"
            rows={5}
            value={data.notes}
            onChange={update("notes")}
            placeholder="Parking, security, vendor pass, etc."
          />
        </div>

        {/* CTA row */}
        <div className="span-12 actions">
          <button type="submit" className="btn-primary">
            Send via WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}
