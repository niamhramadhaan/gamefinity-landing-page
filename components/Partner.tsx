import { useState } from 'react'
import Reveal from './Reveal'
import PlaceholderImage from './PlaceholderImage'
import { C, F, R, MAX_W } from './theme'

const trustPoints = [
  'One integration across three modules. Pick what fits your app.',
  'Revenue share on games, video, and live rooms.',
  'A team that has run this at community scale since 2017.',
]

const faqs = [
  {
    q: 'What is the Content Toolkit?',
    a: 'Mini Games, Mini Cinema, and Mini Chatto — three embeddable products (games, drama, and real-time chat) built from tools we first created for our own community. License what you need and drop it into any app.',
  },
  {
    q: "What happens to my users' data?",
    a: "We never collect or store your end users' personal data. Integration relies solely on OAuth-based authentication — not full account access — and every connection follows standardized, industry-recognized security protocols.",
  },
  {
    q: 'How does the revenue split work?',
    a: 'You retain the majority share of ad and in-app purchase revenue generated from your active user base, automatically tracked via your dashboard and disbursed monthly.',
  },
  {
    q: 'Why Indonesia, and why through Gamefinity?',
    a: "Indonesia has one of the largest mobile-first, gaming-active populations in Southeast Asia — but also real entry barriers around payments, localization, and distribution. We've already built the relationships and infrastructure to solve that.",
  },
  {
    q: 'Do you help with more than payments?',
    a: 'Yes — App Publishing Partner covers market entry, distribution agreements, IP registration, and localization. Marketing 360 covers creator partnerships, content production, and campaigns once you\'re live.',
  },
  {
    q: 'Is Gamefinity only for gaming apps?',
    a: 'No — Mini Chatto and Marketing 360 work across dating, education, healthcare, marketplace, and other verticals. Gaming is our origin, not our only audience.',
  },
  {
    q: 'How do I get started?',
    a: "Reach out through the contact form — tell us whether you're interested in the Content Toolkit, market entry, or both, and we'll route you to the right team.",
  },
]

const products = [
  {
    name: 'Mini Games',
    desc: '20K+ instant HTML5 titles across 20+ genres. No install, no store.',
    href: 'https://mini-games.gamefinity.id',
    seed: 'gf-partner-minigames',
    color: '#6ee7b7',
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke={C.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="24" height="16" rx="3" />
        <path d="M10 13H14M12 11V15" />
        <circle cx="21" cy="14" r="1.4" fill={C.primary} />
        <circle cx="24" cy="17" r="1.4" fill={C.interactive} />
      </svg>
    ),
  },
  {
    name: 'Mini Cinema',
    desc: 'Vertical shortform drama. Autoplay, cliffhangers, binge trays.',
    href: 'https://mini-cinema.gamefinity.id',
    seed: 'gf-partner-minicinema',
    color: '#a78bfa',
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke={C.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="20" height="20" rx="3" />
        <path d="M13 12L20 16L13 20V12Z" fill={C.primary} />
      </svg>
    ),
  },
  {
    name: 'Mini Chatto',
    desc: 'Real-time voice, video, and AI personas. Moderated rooms at scale.',
    href: 'https://mini-chatto.gamefinity.id',
    seed: 'gf-partner-minichatto',
    color: '#378ADD',
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke={C.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9C6 7.34 7.34 6 9 6H23C24.66 6 26 7.34 26 9V17C26 18.66 24.66 20 23 20H14L8 25V20C6.9 20 6 19.1 6 18V9Z" />
        <circle cx="12" cy="13" r="1.3" fill={C.primary} />
        <circle cx="16" cy="13" r="1.3" fill={C.interactive} />
        <circle cx="20" cy="13" r="1.3" fill={C.primary} />
      </svg>
    ),
  },
]

