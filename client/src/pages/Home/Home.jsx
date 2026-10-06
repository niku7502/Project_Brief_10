import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
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

function Home() {
  const navigate = useNavigate();

  return (
    <div>
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

        <div className="hero-featured">
          <span className="badge-orange">Available now</span>
          <h2>Honda City</h2>
          <p>Sedan · ₹1,500/day</p>
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-heading">Browse by category</h2>
        <p className="section-sub">Pick the vehicle type that fits your trip</p>
        <CardGrid>
          {categories.map((c) => (
            <Card key={c.title} title={c.title} description={c.description}>
              <div className="category-footer">
                <span className="category-icon">{c.icon}</span>
                <span className="badge-green">{c.available} available</span>
              </div>
            </Card>
          ))}
        </CardGrid>
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