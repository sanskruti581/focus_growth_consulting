import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { processSteps, services } from '../data/siteContent';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services architecture"
        title="Four pillars. One complete growth system."
        intro="Clients can start with one pillar or engage across all four. The important part is that every engagement begins with diagnosis and stays tied to commercial outcomes."
        actions={[
          { label: 'Book free audit', to: '/audit', primary: true },
          { label: 'See representative work', to: '/work' },
        ]}
      >
        <div className="hero-feature-card">
          <span className="eyebrow">How the system connects</span>
          <ul className="stack-list">
            <li>Strategy decides where to focus.</li>
            <li>Marketing creates qualified demand.</li>
            <li>Systems capture and route demand cleanly.</li>
            <li>Reporting shows what to scale next.</li>
          </ul>
        </div>
      </PageHero>

      <section className="section">
        <div className="container card-grid">
          {services.map((service) => (
            <article key={service.slug} className="card service-card">
              <span className="pill-label">{service.label}</span>
              <h2>{service.name}</h2>
              <p>{service.summary}</p>
              <p className="service-outcome">{service.clientOutcome}</p>
              <ul className="stack-list">
                {service.whatWeDo.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="button button-secondary" to={`/services/${service.slug}`}>
                Open service detail
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Shared delivery rhythm</span>
            <h2>Every engagement follows the same accountable structure.</h2>
          </div>

          <div className="timeline-grid">
            {processSteps.map((step) => (
              <article key={step.index} className="card timeline-card">
                <span className="step-index">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
