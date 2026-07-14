import { useState } from 'react'
import Reveal from './Reveal'
import CountUp from './CountUp'
import ProductGallery from './ProductGallery'
import { C, F, R, MAX_W } from './theme'

const FINLOGO_CDN = 'https://cdn.jsdelivr.net/npm/idn-finlogos@2/dist/icons'

type HoveredStat = 'products' | 'payments' | null

const PRODUCTS = [
  { name: 'Mobile Legends', slug: '' },
  { name: 'Free Fire', slug: '' },
  { name: 'PUBG Mobile', slug: '' },
  { name: 'Steam', slug: 'steam' },
  { name: 'Google Play', slug: 'google-play' },
  { name: 'Netflix', slug: 'netflix' },
  { name: 'Spotify', slug: 'spotify' },
  { name: 'Telkomsel', slug: 'telkomsel' },
  { name: 'XL', slug: 'xl' },
  { name: 'Axis', slug: 'axis' },
  { name: 'Smartfren', slug: 'smartfren' },
  { name: 'Tri', slug: 'tri' },
]

const PAYMENTS = [
  { name: 'DANA', slug: 'dana' },
  { name: 'OVO', slug: 'ovo' },
  { name: 'GoPay', slug: 'gopay' },
  { name: 'ShopeePay', slug: 'shopeepay' },
  { name: 'QRIS', slug: 'qris' },
  { name: 'Telkomsel', slug: 'telkomsel' },
  { name: 'Indosat', slug: '' },
  { name: 'XL', slug: 'xl' },
  { name: 'Axis', slug: 'axis' },
  { name: 'Smartfren', slug: 'smartfren' },
  { name: 'Tri', slug: 'tri' },
  { name: 'BCA', slug: 'bca' },
  { name: 'BRI', slug: 'bri' },
  { name: 'BSI', slug: 'bsi' },
  { name: 'Mandiri', slug: 'mandiri' },
  { name: 'Permata', slug: 'permata' },
]

function LogoPill({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(!slug)
  return (
    <div className="gs-pay-logo" data-tooltip={name}>
      {!failed ? (
        <img
          src={`${FINLOGO_CDN}/${slug}.svg`}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ height: '20px', width: 'auto', maxWidth: '72px', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1) opacity(0.7)' }}
        />
      ) : (
        <span style={{
          fontFamily: F.mono,
          fontWeight: 600,
          fontSize: '10px',
          letterSpacing: '0.02em',
          color: 'rgba(255,255,255,0.5)',
          whiteSpace: 'nowrap',
        }}>
          {name}
        </span>
      )}
    </div>
  )
}

