import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer'
import { C, F, MAX_W } from './theme'

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <Head>
        <title>{title} - Gamefinity</title>
        <meta name="description" content={`${title} for Gamefinity. PT Gamefinity Indonesia.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: C.offWhite }}>
        <header style={{ borderBottom: `1px solid ${C.lineSoft}`, background: C.white }}>
          <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" aria-label="Gamefinity home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="https://biz.gamefinity.id/assets/website-logo.svg"
                alt="Gamefinity"
                style={{ height: '32px', width: 'auto', display: 'block' }}
              />
            </Link>
            <Link href="/" className="legal-back" style={{ fontFamily: F.body, fontSize: '14px', fontWeight: 600, color: C.navy, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to home
            </Link>
          </div>
        </header>

        <main style={{ flex: 1, maxWidth: '760px', width: '100%', margin: '0 auto', padding: 'clamp(48px, 7vw, 88px) 24px' }}>
          <p style={{ fontFamily: F.mono, fontSize: '12px', color: C.primary, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 14px' }}>Legal</p>
          <h1 style={{ fontFamily: F.display, fontSize: 'clamp(30px, 5vw, 46px)', fontWeight: 700, color: C.navy, letterSpacing: '-0.025em', lineHeight: 1.1, margin: '0 0 12px' }}>{title}</h1>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: C.slateLight, margin: '0 0 40px' }}>Last updated {updated}</p>
          <div className="legal-body">{children}</div>
        </main>

        <Footer />
      </div>

      <style>{`
        .legal-body h2 {
          font-family: ${F.display};
          font-size: 20px;
          font-weight: 700;
          color: ${C.navy};
          letter-spacing: -0.01em;
          margin: 38px 0 12px;
        }
        .legal-body p, .legal-body li {
          font-family: ${F.body};
          font-size: 16px;
          line-height: 1.7;
          color: ${C.slate};
        }
        .legal-body p { margin: 0 0 16px; }
        .legal-body ul { margin: 0 0 16px; padding-left: 22px; }
        .legal-body li { margin-bottom: 8px; }
        .legal-body a { color: ${C.primary}; }
        .legal-back:hover { color: ${C.primary}; }
      `}</style>
    </>
  )
}
