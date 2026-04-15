import { Link } from 'react-router-dom';
import { company, navigation, services } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="eyebrow">Focus Growth Consulting</span>
          <h3>Build growth systems, not service lists.</h3>
          <p>
            Strategy, marketing, automation, and reporting built into one operating system for growth-minded
            businesses.
          </p>
          <a className="footer-link" href={company.emailHref}>
            {company.email}
          </a>
        </div>

        <div>
          <h4>Pages</h4>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.to} className="footer-link" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>Pillars</h4>
          <div className="footer-links">
            {services.map((service) => (
              <Link key={service.slug} className="footer-link" to={`/services/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer-meta">
            <p>{company.location}</p>
            <p>{company.website}</p>
            <p>{company.auditWindow}</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>2026 {company.name}. Built around clarity, accountability, and measurable growth.</p>
      </div>
    </footer>
  );
}
