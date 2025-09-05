// app/signin/page.js
import "./signin.css";
import SignIn from "../../components/SignIn";

export const metadata = {
  title: "Sign In | Grubox",
  description:
    "Sign in to manage your Grubox meal plans, subscriptions, and corporate orders.",
};

export default function SignInPage() {
  return (
    <div className="si-page">
      <header className="si-hero">
        <div className="w3-content si-hero-inner">
          <h1 className="si-title">Welcome back to Grubox</h1>
          <p className="si-sub">
            Access your meal plan, track orders, and manage corporate billing.
          </p>
        </div>
      </header>

      <section className="w3-container si-main">
        <div className="w3-content si-center">
          <div className="si-card si-lift">
            <SignIn />
          </div>
        </div>
      </section>
    </div>
  );
}
