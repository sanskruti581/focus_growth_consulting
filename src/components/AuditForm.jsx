import { useEffect, useState } from 'react';
import { company, getServiceBySlug } from '../data/siteContent';

const draftKey = 'focus-growth-audit-draft';

const emptyForm = {
  name: '',
  company: '',
  email: '',
  teamSize: '',
  revenueBand: '',
  mainProblem: 'roi',
  biggestGoal: 'leads',
  notes: '',
};

const problemMap = {
  roi: 'performance-marketing',
  roadmap: 'growth-strategy-consulting',
  systems: 'systems-automation',
  visibility: 'business-intelligence-reporting',
};

const goalMap = {
  leads: 'performance-marketing',
  direction: 'growth-strategy-consulting',
  automation: 'systems-automation',
  clarity: 'business-intelligence-reporting',
};

function buildRecommendation(formState) {
  const primarySlug = problemMap[formState.mainProblem];
  const secondarySlug = goalMap[formState.biggestGoal];
  const primary = getServiceBySlug(primarySlug);
  const secondary = primarySlug === secondarySlug ? null : getServiceBySlug(secondarySlug);

  return { primary, secondary };
}

export default function AuditForm() {
  const [formState, setFormState] = useState(emptyForm);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const savedDraft = window.localStorage.getItem(draftKey);
    if (savedDraft) {
      setFormState((current) => ({ ...current, ...JSON.parse(savedDraft) }));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(draftKey, JSON.stringify(formState));
  }, [formState]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setResult(buildRecommendation(formState));
  }

  const mailtoBody = result
    ? encodeURIComponent(
        [
          `Name: ${formState.name}`,
          `Company: ${formState.company}`,
          `Email: ${formState.email}`,
          `Team size: ${formState.teamSize}`,
          `Revenue band: ${formState.revenueBand}`,
          `Main problem: ${formState.mainProblem}`,
          `Biggest goal: ${formState.biggestGoal}`,
          '',
          'Notes:',
          formState.notes || 'No extra notes provided.',
        ].join('\n'),
      )
    : '';

  return (
    <div className="audit-layout">
      <form className="audit-form card" onSubmit={handleSubmit}>
        <div className="section-heading">
          <span className="eyebrow">Quick audit intake</span>
          <h2>Tell us where growth feels stuck.</h2>
        </div>

        <div className="form-grid">
          <label>
            Name
            <input name="name" value={formState.name} onChange={handleChange} placeholder="Your name" required />
          </label>

          <label>
            Company
            <input
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Business name"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
            />
          </label>

          <label>
            Team size
            <select name="teamSize" value={formState.teamSize} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="2-5">2-5</option>
              <option value="6-15">6-15</option>
              <option value="16-50">16-50</option>
              <option value="50+">50+</option>
            </select>
          </label>

          <label>
            Revenue band
            <select name="revenueBand" value={formState.revenueBand} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Under INR 50L">Under INR 50L</option>
              <option value="INR 50L - 2 Cr">INR 50L - 2 Cr</option>
              <option value="INR 2 Cr - 10 Cr">INR 2 Cr - 10 Cr</option>
              <option value="INR 10 Cr+">INR 10 Cr+</option>
            </select>
          </label>

          <label>
            Main problem
            <select name="mainProblem" value={formState.mainProblem} onChange={handleChange}>
              <option value="roi">Ads are active but ROI is weak</option>
              <option value="roadmap">We need a clear growth roadmap</option>
              <option value="systems">Leads and follow-ups are messy</option>
              <option value="visibility">We do not trust our reporting</option>
            </select>
          </label>

          <label className="full-width">
            Biggest goal
            <select name="biggestGoal" value={formState.biggestGoal} onChange={handleChange}>
              <option value="leads">Generate better quality leads</option>
              <option value="direction">Prioritize the next 90 days</option>
              <option value="automation">Automate lead handling and onboarding</option>
              <option value="clarity">Get clean reporting and monthly visibility</option>
            </select>
          </label>

          <label className="full-width">
            What should we know before the call?
            <textarea
              name="notes"
              rows="5"
              value={formState.notes}
              onChange={handleChange}
              placeholder="Share context about channels, offers, tools, or what has already been tried."
            />
          </label>
        </div>

        <button className="button button-primary" type="submit">
          Generate my audit summary
        </button>
      </form>

      <aside className="card audit-result">
        <div className="section-heading">
          <span className="eyebrow">Recommended focus</span>
          <h2>What we would likely start with</h2>
        </div>

        {result ? (
          <>
            <div className="result-callout">
              <strong>{result.primary.name}</strong>
              <p>{result.primary.summary}</p>
            </div>

            <ul className="stack-list">
              <li>
                <strong>Primary outcome:</strong> {result.primary.clientOutcome}
              </li>
              {result.secondary ? (
                <li>
                  <strong>Secondary support:</strong> {result.secondary.name}
                </li>
              ) : null}
              <li>
                <strong>Audit window:</strong> {company.auditWindow}
              </li>
            </ul>

            <a
              className="button button-secondary"
              href={`${company.emailHref}?subject=${encodeURIComponent(
                `Free audit request from ${formState.company}`,
              )}&body=${mailtoBody}`}
            >
              Email this summary to Focus Growth
            </a>
          </>
        ) : (
          <div className="empty-state">
            <p>
              Fill in the form to generate a recommended starting point. We will use it to shape the first
              conversation around your real business problem.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
