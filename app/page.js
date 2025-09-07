// app/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* ===== HERO ===== */}
      <section className={`${styles.section} ${styles.hero}`} aria-label="Hero">
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Healthy, homely <span className={styles.accent}>meals</span>
            <br />
            smart cafeterias
          </h1>

          <p className={styles.sub}>
            Pick what you need—trial a meal, view weekly plans, or talk to us.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/meal" className={styles.primary}>
              Place a trial order
            </Link>
            <Link href="/meal#plans" className={styles.ghost}>
              See weekly plans
            </Link>
          </div>

          <p className={styles.miniLink}>
            <Link href="/corporate#contact">
              For offices: Book a discovery call →
            </Link>
          </p>
        </div>

        <div className={styles.heroArt}>
          <Image
            src="/assets/home/home-hero.jpg"
            alt="Smart cafeteria with panda & vending terminal"
            width={1080}
            height={760}
            sizes="(max-width: 1024px) 100vw, 520px"
            priority
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* ===== QUICK CARDS ===== */}
      <section
        className={`${styles.section} ${styles.quickCards}`}
        aria-label="Quick navigation"
      >
        <Link href="/corporate" className={styles.card}>
          <div className={styles.cardIcon} aria-hidden="true">🏢</div>
          <h3 className={styles.cardTitle}>Cafeteria for offices</h3>
          <p className={styles.cardSub}>End-to-end cafeteria & vending.</p>
          <span className={styles.cardLink}>Explore corporate →</span>
        </Link>

        <Link href="/meal#plans" className={styles.card}>
          <div className={styles.cardIcon} aria-hidden="true">🍽️</div>
          <h3 className={styles.cardTitle}>Daily meal plans</h3>
          <p className={styles.cardSub}>Weekly menus & subscriptions.</p>
          <span className={styles.cardLink}>See plans →</span>
        </Link>

        <Link href="/franchise" className={styles.card}>
          <div className={styles.cardIcon} aria-hidden="true">🚀</div>
          <h3 className={styles.cardTitle}>Join as a Franchise</h3>
          <p className={styles.cardSub}>Playbooks & support.</p>
          <span className={styles.cardLink}>Partner with us →</span>
        </Link>
      </section>

      {/* ===== STATS ===== */}
      <section className={`${styles.section} ${styles.stats}`} aria-label="Stats">
        <div className={styles.stat}>
          <div className={styles.statNum}>4M+</div>
          <div className={styles.statLabel}>Orders delivered</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>400K+</div>
          <div className={styles.statLabel}>Customers served</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>450+</div>
          <div className={styles.statLabel}>Listed vendors</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>4000+</div>
          <div className={styles.statLabel}>Branded SKUs</div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className={`${styles.section} ${styles.brands}`}>
        <h2 className={styles.h2}>Partnered with premium brands</h2>
        <div className={styles.brandCanvas}>
          <Image
            src="/assets/home/brands-collage.png"
            alt="Collage of partner brand logos"
            width={1400}
            height={520}
            sizes="(max-width: 1200px) 100vw, 1200px"
            fetchPriority="low"
            className={styles.brandImg}
          />
        </div>
      </section>

      {/* ===== NEW: WHY CHOOSE GRUBOX ===== */}
      <section className={`${styles.section} ${styles.features}`}>
        <h2 className={styles.h2}>Why people choose Grubox</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">🧑‍🍳</span>
            <h3>Homely & fresh</h3>
            <p>Cooked daily by verified partner kitchens with strict hygiene checks.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">⏱️</span>
            <h3>On-time delivery</h3>
            <p>Reliable dispatch & live tracking so lunch never misses your calendar.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">🥗</span>
            <h3>Balanced menus</h3>
            <p>Veg/non-veg, calorie-smart options, and rotating weekly variety.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">📲</span>
            <h3>Smart app</h3>
            <p>Schedule meals, repeat favorites, apply coupons—two taps.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">🧾</span>
            <h3>Transparent billing</h3>
            <p>No surprises. GST invoices & wallet support built-in.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">🛡️</span>
            <h3>ISO-driven ops</h3>
            <p>Process-first operations with ISO 9001 & 14001 best practices.</p>
          </div>
        </div>
      </section>

      {/* ===== NEW: HOW IT WORKS ===== */}
      <section className={`${styles.section} ${styles.how}`}>
        <h2 className={styles.h2}>How it works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <h3>Pick a plan</h3>
            <p>Browse the weekly menu and choose one-time or subscription.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <h3>Schedule</h3>
            <p>Select delivery time & location—office desk or reception.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <h3>Enjoy</h3>
            <p>Freshly cooked meals arrive hot. Reorder your favorites anytime.</p>
          </div>
        </div>
        <div className={styles.howCTA}>
          <Link href="/meal#plans" className={styles.primary}>Start with a weekly plan</Link>
          <Link href="/corporate#contact" className={styles.ghost}>Set up office cafeteria</Link>
        </div>
      </section>

      {/* ===== NEW: TESTIMONIALS ===== */}
      <section className={`${styles.section} ${styles.testimonials}`}>
        <h2 className={styles.h2}>Loved by teams & foodies</h2>
        <div className={styles.tGrid}>
          <figure className={styles.tCard}>
            <div className={styles.stars} aria-label="5 stars">★★★★★</div>
            <blockquote>“Menus feel homely, not ‘canteen-ish’. Our team looks forward to lunch.”</blockquote>
            <figcaption>— HR Lead, Gurugram SaaS</figcaption>
          </figure>
          <figure className={styles.tCard}>
            <div className={styles.stars} aria-label="5 stars">★★★★★</div>
            <blockquote>“Deliveries are consistently on time even with last-minute increases.”</blockquote>
            <figcaption>— Admin Head, Logistics Park</figcaption>
          </figure>
          <figure className={styles.tCard}>
            <div className={styles.stars} aria-label="5 stars">★★★★★</div>
            <blockquote>“The app makes scheduling so easy. Reordering is literally two taps.”</blockquote>
            <figcaption>— Product Designer, Fintech</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== APP SECTION (badges use PNG <img>) ===== */}
      <section className={`${styles.section} ${styles.appSection}`}>
        <div className={styles.appLeft}>
          <h2 className={styles.h2}>Get the Grubox app — order on the go</h2>
          <p className={styles.sub}>
            Fresh, homely meals delivered reliably to your desk or door.
          </p>

          <div className={styles.badges}>
            <a
              href="https://play.google.com/store/apps/details?id=com.grubox.consumerapp&hl=en_IN&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badge}
            >
              <img
                src="/assets/badges/google-play.png"
                alt="Get it on Google Play"
                loading="lazy"
                decoding="async"
              />
            </a>

            <a
              href="https://apps.apple.com/in/app/grubox/id1457717316"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badge}
            >
              <img
                src="/assets/badges/app-store.png"
                alt="Download on the App Store"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>

        <div className={styles.appMockWrap}>
          <Image
            src="/assets/home/app-mock.png"
            alt="Grubox mobile app preview"
            width={920}
            height={420}
            sizes="(max-width: 1024px) 100vw, 640px"
            className={styles.appMock}
          />
        </div>
      </section>

      {/* ===== FIND US (unchanged structure) ===== */}
      <section className={`${styles.section} ${styles.findUs}`}>
        <div className={styles.findLeft}>
          <h2 className={styles.h2}>Find us</h2>
          <p className={styles.addr}>
            8th Floor, Tower A, Magnum Tower, Sector-58, Golf Course Extension,
            Gurgaon, Haryana 122018
          </p>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="Grubox HQ"
            className={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7023.644940752042!2d77.074!3d28.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e2d778f2c6f%3A0x0!2sMagnum%20Tower%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1700000000000"
          />
        </div>
      </section>
    </main>
  );
}
