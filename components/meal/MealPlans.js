"use client";

export default function MealPlans({ theme = "dark" }) {
  return (
    <main className={`mp-page theme-${theme}`}>{/* switch to theme-light to preview light mode */}      

      {/* HERO */}
      <header className="mp-hero">
        <div className="mp-wrap">
          <div className="mp-hero-copy">
            <h1 className="mp-title">
              <span className="grad-text">Healthy, homely meals</span> for offices &amp; homes
            </h1>
            <p className="mp-sub">
              Fresh, chef-made food with predictable pricing. Trial a meal or pick a weekly plan —
              delivered reliably to your desk or door.
            </p>
            <div className="mp-cta-row">
              <a className="btn-primary" href="#trial">Place a trial order</a>
              <a className="btn-ghost" href="#plans">See weekly plans</a>
            </div>
          </div>

          {/* 👉 new filename to avoid clash with hero-meal.jpg */}
          <div className="mp-hero-art">
            <img
              src="/assets/meal/meal-hero-desk.jpg"
              alt="Homely Indian meal on a clean office desk"
              className="hero-blob"
            />
          </div>
        </div>
        <div className="hero-glow" aria-hidden />
      </header>

      {/* FEATURES */}
      <section className="mp-section" id="features">
        <div className="mp-wrap">
          <ul className="mp-features">
            <li className="fcard">
              <div className="ficn" aria-hidden>
                <svg viewBox="0 0 24 24"><rect x="5" y="2" rx="3" ry="3" width="14" height="20" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="9" y1="6" x2="15" y2="6" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3>Order on the go</h3>
              <p>Wallet-based orders from our app with fast, secure payments.</p>
            </li>
            <li className="fcard">
              <div className="ficn" aria-hidden>
                <svg viewBox="0 0 24 24"><path d="M3 13h7l3-6h6" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </div>
              <h3>Doorstep delivery</h3>
              <p>Daily, on time — to home, office, or co-working space.</p>
            </li>
            <li className="fcard">
              <div className="ficn" aria-hidden>
                <svg viewBox="0 0 24 24"><path d="M6 7h12v14H6z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M7 7V6a5 5 0 0 1 10 0v1" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3>Bulk corporate meal</h3>
              <p>B2B plans for events &amp; daily service — reliable SLAs.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* PLANS */}
      <section className="mp-section" id="plans">
        <div className="mp-wrap">
          <h2 className="sec-title">Weekly Meal Plans</h2>
          <p className="sec-sub">Flexible subscriptions that keep teams fueled and costs predictable.</p>

          <div className="plan-grid">
            <article className="plan">
              <div className="plan-head">
                <h3>Mini Roti Meal</h3>
                <div className="price">₹85<span>/meal</span></div>
              </div>
              <ul className="plan-points">
                <li>1 Dal, 1 Veg</li>
                <li>4 Chapattis</li>
                <li>Optional salad</li>
              </ul>
              <div className="plan-cta"><a className="btn-primary" href="#trial">Start 7-day trial</a></div>
            </article>

            <article className="plan plan-pop">
              <div className="plan-head">
                <h3>Medium Meal</h3>
                <div className="price">₹115<span>/meal</span></div>
              </div>
              <ul className="plan-points">
                <li>1 Dal, 1 Veg, Rice</li>
                <li>4 Rotis + Sweet</li>
                <li>Salad included</li>
              </ul>
              <div className="plan-cta"><a className="btn-primary" href="#trial">Start 7-day trial</a></div>
            </article>

            <article className="plan">
              <div className="plan-head">
                <h3>Large Meal</h3>
                <div className="price">₹145<span>/meal</span></div>
              </div>
              <ul className="plan-points">
                <li>2 Veg, 1 Dal, Rice</li>
                <li>4 Rotis + Sweet</li>
                <li>Curd or beverage</li>
              </ul>
              <div className="plan-cta"><a className="btn-primary" href="#trial">Start 7-day trial</a></div>
            </article>
          </div>
        </div>
      </section>

      {/* TRIAL ORDER */}
      <section className="mp-section" id="trial">
        <div className="mp-wrap">
          <h2 className="sec-title">Place a trial order</h2>

          <form className="trial-grid" onSubmit={(e)=>e.preventDefault()}>
            <fieldset className="trial-meal">
              <legend>Choose a meal <span className="req">*</span></legend>

              {/* 👉 no image box; added Large Meal */}
              <label className="radio-card">
                <input type="radio" name="trialMeal" defaultChecked />
                <div className="radio-ui no-thumb">
                  <div className="rc-title">Mini Roti Meal</div>
                  <div className="rc-sub">1 Dal, 1 Veg, 4 Rotis — <strong>₹85</strong></div>
                </div>
              </label>

              <label className="radio-card">
                <input type="radio" name="trialMeal" />
                <div className="radio-ui no-thumb">
                  <div className="rc-title">Medium Meal</div>
                  <div className="rc-sub">1 Dal, 1 Veg, Rice, 4 Rotis, Sweet — <strong>₹115</strong></div>
                </div>
              </label>

              <label className="radio-card">
                <input type="radio" name="trialMeal" />
                <div className="radio-ui no-thumb">
                  <div className="rc-title">Large Meal</div>
                  <div className="rc-sub">2 Veg, 1 Dal, Rice, 4 Rotis, Sweet — <strong>₹145</strong></div>
                </div>
              </label>
            </fieldset>

            <div className="trial-form">
              <label className="in">
                <span>Phone <span className="req">*</span></span>
                <input type="tel" placeholder="Phone" required />
              </label>

              <label className="in">
                <span>Delivery Address <span className="help">Service in Gurugram, Noida, South Delhi</span> <span className="req">*</span></span>
                <textarea placeholder="Address" rows={6} required />
              </label>

              <label className="check">
                <input type="checkbox" required />
                <span>I agree to the terms &amp; conditions</span>
              </label>

              <button className="btn-primary btn-wide" type="submit">Book</button>
            </div>
          </form>
        </div>
      </section>

      {/* AREAS + CONTACT CTA remain as before */}
      <section className="mp-section band" id="areas">
        <div className="mp-wrap">
          <h2 className="sec-title">Tiffin / Meal Delivery in Gurugram</h2>

          <div className="areas-grid">
            <ul className="areas">
              <li>Meal Delivery in DLF Cyber Hub</li>
              <li>Meal Delivery in Ambience Mall</li>
              <li>Meal Delivery in Huda City Centre</li>
              <li>Meal Delivery in Sikanderpur</li>
              <li>Meal Delivery in DLF Phase I</li>
              <li>Meal Delivery in DLF Phase II</li>
              <li>Meal Delivery in DLF Phase III</li>
              <li>Meal Delivery in DLF Phase IV</li>
              <li>Meal Delivery in Millennium City</li>
              <li>Meal Delivery in MG Road</li>
              <li>Meal Delivery in U-Block</li>
              <li>Meal Delivery in T-Block</li>
              <li>Meal Delivery in Mayfield Garden</li>
              <li>Meal Delivery in Nathupur</li>
            </ul>

            <ul className="areas">
              <li>Meal Delivery in Gurgaon Sector 17</li>
              <li>Meal Delivery in Gurgaon Sector 18</li>
              <li>Meal Delivery in Gurgaon Sector 26</li>
              <li>Meal Delivery in Gurgaon Sector 27</li>
              <li>Meal Delivery in Gurgaon Sector 24</li>
              <li>Meal Delivery in Gurgaon Sector 44</li>
              <li>Meal Delivery in Gurgaon Sector 45</li>
              <li>Meal Delivery in Gurgaon Sector 48</li>
              <li>Meal Delivery in Gurgaon Sector 50</li>
              <li>Meal Delivery in Gurgaon Sector 52</li>
              <li>Meal Delivery in Gurgaon Sector 53-54</li>
              <li>Meal Delivery in Gurgaon Sector 55-56</li>
              <li>Meal Delivery in Gurgaon Sector 57</li>
              <li>Meal Delivery in Gurgaon Sector 62</li>
              <li>Meal Delivery in Gurgaon Sector 65</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mp-section" id="contact-cta">
        <div className="mp-wrap contact-slab">
          <div>
            <h2 className="sec-title">Need help or a custom plan?</h2>
            <p className="sec-sub">Write to <a href="mailto:care@grubox.in">care@grubox.in</a> or WhatsApp <strong>920 5722 866</strong>.</p>
          </div>
          <a className="btn-primary" href="/book-a-tasting">Book a discovery call</a>
        </div>
      </section>
    </main>
  );
}
