import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { C, F, R, MAX_W } from './theme'

const milestones = [
  {
    year: '2017',
    title: 'A guides blog finds its readers',
    body: 'Gamefinity starts as a walkthrough and strategy blog. Within a year it clears 200,000 monthly readers.',
    seed: 'gf-story-2017-guides-desk',
    alt: 'The Gamefinity guides team at their desks, 2017',
    caption: '2017, the Gamefinity guides desk',
  },
  {
    year: '2019',
    title: 'Elite Squad forms',
    body: 'School and campus esports teams turn readers into a community that shows up, competes, and stays.',
    seed: 'gf-story-2019-elite-squad',
    alt: 'The first Elite Squad esports line-up, 2019',
    caption: '2019, the first Elite Squad line-up',
  },
  {
    year: '2021',
    title: 'Mini Games launches',
    body: 'Instant, downloadless HTML5 play. The library grows past 20,000 titles across 20+ genres.',
    seed: 'gf-story-2021-mini-games',
    alt: 'Mini Games launch day, 2021',
    caption: '2021, Mini Games launch day',
  },
  {
    year: '2023',
    title: 'Drama and live social arrive',
    body: 'Mini Cinema and Mini Chatto add shortform video and real-time voice, video, and AI chat.',
    seed: 'gf-story-2023-cinema-set',
    alt: 'On set for a Mini Cinema shoot, 2023',
    caption: '2023, on set for a Mini Cinema shoot',
  },
  {
    year: '2026',
    title: 'The engine opens up',
    body: 'The same content stack that grew the community, packaged for any platform to embed.',
    seed: 'gf-story-2026-engine-team',
    alt: 'The Gamefinity engine team in Jakarta, 2026',
    caption: '2026, the engine team in Jakarta',
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
          if (e.isIntersecting) setActive(Number(e.target.dataset.idx))
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
            <img src={`https://picsum.photos/seed/${m.seed}/560/440`} alt={m.alt} loading="lazy" />
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
            ref={el => (refs.current[i] = el)}
            className={`ms${i === active ? ' is-active' : ''}`}
          >
            <div className="ms-year tnum">{ms.year}</div>
            <h3 className="ms-title">{ms.title}</h3>
            <p className="ms-body">{ms.body}</p>
            <div className="ms-photo-mobile">
              <img src={`https://picsum.photos/seed/${ms.seed}/640/360`} alt={ms.alt} loading="lazy" />
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
            For nearly a decade we've made things Indonesian gamers actually want to spend time in: guides,
            tournaments, games, drama, and chat. Engagement was never a line on a slide. It was the thing we
            earned every day to keep the community around. That engine is what we're opening up now.
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
          min-height: 48vh;
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
