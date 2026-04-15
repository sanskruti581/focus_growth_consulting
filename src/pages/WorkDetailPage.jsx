import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { getWorkBySlug } from '../data/siteContent';

export default function WorkDetailPage() {
  const { workSlug } = useParams();
  const item = getWorkBySlug(workSlug);

  if (!item) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow={`${item.sector} / ${item.status}`}
        title={item.title}
        intro={item.summary}
        actions={[
          { label: 'Book free audit', to: '/audit', primary: true },
          { label: 'Back to work', to: '/work' },
        ]}
      >
        <div className="hero-feature-card">
          <span className="eyebrow">Delivery horizon</span>
          <h3>{item.timeline}</h3>
          <ul className="stack-list">
            {item.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split-layout">
          <article className="card">
            <h2>The challenge</h2>
            <p>{item.challenge}</p>
          </article>

          <article className="card">
            <h2>Signals we focus on</h2>
            <ul className="stack-list">
              {item.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Blueprint</span>
            <h2>How the system is built.</h2>
          </div>

          <div className="timeline-grid">
            {item.blueprint.map((step, index) => (
              <article key={step} className="card timeline-card">
                <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-stack card">
          <h2>Why this works</h2>
          {item.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow">Use this as a starting point</span>
              <h2>Want a version of this system built for your business?</h2>
              <p>We use the audit to decide which pieces matter first and what should wait.</p>
            </div>
            <Link className="button button-primary" to="/audit">
              Start with the audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
