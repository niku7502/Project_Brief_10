import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/profile', label: 'Profile' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">RentEase</div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;