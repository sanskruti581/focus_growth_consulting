import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="reference-hero">
      <div className="reference-hero-glow" />
      <div className="reference-hero-noise" />
      <div className="reference-hero-floor" />

      <div className="container reference-hero-content">
        <Link className="reference-hero-pill" to="/audit">
          <span>New audit slots open this month</span>
          <strong>
            Book now
            <ArrowRight size={16} strokeWidth={2.1} />
          </strong>
        </Link>

        <div className="reference-hero-copy">
          <h1>
            Build growth systems
            <br />
            with sharper clarity
          </h1>

          <p>
            Focus Growth Consulting helps ambitious businesses scale through clear strategy, accountable
            marketing, smarter operations, and reporting that supports real decisions.
          </p>

          <div className="reference-hero-actions">
            <Link className="button reference-hero-primary" to="/audit">
              Book Free Audit
            </Link>
            <Link className="button reference-hero-secondary" to="/services">
              <span>Learn More</span>
              <ChevronRight size={16} strokeWidth={2.1} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
