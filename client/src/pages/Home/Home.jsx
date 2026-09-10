import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "./Home.css";

function Home() {
  const categories = [
    { name: "Cars", desc: "Sedans and hatchbacks for city trips", count: "14 available", icon: "🚗" },
    { name: "Bikes", desc: "Quick pickup for short-distance rides", count: "9 available", icon: "🏍️" },
    { name: "SUVs", desc: "Extra space for longer journeys", count: "6 available", icon: "🚙" },
  ];

  const stats = [
    { value: "29+", label: "Vehicles in fleet" },
    { value: "1,200+", label: "Rentals completed" },
    { value: "4.8★", label: "Average rating" },
    { value: "24/7", label: "Support availability" },
  ];

  const trustPoints = [
    "No paperwork hassle",
    "Verified vehicles only",
    "Flexible cancellations",
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Rent a vehicle without <br /> the paperwork chase.
          </h1>
          <p>
            RentEase lets you check availability, book a vehicle, and settle
            payment from one dashboard — built for small rental fleets.
          </p>
          <div className="hero-actions">
            <Button text="Book a vehicle" onClick={() => console.log("book")} />
            <Link to="/dashboard" className="btn-link">
              <Button text="View dashboard" variant="secondary" />
            </Link>
          </div>

          <ul className="trust-points">
            {trustPoints.map((point, i) => (
              <li key={i}>✓ {point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-highlight">
          <span className="hero-badge">Available now</span>
          <h3>Honda City</h3>
          <p>Sedan · ₹1,500/day</p>
        </div>
      </section>

      <section className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="categories">
        <div className="section-heading">
          <h2>Browse by category</h2>
          <p>Pick the vehicle type that fits your trip</p>
        </div>

        <div className="category-grid">
          {categories.map((c, i) => (
            <Card key={i} title={c.name} description={c.desc}>
              <div className="category-footer">
                <span className="category-icon">{c.icon}</span>
                <span className="category-count">{c.count}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Ready to hit the road?</h2>
          <p>Book in under two minutes — no paperwork, no waiting.</p>
        </div>
        <Button text="Book a vehicle" onClick={() => console.log("book")} />
      </section>
    </div>
  );
}

export default Home;