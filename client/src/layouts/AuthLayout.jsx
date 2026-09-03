import { Link } from 'react-router-dom';
import './AuthLayout.css';

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-layout__panel">
        <Link to="/" className="auth-layout__brand">
          RentEase
        </Link>
        {children}
      </div>
      <div className="auth-layout__side" aria-hidden="true">
        <div className="auth-layout__side-text">
          <span className="auth-layout__tag">Group 10</span>
          <p>Book a vehicle in minutes. Track it until it's back.</p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;