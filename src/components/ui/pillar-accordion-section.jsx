import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillarThemes = [
  {
    teaser: 'Strategic direction for the next stage of growth.',
    tileBackground:
      'linear-gradient(145deg, rgba(255,250,241,0.98) 0%, rgba(242,231,212,0.96) 56%, rgba(220,197,163,0.98) 100%)',
    tileGlow: 'radial-gradient(circle at top right, rgba(194,145,79,0.36), transparent 44%)',
    tileGlowAccent: 'radial-gradient(circle at 18% 100%, rgba(255,255,255,0.55), transparent 36%)',
    accentColor: '#8a5a22',
    titleColor: '#1b1712',
    bodyColor: 'rgba(51,40,31,0.82)',
    indicatorColor: '#2d2419',
    borderColor: 'rgba(255,255,255,0.58)',
    modalTint:
      'linear-gradient(155deg, rgba(255,252,247,0.98) 0%, rgba(244,234,219,0.96) 62%, rgba(236,221,198,0.94) 100%)',
  },
  {
    teaser: 'Demand generation with sharper commercial signal.',
    tileBackground:
      'linear-gradient(145deg, rgba(115,80,48,0.96) 0%, rgba(152,119,92,0.95) 42%, rgba(233,220,204,0.96) 100%)',
    tileGlow: 'radial-gradient(circle at top right, rgba(255,241,220,0.24), transparent 42%)',
    tileGlowAccent: 'radial-gradient(circle at 12% 88%, rgba(255,255,255,0.18), transparent 34%)',
    accentColor: '#f7ecdc',
    titleColor: '#fff9f1',
    bodyColor: 'rgba(252,242,230,0.82)',
    indicatorColor: '#fff3e3',
    borderColor: 'rgba(255,255,255,0.2)',
    modalTint:
      'linear-gradient(155deg, rgba(255,249,243,0.98) 0%, rgba(234,223,210,0.96) 48%, rgba(207,181,153,0.95) 100%)',
  },
  {
    teaser: 'Systems that protect every handoff and follow-up.',
    tileBackground:
      'linear-gradient(145deg, rgba(73,59,44,0.96) 0%, rgba(111,91,67,0.95) 42%, rgba(197,171,127,0.92) 100%)',
    tileGlow: 'radial-gradient(circle at top right, rgba(241,214,165,0.24), transparent 46%)',
    tileGlowAccent: 'radial-gradient(circle at 10% 90%, rgba(255,255,255,0.14), transparent 34%)',
    accentColor: '#f4e0bf',
    titleColor: '#fcf6ed',
    bodyColor: 'rgba(244,233,214,0.82)',
    indicatorColor: '#f4e0bf',
    borderColor: 'rgba(255,255,255,0.16)',
    modalTint:
      'linear-gradient(160deg, rgba(255,250,245,0.98) 0%, rgba(234,224,210,0.95) 50%, rgba(215,195,164,0.94) 100%)',
  },
  {
    teaser: 'Reporting clarity for better decisions every month.',
    tileBackground:
      'linear-gradient(145deg, rgba(236,232,227,0.98) 0%, rgba(215,205,194,0.96) 52%, rgba(190,170,149,0.95) 100%)',
    tileGlow: 'radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 44%)',
    tileGlowAccent: 'radial-gradient(circle at 14% 92%, rgba(173,131,79,0.14), transparent 34%)',
    accentColor: '#6f5332',
    titleColor: '#1d1914',
    bodyColor: 'rgba(60,48,37,0.82)',
    indicatorColor: '#2d2419',
    borderColor: 'rgba(255,255,255,0.48)',
    modalTint:
      'linear-gradient(155deg, rgba(255,253,249,0.98) 0%, rgba(241,234,227,0.97) 52%, rgba(221,206,190,0.95) 100%)',
  },
];

