import PageHero from '../components/PageHero';
import AuditForm from '../components/AuditForm';

export default function AuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Free business audit"
        title="Start with the problem, not the pitch."
        intro="This is not a generic discovery call. It is a focused diagnostic built to understand the business, the goal, the current system, and what should happen next."
      />

      <section className="section">
        <div className="container">
          <AuditForm />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-layout">
          <article className="card">
            <h2>What to expect</h2>
            <ul className="stack-list">
              <li>We review your growth goal, current channels, and commercial constraints.</li>
              <li>We identify the likely bottleneck before discussing services.</li>
              <li>You leave with a recommended first move, even if we are not the right fit.</li>
            </ul>
          </article>

          <article className="card">
            <h2>What helps us prepare</h2>
            <ul className="stack-list">
              <li>Current revenue target or business goal</li>
              <li>Main acquisition channels and how they are performing</li>
              <li>Any existing CRM, website, or reporting setup</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
