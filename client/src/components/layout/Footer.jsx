import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__col">
          <span className="footer__brand">RentEase</span>
          <p className="footer__note">
            Vehicle booking, returns, and payments in one place.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Fleet</h4>
          <ul className="footer__list">
            <li>Browse vehicles</li>
            <li>Categories</li>
            <li>Availability</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Account</h4>
          <ul className="footer__list">
            <li>My rentals</li>
            <li>Payments</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} RentEase</span>
        <span>Group 10 · Vehicle Rental System</span>
      </div>
    </footer>
  );
}

export default Footer;