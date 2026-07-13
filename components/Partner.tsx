import Reveal from './Reveal'
import { C, F, R, MAX_W } from './theme'

const trustPoints = [
  'One integration across three modules. Pick what fits your app.',
  'Revenue share on games, video, and live rooms.',
  'A team that has run this at community scale since 2017.',
]

export default function Partner() {
  return (
    <section id="partner" className="dot-grid partner-bg" style={{ borderTop: 'none' }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <div className="partner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <Reveal style={{}}>
            <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.interactive, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Partner with us
            </span>
            <h2 style={{
              fontFamily: F.display,
              fontSize: 'clamp(30px, 4.6vw, 48px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: C.white,
              margin: '18px 0 20px',
              textWrap: 'balance',
            }}>
              Put the engine to work in your app.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '17px', lineHeight: 1.65, color: C.onDark, maxWidth: '46ch', margin: '0 0 30px' }}>
              Tell us where you'd like more time-in-app. We'll show you what games, drama, or live chat could look like on your surfaces, and how the numbers work.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {trustPoints.map(t => (
                <li key={t} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontFamily: F.body, fontSize: '15px', color: 'rgba(255,255,255,0.88)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                    <path d="M4 10.4L8.2 14.5L16 6.5" stroke={C.interactive} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '36px' }}>
              <h3 style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 600, color: C.white, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
                Frequently asked
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[
                  { q: 'How does integration work?', a: 'One API call connects your app to games, video, and live chat modules. Most partners ship within 2–4 weeks.' },
                  { q: 'What apps do you work with?', a: 'Super apps, fintech, e-commerce, education, and entertainment apps with active daily users in Indonesia.' },
                  { q: 'What\'s the revenue model?', a: 'Revenue share across games, video, and live rooms. No upfront fees — we grow when you grow.' },
                  { q: 'Do you support non-Indonesian apps?', a: 'Yes. We help global companies localize, set up payments, and navigate distribution for the Indonesian market.' },
                ].map(({ q, a }) => (
                  <details key={q} style={{ borderBottom: `1px solid ${C.lineOnDark}` }}>
                    <summary style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.88)',
                      padding: '14px 0',
                      cursor: 'pointer',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      {q}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, transition: 'transform 0.2s ease' }}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <p style={{ fontFamily: F.body, fontSize: '13.5px', lineHeight: 1.6, color: C.onDark, margin: '0 0 14px', maxWidth: '40ch' }}>
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} style={{
            background: 'rgba(255,255,255,0.05)',
            border: `1px solid ${C.lineOnDark}`,
            borderRadius: R.card,
            padding: 'clamp(32px, 4vw, 48px)',
            textAlign: 'center',
          }}>
            <div style={{ width: '56px', height: '56px', borderRadius: R.btn, background: 'rgba(55,138,221,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.interactive} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: F.display, fontSize: 'clamp(22px, 2.8vw, 28px)', fontWeight: 500, color: C.white, margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              Let's build together
            </h3>
            <p style={{ fontFamily: F.body, fontSize: '15px', lineHeight: 1.6, color: C.onDark, maxWidth: '32ch', margin: '0 auto 28px' }}>
              Tell us about your app and what you'd like to add. We'll get back within two working days.
            </p>
            <a
              href="https://gamefinity.id/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: F.body,
                fontSize: '15px',
                fontWeight: 600,
                color: C.white,
                background: C.primary,
                padding: '14px 28px',
                borderRadius: R.btn,
                textDecoration: 'none',
                transition: 'background 0.18s ease, transform 0.1s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2270bd' }}
              onMouseLeave={e => { e.currentTarget.style.background = C.primary }}
            >
              Contact us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </Reveal>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-bg {
          position: relative;
          background-color: ${C.navy};
          background-image:
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cpath d='M0 20h12m16 0h12M20 0v12m0 16v12'/%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/g%3E%3C/svg%3E"),
            radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px, 24px 24px;
          background-position: 0 0, -1px -1px;
        }
        .partner-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 80% 90%, rgba(55,138,221,0.1), transparent 70%);
          pointer-events: none;
        }
        .partner-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(55,138,221,0.3) 40%, rgba(55,138,221,0.5) 50%, rgba(55,138,221,0.3) 60%, transparent);
        }
        @media (max-width: 860px) {
          .partner-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
        #partner details[open] summary svg { transform: rotate(180deg); }
        #partner details summary::-webkit-details-marker { display: none; }
        #partner details summary::marker { display: none; content: ''; }
      ` }} />
    </section>
  )
}
