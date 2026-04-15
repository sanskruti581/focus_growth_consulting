import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { workItems } from '../data/siteContent';

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Representative work"
        title="What our systems look like in practice"
        intro="These blueprint-style pages show how Focus Growth structures strategy, acquisition, automation, and reporting around different business models."
        actions={[
          { label: 'Book free audit', to: '/audit', primary: true },
          { label: 'See pricing', to: '/pricing' },
        ]}
      />

      <section className="section">
        <div className="container card-grid">
          {workItems.map((item) => (
            <article key={item.slug} className="card work-card">
              <div className="card-meta">
                <span>{item.sector}</span>
                <span>{item.timeline}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <p className="muted">{item.challenge}</p>
              <Link className="button button-secondary" to={`/work/${item.slug}`}>
                Open blueprint
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
