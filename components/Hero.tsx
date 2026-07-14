
import { C, F, R } from './theme'
import CountUp from './CountUp'
import { spotHandlers, Spot } from './interactions'
import PlaceholderImage from './PlaceholderImage'



// Community proof mosaic: real community/event photography (placeholder stand-ins,
// navy-duotone) interleaved with two real stat tiles. Grounds the headline claim.
function Photo({ seed, alt, caption = '', className }) {
  return (
    <PlaceholderImage
      seed={seed}
      alt={alt}
      className={className}
      style={{
        borderRadius: R.card,
        border: `1px solid ${C.line}`,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '14px',
      }}
    >
      {caption && (
        <span style={{ position: 'relative', fontFamily: F.mono, fontSize: '10px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
          {caption}
        </span>
      )}
    </PlaceholderImage>
  )
}

function Stat({ value, decimals, suffix, label, className }) {
  return (
    <div className={`spotlight ${className}`} {...spotHandlers} style={{
      background: C.white,
      border: `1px solid ${C.line}`,
      borderRadius: R.card,
      padding: '18px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <CountUp
        value={value}
        decimals={decimals}
        suffix={suffix}
        className="tnum"
        style={{ display: 'block', fontFamily: F.display, fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 600, color: C.primary, lineHeight: 1 }}
      />
      <div style={{ fontFamily: F.body, fontSize: '12px', color: C.slateLight, marginTop: '8px', lineHeight: 1.35 }}>{label}</div>
      <Spot />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="blueprint" style={{
      minHeight: '100dvh',
      backgroundColor: C.neutral,
      position: 'relative',
      paddingTop: '72px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="hero-grid" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '72px 24px 88px',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: '64px',
        alignItems: 'center',
        width: '100%',
      }}>
        <div className="hero-text">
          <div className="animate-fade-in-up" style={{ opacity: 0 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: F.mono,
              fontSize: '11px',
              fontWeight: 500,
              color: C.primary,
              background: 'rgba(24,95,165,0.09)',
              borderRadius: R.tag,
              padding: '6px 12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              Gaming & entertainment across Asia
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-100" style={{
            fontFamily: F.display,
            fontSize: 'clamp(30px, 3.7vw, 46px)',
            fontWeight: 500,
            lineHeight: 1.14,
            letterSpacing: '-0.02em',
            color: C.navy,
            marginBottom: '22px',
            textWrap: 'balance',
            opacity: 0,
          }}>
            The entertainment engine gamers{' '}
            <span style={{ color: C.primary, fontWeight: 600 }}>already trust.</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200" style={{
            fontFamily: F.body,
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: C.slate,
            marginBottom: '36px',
            maxWidth: '480px',
            opacity: 0,
          }}>
            A gaming media and creative lab — building the tools that keep players inside your app.
          </p>

          <div className="animate-fade-in-up animation-delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '14px', opacity: 0 }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#news" className="btn btn--secondary">
                For Creators
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#toolkit" className="btn btn--primary">
                For Business
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <a href="#how-we-got-here" style={{
              fontFamily: F.body,
              fontSize: '13px',
              fontWeight: 500,
              color: C.slateLight,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.15s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = C.primary)}
              onMouseLeave={e => (e.currentTarget.style.color = C.slateLight)}
            >
              Our story
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in animation-delay-400" style={{ opacity: 0 }}>
          <div className="hero-mosaic">
            <Photo
              className="m-a"
              seed="gf-hero-elite-squad-stage"
              alt="The Gamefinity Elite Squad on stage at a national esports final"
              caption="Elite Squad, national finals"
            />
            <Photo
              className="m-b"
              seed="gf-hero-campus-tournament"
              alt="A packed campus esports tournament crowd in Indonesia"
            />
            <Stat className="m-c" value={7} decimals={0} suffix="+ Years" label="Building for gaming communities" />
            <Photo
              className="m-d"
              seed="gf-hero-players-live"
              alt="Young Indonesian gamers competing at a live Gamefinity event"
            />
            <Stat className="m-e" value={1.2} decimals={1} suffix="M+" label="Monthly active users across platforms" />
          </div>
        </div>


      </div>

      <style dangerouslySetInnerHTML={{ __html: `

        .btn {
          font-family: ${F.body};
          font-size: 15px;
          font-weight: 600;
          padding: 13px 24px;
          border-radius: ${R.btn};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.18s ease, color 0.18s ease, transform 0.1s ease, border-color 0.18s ease;
        }
        .btn--primary { color: ${C.white}; background: ${C.primary}; }
        .btn--primary:hover { background: ${C.navy}; }
        .btn--primary:active { transform: scale(0.98); }
        .btn--secondary { color: ${C.primary}; background: transparent; border: 1.5px solid ${C.primary}; }
        .btn--secondary:hover { background: rgba(24,95,165,0.06); }
        .btn--secondary:active { transform: scale(0.98); }

        .hero-mosaic {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(3, 158px);
          gap: 14px;
        }
        .hero-mosaic .m-a { grid-column: 1; grid-row: 1 / 3; }
        .hero-mosaic .m-b { grid-column: 2; grid-row: 1; }
        .hero-mosaic .m-c { grid-column: 2; grid-row: 2; }
        .hero-mosaic .m-d { grid-column: 1; grid-row: 3; }
        .hero-mosaic .m-e { grid-column: 2; grid-row: 3; }

        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .hero-visual { order: 2; }
          .hero-mosaic { grid-template-rows: repeat(3, 150px); }
        }
        @media (max-width: 480px) {
          .hero-mosaic { grid-template-rows: 148px 128px 128px; }
          .hero-mosaic .m-a { grid-column: 1 / -1; grid-row: 1; }
          .hero-mosaic .m-b { grid-column: 1; grid-row: 2; }
          .hero-mosaic .m-c { grid-column: 2; grid-row: 2; }
          .hero-mosaic .m-d { grid-column: 1; grid-row: 3; }
          .hero-mosaic .m-e { grid-column: 2; grid-row: 3; }
        }
      ` }} />
    </section>
  )
}
