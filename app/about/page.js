// app/about/page.js
import "./about.css";
import About from "@/components/About/About";

export const metadata = {
  title: "About Grubox",
  description:
    "We’re on a mission to transform workplace dining — one smart meal at a time.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <About />
    </main>
  );
}
