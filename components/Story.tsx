import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { C, F, R, MAX_W } from './theme'
import PlaceholderImage from './PlaceholderImage'

const H = {
  num: (text: string) => <strong style={{ color: C.interactive, fontWeight: 600 }}>{text}</strong>,
  brand: (text: string) => <strong style={{ fontWeight: 600 }}>{text}</strong>,
}

const milestones = [
  {
    year: '2019',
    title: 'Gamefinity founded',
    body: <>What started as a small gaming community in Indonesia quickly proved there was a massive, underserved audience of players looking for more than just another forum.</>,
    seed: 'gf-story-2019-founded',
    alt: 'The founding team of Gamefinity, 2019',
    caption: '2019, where it all began',
  },
  {
    year: '2020',
    title: 'Top-up platform launches',
    body: <>We launched a top-up hub with {H.num('1,000+')} digital products — game currencies, mobile credit, and entertainment vouchers. What began as a feature became a daily habit for the community, and a new revenue stream for the platform.</>,
    seed: 'gf-story-2020-topup',
    alt: 'Gamefinity top-up platform dashboard, 2020',
    caption: '2020, 1,000+ digital products live',
    cta: { label: 'Top up', href: 'https://topup.gamefinity.id', badge: '1,000+ products' },
  },
  {
    year: '2021',
    title: 'Content & Media arm starts',
    body: <>We started covering the games and tournaments our community actually cared about. The editorial arm grew fast — now reaching {H.num('1.2M+')} monthly visitors and {H.num('140K+')} social followers across platforms, all organic.</>,
    seed: 'gf-story-2021-content',
    alt: 'Gamefinity content team at work, 2021',
    caption: '2021, the content engine kicks in',
    cta: { label: 'Read news', href: '#news' },
  },
  {
    year: '2022',
    title: 'Campus Edition tournament',
    body: <>We partnered with {H.brand('ESPL')} and {H.brand('Maybank')} to run the Campus Edition — an online tournament that brought competitive gaming to universities across Indonesia. {H.num('60+')} players competed, and {H.num('150+')} new users joined the platform through the event.</>,
    seed: 'gf-story-2022-campus',
    alt: 'Campus esports tournament, 2022',
    caption: '2022, Campus Edition with ESPL & Maybank',
  },
  {
    year: '2023',
    title: 'Ramadan Weekly Series',
    body: <>During Ramadan, we ran a weekly series with {H.brand('Tel-U Esports')} and {H.brand('XD Project')}, backed by {H.brand("Telkomsel's")} GamesMax package. {H.num('5,000+')} players showed up, generating {H.num('IDR 23.5M')} in purchase value — proof that community-driven events convert.</>,
    seed: 'gf-story-2023-ramadan',
    alt: 'Ramadan Weekly Series event, 2023',
    caption: '2023, Ramadan series with Telkomsel',
  },
  {
    year: '2024–2025',
    title: 'Elite Squad',
    body: <>We took esports into schools and universities with the Elite Squad program — blending competition with education. {H.num('144')} teams formed, {H.num('720')} players competed, and {H.num('600+')} participants joined the broader community events, drawing {H.num('1,100')} visitors to our live activations.</>,
    seed: 'gf-story-2024-elitesquad',
    alt: 'Gamefinity Elite Squad event, 2024',
    caption: '2024–2025, Elite Squad goes nationwide',
  },
  {
    year: '2025',
    title: 'MiniGames launches',
    body: <>The first piece of the toolkit — {H.brand('MiniGames')} — went live. Embeddable games any platform can drop in, no app store needed. The same engine that kept Gamefinity's community engaged, now available to partners.</>,
    seed: 'gf-story-2025-minigames',
    alt: 'MiniGames launch, 2025',
    caption: '2025, MiniGames goes live',
  },
  {
    year: '2026',
    title: 'MiniCinema launches',
    body: <>Following MiniGames, {H.brand('MiniCinema')} launched — bringing short-form video and entertainment content into the toolkit. Two products, one embeddable engine, zero install friction.</>,
    seed: 'gf-story-2026-minicinema',
    alt: 'MiniCinema launch, 2026',
    caption: '2026, MiniCinema joins the toolkit',
  },
]

