"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function GruboxNavbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeOnClick = () => setOpen(false);

  return (
    <header className={`nav-root ${open ? "nav-open" : ""}`} role="banner">
      <div className="nav-inner">
        {/* Brand */}
        <a href="/" className="brand" aria-label="Grubox Home">
          <span className="brand-accent">Gru</span>
          <span className="brand-rest">box</span>
        </a>

        {/* Desktop menu */}
        <nav className="menu-desktop" role="navigation" aria-label="Main">
          <a href="/corporate" className="menu-link">Corporate Services</a>
          <a href="/meal" className="menu-link">Meal Plans</a>
          <a href="/become-a-partner" className="menu-link">Join Us as a Franchise</a>
          <a href="/blogs" className="menu-link">Blogs</a>
          <a href="/about" className="menu-link">About Us</a>
          <a href="/contact" className="menu-link">Contact Us</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="cta-desktop">
          <a href="/signin" className="btn ghost">Sign In</a>
          <a href="/getStarted" className="btn primary">Get Started</a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle navigation"
          aria-controls="mobile-panel"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile panel */}
      <div id="mobile-panel" className={`mobile-panel ${open ? "show" : ""}`}>
        <nav className="mobile-menu" role="navigation" aria-label="Mobile">
          <a href="/corporate" onClick={closeOnClick}>Corporate Services</a>
          <a href="/meal" onClick={closeOnClick}>Meal Plans</a>
          <a href="/become-a-partner" onClick={closeOnClick}>Join Us as a Franchise</a>
          <a href="/blogs" onClick={closeOnClick}>Blogs</a>
          <a href="/about" onClick={closeOnClick}>About Us</a>
          <a href="/contact" onClick={closeOnClick}>Contact Us</a>
        </nav>
        <div className="mobile-ctas">
          <a href="/signin" className="btn ghost" onClick={closeOnClick}>Sign In</a>
          <a href="/getStarted" className="btn primary block" onClick={closeOnClick}>Get Started</a>
        </div>
      </div>
    </header>
  );
}
