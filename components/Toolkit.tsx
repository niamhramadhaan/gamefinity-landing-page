import Reveal from './Reveal'
import { C, F, R, MAX_W } from './theme'

const GamesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 13H14M12 11V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="21" cy="14" r="1.4" fill="currentColor" />
    <circle cx="24" cy="17" r="1.4" fill="#378ADD" />
  </svg>
)
const CinemaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M13 12L20 16L13 20V12Z" fill="currentColor" />
  </svg>
)
const ChattoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M6 9C6 7.34 7.34 6 9 6H23C24.66 6 26 7.34 26 9V17C26 18.66 24.66 20 23 20H14L8 25V20C6.9 20 6 19.1 6 18V9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="13" r="1.3" fill="currentColor" />
    <circle cx="16" cy="13" r="1.3" fill="#378ADD" />
    <circle cx="20" cy="13" r="1.3" fill="currentColor" />
  </svg>
)

function Chips({ items, onDark = false }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map(t => (
        <span key={t} style={{
          fontFamily: F.body,
          fontSize: '12.5px',
          fontWeight: 500,
          color: onDark ? C.onDark : C.slate,
          border: `1px solid ${onDark ? C.lineOnDark : C.line}`,
          borderRadius: R.tag,
          padding: '5px 12px',
        }}>
          {t}
        </span>
      ))}
    </div>
  )
}

