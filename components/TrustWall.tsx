import { useState } from 'react'
import Reveal from './Reveal'
import { C, F, R } from './theme'

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

function LogoTile({ name, src, index }: { name: string; src: string; index: number }) {
  const [failed, setFailed] = useState(!src)
  return (
    <div className="tw-logo-tile" data-tooltip={name} style={{ '--tw-i': index } as React.CSSProperties}>
      {!failed ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ height: '28px', width: 'auto', maxWidth: '88px', objectFit: 'contain', display: 'block' }}
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

export default function TrustWall() {
  return (
    <section className="dot-grid" style={{
      background: C.offWhite,
      borderTop: `1px solid ${C.line}`,
      padding: '40px 0',
    }}>
      <div style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <Reveal>
          <span style={{
            display: 'block',
            fontFamily: F.mono,
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: C.slateLight,
            marginBottom: '6px',
          }}>
            Trusted by innovators in gaming and digital business
          </span>
          <span style={{
            display: 'block',
            fontFamily: F.body,
            fontSize: '13px',
            color: C.slateLight,
            marginBottom: '14px',
            lineHeight: 1.5,
          }}>
            Gaming platforms, telcos, fintech, and brands building across Southeast Asia.
          </span>
        </Reveal>
        <Reveal delay={1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {PARTNER_LOGOS.map((b, i) => (
              <LogoTile key={b.name} name={b.name} src={b.src} index={i} />
            ))}
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tw-logo-tile {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 120px;
          height: 52px;
          padding: 12px 16px;
          background: rgba(4,44,83,0.06);
          border-radius: ${R.card};
          transition: background 0.18s ease-out, opacity 0.2s ease-out;
          cursor: default;
          opacity: 0;
        }
        .reveal.is-visible .tw-logo-tile {
          animation: twTileIn 0.35s ease-out calc(var(--tw-i, 0) * 40ms) forwards;
        }
        @keyframes twTileIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tw-logo-tile:hover { background: rgba(4,44,83,0.1); }
        .tw-logo-tile:hover img { opacity: 0.85; }
        .tw-logo-tile img { opacity: 0.55; transition: opacity 0.2s ease-out; }
        .tw-logo-tile[data-tooltip]::after {
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
          transition: opacity 0.15s ease-out;
          z-index: 10;
        }
        .tw-logo-tile[data-tooltip]:hover::after { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .tw-logo-tile { animation: none !important; opacity: 1; }
        }
      `}} />
    </section>
  )
}
