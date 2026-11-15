import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import WelcomeBanner from '../../components/ui/WelcomeBanner';
import './Home.css';

const stats = [
  { value: '29+', label: 'Vehicles in fleet' },
  { value: '1,200+', label: 'Rentals completed' },
  { value: '4.8★', label: 'Average rating' },
  { value: '24/7', label: 'Support availability' },
];

const categories = [
  { icon: '🚗', title: 'Cars', description: 'Sedans and hatchbacks for city trips', available: 14 },
  { icon: '🏍️', title: 'Bikes', description: 'Quick pickup for short-distance rides', available: 9 },
  { icon: '🚙', title: 'SUVs', description: 'Extra space for longer journeys', available: 6 },
];

// Small child component: receives value and label through props
function StatItem({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  // State
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div>
      {/* Props: same component, different values on each page */}
      <WelcomeBanner
        title="Welcome to RentEase"
        name="Guest"
        message="Browse vehicles and book in minutes."
      />

      <section className="hero">
        <div className="hero-text">
          <h1>Rent a vehicle without the paperwork chaos.</h1>
          <p>
            RentEase lets you check availability, book a vehicle, and settle
            payment from one dashboard, built for small rental fleets.
          </p>
          <div className="button-row hero-buttons">
            <Button text="Book a vehicle" onClick={() => navigate('/dashboard')} />
            <Button text="View dashboard" variant="secondary" onClick={() => navigate('/dashboard')} />
          </div>
          <ul className="trust-list">
            <li>✓ No paperwork hassle</li>
            <li>✓ Verified vehicles only</li>
            <li>✓ Flexible cancellations</li>
          </ul>
        </div>

        {/* Conditional rendering driven by the isBooked state */}
        <div className="hero-featured">
          <span className={isBooked ? 'badge-red' : 'badge-orange'}>
            {isBooked ? 'Booked' : 'Available now'}
          </span>
          <h2>Honda City</h2>
          <p>Sedan · ₹1,500/day</p>
          <Button
            text={isBooked ? 'Cancel booking' : 'Book this car'}
            variant={isBooked ? 'secondary' : 'primary'}
            onClick={() => setIsBooked(!isBooked)}
          />
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} />
        ))}
      </section>

      <section className="section">
        <h2 className="section-heading">Browse by category</h2>
        <p className="section-sub">Pick the vehicle type that fits your trip</p>
        <CardGrid>
          {categories.map((c) => (
            <Card
              key={c.title}
              title={c.title}
              description={c.description}
              highlight={selectedCategory === c.title}
            >
              <div className="category-footer">
                <span className="category-icon">{c.icon}</span>
                <span className="badge-green">{c.available} available</span>
              </div>
              <div className="category-action">
                <Button
                  text={selectedCategory === c.title ? 'Selected' : 'Select'}
                  variant="secondary"
                  onClick={() => setSelectedCategory(c.title)}
                  disabled={selectedCategory === c.title}
                />
              </div>
            </Card>
          ))}
        </CardGrid>

        {/* Conditional rendering: message depends on selectedCategory */}
        <p className="selection-message">
          {selectedCategory
            ? `You selected ${selectedCategory}. Head to the dashboard to book.`
            : 'Select a category to see your options.'}
        </p>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Ready to hit the road?</h2>
          <p>Book in under two minutes, with no paperwork and no waiting.</p>
        </div>
        <Button text="Book a vehicle" onClick={() => navigate('/dashboard')} />
      </section>
    </div>
  );
}

export default Home;