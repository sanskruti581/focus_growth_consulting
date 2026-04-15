import PageHero from '../components/PageHero';
import { aboutContent, company } from '../data/siteContent';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Built for founders who are tired of buying disconnected services."
        intro="Focus Growth Consulting exists to replace service shopping with clear diagnosis, accountable execution, and business-level clarity."
      >
        <div className="hero-feature-card">
          <span className="eyebrow">Location</span>
          <h3>{company.location}</h3>
          <p>{company.auditWindow}</p>
        </div>
      </PageHero>

      <section className="section">
        <div className="container text-stack card">
          <h2>The origin</h2>
          {aboutContent.origin.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-layout">
          <article className="card">
            <span className="eyebrow">Mission</span>
            <h2>{aboutContent.mission}</h2>
          </article>

          <article className="card">
            <span className="eyebrow">Vision</span>
            <h2>{aboutContent.vision}</h2>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Core values</span>
            <h2>The rules that shape how we work.</h2>
          </div>

          <div className="card-grid">
            {aboutContent.values.map((value) => (
              <article key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Founding principle</span>
            <h2>Hide execution. Sell outcomes. Deliver both.</h2>
          </div>

          <div className="card-grid">
            {aboutContent.foundingPrinciples.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <article className="card">
            <h2>Voice attributes</h2>
            <ul className="stack-list">
              {aboutContent.voice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Audience fit</h2>
            <ul className="stack-list">
              {aboutContent.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
