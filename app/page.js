export default function Home() {
  return (
    <div className="w3-light-grey">
      {/* Hero Section */}
      <header className="gradient-bg w3-center w3-padding-64 w3-text-white fade-in">
        <div className="w3-content" style={{ maxWidth: '900px' }}>
          <h1 className="w3-jumbo w3-bold" style={{ letterSpacing: '1px' }}>
            Healthy <span className="w3-text-yellow">Meals</span> for Your Office
          </h1>
          <p className="w3-xlarge w3-opacity">
            Grubox delivers nutritious Indian meals to workplaces in Gurgaon, Noida & Delhi. Fresh, fast, and full of flavor!
          </p>
          <div className="w3-padding-16">
            <button className="btn-primary w3-margin-right">Order Now</button>
            <button className="w3-button w3-border w3-white w3-round-large w3-large w3-text-white">
              View Plans
            </button>
          </div>
          </div>
      </header>

{/* Meal Gallery Section */}
<section className="w3-container w3-padding-64 w3-white fade-in">
  <div className="w3-content w3-center" style={{ maxWidth: '1200px' }}>
    <h2 className="w3-xxlarge w3-bold">Explore Our Tasty Meals 🍛</h2>
    <p className="w3-large w3-text-grey">Handpicked for office cravings — Healthy, hearty & hassle-free.</p>

    <div className="w3-row-padding w3-margin-top">
      {[
        { emoji: '🥗', title: 'Salads & Bowls', desc: 'Wholesome grains & greens.' },
        { emoji: '🍛', title: 'Indian Thalis', desc: 'North & South Indian classics.' },
        { emoji: '🍱', title: 'Chef Specials', desc: 'Signature dishes of the week.' },
        { emoji: '🥘', title: 'Vegetarian Meals', desc: 'Curated for energy & balance.' },
        { emoji: '🍗', title: 'Non-Veg Combos', desc: 'Protein-packed flavor bombs.' },
        { emoji: '🍰', title: 'Desserts & Add-ons', desc: 'Because… dessert first.' }
      ].map((meal, idx) => (
        <div className="w3-third w3-padding" key={idx}>
          <div className="w3-white w3-card w3-round-large w3-center card-hover" style={{ padding: '32px' }}>
            <div className="w3-xxxlarge">{meal.emoji}</div>
            <h4 className="w3-large w3-bold">{meal.title}</h4>
            <p className="w3-text-grey">{meal.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Corporate Meal Solutions */}
<section className="w3-container w3-padding-64 gradient-bg w3-text-white fade-in">
  <div className="w3-content" style={{ maxWidth: '1100px' }}>
    <div className="w3-center">
      <h2 className="w3-xxlarge w3-bold">Corporate Meal Solutions</h2>
      <p className="w3-xlarge w3-opacity">Trusted by companies across Gurgaon, Noida & Delhi</p>
    </div>

    <div className="w3-row-padding w3-margin-top">
      <div className="w3-half w3-padding">
        <ul className="w3-ul w3-white w3-text-grey w3-large w3-round-large w3-card">
          <li><span className="w3-text-green">✔</span> Meal plans for every shift</li>
          <li><span className="w3-text-green">✔</span> Custom menu options</li>
          <li><span className="w3-text-green">✔</span> Contactless delivery</li>
          <li><span className="w3-text-green">✔</span> Billing & Invoicing for HR</li>
          <li><span className="w3-text-green">✔</span> On-site support</li>
        </ul>
      </div>

      <div className="w3-half w3-padding w3-center">
        <h3 className="w3-xlarge w3-margin-top">Want to serve meals at your workplace?</h3>
        <p className="w3-large">Let's tailor a solution for your office team.</p>
        <a href="/contact" className="w3-button w3-yellow w3-large w3-round-large w3-margin-top">
          Book a Corporate Demo
        </a>
      </div>
    </div>
  </div>
</section>

{/* Mascot Section */}
<section className="w3-container w3-padding-64 w3-white fade-in">
  <div className="w3-content w3-center" style={{ maxWidth: '900px' }}>
    <img 
      src="/assets/abc.png" 
      style={{ width: '180px', marginBottom: '24px' }} 
    />
    <h2 className="w3-xxlarge w3-bold">Meet — Your Office Buddy 🐼</h2>
    <p className="w3-large w3-text-grey">
      Panda ensures your team stays full, focused, and fired up 💼🍱. From lunch to late shifts, he’s got your back!
    </p>
    <a href="/about" className="w3-button w3-round-large w3-margin-top btn-primary">
      Learn More About Grubox
    </a>
  </div>
</section>

{/* How It Works Section */}
<section className="w3-container w3-padding-64 gradient-bg w3-text-white fade-in">
  <div className="w3-content w3-center" style={{ maxWidth: '1000px' }}>
    <h2 className="w3-xxlarge w3-bold">How It Works 🛠️</h2>
    <p className="w3-large w3-opacity">From kitchen to cubicle in just a few clicks!</p>

    <div className="w3-row-padding w3-margin-top">
      {[
        {
          icon: '📱',
          title: '1. Place Your Order',
          desc: 'Choose your preferred meal or plan via our app or website.'
        },
        {
          icon: '👨‍🍳',
          title: '2. We Cook It Fresh',
          desc: 'Our chefs prepare your meal fresh every day, no pre-freezing.'
        },
        {
          icon: '🚚',
          title: '3. We Deliver On Time',
          desc: 'Meals arrive hot & sealed, just before your lunch break.'
        },
        {
          icon: '😋',
          title: '4. You Enjoy It',
          desc: 'Healthy. Hygienic. Happy. Every single bite!'
        }
      ].map((step, i) => (
        <div key={i} className="w3-half w3-padding w3-center">
          <div className="w3-white w3-round-large w3-padding-large w3-card card-hover">
            <div className="w3-xxxlarge">{step.icon}</div>
            <h4 className="w3-large w3-bold">{step.title}</h4>
            <p className="w3-text-grey">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Food Gallery Section */}
<section className="w3-container w3-padding-64 w3-light-grey fade-in">
  <div className="w3-content w3-center" style={{ maxWidth: '1000px' }}>
    <h2 className="w3-xxlarge w3-bold">Today's Meals</h2>
    <p className="w3-large w3-text-grey">A glimpse of what we serve fresh every day.</p>

    <div className="w3-row-padding w3-margin-top">
      {[
        { src: "/images/thali1.jpg", name: "Deluxe Veg Thali" },
        { src: "/images/thali2.jpg", name: "Paneer Combo Meal" },
        { src: "/images/thali3.jpg", name: "North Indian Special" },
        { src: "/images/thali4.jpg", name: "Lite Healthy Box" },
        { src: "/images/thali5.jpg", name: "Roti & Sabzi Combo" },
        { src: "/images/thali6.jpg", name: "Grubox Signature Platter" },
      ].map((meal, index) => (
        <div key={index} className="w3-third w3-margin-bottom">
          <div className="w3-card w3-white w3-round-large card-hover">
            <img
              src={meal.src}
              alt={meal.name}
              className="w3-image w3-round-large"
              style={{ height: '200px', objectFit: 'cover', width: '100%' }}
            />
            <div className="w3-container w3-padding">
              <h4 className="w3-text-dark">{meal.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Testimonials / Trusted By Section */}
<section className="w3-container w3-white w3-padding-64 fade-in">
  <div className="w3-content w3-center" style={{ maxWidth: '1000px' }}>
    <h2 className="w3-xxlarge w3-bold">Trusted by Top Companies</h2>
    <p className="w3-large w3-text-grey">We proudly serve meals to some of the best workplaces.</p>

    {/* Logo Row (Replace with actual logos if available) */}
    <div className="w3-row w3-center w3-padding-32">
      {[
        '🌐 Microsoft',
        '🧪 Genpact',
        '🏢 DLF',
        '🚀 HCL',
        '🔧 Maruti',
        '📡 Airtel',
      ].map((client, index) => (
        <div key={index} className="w3-col l2 m4 s6 w3-padding-16">
          <div className="w3-white w3-round w3-card w3-padding">
            <p className="w3-large">{client}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Testimonials */}
    <div className="w3-row-padding w3-margin-top">
      {[
        {
          name: 'Aarav Mehta',
          company: 'HR @ Maruti',
          quote: 'Grubox has transformed our lunch culture. Fresh food, reliable service, happy employees!',
        },
        {
          name: 'Neha Singh',
          company: 'Office Admin, HCL',
          quote: 'Our entire team looks forward to lunch now. The variety and hygiene are top-notch.',
        },
      ].map((testi, i) => (
        <div key={i} className="w3-half w3-padding">
          <div className="w3-card w3-white w3-round-large w3-padding-24 card-hover">
            <p className="w3-text-grey">“{testi.quote}”</p>
            <p className="w3-margin-top w3-text-black w3-medium">
              <strong>{testi.name}</strong> <br />
              <span className="w3-small w3-text-grey">{testi.company}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Location & Map Section */}
<section className="w3-container w3-padding-64 w3-light-grey fade-in">
  <div className="w3-content" style={{ maxWidth: '1000px' }}>
    <h2 className="w3-xxlarge w3-center w3-bold">Visit Us or Reach Out</h2>
    <p className="w3-large w3-text-grey w3-center">Serving Gurgaon, Noida, and Delhi from our central kitchen.</p>

    <div className="w3-row-padding w3-margin-top">
      {/* Address */}
      <div className="w3-half">
        <div className="w3-padding">
          <h4 className="w3-bold">📦 Grubox Head Office</h4>
          <p>
            123, Udyog Vihar Phase IV, Gurgaon, Haryana 122016 <br />
            <strong>Phone:</strong> +91 99999 88888 <br />
            <strong>Email:</strong> support@grubox.in
          </p>
          <p>
            🏭 Also operating in:<br />
            • Sector 63, Noida<br />
            • Connaught Place, Delhi
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w3-half w3-padding">
        <div className="w3-card w3-white w3-round-large" style={{ height: '300px', overflow: 'hidden' }}>
          <iframe
            title="Grubox HQ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3454302922826!2d77.07250887534665!3d28.58989617568445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a68e37a3a7%3A0x37cc0a08399b3cf9!2sUdyog%20Vihar%2C%20Phase%204%2C%20Gurugram%2C%20Haryana%20122016!5e0!3m2!1sen!2sin!4v1625481918109!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="cta-section fade-in">
        <h2>Start Your Subscription Today</h2>
        <p>Join 10,000+ happy professionals enjoying delicious meals at work.</p>
        <button className="btn-primary">Start Free Trial</button>
      </section>

      {/* Footer */}
      <footer className="w3-container w3-black w3-padding-64">
        <div className="w3-row-padding w3-content">
          <div className="w3-quarter">
            <h3>Grubox</h3>
            <p>Freshly packed meals delivered daily to corporate offices.</p>
          </div>
          <div className="w3-quarter">
            <h3>Meal Plans</h3>
            <p><a className="w3-text-grey" href="#">Daily Menu</a></p>
            <p><a className="w3-text-grey" href="#">Corporate Accounts</a></p>
            <p><a className="w3-text-grey" href="#">Franchisee</a></p>
          </div>
          <div className="w3-quarter">
            <h3>Company</h3>
            <p><a className="w3-text-grey" href="#">About Us</a></p>
            <p><a className="w3-text-grey" href="#">Blogs</a></p>
            <p><a className="w3-text-grey" href="#">Careers</a></p>
          </div>
          <div className="w3-quarter">
            <h3>Support</h3>
            <p><a className="w3-text-grey" href="#">Contact</a></p>
            <p><a className="w3-text-grey" href="#">Help Center</a></p>
            <p><a className="w3-text-grey" href="#">Terms</a></p>
          </div>
        </div>
        <div className="w3-center w3-padding-16 w3-text-grey">
          &copy; {new Date().getFullYear()} Grubox. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
