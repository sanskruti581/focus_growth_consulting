import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { getInsightBySlug, getServiceBySlug } from '../data/siteContent';

export default function InsightDetailPage() {
  const { insightSlug } = useParams();
  const article = getInsightBySlug(insightSlug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedService = getServiceBySlug(article.relatedService);

  return (
    <>
      <PageHero
        eyebrow={`${article.category} / ${article.readTime}`}
        title={article.title}
        intro={article.excerpt}
        actions={[{ label: 'Back to insights', to: '/insights' }]}
      />

      <section className="section">
        <div className="container detail-grid">
          <article className="card text-stack">
            <h2>Core takeaways</h2>
            <ul className="stack-list">
              {article.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card text-stack">
            <h2>Why it matters</h2>
            <p>{article.takeaway}</p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container card text-stack">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {relatedService ? (
        <section className="section">
          <div className="container">
            <div className="cta-banner">
              <div>
                <span className="eyebrow">Related pillar</span>
                <h2>{relatedService.name}</h2>
                <p>{relatedService.summary}</p>
              </div>
              <Link className="button button-primary" to={`/services/${relatedService.slug}`}>
                Explore the service
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
