import Link from 'next/link'
import { C, F, MAX_W } from './theme'

const columns = [
  {
    heading: 'Products',
    links: [
      { label: 'Mini Games', href: 'https://mini-games.gamefinity.id', external: true },
      { label: 'Mini Cinema', href: 'https://mini-cinema.gamefinity.id', external: true },
      { label: 'Mini Chatto', href: 'https://mini-chatto.gamefinity.id', external: true },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'The toolkit', href: '#toolkit' },
      { label: 'Our story', href: '#how-we-got-here' },
      { label: 'Partner with us', href: '#partner' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
    ],
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/gamefinity.id', d: 'M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5-1.2a.9.9 0 11-1.8 0 .9.9 0 011.8 0zM7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z' },
  { label: 'YouTube', href: 'https://youtube.com/@gamefinity', d: 'M10 9.2l5 2.8-5 2.8V9.2zM3.5 7.4A2.4 2.4 0 015.6 5.7C7.6 5.5 12 5.5 12 5.5s4.4 0 6.4.2a2.4 2.4 0 012.1 1.7c.3 1.5.3 4.6.3 4.6s0 3.1-.3 4.6a2.4 2.4 0 01-2.1 1.7c-2 .2-6.4.2-6.4.2s-4.4 0-6.4-.2a2.4 2.4 0 01-2.1-1.7C3.2 15.1 3.2 12 3.2 12s0-3.1.3-4.6z' },
  { label: 'X', href: 'https://x.com/gamefinity_id', d: 'M4 4l6.3 8.4L4.4 20H6l5.1-6 4.5 6H20l-6.6-8.8L19.4 4H18l-4.7 5.5L9.2 4H4z' },
]

const LinkItem = ({ link }) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" className="foot-link">{link.label}</a>
  ) : link.href.startsWith('#') ? (
    <a href={link.href} className="foot-link">{link.label}</a>
  ) : (
    <Link href={link.href} className="foot-link">{link.label}</Link>
  )

export default function Footer() {
  return (
    <>
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998,
        opacity: 0.028, mixBlendMode: 'overlay',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
        backgroundSize: '180px 180px',
      }} />
      <footer className="dot-grid circuit-bg" style={{ backgroundColor: C.navy, color: C.white, position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(56px, 7vw, 88px) 24px 40px' }}>
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: '48px', marginBottom: '56px' }}>
          <div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.08)" />
                <path d="M8 10L14 16L8 22" stroke={C.interactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 22H24" stroke={C.interactive} strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: F.display, fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em' }}>Gamefinity</span>
            </span>
            <p style={{ fontFamily: F.body, fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', maxWidth: '34ch', margin: '0 0 20px' }}>
              One entertainment engine for any app to embed: games, drama, and connection. Built with players, in Indonesia.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="foot-social">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map(col => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 style={{ fontFamily: F.mono, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.interactive, margin: '4px 0 16px' }}>
                {col.heading}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {col.links.map(link => (
                  <li key={link.label}><LinkItem link={link} /></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="foot-bottom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          paddingTop: '28px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <p className="tnum" style={{ fontFamily: F.mono, fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
            © {new Date().getFullYear()} PT Gamefinity Indonesia. All rights reserved.
          </p>
          <p style={{ fontFamily: F.mono, fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
            Jakarta, Indonesia
          </p>
        </div>
      </div>

      <style>{`
        .foot-link {
          font-family: ${F.body};
          font-size: 14px;
          color: rgba(255,255,255,0.68);
          text-decoration: none;
          transition: color 0.18s ease;
        }
        .foot-link:hover { color: ${C.white}; }
        .foot-social {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.06);
          transition: background 0.2s ease, color 0.2s ease, transform 0.1s ease;
        }
        .foot-social:hover { background: rgba(55,138,221,0.2); color: ${C.white}; }
        .foot-social:active { transform: scale(0.94); }
        @media (max-width: 760px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 36px 24px !important; }
          .foot-bottom { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
    </>
  )
}
