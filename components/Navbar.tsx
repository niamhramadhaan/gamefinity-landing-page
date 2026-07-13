import { useState, useEffect } from 'react'
import Link from 'next/link'
import { C, F } from './theme'

const LogoSVG = () => (
  <img
    src="https://biz.gamefinity.id/assets/website-logo.svg"
    alt="Gamefinity"
    style={{ height: '32px', width: 'auto', display: 'block' }}
  />
)

// On-page destinations, plus the live product subdomains under a dropdown.
const sectionLinks = [
  { label: 'News', href: '#news', id: 'news' },
  { label: 'Our story', href: '#how-we-got-here', id: 'how-we-got-here' },
  { label: 'The toolkit', href: '#toolkit', id: 'toolkit' },
]

const productLinks = [
  { label: 'Mini Games', href: 'https://mini-games.gamefinity.id', note: '20K+ instant titles', color: '#6ee7b7' },
  { label: 'Mini Cinema', href: 'https://mini-cinema.gamefinity.id', note: 'bite-size drama', color: '#a78bfa' },
  { label: 'Mini Chatto', href: 'https://mini-chatto.gamefinity.id', note: 'voice · video · AI', color: '#378ADD' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scrollspy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = ['toolkit', 'how-we-got-here', 'news', 'partner']
    const els = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!els.length || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        aria-label="Primary"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.25s ease, border-color 0.25s ease',
          background: scrolled ? C.offWhite : 'transparent',
          borderBottom: `1px solid ${scrolled ? C.line : 'transparent'}`,
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <Link href="/" aria-label="Gamefinity home" style={{ display: 'flex', alignItems: 'center', borderRadius: '8px' }}>
            <LogoSVG />
          </Link>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="nav-link"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen(v => !v)}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                Products
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ transition: 'transform 0.2s', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {productsOpen && (
                <div
                  role="menu"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% - 8px)',
                    left: 0,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(4,44,83,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                    borderRadius: '14px',
                    padding: '14px 8px 8px',
                    minWidth: '260px',
                  }}
                >
                  <div style={{ padding: '8px 14px 6px', fontFamily: F.mono, fontSize: '10px', color: C.slateLight, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Our products
                  </div>
                  {productLinks.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="menu-item"
                      role="menuitem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: 600, color: C.navy }}>{item.label}</span>
                      </span>
                      <span style={{ fontFamily: F.mono, fontSize: '11px', color: C.primary, paddingLeft: '16px' }}>{item.note}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {sectionLinks.filter(l => l.id !== 'news').map(link => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                aria-current={active === link.id ? 'true' : undefined}
                data-active={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}

            <div style={{ flex: 1 }} />

            <a
              href="https://blog.gamefinity.id"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-link--news"
              aria-current={active === 'news' ? 'true' : undefined}
              data-active={active === 'news' ? 'true' : undefined}
            >
              <span className="news-default">Read News</span>
              <span className="news-hover">at blog.gamefinity.id</span>
            </a>
          </div>

          <a href="#partner" className="nav-cta desktop-nav" data-active={active === 'partner' ? 'true' : undefined}>
            Partner with us
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-menu-btn"
            aria-label="Open menu"
            style={{ display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', padding: '8px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 12H21M3 6H21M3 18H21" stroke={C.navy} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: C.offWhite,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <LogoSVG />
            <button
              onClick={() => setMobileOpen(false)}
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '8px' }}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6L18 18" stroke={C.navy} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column' }}>
            {[...sectionLinks, ...productLinks].map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                style={{
                  fontFamily: F.display,
                  fontSize: '26px',
                  fontWeight: 700,
                  color: C.navy,
                  textDecoration: 'none',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(4,44,83,0.08)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#partner"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: '32px',
              fontFamily: F.body,
              fontSize: '16px',
              fontWeight: 600,
              color: C.white,
              background: C.primary,
              padding: '15px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Partner with us
          </a>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link {
          font-family: ${F.body};
          font-size: 14px;
          font-weight: 500;
          color: ${C.navy};
          padding: 9px 14px;
          border-radius: 9px;
          text-decoration: none;
          position: relative;
          transition: background 0.18s ease, color 0.18s ease, transform 0.08s ease;
        }
        .nav-link:hover { background: rgba(4,44,83,0.06); }
        .nav-link:active { transform: scale(0.97); }
        .nav-link[data-active="true"] { color: ${C.primary}; }
        .nav-link[data-active="true"]::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 3px;
          height: 2px;
          border-radius: 2px;
          background: ${C.primary};
        }
        .nav-link--highlight {
          font-weight: 600;
          color: ${C.primary};
          background: rgba(55,138,221,0.08);
        }
        .nav-link--highlight:hover { background: rgba(55,138,221,0.14); }
        .nav-link--news {
          position: relative;
          font-weight: 600;
          color: ${C.primary};
          background: rgba(55,138,221,0.08);
          overflow: hidden;
          white-space: nowrap;
        }
        .nav-link--news:hover { background: rgba(55,138,221,0.14); }
        .news-default, .news-hover {
          transition: opacity 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .news-hover {
          position: absolute;
          left: 14px;
          text-decoration: underline;
          text-underline-offset: 3px;
          opacity: 0;
          transform: translateY(4px);
        }
        .nav-link--news:hover .news-default { opacity: 0; transform: translateY(-4px); }
        .nav-link--news:hover .news-hover { opacity: 1; transform: translateY(0); }
        .menu-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 14px;
          border-radius: 10px;
          font-family: ${F.body};
          font-size: 14px;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .menu-item:hover { background: rgba(24,95,165,0.08); }
        .nav-cta {
          font-family: ${F.body};
          font-size: 14px;
          font-weight: 600;
          color: ${C.white};
          background: ${C.primary};
          padding: 11px 22px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.08s ease;
        }
        .nav-cta:hover { background: ${C.navy}; }
        .nav-cta:active { transform: scale(0.97); }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      ` }} />
    </>
  )
}
