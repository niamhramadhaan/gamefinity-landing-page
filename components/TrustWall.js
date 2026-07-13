import { useState } from 'react'
import Reveal from './Reveal'
import { spotHandlers, Spot } from './interactions'
import CountUp from './CountUp'
import { C, F, R, MAX_W } from './theme'

const figures = [
  { value: 1.2, decimals: 1, suffix: 'M+', label: 'Monthly visitors' },
  { value: 40, decimals: 0, suffix: 'K+', label: 'Elite Squad members' },
  { value: 8.7, decimals: 1, suffix: 'M', label: 'Engagements a month' },
  { value: 9, decimals: 0, suffix: ' yrs', label: 'Building for Indonesian players' },
]

const CATEGORIES = [
  {
    label: 'Telco & finance',
    brands: [
      { name: 'Indosat', src: '/logos/indosat.svg' },
      { name: 'Telkomsel', src: '/logos/telkomsel.svg' },
      { name: 'XLSMART', src: '/logos/xlsmart.svg' },
      { name: 'AXIS', src: '/logos/axis.svg' },
      { name: 'Maybank', src: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_wordmark_Bank_Maybank_Indonesia.png' },
    ],
  },
  {
    label: 'Tech & venues',
    brands: [
      { name: 'Acer', src: '/logos/acer.svg' },
      { name: 'Edifier', src: '/logos/edifier.svg' },
      { name: 'Jungleland', src: 'https://jungleland.id/wp-content/uploads/2022/04/JUNGLELAND-RUGAH-SENTUL-1-120x99.png' },
      { name: 'Gopay Arena', src: '/logos/gopay.svg' },
      { name: 'Teraskota', src: 'https://graph.facebook.com/TeraskotaMall/picture?type=large' },
    ],
  },
  {
    label: 'Esports & community',
    brands: [
      { name: 'Republic of Games', src: null },
      { name: 'Urban Republic', src: 'https://eraspace.com/logo/urban-republic-desktop.svg' },
      { name: 'Nemesis', src: 'https://owcdn.net/img/68613fc1eb6be.png' },
      { name: 'Agres.id', src: 'https://res.cloudinary.com/dbuug9eey/image/upload/v1770717267/header/moxqj1anardjfhe7hwel.svg' },
      { name: 'FreeFire Indonesia', src: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Logo_of_Garena_Free_Fire.png' },
      { name: 'Battle of Guardians', src: null },
      { name: 'ESPL', src: 'https://espl.co/wp-content/uploads/2021/05/ESPL-TM-Logo-Final-2-white-words.png' },
    ],
  },
  {
    label: 'Game studios & platforms',
    brands: [
      { name: 'Steam', src: '/logos/steam.svg' },
      { name: 'Garena', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Garena.png' },
      { name: 'Tencent', src: '/logos/tencent.svg' },
      { name: 'Zepetto', src: 'https://www.zepetto.com/images/common/logo_zepetto.png' },
      { name: 'Megaxus', src: 'https://www.megaxus.com/v15/imgbar/images/navbar/logo.png' },
      { name: 'Point Blank', src: 'https://upload.wikimedia.org/wikipedia/en/5/57/Pointblanklogo.jpg' },
    ],
  },
]

function LogoTile({ name, src }) {
  const [failed, setFailed] = useState(!src)
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="spotlight logo-tile" data-tooltip={name} {...spotHandlers}>
      {!failed ? (
        <span className={`logo-chip${loaded ? ' is-loaded' : ''}`}>
          <img
            src={src}
            alt={`${name} logo`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        </span>
      ) : (
        <span className="logo-word">{name}</span>
      )}
      <Spot />
    </div>
  )
}

export default function TrustWall() {
  return (
    <section id="partners" style={{ backgroundColor: C.navy, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(56px, 8vw, 96px) 24px' }}>
        <Reveal style={{ marginBottom: 'clamp(40px, 5vw, 56px)' }}>
          <span style={{
            display: 'block',
            fontFamily: F.body,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: C.onDarkFaint,
            marginBottom: '10px',
          }}>
            Our Network
          </span>
          <h2 style={{
            fontFamily: F.display,
            fontSize: 'clamp(24px, 3.4vw, 36px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: C.white,
            margin: 0,
            maxWidth: '640px',
            textWrap: 'balance',
          }}>
            Trusted by innovators in gaming and digital business
          </h2>
        </Reveal>

        <Reveal delay={1} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {CATEGORIES.map(cat => (
            <div key={cat.label}>
              <span className="cat-label">{cat.label}</span>
              <div className="logo-row">
                {cat.brands.map(b => (
                  <LogoTile key={b.name} name={b.name} src={b.src} />
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={2} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginTop: 'clamp(40px, 5vw, 56px)',
          paddingTop: '32px',
          borderTop: `1px solid ${C.lineOnDark}`,
        }} className="network-figures">
          {figures.map(f => (
            <div key={f.label}>
              <CountUp
                value={f.value}
                decimals={f.decimals}
                suffix={f.suffix}
                className="tnum"
                style={{ display: 'block', fontFamily: F.display, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: C.white, lineHeight: 1 }}
              />
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.onDark, marginTop: '10px', lineHeight: 1.4 }}>{f.label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .logo-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }
        .cat-label {
          display: block;
          font-family: ${F.mono};
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 10px;
          user-select: none;
        }
        .logo-tile {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          min-width: 80px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.03);
          border-radius: ${R.card};
          transition: background 0.2s ease;
        }
        .logo-tile:hover { background: rgba(255,255,255,0.07); }
        .logo-tile[data-tooltip]::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 10px;
          background: rgba(0,0,0,0.88);
          color: #fff;
          font-family: ${F.body};
          font-size: 11.5px;
          font-weight: 500;
          white-space: nowrap;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.15s ease;
          letter-spacing: 0.01em;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 10;
        }
        .logo-tile[data-tooltip]:hover::after { opacity: 1; }
        .logo-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          padding: 6px 12px;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.18s ease;
        }
        .logo-chip.is-loaded { opacity: 1; }
        .logo-tile:hover .logo-chip.is-loaded { transform: translateY(-1px); }
        .logo-chip img { height: 20px; width: auto; max-width: 140px; object-fit: contain; display: block; filter: brightness(0) invert(1); opacity: 0.6; transition: opacity 0.2s ease; }
        .logo-tile:hover .logo-chip img { opacity: 1; }
        .logo-word {
          font-family: ${F.display};
          font-weight: 600;
          font-size: 12px;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.5);
          white-space: nowrap;
          transition: color 0.18s ease;
        }
        .logo-tile:hover .logo-word { color: rgba(255,255,255,0.85); }
        @media (max-width: 640px) {
          .logo-row { gap: 8px; }
          .cat-label { font-size: 10px; margin-bottom: 8px; }
          .logo-tile { padding: 8px 10px; min-width: 70px; }
          .logo-chip { height: 28px; padding: 4px 10px; }
          .logo-chip img { height: 16px; max-width: 100px; }
          .logo-word { font-size: 11px; }
          .network-figures { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 24px !important; }
        }
      ` }} />
    </section>
  )
}
