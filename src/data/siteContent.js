export const company = {
  name: 'Focus Growth Consulting',
  shortName: 'Focus Growth',
  tagline: 'Growth systems for ambitious SMBs',
  location: 'Bengaluru, India',
  website: 'focusgrowthconsulting.com',
  email: 'hello@focusgrowthconsulting.com',
  emailHref: 'mailto:hello@focusgrowthconsulting.com',
  auditWindow: 'Free 30-minute business audit',
};

export const navigation = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Insights', to: '/insights' },
];

export const homeStats = [
  { value: '4', label: 'Integrated growth pillars' },
  { value: '30 min', label: 'Problem-first audit' },
  { value: '90 days', label: 'Roadmap to measurable momentum' },
  { value: '1 partner', label: 'Strategy, execution, and reporting together' },
];

export const homeProblems = [
  {
    quote: '"I am spending on ads but getting zero ROI."',
    explanation:
      'Running campaigns without a strategy burns money fast. You need a partner who owns the result, not just the dashboard.',
    cta: 'Explore performance marketing',
    to: '/services/performance-marketing',
  },
  {
    quote: '"I do not know where my business should grow next."',
    explanation:
      'Without a clear roadmap, every new tactic feels urgent. We help you choose the right next move and the sequence behind it.',
    cta: 'Explore growth strategy',
    to: '/services/growth-strategy-consulting',
  },
  {
    quote: '"My business runs on WhatsApp and spreadsheets."',
    explanation:
      'Manual follow-ups, disconnected systems, and missed leads create hidden revenue leaks. We replace patchwork with flow.',
    cta: 'Explore systems and automation',
    to: '/services/systems-automation',
  },
  {
    quote: '"I have no idea what is actually working."',
    explanation:
      'If your data is scattered, decision-making becomes instinct instead of evidence. We build the reporting layer that makes action obvious.',
    cta: 'Explore reporting and BI',
    to: '/services/business-intelligence-reporting',
  },
];

export const comparisonRows = [
  ['Sells you a service menu', 'Diagnoses the business problem first'],
  ['Delivers tasks, not outcomes', 'Owns the result from roadmap to reporting'],
  ['Advises, then disappears', 'Builds, runs, and keeps improving the system'],
  ['Monthly reports you ignore', 'Clear dashboards and real decisions'],
  ['You coordinate multiple vendors', 'One growth partner with one operating rhythm'],
];

export const processSteps = [
  {
    index: '01',
    title: 'Audit and diagnose',
    detail:
      'Start with a free 30-minute call. We learn the business, the revenue model, the bottlenecks, and the growth goal before recommending anything.',
  },
  {
    index: '02',
    title: 'Build your roadmap',
    detail:
      'We turn the diagnosis into a clear growth plan. What to do, in what order, where to invest, and what to stop doing.',
  },
  {
    index: '03',
    title: 'Execute and implement',
    detail:
      'We do not hand over a PDF and walk away. We launch campaigns, build systems, ship pages, and wire automation.',
  },
  {
    index: '04',
    title: 'Measure and scale',
    detail:
      'Dashboards, weekly signal checks, monthly reviews, and ongoing optimization keep the system moving and the decisions grounded.',
  },
];

