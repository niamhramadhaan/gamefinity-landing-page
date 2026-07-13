import Reveal from './Reveal'
import PlaceholderImage from './PlaceholderImage'
import { C, F, R, MAX_W } from './theme'

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="9" y="4" width="14" height="24" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <line x1="9" y1="8" x2="23" y2="8" stroke="currentColor" strokeWidth="1.2" />
    <line x1="9" y1="24" x2="23" y2="24" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16" cy="26.5" r="1" fill="currentColor" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="16" cy="16" rx="5" ry="11" stroke="currentColor" strokeWidth="1.2" />
    <line x1="5" y1="12" x2="27" y2="12" stroke="currentColor" strokeWidth="1.2" />
    <line x1="5" y1="20" x2="27" y2="20" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const MegaphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M8 13V22C8 23.1 8.9 24 10 24H12C13.1 24 14 23.1 14 22V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20H22C23.7 20 25 18.7 25 17V12C25 10.3 23.7 9 22 9H12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M8 17H5C3.9 17 3 16.1 3 15V12C3 10.9 3.9 10 5 10H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="27" cy="12" r="0.8" fill="currentColor" />
    <circle cx="27" cy="17" r="0.8" fill="currentColor" />
  </svg>
)

const Chips = ({ items }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {items.map(t => (
      <span key={t} style={{
        fontFamily: F.body,
        fontSize: '12.5px',
        fontWeight: 500,
        color: C.slate,
        border: `1px solid ${C.line}`,
        borderRadius: R.tag,
        padding: '5px 12px',
      }}>
        {t}
      </span>
    ))}
  </div>
)

const cards = [
  {
    Icon: PhoneIcon,
    seed: 'gf-growth-carrier-billing',
    title: 'Direct Carrier Billing',
    body: 'Let users pay with mobile credit. In a market where 97.4M adults are unbanked but 297M use mobile credit, carrier billing unlocks transactions cards and wallets cannot.',
    chips: ['97.4M unbanked', '297M credit users', '6 telco partners'],
  },
  {
    Icon: GlobeIcon,
    seed: 'gf-growth-app-publishing',
    title: 'App Publishing Partner',
    body: 'End-to-end market entry for global games and entertainment apps. We handle distribution agreements, IP registration, localization, and payment integration.',
    chips: ['Market entry', 'Distribution', 'IP registration', 'Localization'],
  },
  {
    Icon: MegaphoneIcon,
    seed: 'gf-growth-marketing-360',
    title: 'Marketing 360',
    body: 'Full-funnel growth from creator partnerships to community management. Talent House matching, content production, targeted campaigns, and engagement at scale.',
    chips: ['Creator matching', 'Content production', 'Targeted campaigns'],
  },
]

export default function GrowthSolutions() {
  return (
    <section id="market-entry" className="blueprint growth-bg" style={{ backgroundColor: C.offWhite, borderTop: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <Reveal style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.primary, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Growth
          </span>
          <h2 style={{
            fontFamily: F.display,
            fontSize: 'clamp(30px, 4.6vw, 48px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: C.navy,
            margin: '18px 0 18px',
            textWrap: 'balance',
          }}>
            Enter Indonesia. Grow with the market.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '18px', lineHeight: 1.6, color: C.slate, maxWidth: '54ch', margin: 0 }}>
            We help global companies reach Indonesian audiences through carrier billing, app publishing, and full-funnel marketing — built on the same community engine that powers Gamefinity.
          </p>
        </Reveal>

        <div className="growth-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
          {cards.map(({ Icon, seed, title, body, chips }) => (
            <Reveal key={title} delay={1} style={{ borderRadius: R.card, overflow: 'hidden' }}>
              <div className="lift" style={{
                background: C.white,
                border: `1px solid ${C.line}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <PlaceholderImage
                  seed={seed}
                  alt={title}
                  style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: 0 }}
                />
                <div style={{ padding: 'clamp(22px, 2.6vw, 30px)', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: C.primary, display: 'flex' }}><Icon /></span>
                  </div>
                  <h3 style={{ fontFamily: F.display, fontSize: '21px', fontWeight: 600, color: C.navy, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.2 }}>{title}</h3>
                  <p style={{ fontFamily: F.body, fontSize: '14.5px', lineHeight: 1.6, color: C.slate, margin: 0, flex: 1 }}>{body}</p>
                  <Chips items={chips} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .growth-bg {
          position: relative;
          overflow: hidden;
        }
        .growth-bg::before {
          content: '';
          position: absolute;
          right: -8%;
          top: 35%;
          transform: translateY(-50%);
          width: 65%;
          height: 120%;
          opacity: 0.18;
          background-image: url('https://i.postimg.cc/fTV3nXFs/pngfind-com-indonesia-map-png-5081439.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          pointer-events: none;
          filter: contrast(2.5) brightness(1.2);
          image-rendering: optimizeQuality;
        }
        @media (max-width: 860px) {
          .growth-grid { grid-template-columns: 1fr !important; }
          .growth-bg::before { width: 110%; right: -20%; opacity: 0.12; height: 100%; top: 30%; }
        }
      ` }} />
    </section>
  )
}
