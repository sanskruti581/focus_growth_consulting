import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { getServiceBySlug, services } from '../data/siteContent';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={service.label}
        title={service.name}
        intro={service.summary}
        actions={[
          { label: 'Book free audit', to: '/audit', primary: true },
          { label: 'Back to services', to: '/services' },
        ]}
      >
        <div className="hero-feature-card">
          <span className="eyebrow">Client outcome</span>
          <h3>{service.clientOutcome}</h3>
          <ul className="stack-list">
            {service.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </div>
      </PageHero>

      <section className="section">
        <div className="container detail-grid">
          <article className="card">
            <h2>Best fit for</h2>
            <ul className="stack-list">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>What we do</h2>
            <ul className="stack-list">
              {service.whatWeDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-layout">
          <article className="card">
            <h2>Deliverables</h2>
            <ul className="stack-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Tools and systems</h2>
            <ul className="stack-list">
              {service.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Delivery cycle</span>
            <h2>How this pillar runs in practice.</h2>
          </div>

          <div className="timeline-grid">
            {service.deliveryCycle.map((step, index) => (
              <article key={step.title} className="card timeline-card">
                <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow">Next move</span>
              <h2>Want to see how this fits your business?</h2>
              <p>Start with the audit. We will tell you whether this is the right first pillar or if another move should come first.</p>
            </div>
            <Link className="button button-primary" to="/audit">
              Book the audit
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Related pillars</span>
            <h2>Growth systems work best when the pieces connect.</h2>
          </div>

          <div className="card-grid">
            {relatedServices.map((item) => (
              <article key={item.slug} className="card">
                <span className="pill-label">{item.label}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <Link className="text-link" to={`/services/${item.slug}`}>
                  Explore this pillar
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
