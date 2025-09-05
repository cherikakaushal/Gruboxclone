"use client";

import React, { useState } from "react";
import "./navbar.css";

const GruboxNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w3-top w3-card w3-animate-top gradient-navbar"
      role="banner"
      style={{ padding: "8px 0", backdropFilter: "blur(10px)", zIndex: 9999 }}
    >
      <div className="w3-bar w3-padding w3-large w3-center" role="navigation" aria-label="Main navigation">
        <a
          href="/"
          className="w3-bar-item w3-xlarge w3-bold"
          style={{ color: "#00BCD4", fontFamily: "Raleway, sans-serif", fontWeight: 800, letterSpacing: "1px" }}
        >
          Grubox
        </a>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle navigation"
          className="hamburger w3-button"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Desktop nav */}
        <nav className="w3-hide-small w3-bar w3-center" role="navigation" style={{ display: "inline-block" }}>
          <a href="/corporate" className="w3-bar-item w3-button nav-link">Corporate Services</a>
          <a href="/meal" className="w3-bar-item w3-button nav-link">Meal Plans</a>
          <a href="/become-a-partner" className="w3-bar-item w3-button nav-link">Join Us as a Franchise</a>
          <a href="/blogs" className="w3-bar-item w3-button nav-link">Blogs</a>
          <a href="/about" className="w3-bar-item w3-button nav-link">About Us</a>
          <a href="/contact" className="w3-bar-item w3-button nav-link">Contact Us</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="w3-right w3-hide-small">
          <a href="/signin" className="w3-bar-item w3-button" style={{ color: "white" }}>Sign In</a>
          <a href="/getStarted" className="w3-button w3-round-large w3-medium get-started"
             style={{ backgroundColor: "#FFC107", color: "black", marginLeft: 8, fontWeight: 600 }}>
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <a href="/corporate">Corporate Services</a>
        <a href="/meal">Meal Plans</a>
        <a href="/become-a-partner">Join Us as a Franchise</a>
        <a href="/blogs">Blogs</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/signin">Sign In</a>
        <a
          href="/getStarted"
          style={{
            backgroundColor: "#FFC107",
            color: "black",
            margin: "10px 16px",
            padding: 10,
            borderRadius: 10,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default GruboxNavbar;