function PillarModal({ pillar, onClose }) {
  const closeButtonRef = useRef(null);
  const headingId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!pillar) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [pillar, onClose]);

  if (!pillar || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-[rgba(20,16,12,0.26)] backdrop-blur-[4px] transition-opacity duration-300"
        aria-hidden="true"
        onClick={onClose}
        style={{ animation: 'pillarModalFade 180ms ease-out both' }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.46)] bg-[#f8f2ea] shadow-[0_34px_90px_rgba(33,24,15,0.22)] ring-1 ring-[rgba(138,90,34,0.08)] transition duration-300 ease-out"
        style={{
          backgroundImage: `${pillar.theme.tileGlow}, ${pillar.theme.modalTint}`,
          animation: 'pillarModalPanelIn 260ms cubic-bezier(0.22, 1, 0.36, 1) both',
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)]" />
        <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.65),transparent_70%)] blur-xl" />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[#7a5a39]">
                <span>{pillar.number}</span>
                <span className="h-1 w-1 rounded-full bg-[#b6834e]" />
                <span>{pillar.label}</span>
              </div>

              <div className="space-y-3">
                <h3 id={headingId} className="max-w-[12ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#1c1813]">
                  {pillar.name}
                </h3>
                <p id={descriptionId} className="max-w-2xl text-[1.02rem] leading-7 text-[#4f463c]">
                  {pillar.summary}
                </p>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(28,24,19,0.08)] bg-white/60 text-[#2f271f] transition duration-200 hover:bg-[rgba(255,255,255,0.88)] hover:text-[#8a5a22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(182,131,78,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f2ea]"
              aria-label={`Close ${pillar.name} details`}
            >
              <X size={18} strokeWidth={2.2} />
            </button>
          </div>

          <div className="mt-7 grid gap-5">
            <div className="rounded-[1.5rem] border border-[rgba(138,90,34,0.12)] bg-[rgba(255,255,255,0.56)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              <ul className="grid gap-3 text-[0.98rem] leading-7 text-[#332b23]">
                {pillar.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b6834e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 border-t border-[rgba(28,24,19,0.08)] pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl rounded-[1.35rem] bg-[rgba(255,250,244,0.74)] px-4 py-3 ring-1 ring-[rgba(138,90,34,0.08)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#8a5a22]">Outcome</p>
                <p className="mt-1 text-[0.98rem] leading-7 text-[#2a241d]">{pillar.clientOutcome}</p>
              </div>

              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a241d] transition duration-200 hover:text-[#8a5a22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(182,131,78,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f2ea]"
                to={`/services/${pillar.slug}`}
                onClick={onClose}
              >
                <span>View pillar</span>
                <ArrowUpRight size={17} strokeWidth={2.1} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function PillarTile({ pillar, onOpen, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onOpen}
      className="group relative min-h-[18rem] overflow-hidden rounded-[2rem] border p-6 text-left shadow-[0_24px_60px_rgba(54,39,22,0.12)] transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_36px_80px_rgba(54,39,22,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b6834e]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f4ee] sm:min-h-[20rem] sm:p-7"
      style={{
        backgroundImage: `${pillar.theme.tileGlow}, ${pillar.theme.tileGlowAccent}, ${pillar.theme.tileBackground}`,
        borderColor: pillar.theme.borderColor,
        color: pillar.theme.accentColor,
      }}
      aria-label={`Open ${pillar.name} details`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)]" />
      <div className="pointer-events-none absolute right-[-1.2rem] top-[-1rem] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.52),transparent_72%)] blur-lg transition duration-300 group-hover:scale-110 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.12))]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em]">
              <span>{pillar.number}</span>
              <span className="h-1 w-1 rounded-full opacity-[0.65]" style={{ backgroundColor: pillar.theme.accentColor }} />
              <span className="opacity-[0.85]">{pillar.label}</span>
            </div>

            <h3
              className="max-w-[11ch] text-[clamp(1.8rem,3.4vw,2.85rem)] font-semibold leading-[0.96] tracking-[-0.04em] transition duration-300 group-hover:translate-x-1"
              style={{ color: pillar.theme.titleColor }}
            >
              {pillar.name}
            </h3>
          </div>

          <span
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.45)] bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white/30"
            style={{ color: pillar.theme.indicatorColor }}
          >
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </span>
        </div>

        <div className="mt-auto pt-10">
          <p className="max-w-[19rem] text-[0.98rem] leading-7" style={{ color: pillar.theme.bodyColor }}>
            {pillar.teaser}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function PillarAccordionSection({ pillars = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const triggerRefs = useRef([]);

  if (!pillars.length) {
    return null;
  }

  const enhancedPillars = pillars.map((pillar, index) => {
    const theme = pillarThemes[index % pillarThemes.length];

    return {
      ...pillar,
      theme,
      teaser: theme.teaser,
      number: String(index + 1).padStart(2, '0'),
      includes: (pillar.whatWeDo?.length ? pillar.whatWeDo : pillar.deliverables).slice(0, 4),
    };
  });

  const activePillar = activeIndex === null ? null : enhancedPillars[activeIndex];

  const closeModal = () => {
    const focusIndex = activeIndex;
    setActiveIndex(null);

    if (focusIndex !== null) {
      window.requestAnimationFrame(() => {
        triggerRefs.current[focusIndex]?.focus();
      });
    }
  };

  return (
    <>
      <section className="relative overflow-hidden border-y border-[rgba(17,17,16,0.06)] bg-[#f8f4ee] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(198,153,91,0.14),transparent_18%),radial-gradient(circle_at_85%_0%,rgba(126,97,64,0.08),transparent_24%),linear-gradient(180deg,#fdfbf7_0%,#f6efe6_56%,#fbf8f2_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,16,0.018)_1px,transparent_1px),linear-gradient(rgba(17,17,16,0.014)_1px,transparent_1px)] bg-[length:42px_42px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.16),transparent_90%)]" />
        <div className="pointer-events-none absolute left-[-4rem] top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.62),transparent_70%)] blur-2xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[rgba(138,90,34,0.12)] bg-white/55 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#8a5a22] shadow-[0_10px_30px_rgba(75,54,26,0.06)]">
              The Four Pillars
            </span>
            <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[#171411]">
              Four high-value service pillars, designed as one growth system.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-8 text-[#4e453b] sm:text-[1.08rem]">
              Each pillar solves a different commercial constraint, from strategic direction to reporting
              clarity. Select a tile to open the finer detail behind the work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {enhancedPillars.map((pillar, index) => (
              <PillarTile
                key={pillar.slug}
                pillar={pillar}
                onOpen={() => setActiveIndex(index)}
                buttonRef={(node) => {
                  triggerRefs.current[index] = node;
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <PillarModal pillar={activePillar} onClose={closeModal} />
    </>
  );
}
