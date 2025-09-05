'use client';
import React from 'react';
import './signin.css';

export default function SignInPage() {
  return (
    <div className="signin-container w3-display-container w3-padding-64">
      <div className="signin-glass w3-round-large">
        <h2 className="w3-xxlarge w3-bold w3-center">🔐 Sign In to Grubox</h2>
        <p className="w3-center w3-text-grey w3-margin-bottom">Welcome back! Please enter your credentials</p>

        <form className="w3-container w3-padding">
          <label className="w3-text-black w3-medium">Email</label>
          <input className="w3-input w3-border w3-round-large w3-margin-bottom" type="email" placeholder="example@domain.com" required />

          <label className="w3-text-black w3-medium">Password</label>
          <input className="w3-input w3-border w3-round-large w3-margin-bottom" type="password" placeholder="••••••••" required />

          <button className="w3-button w3-block w3-round-large w3-large signin-btn" type="submit">
            Sign In
          </button>

          <p className="w3-center w3-margin-top">
            <a href="/forgot-password" className="w3-text-blue w3-hover-text-cyan">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