export const services = [
  {
    slug: 'growth-strategy-consulting',
    name: 'Growth Strategy & Consulting',
    label: 'Direction',
    summary:
      'Clarify how the business should grow, what the next 90 days should focus on, and how every channel should support the same commercial goal.',
    clientOutcome: 'I know exactly how to grow this business, in what order, and why.',
    idealFor: [
      'Founders making growth decisions on gut feel',
      'Teams running isolated tactics without one plan',
      'Businesses preparing to scale but lacking positioning clarity',
    ],
    whatWeDo: [
      'Audit the business model, offer, acquisition flow, and growth gaps',
      'Map the customer journey from demand to conversion to retention',
      'Build a clear growth roadmap with priorities, owners, and timing',
      'Shape positioning, messaging, and a practical go-to-market plan',
    ],
    deliverables: [
      'Growth roadmap in Notion or PDF',
      'Customer acquisition plan',
      'Offer and funnel structure',
      'Brand positioning brief',
      'Competitor analysis report',
    ],
    deliveryCycle: [
      {
        title: 'Business diagnostic',
        detail: 'Audit goals, revenue streams, customer segments, current channels, and bottlenecks.',
      },
      {
        title: 'Gap mapping',
        detail: 'Identify where awareness, conversion, systems, or reporting are slowing growth.',
      },
      {
        title: 'Roadmap build',
        detail: 'Prioritize the highest-leverage initiatives for the next 30, 60, and 90 days.',
      },
      {
        title: 'Leadership alignment',
        detail: 'Turn strategy into a working plan that the founder and team can act on immediately.',
      },
    ],
    tools: ['Notion', 'Offer audits', 'Competitor reviews', 'Messaging frameworks'],
    metrics: ['Decision speed', 'Channel focus', 'Offer clarity', 'Roadmap adoption'],
  },
  {
    slug: 'performance-marketing',
    name: 'Performance Marketing',
    label: 'Acquisition',
    summary:
      'Run Meta Ads and Google Ads with clear strategy, strong creative loops, and reporting that ties spend to qualified demand.',
    clientOutcome: 'My ads create a steady stream of qualified leads and learning.',
    idealFor: [
      'Businesses already spending but not seeing confident ROI',
      'Teams that need one owner for paid acquisition and optimization',
      'Founders who want data-backed campaign decisions every week',
    ],
    whatWeDo: [
      'Set channel strategy, audience logic, campaign structure, and budget pacing',
      'Plan creative tests and performance hypotheses every month',
      'Monitor daily, report weekly, and optimize from actual signal quality',
      'Connect campaign performance with landing page and follow-up readiness',
    ],
    deliverables: [
      'Campaign setup and management',
      'Creative briefs and ad copy',
      'Weekly signal updates',
      'Monthly budget optimization',
      'Conversion tracking setup',
    ],
    deliveryCycle: [
      {
        title: 'Review and planning',
        detail: 'Pull spend, CTR, CPL, ROAS, and lead quality from the previous cycle and set the next tests.',
      },
      {
        title: 'Creative briefing',
        detail: 'Brief new angles, formats, hooks, and CTAs based on the best and worst performers.',
      },
      {
        title: 'Launch and monitor',
        detail: 'Ship campaigns, watch anomalies daily, and track CPL trends from the first week onward.',
      },
      {
        title: 'Weekly and monthly reporting',
        detail: 'Share clear WhatsApp and report updates with what to scale, what to cut, and why.',
      },
    ],
    tools: ['Meta Ads', 'Google Ads', 'GA4', 'GTM', 'Weekly trackers'],
    metrics: ['CTR', 'CPL', 'ROAS', 'Qualified lead volume'],
  },
  {
    slug: 'systems-automation',
    name: 'Systems & Automation',
    label: 'Infrastructure',
    summary:
      'Build the operating layer behind growth: CRM, landing pages, follow-ups, booking systems, and automation that reduce dropped demand.',
    clientOutcome: 'Every lead gets captured, routed, and followed up without chaos.',
    idealFor: [
      'Businesses managing leads through inboxes and spreadsheets',
      'Teams missing follow-ups, bookings, or onboarding steps',
      'Founders who need the business to work even when they are busy',
    ],
    whatWeDo: [
      'Set up CRM stages, records, and core lead management logic',
      'Build landing pages and enquiry flows with proper tracking',
      'Automate first-response, nurture, booking, and onboarding sequences',
      'Document the setup so the system remains usable after launch',
    ],
    deliverables: [
      'CRM setup in Zoho or HubSpot',
      'Landing page or website flow',
      'Booking and enquiry routing',
      'WhatsApp automation',
      'Email nurture sequence',
    ],
    deliveryCycle: [
      {
        title: 'CRM setup',
        detail: 'Configure pipeline stages, custom fields, imports, and a full lead test run.',
      },
      {
        title: 'WhatsApp automation',
        detail: 'Set up quick replies, first-response automation, and client-ready messaging flows.',
      },
      {
        title: 'Lead capture and pages',
        detail: 'Build or refine landing pages, install tracking, and confirm conversion events fire cleanly.',
      },
      {
        title: 'Email nurture',
        detail: 'Launch a five-part sequence that confirms, educates, proves trust, and drives the next action.',
      },
    ],
    tools: ['Zoho CRM', 'HubSpot', 'Mailchimp', 'WhatsApp Business', 'Meta Pixel'],
    metrics: ['Speed to lead', 'Lead capture rate', 'Follow-up consistency', 'Operational time saved'],
  },
  {
    slug: 'business-intelligence-reporting',
    name: 'Business Intelligence & Reporting',
    label: 'Clarity',
    summary:
      'Bring marketing, sales, and operational data into one reporting rhythm so every monthly decision has context, not guesswork.',
    clientOutcome: 'I know what is working, what is not, and where to invest next.',
    idealFor: [
      'Businesses pulling numbers from multiple disconnected tools',
      'Founders tired of vague agency reports with no decisions in them',
      'Teams that need one source of truth for growth conversations',
    ],
    whatWeDo: [
      'Collect marketing, CRM, website, and campaign data into one reporting stack',
      'Build monthly reports with executive summaries, insights, and next actions',
      'Create dashboards for live visibility across key KPIs',
      'Flag data gaps, tracking issues, and wasted spend early',
    ],
    deliverables: [
      'Custom KPI dashboard',
      'Monthly decision report',
      'Campaign performance insights',
      'Customer behavior analysis',
      'Tracking and reporting QA',
    ],
    deliveryCycle: [
      {
        title: 'Data collection',
        detail: 'Pull platform metrics, CRM numbers, social signals, and analytics into one reporting sheet.',
      },
      {
        title: 'Report writing',
        detail: 'Write the executive summary, top insights, next month plan, and client action items.',
      },
      {
        title: 'Strategic review',
        detail: 'Review with leadership before sending so the report answers commercial questions, not vanity metrics.',
      },
      {
        title: 'Delivery and decision call',
        detail: 'Ship the report, notify the client, and book a review call within the same cycle.',
      },
    ],
    tools: ['Power BI', 'Looker Studio', 'GA4', 'Zoho CRM', 'Monthly report templates'],
    metrics: ['Lead quality visibility', 'Reporting trust', 'Decision confidence', 'Tracking accuracy'],
  },
];

