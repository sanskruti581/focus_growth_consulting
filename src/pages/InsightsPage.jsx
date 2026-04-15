import { useDeferredValue, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { insights } from '../data/siteContent';

const categories = ['All', ...new Set(insights.map((item) => item.category))];

export default function InsightsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleInsights = insights.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const haystack = `${item.title} ${item.excerpt} ${item.takeaway}`.toLowerCase();
    const matchesQuery = !deferredQuery || haystack.includes(deferredQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Problem-led thinking for founders and operators."
        intro="The same voice that shapes proposals, strategy, and client conversations also shapes the way we publish. Direct, specific, and built for action."
      />

      <section className="section">
        <div className="container">
          <div className="filter-bar card">
            <label className="search-input">
              Search
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles"
              />
            </label>

            <div className="chip-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`chip ${category === activeCategory ? 'chip-active' : ''}`}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {visibleInsights.length ? (
            <div className="card-grid">
              {visibleInsights.map((item) => (
                <article key={item.slug} className="card insight-card">
                  <div className="card-meta">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <p className="muted">{item.takeaway}</p>
                  <Link className="text-link" to={`/insights/${item.slug}`}>
                    Read the article
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="card empty-state">
              <h2>No matches yet.</h2>
              <p>Try a broader keyword or switch back to all categories.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
