// app/book-a-tasting/page.js
import { Suspense } from "react";
import Booking from "@/components/Booking/Booking";
import "./book.css";

export const metadata = {
  title: "Book a Tasting | Grubox",
  description:
    "10–15 minute tasting for your team — tell us your preferences and a convenient time.",
};

export default function BookATastingPage() {
  return (
    <div className="tasting-page">
      <header className="tasting-hero">
        <div className="container">
          <h1 className="hero-title">Book a Tasting</h1>
          <p className="hero-subtitle">
            10–15 minute tasting for your team — tell us your preferences and a
            convenient time.
          </p>
        </div>
      </header>

      <main className="container">
        <Suspense fallback={<div className="card loading">Preparing form…</div>}>
          <Booking />
        </Suspense>
      </main>
    </div>
  );
}
