import React from "react";
import "./blog.css"; // Make sure this path is correct

export default function Blogs() {
  const blogPosts = [
    {
      title: "From ₹99 Meals to 24/7 Access: Why Smart Vending Is the Future of Corporate Dining",
      description:
        "Explore how Grubox’s smart vending and meal subscriptions are reshaping office dining with affordability, convenience, and tech innovation.",
      date: "August 28, 2025",
      image: "/assets/blog/vending-future.jpg",
      link: "/blog/future-of-vending",
    },
    {
      title: "Grubox vs Traditional Cafeterias: Which Offers Better ROI?",
      description:
        "A deep dive into operational cost, scalability, and employee satisfaction when comparing traditional food setups to Grubox vending + delivery.",
      date: "July 14, 2025",
      image: "/assets/blog/roi-comparison.jpg",
      link: "/blog/roi-grubox-vs-cafeteria",
    },
    {
      title: "How to Choose the Perfect Location for a Smart Vending Machine in Delhi NCR",
      description:
        "Get expert tips from the Grubox team on high-footfall zones, co-working hubs, and prime vending locations across Gurgaon, Noida, and Delhi.",
      date: "June 30, 2025",
      image: "/assets/blog/best-locations.jpg",
      link: "/blog/vending-location-guide",
    },
  ];

  return (
    <section className="w3-container w3-padding-64 w3-white">
      <div className="w3-content">
        <h2 className="w3-xxlarge w3-bold w3-center">Our Latest Blogs</h2>
        <p className="w3-large w3-text-grey w3-center w3-padding-16">
          Insights, guides & updates from the world of workplace meals, vending, and innovation.
        </p>

        <div className="w3-row-padding w3-margin-top">
          {blogPosts.map((post, index) => (
            <div className="w3-third w3-padding" key={index}>
              <div className="w3-card-4 w3-round-large card-glass blog-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w3-image blog-image"
                />
                <div className="w3-container">
                  <h3 className="w3-large w3-bold w3-text-black">{post.title}</h3>
                  <p className="w3-text-grey">{post.date}</p>
                  <p>{post.description}</p>
                  <a href={post.link} className="w3-button w3-round-large w3-margin-top read-more-btn">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
