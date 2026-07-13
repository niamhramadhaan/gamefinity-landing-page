import Reveal from './Reveal'
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

const BillingMockup = () => (
  <div style={{
    background: 'rgba(4,44,83,0.04)',
    border: `1px solid ${C.line}`,
    borderRadius: R.card,
    overflow: 'hidden',
  }}>
    <svg width="100%" viewBox="0 0 440 180" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <rect width="440" height="180" fill="rgba(4,44,83,0.02)" />
      <rect x="160" y="24" width="120" height="132" rx="16" stroke={C.primary} strokeWidth="1.6" fill="rgba(24,95,165,0.04)" />
      <rect x="176" y="52" width="88" height="12" rx="4" fill="rgba(24,95,165,0.15)" />
      <rect x="186" y="76" width="68" height="8" rx="4" fill="rgba(24,95,165,0.08)" />
      <rect x="186" y="92" width="48" height="8" rx="4" fill="rgba(24,95,165,0.06)" />
      <rect x="176" y="120" width="88" height="28" rx="6" fill={C.primary} />
      <text x="220" y="138" textAnchor="middle" fill={C.white} fontSize="10" fontFamily="var(--font-mono)">PAY</text>
      <path d="M120 80 C110 70, 90 80, 80 70" stroke={C.interactive} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M120 92 C110 82, 85 92, 70 82" stroke={C.interactive} strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
      <path d="M320 80 C330 70, 350 80, 360 70" stroke={C.interactive} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M320 92 C330 82, 355 92, 370 82" stroke={C.interactive} strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
    </svg>
  </div>
)

const PublishingMockup = () => (
  <div style={{
    background: 'rgba(4,44,83,0.04)',
    border: `1px solid ${C.line}`,
    borderRadius: R.card,
    overflow: 'hidden',
  }}>
    <svg width="100%" viewBox="0 0 440 180" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <rect width="440" height="180" fill="rgba(4,44,83,0.02)" />
      <circle cx="220" cy="90" r="56" stroke={C.primary} strokeWidth="1.6" fill="rgba(24,95,165,0.04)" />
      <ellipse cx="220" cy="90" rx="24" ry="56" stroke={C.primary} strokeWidth="1" opacity="0.4" />
      <line x1="164" y1="72" x2="276" y2="72" stroke={C.primary} strokeWidth="1" opacity="0.3" />
      <line x1="164" y1="108" x2="276" y2="108" stroke={C.primary} strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="74" r="6" fill={C.interactive} opacity="0.5" />
      <circle cx="244" cy="82" r="5" fill={C.primary} opacity="0.4" />
      <circle cx="216" cy="104" r="4.5" fill={C.interactive} opacity="0.35" />
      <circle cx="100" cy="50" r="3" fill={C.primary} opacity="0.15" />
      <circle cx="340" cy="130" r="3" fill={C.primary} opacity="0.15" />
      <circle cx="80" cy="140" r="2" fill={C.interactive} opacity="0.1" />
      <circle cx="360" cy="40" r="2" fill={C.interactive} opacity="0.1" />
    </svg>
  </div>
)

const MarketingMockup = () => (
  <div style={{
    background: 'rgba(4,44,83,0.04)',
    border: `1px solid ${C.line}`,
    borderRadius: R.card,
    overflow: 'hidden',
  }}>
    <svg width="100%" viewBox="0 0 440 180" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <rect width="440" height="180" fill="rgba(4,44,83,0.02)" />
      <circle cx="220" cy="90" r="28" stroke={C.primary} strokeWidth="1.6" fill="rgba(24,95,165,0.06)" />
      <circle cx="220" cy="90" r="48" stroke={C.primary} strokeWidth="1" opacity="0.3" fill="none" />
      <circle cx="220" cy="90" r="68" stroke={C.primary} strokeWidth="0.8" opacity="0.15" fill="none" />
      <path d="M210 82 L230 82 L226 76 L234 76 L222 94 L226 88 L218 88 Z" fill={C.primary} opacity="0.6" />
      <circle cx="150" cy="60" r="5" fill={C.interactive} opacity="0.3" />
      <circle cx="290" cy="120" r="4" fill={C.primary} opacity="0.25" />
      <circle cx="130" cy="130" r="3" fill={C.interactive} opacity="0.15" />
      <circle cx="310" cy="55" r="3" fill={C.primary} opacity="0.15" />
      <line x1="150" y1="60" x2="220" y2="90" stroke={C.interactive} strokeWidth="0.6" opacity="0.2" />
      <line x1="290" y1="120" x2="220" y2="90" stroke={C.primary} strokeWidth="0.6" opacity="0.15" />
    </svg>
  </div>
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
    Mockup: BillingMockup,
    title: 'Direct Carrier Billing',
    body: 'Let users pay with mobile credit. In a market where 97.4M adults are unbanked but 297M use mobile credit, carrier billing unlocks transactions cards and wallets cannot.',
    chips: ['97.4M unbanked', '297M credit users', '6 telco partners'],
  },
  {
    Icon: GlobeIcon,
    Mockup: PublishingMockup,
    title: 'App Publishing Partner',
    body: 'End-to-end market entry for global games and entertainment apps. We handle distribution agreements, IP registration, localization, and payment integration.',
    chips: ['Market entry', 'Distribution', 'IP registration', 'Localization'],
  },
  {
    Icon: MegaphoneIcon,
    Mockup: MarketingMockup,
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
          {cards.map(({ Icon, Mockup, title, body, chips }) => (
            <Reveal key={title} delay={1} style={{ borderRadius: R.card, overflow: 'hidden' }}>
              <div className="lift" style={{
                background: C.white,
                border: `1px solid ${C.line}`,
                padding: 'clamp(22px, 2.6vw, 30px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                height: '100%',
              }}>
                <Mockup />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: C.primary, display: 'flex' }}><Icon /></span>
                </div>
                <h3 style={{ fontFamily: F.display, fontSize: '21px', fontWeight: 600, color: C.navy, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontFamily: F.body, fontSize: '14.5px', lineHeight: 1.6, color: C.slate, margin: 0, flex: 1 }}>{body}</p>
                <Chips items={chips} />
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
          right: 0;
          top: 35%;
          transform: translateY(-50%);
          width: 40%;
          height: 80%;
          opacity: 0.10;
          background-image: url('/indonesia-map.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          pointer-events: none;
        }
        @media (max-width: 860px) {
          .growth-grid { grid-template-columns: 1fr !important; }
          .growth-bg::before { width: 70%; right: -10%; opacity: 0.07; }
        }
      ` }} />
    </section>
  )
}
