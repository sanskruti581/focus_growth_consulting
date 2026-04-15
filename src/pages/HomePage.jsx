import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/hero-section';
import PillarAccordionSection from '../components/ui/pillar-accordion-section';
import { comparisonRows, homeStats, processSteps, services } from '../data/siteContent';

export default function HomePage() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />

      <section className="home-stat-strip">
        <div className="container home-clean-stats">
          {homeStats.map((stat) => (
            <div key={stat.label} className="home-clean-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="why-shell" data-reveal>
            <div className="why-shell-orb" />
            <div className="why-shell-grid">
              <div className="why-editorial">
                <span className="eyebrow">Why founders choose Focus Growth</span>
                <h2>
                  Sharper strategy.
                  <br />
                  Calmer growth.
                </h2>
                <p>
                  We start with the business problem, set clearer priorities, and execute with systems that stay
                  measurable.
                </p>

                <blockquote className="why-editorial-quote">
                  "Less noise. Better decisions. One clearer growth system."
                </blockquote>
              </div>

              <div className="why-comparison-panel">
                {comparisonRows.slice(0, 5).map(([left, right], index) => (
                  <article
                    key={left}
                    className="why-comparison-row"
                    data-reveal
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="why-comparison-index">{String(index + 1).padStart(2, '0')}</div>
                    <div className="why-comparison-copy">
                      <span>{left}</span>
                      <strong>{right}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PillarAccordionSection pillars={services} />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How we work</span>
            <h2>Simple, transparent, and built to scale with you.</h2>
          </div>

          <div className="home-process-grid">
            {processSteps.map((step) => (
              <article key={step.index} className="home-process-item">
                <span className="step-index">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-clean-cta">
            <div>
              <span className="eyebrow">Ready to start?</span>
              <h2>Book a free 30-minute business audit.</h2>
              <p>
                No pressure, no generic pitch. Just a focused conversation about where the business is and what
                it needs next.
              </p>
            </div>

            <Link className="button button-primary" to="/audit">
              Start the audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
