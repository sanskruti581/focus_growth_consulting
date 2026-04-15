import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, navigation } from '../data/siteContent';

function navClassName({ isActive }) {
  return isActive ? 'nav-link nav-link-active' : 'nav-link';
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand-lockup" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">FG</span>
          <span>
            <strong>{company.name}</strong>
            <small>{company.tagline}</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          Menu
        </button>

        <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={navClassName}
              to={item.to}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button-primary button-small" to="/audit" onClick={() => setMenuOpen(false)}>
            Book free audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