export const workItems = [
  {
    slug: 'd2c-recovery-system',
    title: 'D2C recovery system',
    sector: 'D2C / E-commerce',
    status: 'Representative blueprint',
    summary:
      'A full-funnel rebuild for founders spending on Meta and Google but lacking offer clarity, retargeting logic, and speed-to-lead discipline.',
    challenge:
      'Traffic is flowing, but the founder cannot explain where profitable demand is leaking. Campaigns, pages, and follow-up are being managed as separate projects.',
    timeline: '45-day sprint',
    services: ['Growth Strategy & Consulting', 'Performance Marketing', 'Systems & Automation', 'Business Intelligence & Reporting'],
    blueprint: [
      'Audit the offer, traffic sources, and conversion path',
      'Rework landing page structure and conversion messaging',
      'Reset Meta Pixel, GTM events, and reporting',
      'Launch remarketing and nurture sequences to recover abandoned demand',
    ],
    signals: ['ROAS visibility by campaign', 'Faster follow-up on warm leads', 'Daily pacing dashboard', 'Clearer offer-market signal'],
    story: [
      'This blueprint starts by proving whether the business has a channel problem, an offer problem, or a handoff problem.',
      'Once that is clear, paid media, landing pages, and automation are rebuilt as one connected system instead of three isolated vendors.',
      'The founder gets a live view of spend, lead quality, and the exact places where demand is dropping out.',
    ],
  },
  {
    slug: 'professional-services-intake-engine',
    title: 'Professional services intake engine',
    sector: 'Professional Services',
    status: 'Representative blueprint',
    summary:
      'A lead management and qualification flow for firms that still rely on WhatsApp, manual follow-up, and partner memory to close work.',
    challenge:
      'Inbound demand exists, but every enquiry is handled differently. Leads sit in chat threads, no one knows the stage, and reporting starts too late.',
    timeline: '30-day implementation',
    services: ['Growth Strategy & Consulting', 'Systems & Automation', 'Business Intelligence & Reporting'],
    blueprint: [
      'Map the enquiry-to-consultation journey',
      'Set up CRM stages and lead ownership',
      'Launch landing pages, form routing, and WhatsApp response automation',
      'Create monthly reporting for conversion and speed-to-lead',
    ],
    signals: ['Lead response time', 'Consultation booking rate', 'Pipeline visibility', 'Drop-off diagnosis'],
    story: [
      'The goal is not just to capture more leads. It is to make every serious enquiry impossible to lose.',
      'We tighten intake, qualify faster, and give partners a clear dashboard showing what is moving, stuck, and ready to close.',
      'That clarity reduces manual coordination and makes growth less dependent on founder memory.',
    ],
  },
  {
    slug: 'edtech-enrollment-clarity-suite',
    title: 'EdTech enrollment clarity suite',
    sector: 'Education / EdTech',
    status: 'Representative blueprint',
    summary:
      'A reporting-first growth stack for education businesses managing multiple channels, counseling teams, and enrollment periods without one source of truth.',
    challenge:
      'Leads are coming from campaigns, calls, forms, and social channels, but no one can connect spend, counselor effort, and actual enrollments.',
    timeline: '60-day rollout',
    services: ['Performance Marketing', 'Systems & Automation', 'Business Intelligence & Reporting'],
    blueprint: [
      'Unify lead capture from campaigns and website forms',
      'Set up counselor-ready CRM and follow-up stages',
      'Create a monthly decision dashboard around CPL, lead quality, and enrollment progress',
      'Build retargeting and nurture logic around key admission windows',
    ],
    signals: ['Campaign-to-enrollment visibility', 'Counselor follow-up discipline', 'Budget allocation clarity', 'Cycle-by-cycle reporting'],
    story: [
      'Education teams often know activity but not causality. They can see leads, but not which channels and sequences create enrolled students.',
      'This system connects acquisition and operations so budget decisions happen with context, not instinct.',
      'It is built for teams that need clarity during every enrollment push, not just at the end of the month.',
    ],
  },
];

