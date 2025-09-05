"use client";

import { useState } from "react";

export default function SignIn() {
  const [tab, setTab] = useState("signin"); // "signin" | "signup"
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [msg, setMsg] = useState("");

  // Sign in form
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // Sign up form
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const isEmail = (v) => /^\S+@\S+\.\S+$/.test(v);

  const canSignIn = isEmail(email) && pwd.length >= 6;
  const canSignUp =
    name.trim().length >= 2 &&
    isEmail(signupEmail) &&
    signupPwd.length >= 8 &&
    signupPwd === confirmPwd;

  const handleSignin = (e) => {
    e.preventDefault();
    if (!canSignIn) return;
    // TODO: call your /api/auth/signin here
    setMsg("Signed in successfully. Redirecting…");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!canSignUp) return;
    // TODO: call your /api/auth/signup here
    setMsg("Account created! Please verify your email to continue.");
  };

  return (
    <div className="si-wrap">
      {/* Tabs */}
      <div className="si-tabs" role="tablist" aria-label="Authentication">
        <button
          role="tab"
          aria-selected={tab === "signin"}
          className={`si-tab ${tab === "signin" ? "active" : ""}`}
          onClick={() => setTab("signin")}
        >
          Sign In
        </button>
        <button
          role="tab"
          aria-selected={tab === "signup"}
          className={`si-tab ${tab === "signup" ? "active" : ""}`}
          onClick={() => setTab("signup")}
        >
          Create Account
        </button>
        <span className={`si-tab-underline ${tab}`} aria-hidden="true" />
      </div>

      {/* Feedback message */}
      {msg && <div className="si-alert">{msg}</div>}

      {/* Forms */}
      {tab === "signin" ? (
        <form className="si-form" onSubmit={handleSignin}>
          <div className="si-field">
            <label htmlFor="si-email">Email</label>
            <input
              id="si-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="si-field">
            <label htmlFor="si-pwd">Password</label>
            <div className="si-input-group">
              <input
                id="si-pwd"
                type={showPwd ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
              <button
                type="button"
                className="si-eye"
                aria-label={showPwd ? "Hide password" : "Show password"}
                onClick={() => setShowPwd((v) => !v)}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="si-row">
            <label className="si-check">
              <input type="checkbox" /> <span>Remember me</span>
            </label>
            <a className="si-link" href="/forgot">Forgot password?</a>
          </div>

          <button className="si-btn primary" type="submit" disabled={!canSignIn}>
            Sign In
          </button>

          {/* Subtle separator */}
          <div className="si-sep" role="separator">
            <span>or</span>
          </div>

          {/* Socials (understated, professional) */}
          <div className="si-socials">
            <button type="button" className="si-btn ghost" aria-label="Sign in with Google">
              <svg viewBox="0 0 24 24" className="si-ico" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M21.35 11.1H12v2.9h5.3c-.23 1.5-1.77 4.3-5.3 4.3a5.9 5.9 0 1 1 0-11.8c1.7 0 3 .7 3.7 1.3l2-1.9C16.3 4.6 14.35 3.8 12 3.8 6.9 3.8 2.8 7.9 2.8 13s4.1 9.2 9.2 9.2c5.3 0 8.8-3.7 8.8-8.9 0-.6-.05-1.1-.15-1.6Z"
                />
              </svg>
              Continue with Google
            </button>
            <a
              href="https://in.linkedin.com/company/grubox"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="si-btn li"
              aria-label="Sign in with LinkedIn"
              title="Sign in with LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="si-ico" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.9V24H.5V8.5Zm7.6 0h4.7v2.1h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-4.9v-6.9c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V24H8.1V8.5Z"
                />
              </svg>
              Continue with LinkedIn
            </a>
          </div>

          <p className="si-foot">
            New to Grubox?{" "}
            <button type="button" className="si-link-btn" onClick={() => setTab("signup")}>
              Create an account
            </button>
          </p>
        </form>
      ) : (
        <form className="si-form" onSubmit={handleSignup}>
          <div className="si-field">
            <label htmlFor="su-name">Full Name</label>
            <input
              id="su-name"
              type="text"
              autoComplete="name"
              placeholder="Aarav Mehta"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="si-field">
            <label htmlFor="su-email">Work Email</label>
            <input
              id="su-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
          </div>

          <div className="si-field">
            <label htmlFor="su-pwd">Password</label>
            <div className="si-input-group">
              <input
                id="su-pwd"
                type={showPwd ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
                value={signupPwd}
                onChange={(e) => setSignupPwd(e.target.value)}
                required
              />
              <button
                type="button"
                className="si-eye"
                aria-label={showPwd ? "Hide password" : "Show password"}
                onClick={() => setShowPwd((v) => !v)}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="si-field">
            <label htmlFor="su-confirm">Confirm Password</label>
            <div className="si-input-group">
              <input
                id="su-confirm"
                type={showPwd2 ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                required
              />
              <button
                type="button"
                className="si-eye"
                aria-label={showPwd2 ? "Hide password" : "Show password"}
                onClick={() => setShowPwd2((v) => !v)}
              >
                {showPwd2 ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button className="si-btn primary" type="submit" disabled={!canSignUp}>
            Create Account
          </button>

          <p className="si-foot">
            Already have an account?{" "}
            <button type="button" className="si-link-btn" onClick={() => setTab("signin")}>
              Sign in
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