export default function Partner() {
  const [active, setActive] = useState(0)

  return (
    <section id="partner" style={{ backgroundColor: C.offWhite, borderTop: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <div className="partner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          <Reveal>
            <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.primary, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Partner with us
            </span>
            <h2 style={{
              fontFamily: F.display,
              fontSize: 'clamp(30px, 4.6vw, 48px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: C.navy,
              margin: '18px 0 20px',
              textWrap: 'balance',
            }}>
              Put the engine to work in your app.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '17px', lineHeight: 1.65, color: C.slate, maxWidth: '46ch', margin: '0 0 30px' }}>
              Tell us where you'd like more time-in-app. We'll show you what games, drama, or live chat could look like on your surfaces, and how the numbers work.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {trustPoints.map(t => (
                <li key={t} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontFamily: F.body, fontSize: '15px', color: C.slate }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                    <path d="M4 10.4L8.2 14.5L16 6.5" stroke={C.interactive} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '36px' }}>
              <h3 style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 600, color: C.navy, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
                Frequently asked
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {faqs.map(({ q, a }) => (
                  <details key={q} style={{ borderBottom: `1px solid ${C.line}` }}>
                    <summary style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      fontWeight: 500,
                      color: C.navy,
                      padding: '14px 0',
                      cursor: 'pointer',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      {q}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, transition: 'transform 0.2s ease' }}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <p style={{ fontFamily: F.body, fontSize: '13.5px', lineHeight: 1.6, color: C.slate, margin: '0 0 14px', maxWidth: '44ch' }}>
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Reveal delay={1} style={{
              background: C.white,
              border: `1px solid ${C.line}`,
              borderRadius: R.card,
              padding: 'clamp(32px, 4vw, 48px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '200px', height: '200px', opacity: 0.04, pointerEvents: 'none' }}>
                <svg viewBox="0 0 32 32" fill="none" width="100%" height="100%">
                  <rect width="32" height="32" rx="8" fill={C.navy} />
                  <path d="M8 10L14 16L8 22" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 22H24" stroke={C.interactive} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ width: '56px', height: '56px', borderRadius: R.btn, background: 'rgba(55,138,221,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', position: 'relative' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: F.display, fontSize: 'clamp(22px, 2.8vw, 28px)', fontWeight: 500, color: C.navy, margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.2, position: 'relative' }}>
                Let's build together
              </h3>
              <p style={{ fontFamily: F.body, fontSize: '15px', lineHeight: 1.6, color: C.slate, maxWidth: '32ch', margin: '0 auto 28px', position: 'relative' }}>
                Tell us about your app and what you'd like to add. We'll get back within two working days.
              </p>
              <a
                href="https://gamefinity.id/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: F.body,
                  fontSize: '15px',
                  fontWeight: 600,
                  color: C.white,
                  background: C.primary,
                  padding: '14px 28px',
                  borderRadius: R.btn,
                  textDecoration: 'none',
                  transition: 'background 0.18s ease, transform 0.1s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2270bd' }}
                onMouseLeave={e => { e.currentTarget.style.background = C.primary }}
              >
                Contact us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {products.map((p, i) => (
                  <button
                    key={p.name}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '20px 12px',
                      background: active === i ? 'rgba(55,138,221,0.06)' : C.white,
                      border: `1.5px solid ${active === i ? C.interactive : C.line}`,
                      borderRadius: R.card,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'border-color 0.18s ease, background 0.18s ease, transform 0.1s ease',
                      transform: active === i ? 'translateY(-2px)' : 'none',
                    }}
                  >
                    {p.icon}
                    <span style={{ fontFamily: F.display, fontSize: '13px', fontWeight: 600, color: C.navy }}>{p.name}</span>
                    <span style={{ fontFamily: F.body, fontSize: '12px', lineHeight: 1.4, color: C.slateLight }}>{p.desc}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div style={{
                aspectRatio: '16 / 9',
                borderRadius: R.card,
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(4,44,83,0.1)',
                position: 'relative',
                background: '#111827',
              }}>
                <PlaceholderImage
                  key={products[active].seed}
                  seed={products[active].seed}
                  alt={`${products[active].name} preview`}
                  style={{ width: '100%', height: '100%', borderRadius: 0 }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'rgba(4,44,83,0.35)',
                  transition: 'opacity 0.2s ease',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <span style={{ fontFamily: F.mono, fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>
                    {products[active].name}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 860px) {
          .partner-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
        #partner details[open] summary svg { transform: rotate(180deg); }
        #partner details summary::-webkit-details-marker { display: none; }
        #partner details summary::marker { display: none; content: ''; }
      ` }} />
    </section>
  )
}
