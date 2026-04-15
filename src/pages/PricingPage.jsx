import PageHero from '../components/PageHero';
import { faqs, pricing } from '../data/siteContent';

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing architecture"
        title="Outcome-linked pricing, never random quoting."
        intro="Fees are shaped after the audit and scope review, but the model is clear: value-based retainers, practical one-time projects, and no confusion between media spend and management."
        actions={[{ label: 'Book free audit', to: '/audit', primary: true }]}
      />

      <section className="section">
        <div className="container split-layout">
          <article className="card audit-offer-card">
            <span className="eyebrow">Entry offer</span>
            <h2>{pricing.auditOffer.title}</h2>
            <p className="price-tag">{pricing.auditOffer.price}</p>
            <p>{pricing.auditOffer.note}</p>
            <ul className="stack-list">
              {pricing.auditOffer.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Pricing rules</h2>
            <ul className="stack-list">
              {pricing.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Monthly retainers</span>
            <h2>Choose the right level of system support.</h2>
          </div>

          <div className="card-grid">
            {pricing.packages.map((pkg) => (
              <article key={pkg.name} className="card pricing-card">
                <h3>{pkg.name}</h3>
                <p className="price-tag">{pkg.price}</p>
                <p>{pkg.summary}</p>
                <ul className="stack-list">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <div className="section-heading">
            <span className="eyebrow">One-time projects</span>
            <h2>Useful when the business needs a defined build, reset, or foundation piece.</h2>
          </div>

          <div className="pricing-table">
            {pricing.oneTimeProjects.map(([name, fee]) => (
              <div key={name} className="pricing-row">
                <span>{name}</span>
                <strong>{fee}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Questions founders usually ask before the audit.</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="card faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