function Scrolly() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const els = refs.current.filter(Boolean)
    if (!els.length || typeof IntersectionObserver === 'undefined') return
    // Active = the milestone block crossing the vertical centre of the viewport.
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx))
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const m = milestones[active]

  return (
    <div className="scrolly">
      <div className="scrolly-sticky">
        <div className="era" key={active}>
          <div className="era-year tnum">{m.year}</div>
          <div className="era-photo">
            <PlaceholderImage seed={m.seed} alt={m.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
            <span className="era-photo-label">{m.caption}</span>
          </div>
          <div className="era-title">{m.title}</div>
        </div>
      </div>

      <ol className="scrolly-list">
        {milestones.map((ms, i) => (
          <li
            key={ms.year}
            data-idx={i}
            ref={el => { refs.current[i] = el; }}
            className={`ms${i === active ? ' is-active' : ''}`}
          >
            <div className="ms-year tnum">{ms.year}</div>
            <h3 className="ms-title">{ms.title}</h3>
            <p className="ms-body">{ms.body}</p>
            {ms.cta && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', alignSelf: 'flex-start' }}>
                <a href={ms.cta.href} className="ms-cta" target={ms.cta.href.startsWith('http') ? '_blank' : undefined} rel={ms.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span>{ms.cta.label}</span>
                  {ms.cta.href.startsWith('http') ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3" /><line x1="12" y1="18" x2="12" y2="18.01" /></svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" /><line x1="10" y1="6" x2="18" y2="6" /><line x1="10" y1="10" x2="18" y2="10" /><line x1="10" y1="14" x2="14" y2="14" /></svg>
                  )}
                </a>
                {ms.cta.badge && (
                  <span className="ms-badge">{ms.cta.badge}</span>
                )}
              </div>
            )}
            <div className="ms-photo-mobile">
              <PlaceholderImage seed={ms.seed} alt={ms.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              <span>{ms.caption}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Story() {
  return (
    <section id="how-we-got-here" className="dot-grid" style={{ backgroundColor: C.navy, color: C.white, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <Reveal style={{ maxWidth: '620px', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.interactive, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            How we got here
          </span>
          <h2 style={{
            fontFamily: F.display,
            fontSize: 'clamp(30px, 4.6vw, 48px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: C.white,
            margin: '18px 0 20px',
            textWrap: 'balance',
          }}>
            We didn't set out to build a platform. We set out to build a crowd.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '17px', lineHeight: 1.7, color: C.onDark, maxWidth: '58ch', margin: 0 }}>
            Since 2019 we've built what Indonesian gamers actually want to spend time in: tournaments,
            top-ups, games, drama, and chat. Engagement was never a metric. It was the thing we
            earned every day. That engine is what we're opening up now.
          </p>
        </Reveal>

        <Scrolly />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrolly {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 56px;
          align-items: start;
        }
        .scrolly-sticky { position: sticky; top: 96px; }
        .era-year {
          font-family: ${F.display};
          font-size: clamp(56px, 7vw, 84px);
          font-weight: 600;
          color: ${C.interactive};
          line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .era-photo {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          border: 1px solid ${C.lineOnDark};
          border-radius: ${R.card};
          display: flex;
          align-items: flex-end;
          padding: 16px;
          margin: 20px 0 16px;
        }
        .era-photo img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; filter: grayscale(0.55) contrast(1.02);
        }
        .era-photo::after {
          content: ""; position: absolute; inset: 0; background: rgba(4,44,83,0.58);
        }
        .era-photo-label { position: relative; z-index: 1; font-family: ${F.mono}; font-size: 11px; color: rgba(255,255,255,0.82); line-height: 1.6; }
        .era-title { font-family: ${F.display}; font-size: 18px; font-weight: 600; color: ${C.white}; }

        .scrolly-list {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }
        .scrolly-list::before {
          content: "";
          position: absolute;
          inset: -40px -60px -40px 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cpath d='M0 20h12m16 0h12M20 0v12m0 16v12'/%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 40px 40px;
          opacity: 0.5;
          z-index: 0;
        }
        .scrolly-list > * { position: relative; z-index: 1; }
        .ms {
          min-height: 40vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 28px;
          border-left: 2px solid rgba(255,255,255,0.12);
          transition: border-color 0.3s ease;
        }
        .ms.is-active { border-left-color: ${C.interactive}; }
        .ms-year { font-family: ${F.mono}; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.4); margin-bottom: 8px; transition: color 0.3s ease; }
        .ms.is-active .ms-year { color: ${C.interactive}; }
        .ms-title { font-family: ${F.display}; font-size: 22px; font-weight: 600; color: ${C.white}; letter-spacing: -0.01em; margin: 0 0 10px; }
        .ms-body { font-family: ${F.body}; font-size: 15px; line-height: 1.65; color: ${C.onDark}; max-width: 46ch; margin: 0; }
        .ms-cta {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: ${F.mono}; font-size: 11px; font-weight: 600;
          color: ${C.navy}; text-decoration: none;
          background: ${C.interactive};
          padding: 6px 12px;
          border-radius: 5px;
          transition: background 0.18s ease, transform 0.1s ease;
        }
        .ms-cta:hover { background: #5ba3e6; transform: translateY(-1px); }
        .ms-badge {
          font-family: ${F.mono}; font-size: 10px; font-weight: 500;
          color: ${C.onDark}; letter-spacing: 0.02em;
          border: 1px solid ${C.lineOnDark};
          border-radius: ${R.tag};
          padding: 3px 8px;
          white-space: nowrap;
        }
        .ms-photo-mobile { display: none; }

        @media (prefers-reduced-motion: no-preference) {
          .era { animation: storyEra 0.4s ease both; }
        }
        @keyframes storyEra {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }

        #how-we-got-here .dot-grid {
          animation: gridPulse 12s ease-in-out infinite;
        }
        @keyframes gridPulse {
          0%, 100% { background-size: 23px 23px; }
          50%       { background-size: 25px 25px; }
        }

        @media (prefers-reduced-motion: reduce) {
          #how-we-got-here .dot-grid { animation: none; }
        }

        @media (max-width: 820px) {
          .scrolly { grid-template-columns: 1fr; gap: 0; }
          .scrolly-sticky { display: none; }
          .ms {
            min-height: auto;
            justify-content: flex-start;
            padding: 0 0 36px 24px;
          }
          .ms-photo-mobile {
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            aspect-ratio: 16 / 9;
            border: 1px solid ${C.lineOnDark};
            border-radius: ${R.card};
            padding: 12px;
            margin-top: 16px;
          }
          .ms-photo-mobile img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.55) contrast(1.02); }
          .ms-photo-mobile::after { content: ""; position: absolute; inset: 0; background: rgba(4,44,83,0.58); }
          .ms-photo-mobile span { position: relative; z-index: 1; font-family: ${F.mono}; font-size: 10px; color: rgba(255,255,255,0.82); }
        }
      ` }} />
    </section>
  )
}