export default function GamefinityStore() {
  const [hovered, setHovered] = useState<HoveredStat>(null)

  const showProducts = hovered === 'products'
  const label = showProducts ? 'Product catalog' : 'Accepted payments'

  return (
    <section className="dot-grid" style={{ backgroundColor: C.navy, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(56px, 8vw, 88px) 24px' }}>
        <div className="gs-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 5vw, 72px)',
          alignItems: 'start',
        }}>
          {/* Left column — text, stats, pills */}
          <div>
            <Reveal>
              <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.interactive, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                From the shop
              </span>
              <h2 style={{
                fontFamily: F.display,
                fontSize: 'clamp(26px, 3.8vw, 40px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: C.white,
                margin: '16px 0 14px',
                textWrap: 'balance',
              }}>
                A digital storefront, running since 2020.
              </h2>
              <p style={{ fontFamily: F.body, fontSize: '16px', lineHeight: 1.65, color: C.onDark, maxWidth: '52ch', margin: 0 }}>
                Game currencies, mobile credit, and entertainment vouchers — 1,000+ products, moving daily.
              </p>
            </Reveal>

            {/* Stat cards */}
            <Reveal delay={1} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginTop: 'clamp(28px, 3vw, 40px)',
            }}>
              {/* Digital products — hoverable */}
              <div
                className={`gs-stat-card ${showProducts ? 'gs-stat-active' : ''}`}
                onMouseEnter={() => setHovered('products')}
                onMouseLeave={() => setHovered(null)}
              >
                <CountUp value={1000} decimals={0} suffix="+" className="tnum"
                  style={{ display: 'block', fontFamily: F.display, fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 600, color: C.interactive, lineHeight: 1 }} />
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.onDark, marginTop: '8px', lineHeight: 1.4 }}>Digital products</div>
              </div>

              {/* Payment methods — hoverable */}
              <div
                className={`gs-stat-card ${hovered === 'payments' ? 'gs-stat-active' : ''}`}
                onMouseEnter={() => setHovered('payments')}
                onMouseLeave={() => setHovered(null)}
              >
                <CountUp value={16} decimals={0} suffix="" className="tnum"
                  style={{ display: 'block', fontFamily: F.display, fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 600, color: C.interactive, lineHeight: 1 }} />
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.onDark, marginTop: '8px', lineHeight: 1.4 }}>Payment methods</div>
              </div>

              {/* Year established — hoverable for glow */}
              <div
                className="gs-stat-card"
                onMouseEnter={() => setHovered(null)}
              >
                <CountUp value={2020} decimals={0} suffix="" className="tnum"
                  style={{ display: 'block', fontFamily: F.display, fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 600, color: C.interactive, lineHeight: 1 }} />
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.onDark, marginTop: '8px', lineHeight: 1.4 }}>Year established</div>
              </div>
            </Reveal>

            {/* Dynamic pills — stacked crossfade */}
            <Reveal delay={2} style={{ marginTop: 'clamp(24px, 3vw, 36px)' }}>
              <span style={{
                fontFamily: F.mono, fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '10px',
                transition: 'color 0.2s ease-out',
              }}>
                {label}
              </span>
              <div className="gs-pills-wrap">
                {/* Payment pills — visible by default */}
                <div className={`gs-pills-layer ${showProducts ? 'gs-pills-hidden' : 'gs-pills-visible'}`}>
                  {PAYMENTS.map((p) => (
                    <LogoPill key={p.name} name={p.name} slug={p.slug} />
                  ))}
                </div>
                {/* Product pills — hidden by default */}
                <div className={`gs-pills-layer ${showProducts ? 'gs-pills-visible' : 'gs-pills-hidden'}`}>
                  {PRODUCTS.map((p) => (
                    <LogoPill key={p.name} name={p.name} slug={p.slug} />
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right column — product gallery animation */}
          <div>
            <Reveal delay={1}>
              <ProductGallery />
            </Reveal>
            <Reveal delay={2} style={{ marginTop: 'clamp(16px, 2vw, 24px)', display: 'flex', justifyContent: 'center' }}>
              <a
                href="https://topup.gamefinity.id"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: F.body,
                  fontSize: '14px',
                  fontWeight: 600,
                  color: C.white,
                  background: 'transparent',
                  border: `1.5px solid ${C.lineOnDark}`,
                  borderRadius: R.btn,
                  padding: '11px 24px',
                  textDecoration: 'none',
                  transition: 'background 0.18s ease-out, border-color 0.18s ease-out, transform 0.16s ease-out',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.lineOnDark }}
                onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                onMouseUp={e => { e.currentTarget.style.transform = 'none' }}
              >
                Visit the store
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gs-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid ${C.lineOnDark};
          border-radius: ${R.card};
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: default;
          transition: background 0.18s ease-out, border-color 0.18s ease-out, box-shadow 0.18s ease-out;
        }
        .gs-stat-card:hover, .gs-stat-active {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 0 20px rgba(55,138,221,0.08);
        }
        .gs-pills-wrap {
          position: relative;
          min-height: 46px;
        }
        .gs-pills-layer {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          opacity: 0;
          transform: translateY(6px);
          pointer-events: none;
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .gs-pills-layer.gs-pills-visible {
          opacity: 1;
          transform: translateY(0);
          position: relative;
          pointer-events: auto;
        }
        .gs-pills-layer.gs-pills-hidden {
          opacity: 0;
          transform: translateY(6px);
          pointer-events: none;
        }
        .gs-pay-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          height: 40px;
          padding: 8px 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          cursor: default;
          transition: background 0.18s ease-out, border-color 0.18s ease-out;
          position: relative;
        }
        .gs-pay-logo:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.15);
        }
        .gs-pay-logo img { opacity: 0.65; transition: opacity 0.2s ease-out; }
        .gs-pay-logo:hover img { opacity: 0.9; }
        .gs-pay-logo[data-tooltip]::after {
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
        .gs-pay-logo:hover[data-tooltip]::after { opacity: 1; }
        @media (max-width: 860px) {
          .gs-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  )
}
