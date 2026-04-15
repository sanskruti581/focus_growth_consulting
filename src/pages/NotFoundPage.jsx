import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="card empty-state">
          <span className="eyebrow">404</span>
          <h1>That page is not part of the growth system.</h1>
          <p>The route does not exist, but the rest of the site is ready to explore.</p>
          <Link className="button button-primary" to="/">
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