function GamesMockup() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${C.lineOnDark}`,
      borderRadius: R.card,
      overflow: 'hidden',
    }}>
      <div style={{ padding: '10px 14px', borderBottom: `1px solid ${C.lineOnDark}`, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <span style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', marginLeft: 8 }} />
      </div>
      <svg width="100%" viewBox="0 0 440 220" fill="none" aria-hidden="true" style={{ display: 'block' }}>
        <rect width="440" height="220" fill="rgba(255,255,255,0.02)" />
        <rect x="20" y="20" width="78" height="60" rx="6" fill="rgba(55,138,221,0.18)" />
        <rect x="112" y="20" width="78" height="60" rx="6" fill="rgba(55,138,221,0.12)" />
        <rect x="204" y="20" width="78" height="60" rx="6" fill="rgba(55,138,221,0.22)" />
        <rect x="296" y="20" width="78" height="60" rx="6" fill="rgba(55,138,221,0.09)" />
        <rect x="372" y="20" width="48" height="60" rx="6" fill="rgba(55,138,221,0.14)" />
        <rect x="20" y="96" width="78" height="60" rx="6" fill="rgba(55,138,221,0.1)" />
        <rect x="112" y="96" width="78" height="60" rx="6" fill="rgba(55,138,221,0.2)" />
        <rect x="204" y="96" width="78" height="60" rx="6" fill="rgba(55,138,221,0.14)" />
        <rect x="296" y="96" width="78" height="60" rx="6" fill="rgba(55,138,221,0.17)" />
        <rect x="372" y="96" width="48" height="60" rx="6" fill="rgba(55,138,221,0.11)" />
        <rect x="20" y="172" width="78" height="28" rx="6" fill="rgba(255,255,255,0.06)" />
        <rect x="112" y="172" width="78" height="28" rx="6" fill="rgba(255,255,255,0.04)" />
        <rect x="204" y="172" width="78" height="28" rx="6" fill="rgba(255,255,255,0.05)" />
      </svg>
    </div>
  )
}

function CinemaMockup() {
  return (
    <div style={{
      background: 'rgba(24,95,165,0.04)',
      border: `1px solid ${C.line}`,
      borderRadius: R.card,
      overflow: 'hidden',
    }}>
      <svg width="100%" viewBox="0 0 400 240" fill="none" aria-hidden="true" style={{ display: 'block' }}>
        <rect width="400" height="240" fill="rgba(24,95,165,0.02)" />
        <rect x="24" y="20" width="100" height="200" rx="12" fill="rgba(24,95,165,0.08)" stroke={C.line} strokeWidth="1" />
        <rect x="28" y="24" width="92" height="192" rx="10" fill={C.white} />
        <rect x="28" y="24" width="92" height="40" rx="10" fill="rgba(24,95,165,0.06)" />
        <rect x="36" y="74" width="76" height="6" rx="3" fill="rgba(4,44,83,0.08)" />
        <rect x="36" y="86" width="52" height="4" rx="2" fill="rgba(4,44,83,0.05)" />
        <rect x="36" y="100" width="76" height="80" rx="6" fill="rgba(55,138,221,0.08)" />
        <rect x="148" y="20" width="100" height="200" rx="12" fill="rgba(24,95,165,0.08)" stroke={C.line} strokeWidth="1" />
        <rect x="152" y="24" width="92" height="192" rx="10" fill={C.white} />
        <rect x="152" y="24" width="92" height="56" rx="10" fill="rgba(55,138,221,0.1)" />
        <rect x="160" y="90" width="76" height="6" rx="3" fill="rgba(4,44,83,0.08)" />
        <rect x="160" y="102" width="52" height="4" rx="2" fill="rgba(4,44,83,0.05)" />
        <rect x="160" y="116" width="76" height="64" rx="6" fill="rgba(55,138,221,0.06)" />
        <rect x="272" y="20" width="100" height="200" rx="12" fill="rgba(24,95,165,0.08)" stroke={C.line} strokeWidth="1" />
        <rect x="276" y="24" width="92" height="192" rx="10" fill={C.white} />
        <rect x="276" y="24" width="92" height="48" rx="10" fill="rgba(24,95,165,0.07)" />
        <rect x="284" y="82" width="76" height="6" rx="3" fill="rgba(4,44,83,0.08)" />
        <rect x="284" y="94" width="64" height="4" rx="2" fill="rgba(4,44,83,0.05)" />
        <rect x="284" y="108" width="76" height="72" rx="6" fill="rgba(55,138,221,0.07)" />
      </svg>
    </div>
  )
}

function ChattoMockup() {
  return (
    <div style={{
      background: 'rgba(24,95,165,0.04)',
      border: `1px solid ${C.line}`,
      borderRadius: R.card,
      overflow: 'hidden',
    }}>
      <svg width="100%" viewBox="0 0 400 240" fill="none" aria-hidden="true" style={{ display: 'block' }}>
        <rect width="400" height="240" fill="rgba(24,95,165,0.02)" />
        <rect x="120" y="12" width="160" height="216" rx="20" fill={C.white} stroke={C.line} strokeWidth="1" />
        <rect x="132" y="36" width="136" height="18" rx="9" fill="rgba(4,44,83,0.06)" />
        <rect x="156" y="66" width="88" height="16" rx="8" fill="rgba(55,138,221,0.1)" />
        <rect x="132" y="92" width="80" height="16" rx="8" fill="rgba(4,44,83,0.04)" />
        <rect x="180" y="118" width="76" height="16" rx="8" fill="rgba(55,138,221,0.08)" />
        <rect x="132" y="144" width="96" height="16" rx="8" fill="rgba(4,44,83,0.04)" />
        <rect x="172" y="170" width="84" height="16" rx="8" fill="rgba(55,138,221,0.12)" />
        <rect x="132" y="200" width="136" height="20" rx="10" fill="rgba(4,44,83,0.04)" stroke={C.line} strokeWidth="0.75" />
      </svg>
    </div>
  )
}

function SupportMockup() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: `1px solid ${C.lineOnDark}`,
      borderRadius: R.card,
      overflow: 'hidden',
    }}>
      <div style={{ padding: '10px 14px', borderBottom: `1px solid ${C.lineOnDark}`, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <span style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', marginLeft: 8 }} />
      </div>
      <svg width="100%" viewBox="0 0 440 180" fill="none" aria-hidden="true" style={{ display: 'block' }}>
        <rect width="440" height="180" fill="rgba(255,255,255,0.02)" />
        <rect x="0" y="0" width="100" height="180" fill="rgba(255,255,255,0.03)" />
        <rect x="12" y="16" width="76" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
        <rect x="12" y="32" width="56" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="12" y="48" width="68" height="6" rx="3" fill="rgba(55,138,221,0.2)" />
        <rect x="12" y="64" width="48" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="12" y="80" width="60" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
        <rect x="120" y="16" width="120" height="10" rx="5" fill="rgba(55,138,221,0.15)" />
        <rect x="120" y="36" width="200" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="120" y="48" width="160" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
        <rect x="120" y="68" width="100" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
        <rect x="120" y="88" width="220" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="120" y="100" width="180" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
        <rect x="120" y="120" width="140" height="10" rx="5" fill="rgba(55,138,221,0.12)" />
        <rect x="120" y="140" width="200" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="120" y="152" width="160" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
      </svg>
    </div>
  )
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="10" cy="10" r="9" fill="rgba(55,138,221,0.16)" />
      <path d="M6 10.2L8.8 13L14 7.5" stroke={C.interactive} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SUPPORT_POINTS = [
  'A dedicated integration contact from day one',
  'Sandbox access before you sign anything',
  'Same-day response during integration',
]

function SupportCallout() {
  return (
    <Reveal style={{ marginTop: '72px', borderRadius: R.card, overflow: 'hidden' }}>
      <div style={{
        background: C.navy,
        padding: 'clamp(28px, 4vw, 44px)',
      }}>
        <div className="embed-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: '36px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: F.display, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: C.white, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.15 }}>
              Every integration gets a team behind it.
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {SUPPORT_POINTS.map(point => (
                <li key={point} style={{ display: 'flex', gap: '11px', fontFamily: F.body, fontSize: '15px', lineHeight: 1.5, color: C.onDark }}>
                  <Check /> <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <SupportMockup />
        </div>
      </div>
    </Reveal>
  )
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="blueprint" style={{ backgroundColor: C.offWhite, borderTop: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <Reveal style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.primary, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            The toolkit
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
            One engine. Three ways to keep people inside your app.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '18px', lineHeight: 1.6, color: C.slate, maxWidth: '54ch', margin: 0 }}>
            The same content stack that grew a nationwide community, broken into three modules you can embed on their own or run together.
          </p>
        </Reveal>

        {/* Featured: the one dark card that anchors the section */}
        <Reveal style={{ borderRadius: R.card, overflow: 'hidden', marginBottom: '24px' }}>
          <div className="lift" style={{
            background: C.navy,
            padding: 'clamp(24px, 3.4vw, 40px)',
          }}>
            <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ color: '#8FC0F0', display: 'flex' }}><GamesIcon /></span>
                </div>
                <h3 style={{ fontFamily: F.display, fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: C.white, letterSpacing: '-0.02em', margin: '0 0 14px', lineHeight: 1.15 }}>
                  20,000 instant titles, no install
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '15.5px', lineHeight: 1.65, color: C.onDark, maxWidth: '48ch', margin: '0 0 20px' }}>
                  Instant HTML5 games across 20+ genres. Unity, Cocos, and Laya run native, so players tap and play. No store, no install.
                </p>
                <div style={{ marginBottom: '22px' }}>
                  <Chips onDark items={['20+ genres', 'Unity / Cocos / Laya', 'Leaderboards + events']} />
                </div>
                <a href="https://mini-games.gamefinity.id" target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: F.body, fontSize: '14px', fontWeight: 600,
                  color: C.interactive, textDecoration: 'none',
                  transition: 'opacity 0.15s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Try Mini Games
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
              <GamesMockup />
            </div>
          </div>
        </Reveal>

        {/* Two light cards */}
        <div className="pair-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            {
              Icon: CinemaIcon, tag: 'Mini Cinema', title: 'Shortform drama, built for the scroll',
              body: 'Vertical, mobile-first entertainment built for attention. Autoplay, cliffhangers, and binge trays keep the next episode one tap away.',
              chips: ['Vertical player', '30s to 15min', 'Watch-time analytics'],
              Mockup: CinemaMockup,
              href: 'https://mini-cinema.gamefinity.id',
            },
            {
              Icon: ChattoIcon, tag: 'Mini Chatto', title: 'A live social layer for any screen',
              body: 'Real-time rooms with voice, video, and an AI companion. Drop moderated, low-latency social into any app and let it scale.',
              chips: ['Voice + video rooms', 'AI personas', 'Moderation tooling'],
              Mockup: ChattoMockup,
              href: 'https://mini-chatto.gamefinity.id',
            },
          ].map(({ Icon, tag, title, body, chips, Mockup, href }) => (
            <Reveal key={tag} delay={1} style={{
              borderRadius: R.card,
              overflow: 'hidden',
            }}>
              <div className="lift" style={{
                background: C.white,
                border: `1px solid ${C.line}`,
                padding: 'clamp(22px, 2.6vw, 30px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}>
                <Mockup />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: C.primary, display: 'flex' }}><Icon /></span>
                </div>
                <h3 style={{ fontFamily: F.display, fontSize: '21px', fontWeight: 600, color: C.navy, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontFamily: F.body, fontSize: '14.5px', lineHeight: 1.6, color: C.slate, margin: 0 }}>{body}</p>
                <Chips items={chips} />
                <a href={href} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: F.body, fontSize: '14px', fontWeight: 600,
                  color: C.primary, textDecoration: 'none',
                  transition: 'opacity 0.15s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Try {tag}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <SupportCallout />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lift { transition: border-color 0.18s ease; }
        @media (hover: hover) and (pointer: fine) {
          .lift { transition: transform 0.18s ease, border-color 0.18s ease; }
          .lift:hover { transform: translateY(-4px); }
        }
        @media (max-width: 860px) {
          .feat-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .pair-grid { grid-template-columns: 1fr !important; }
          .embed-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      ` }} />
    </section>
  )
}