export const aboutContent = {
  origin: [
    'Focus Growth Consulting was founded with one frustration: small and mid-sized businesses were being sold service menus instead of solutions.',
    'Most agencies offered the same list - website, SEO, social media, ads - with no context, no shared strategy, and no accountability for business outcomes.',
    'We built the opposite model: diagnose the real problem first, then design and implement the growth system around it.',
  ],
  mission:
    'Help ambitious SMBs grow with clarity, confidence, and systems that work - not tactics that expire.',
  vision:
    'Become the most trusted growth partner for SMBs in India by being known for results, accountability, and the systems we leave behind.',
  values: [
    {
      title: 'Execution over advice',
      detail: 'We implement. Recommendations are only valuable if they become working systems inside the business.',
    },
    {
      title: 'Outcomes over outputs',
      detail: 'Clients are not paying for posts, pages, or dashboards. They are paying for better growth decisions and better results.',
    },
    {
      title: 'Clarity over complexity',
      detail: 'The strategy should feel sharp and practical, never padded with jargon or unnecessary process.',
    },
    {
      title: 'Accountability',
      detail: 'If something is not working, we do not defend it. We diagnose it, fix it, and keep moving.',
    },
    {
      title: 'Honesty',
      detail: 'We tell clients what they need to hear, even when the answer is slower, harder, or less flattering.',
    },
  ],
  foundingPrinciples: [
    {
      title: 'Hide execution',
      detail: 'Show the client the result and the confidence behind it, not unnecessary operational noise.',
    },
    {
      title: 'Sell outcomes',
      detail: 'Position every service around the commercial result it creates for the client.',
    },
    {
      title: 'Deliver both',
      detail: 'The thinking must be strategic and the execution must be real. One without the other is incomplete.',
    },
  ],
  voice: ['Direct', 'Confident', 'Human', 'Specific', 'Warm'],
  wordsToAvoid: [
    'Innovative',
    'Best-in-class',
    'Synergy',
    'Holistic approach',
    'Leverage',
    'Dynamic solutions',
    'World-class',
    'Cutting-edge',
    'Passionate team',
  ],
  audience: [
    'Small to mid-sized businesses in India with 2-50 employees',
    'Revenue range between INR 50L and INR 10 Cr annually',
    'Founder, co-founder, or head of marketing as decision maker',
    'Most useful for D2C, professional services, and education businesses first',
  ],
};

