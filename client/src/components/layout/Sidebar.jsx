import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const items = [
  { to: '/dashboard', label: 'Overview' },
  { to: '/dashboard/vehicles', label: 'Vehicles' },
  { to: '/dashboard/customers', label: 'Customers' },
  { to: '/dashboard/rentals', label: 'Rentals' },
  { to: '/dashboard/payments', label: 'Payments' },
];

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Dashboard">
      <nav className="sidebar__nav">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;