// app/book-a-tasting/page.js
import Booking from "../../components/Booking/Booking";

export const metadata = {
  title: "Book a Tasting | Grubox",
  description:
    "Schedule a quick tasting for your office. Explore Grubox corporate cafeteria, smart vending, and meal plan options.",
};

export default function TastingPage() {
  return (
    <main className="tasting-page">
      <Booking />
    </main>
  );
}
