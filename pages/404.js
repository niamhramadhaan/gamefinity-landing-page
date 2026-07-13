import Head from 'next/head'
import Link from 'next/link'
import { C, F, R } from '../components/theme'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found - Gamefinity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <main style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px',
        position: 'relative',
        background: C.neutral,
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '460px' }}>
          <div className="tnum" style={{
            fontFamily: F.display,
            fontSize: 'clamp(80px, 18vw, 148px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: C.navy,
            marginBottom: '8px',
          }}>
            4<span style={{ color: C.primary }}>0</span>4
          </div>
          <h1 style={{ fontFamily: F.display, fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 700, color: C.navy, letterSpacing: '-0.02em', margin: '0 0 14px' }}>
            This page left the lobby.
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '16px', lineHeight: 1.6, color: C.slate, margin: '0 0 32px' }}>
            The link may be old or mistyped. Let's get you back to something that's actually here.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="nf-btn nf-btn--primary">Back to home</Link>
            <Link href="/#toolkit" className="nf-btn nf-btn--ghost">See the toolkit</Link>
          </div>
        </div>
      </main>

      <style>{`
        .nf-btn {
          font-family: ${F.body};
          font-size: 15px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: ${R.btn};
          text-decoration: none;
          transition: background 0.18s ease, transform 0.1s ease, border-color 0.18s ease;
        }
        .nf-btn--primary { color: ${C.white}; background: ${C.primary}; }
        .nf-btn--primary:hover { background: ${C.navy}; }
        .nf-btn--primary:active { transform: scale(0.98); }
        .nf-btn--ghost { color: ${C.primary}; border: 1.5px solid ${C.primary}; }
        .nf-btn--ghost:hover { background: rgba(24,95,165,0.06); }
        .nf-btn--ghost:active { transform: scale(0.98); }
      `}</style>
    </>
  )
}
