import { Link } from 'react-router-dom';

function renderAction(action) {
  if (action.href) {
    return (
      <a
        key={action.label}
        className={action.primary ? 'button button-primary' : 'button button-secondary'}
        href={action.href}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link
      key={action.label}
      className={action.primary ? 'button button-primary' : 'button button-secondary'}
      to={action.to}
    >
      {action.label}
    </Link>
  );
}

export default function PageHero({ eyebrow, title, intro, actions = [], children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
          {actions.length ? <div className="hero-actions">{actions.map(renderAction)}</div> : null}
        </div>
        {children ? <div className="hero-panel">{children}</div> : null}
      </div>
    </section>
  );
}