export const pricing = {
  auditOffer: {
    title: 'Growth Audit',
    price: 'INR 5,000',
    note: 'Refundable against the first retainer engagement.',
    includes: [
      '30-minute business audit call',
      '5-page written growth plan',
      'Top 3 growth gaps identified',
      'Recommended next steps in priority order',
    ],
  },
  packages: [
    {
      name: 'Growth Starter',
      price: 'INR 25,000 - 40,000 / month',
      summary: 'Strategy plus one growth pillar for teams that need a focused first move.',
      includes: ['Growth strategy session', 'One core service pillar', 'Monthly review rhythm'],
    },
    {
      name: 'Growth Builder',
      price: 'INR 50,000 - 80,000 / month',
      summary: 'Strategy, paid acquisition, and system setup for businesses ready to tighten demand and conversion together.',
      includes: ['Strategy roadmap', 'Performance marketing management', 'Systems setup and tracking'],
    },
    {
      name: 'Growth Partner',
      price: 'INR 90,000 - 1,50,000 / month',
      summary: 'All four pillars with end-to-end accountability across strategy, execution, automation, and reporting.',
      includes: ['All four growth pillars', 'Reporting dashboard', 'Monthly strategic recommendations'],
    },
    {
      name: 'Enterprise Custom',
      price: 'INR 1,50,000+ / month',
      summary: 'Custom scope for larger teams, multi-brand setups, or broader implementation work.',
      includes: ['Custom scoping', 'Multi-team coordination', 'Expanded delivery support'],
    },
  ],
  oneTimeProjects: [
    ['Website design and development', 'INR 30,000 - 80,000'],
    ['Brand identity and guidelines', 'INR 20,000 - 45,000'],
    ['90-day GTM strategy document', 'INR 15,000 - 30,000'],
    ['CRM setup and automation', 'INR 25,000 - 60,000'],
    ['Performance dashboard setup', 'INR 20,000 - 40,000'],
  ],
  rules: [
    'Never quote the final fee before the audit and scope review.',
    'Always present three options to frame the right level of investment.',
    'Minimum engagement is three months because one month is not enough to prove the system.',
    'Ad spend budgets are separate from management fees.',
    'Discounts are reserved for longer commitments, not rushed decisions.',
  ],
};

export const faqs = [
  {
    question: 'What happens in the free audit?',
    answer:
      'It is a structured 30-minute diagnostic. We look at the business model, revenue goal, current channels, gaps, and likely priorities before recommending any service.',
  },
  {
    question: 'Do we have to buy all four pillars?',
    answer:
      'No. Clients can start with one pillar, but the plan is always built in context of the full growth system so future work stays connected.',
  },
  {
    question: 'How quickly can work start?',
    answer:
      'Most projects move from audit to proposal within 24 hours and into onboarding once the contract and advance are in place.',
  },
  {
    question: 'Do you only advise or also implement?',
    answer:
      'Implementation is core to the model. We build, launch, document, report, and keep optimizing instead of stopping at recommendations.',
  },
  {
    question: 'Is ad spend included?',
    answer:
      'No. Media budgets are kept separate so the management fee stays tied to expertise, execution quality, and accountability.',
  },
];

