import { useState } from 'react'
import { C, F, R } from './theme'
import CountUp from './CountUp'
import { spotHandlers, Spot } from './interactions'
import PlaceholderImage from './PlaceholderImage'

const PARTNER_LOGOS = [
  { name: 'Indosat', src: '/logos/indosat.svg' },
  { name: 'Telkomsel', src: '/logos/telkomsel.svg' },
  { name: 'XLSMART', src: '/logos/xlsmart.svg' },
  { name: 'AXIS', src: '/logos/axis.svg' },
  { name: 'Maybank', src: '/logos/maybank.png' },
  { name: 'Acer', src: '/logos/acer.svg' },
  { name: 'Edifier', src: '' },
  { name: 'Jungleland', src: '' },
  { name: 'Gopay Arena', src: '/logos/gopay.svg' },
  { name: 'Teraskota', src: '/logos/teraskota.png' },
  { name: 'Republic of Games', src: '' },
  { name: 'Urban Republic', src: '/logos/urbanrepublic.svg' },
  { name: 'Nemesis', src: '/logos/nemesis.png' },
  { name: 'Agres.id', src: '/logos/agres.svg' },
  { name: 'FreeFire Indonesia', src: '/logos/freefire.png' },
  { name: 'Battle of Guardians', src: '' },
  { name: 'ESPL', src: '/logos/espl.png' },
  { name: 'Steam', src: '/logos/steam.svg' },
  { name: 'Garena', src: '/logos/garena.svg' },
  { name: 'Tencent', src: '/logos/tencent.svg' },
  { name: 'Zepetto', src: '/logos/zepetto.svg' },
  { name: 'Megaxus', src: '/logos/megaxus.png' },
  { name: 'Point Blank', src: '/logos/pointblank.png' },
]

function CompactLogoTile({ name, src }) {
  const [failed, setFailed] = useState(!src)
  return (
    <div className="compact-logo-tile" data-tooltip={name} style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: '120px',
      height: '52px',
      padding: '12px 16px',
      background: 'rgba(4,44,83,0.06)',
      borderRadius: R.card,
      transition: 'background 0.2s ease',
      cursor: 'default',
    }}>
      {!failed ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ height: '28px', width: 'auto', maxWidth: '88px', objectFit: 'contain', display: 'block', opacity: 0.55, transition: 'opacity 0.3s ease' }}
        />
      ) : (
        <span style={{
          fontFamily: F.display,
          fontWeight: 600,
          fontSize: '11px',
          letterSpacing: '-0.01em',
          color: 'rgba(4,44,83,0.5)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '88px',
        }}>
          {name}
        </span>
      )}
    </div>
  )
}

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
              Indonesia's gaming community
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
            The platform Indonesian gamers{' '}
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
            Seven years in the market. One integration for any app that wants to keep players engaged.
          </p>

          <div className="animate-fade-in-up animation-delay-300" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', opacity: 0 }}>
            <a href="#toolkit" className="btn btn--primary">
              Explore the toolkit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#how-we-got-here" className="btn btn--secondary">
              Our story
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
            <Stat className="m-c" value={7} decimals={0} suffix="+ Years" label="Building for Indonesian players" />
            <Photo
              className="m-d"
              seed="gf-hero-players-live"
              alt="Young Indonesian gamers competing at a live Gamefinity event"
            />
            <Stat className="m-e" value={1.2} decimals={1} suffix="M+" label="Monthly active users across platforms" />
          </div>
        </div>

        <div style={{
          gridColumn: '1 / -1',
          borderTop: `1px solid ${C.line}`,
          paddingTop: '24px',
        }}>
          <span style={{
            display: 'block',
            fontFamily: F.mono,
          fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: C.slateLight,
            marginBottom: '12px',
          }}>
            Trusted by innovators in gaming and digital business
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {PARTNER_LOGOS.map(b => (
              <CompactLogoTile key={b.name} name={b.name} src={b.src} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .compact-logo-tile:hover { background: rgba(4,44,83,0.1); }
        .compact-logo-tile:hover img { opacity: 0.85 !important; }
        .compact-logo-tile[data-tooltip]::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 8px;
          background: rgba(0,0,0,0.85);
          color: #fff;
          font-family: ${F.body};
          font-size: 10.5px;
          font-weight: 500;
          white-space: nowrap;
          border-radius: 5px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.15s ease;
          z-index: 10;
        }
        .compact-logo-tile[data-tooltip]:hover::after { opacity: 1; }
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
