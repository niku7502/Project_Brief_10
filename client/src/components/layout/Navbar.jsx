.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 24px;
  background: #0f172a;
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-logo {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
}

.navbar-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(12px, 3vw, 28px);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.nav-link:hover { color: #fff; }
.nav-link.active { color: #f59e0b; border-bottom: 2px solid #f59e0b; }

.navbar-toggle {
  display: none;
}