export const insights = [
  {
    slug: 'ads-clicks-no-conversions',
    category: 'Performance',
    readTime: '5 min read',
    title: 'Why your ads get clicks but no conversions',
    excerpt:
      'Most weak campaigns are not creative problems. They are system problems hiding between the ad, the page, and the follow-up.',
    takeaway: 'If the handoff is broken, more traffic only makes the leak more expensive.',
    body: [
      'Founders often assume the ad platform is the problem because that is where the spend is visible. In reality, a campaign can produce attention while the offer, landing page, or lead handoff quietly kills the conversion.',
      'The first diagnostic is simple: can the business explain what happens after the click? If the answer is vague, the system is not ready for scale.',
      'We audit three layers together: the promise in the ad, the clarity on the page, and the speed of response after enquiry. Weakness in any one of those layers can make a good campaign look bad.',
      'The fix is rarely more volume. It is tighter messaging, stronger conversion structure, and a follow-up system that treats every qualified click like revenue, not admin.',
    ],
    takeaways: [
      'Measure the page and the follow-up, not just CTR and CPC.',
      'Check whether the offer is clear before increasing budget.',
      'Track speed-to-lead alongside campaign performance.',
    ],
    relatedService: 'performance-marketing',
  },
  {
    slug: 'business-outgrown-spreadsheets',
    category: 'Systems',
    readTime: '4 min read',
    title: 'How to know your business has outgrown spreadsheets',
    excerpt:
      'Spreadsheets are useful until they become the operating system. Once revenue depends on them, they start creating hidden risk.',
    takeaway: 'If follow-up quality changes based on who is online, the business needs infrastructure.',
    body: [
      'The real issue is not spreadsheets themselves. It is using them as the main layer for lead routing, follow-up tracking, and operational memory.',
      'When a business depends on chats, copied rows, and manual reminders, every busy day creates leakage. Leads wait too long, context gets lost, and no one trusts the status.',
      'A better system does not need to be complex. It needs clear stages, ownership, basic automation, and one source of truth that the team actually uses.',
      'Once that layer exists, the founder gets time back and the team stops reinventing the same operational decision every day.',
    ],
    takeaways: [
      'Missed follow-ups are often a systems problem, not a team motivation problem.',
      'A simple CRM with real ownership beats a complex setup no one touches.',
      'Automation should reduce ambiguity first and labor second.',
    ],
    relatedService: 'systems-automation',
  },
  {
    slug: 'why-service-menus-fail',
    category: 'Strategy',
    readTime: '6 min read',
    title: 'Why service menus fail growth-minded businesses',
    excerpt:
      'A service menu answers what an agency can do. A founder needs an answer to what will move the business forward next.',
    takeaway: 'The sequence matters as much as the tactic.',
    body: [
      'When every vendor sells the same stack of services, the buyer is pushed toward price comparison instead of strategic fit.',
      'That creates the wrong buying behavior. Businesses choose isolated deliverables before they understand the real bottleneck.',
      'A founder with poor lead quality does not need a prettier monthly content calendar. A founder with no visibility does not need more ads. The right answer starts with diagnosis.',
      'That is why our model begins with an audit. Once the business problem is clear, the services become tools, not the pitch itself.',
    ],
    takeaways: [
      'Start with the growth constraint, not the channel.',
      'Prioritize sequencing instead of chasing parallel tactics.',
      'Strategy is what makes execution cumulative.',
    ],
    relatedService: 'growth-strategy-consulting',
  },
  {
    slug: 'what-a-growth-report-should-do',
    category: 'Reporting',
    readTime: '5 min read',
    title: 'What a real growth report should help you decide',
    excerpt:
      'A report is not successful because it looks polished. It is successful when the next action becomes obvious.',
    takeaway: 'Reporting should reduce uncertainty, not decorate it.',
    body: [
      'Many business reports are full of numbers but empty of decisions. They summarize activity without telling leadership what to scale, stop, or investigate.',
      'A strong monthly report combines metrics with interpretation. It should show what changed, why it matters, and what action follows.',
      'We write reports with an executive summary, three key insights, clear client action items, and the next month plan. That turns reporting into a management tool instead of a ritual.',
      'When the data stack is healthy, reporting becomes one of the highest-leverage assets in the business because it improves every future decision.',
    ],
    takeaways: [
      'Every report should include decisions, not just observations.',
      'Track the source of performance changes, not only the totals.',
      'Use reporting to sharpen the next cycle, not justify the last one.',
    ],
    relatedService: 'business-intelligence-reporting',
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getWorkBySlug(slug) {
  return workItems.find((item) => item.slug === slug);
}

export function getInsightBySlug(slug) {
  return insights.find((item) => item.slug === slug);
}
