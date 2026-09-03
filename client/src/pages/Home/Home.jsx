import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './Home.css';

const categories = [
  { name: 'Cars', desc: 'Sedans and hatchbacks for city trips', count: 14 },
  { name: 'Bikes', desc: 'Quick pickup for short-distance rides', count: 9 },
  { name: 'SUVs', desc: 'Extra space for longer journeys', count: 6 },
];

function Home() {
  return (
    <div className="home">
      <section className="home__hero container">
        <div className="home__hero-copy">
          <h1>Rent a vehicle without the paperwork chase.</h1>
          <p>
            RentEase lets you check availability, book a vehicle, and settle
            payment from one dashboard — built for small rental fleets.
          </p>
          <div className="home__hero-actions">
            <Link to="/login"><Button variant="accent">Book a vehicle</Button></Link>
            <Link to="/dashboard"><Button variant="ghost">View dashboard</Button></Link>
          </div>
        </div>

        <Card variant="tag" className="home__hero-card">
          <span className="home__hero-card-label">Available now</span>
          <h3>Honda City</h3>
          <p>Sedan · ₹1,500/day</p>
        </Card>
      </section>

      <section className="home__categories container">
        <h2>Browse by category</h2>
        <div className="home__category-grid">
          {categories.map((c) => (
            <Card key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <span className="home__category-count">{c.count} available</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;