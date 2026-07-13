import { useRef } from 'react'
import Reveal from './Reveal'
import { C, F, R, MAX_W } from './theme'

const articles = [
  {
    title: 'Daftar Anime Romance 2026 yang Bikin Melting',
    tag: 'Anime',
    date: '12 Mei 2026',
    img: 'https://gamefinity-content.storage.googleapis.com/wp-content/uploads/2026/05/11174713/Nama-7-Anime-Romance.jpg',
    href: 'https://blog.gamefinity.id/anime/daftar-anime-romance-2026-yang-bikin-melting',
    latest: true,
  },
  {
    title: '"Michael" Jadi Film Biopik Terlaris Kedua di Dunia',
    tag: 'Pop Culture',
    date: '6 Mei 2026',
    img: 'https://gamefinity-content.storage.googleapis.com/wp-content/uploads/2026/05/04142854/Film-Biopik-Michael.jpg',
    href: 'https://blog.gamefinity.id/pop-culture/film-dan-tv/ceritakan-kisah-hidup-michael-jackson-michael-jadi-film-biopik-terlaris-kedua-di-dunia',
  },
  {
    title: 'Rekomendasi Skin MLBB Event Diamond Kuning',
    tag: 'Game',
    date: '13 Maret 2026',
    img: 'https://gamefinity-content.storage.googleapis.com/wp-content/uploads/2026/03/11121717/Cover-Rekomendasi-skin-MLBB-event-diamond-kuning.jpg',
    href: 'https://blog.gamefinity.id/game/rekomendasi-skin-mlbb-yang-wajib-kamu-beli-melalui-event-diamond-kuning',
  },
  {
    title: 'Film dan Serial Marvel Sebelum Avengers: Doomsday',
    tag: 'Pop Culture',
    date: '5 Maret 2026',
    img: 'https://gamefinity-content.storage.googleapis.com/wp-content/uploads/2026/02/18092535/Film-dan-Seri-Marvel-sebelum-Avengers-Doomsday-Featured-Image.jpg',
    href: 'https://blog.gamefinity.id/pop-culture/film-dan-tv/film-dan-serial-marvel-yang-harus-kamu-tonton-sebelum-avengers-doomsday',
  },
  {
    title: 'ONIC ID Konfirmasi Kelra dan Samuel di MPL ID S17',
    tag: 'Esports',
    date: '7 Februari 2026',
    img: 'https://gamefinity-content.storage.googleapis.com/wp-content/uploads/2026/02/06170400/Presscon-ONIC.jpg',
    href: 'https://blog.gamefinity.id/berita-esports/onic-id-konfirmasi-kelra-dan-samuel-akan-bertanding-di-mpl-id-s17',
  },
]

const tagColors = {
  Anime: '#e879a0',
  'Pop Culture': '#a78bfa',
  Game: '#6ee7b7',
  Esports: '#f9a825',
}

export default function NewsTeaser() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const amount = 340
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section id="news" style={{ backgroundColor: C.navy, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 56px)' }}>
          <Reveal style={{ maxWidth: '640px' }}>
            <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.interactive, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              From the blog
            </span>
            <h2 style={{
              fontFamily: F.display,
              fontSize: 'clamp(30px, 4.6vw, 48px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: C.white,
              margin: '18px 0 0',
              textWrap: 'balance',
            }}>
              Fresh from the scene.
            </h2>
          </Reveal>
          <Reveal delay={1} className="news-arrows" style={{ display: 'flex', gap: '8px', flexShrink: 0, paddingBottom: '4px' }}>
            <button onClick={() => scroll('left')} aria-label="Scroll left" style={{
              width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${C.lineOnDark}`, background: 'transparent', color: C.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.18s ease, border-color 0.18s ease', padding: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.lineOnDark }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button onClick={() => scroll('right')} aria-label="Scroll right" style={{
              width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${C.lineOnDark}`, background: 'transparent', color: C.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.18s ease, border-color 0.18s ease', padding: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.lineOnDark }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </Reveal>
        </div>

        <div ref={scrollRef} className="news-scroll" style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollPaddingLeft: '24px',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '8px',
        }}>
          {articles.map((a, i) => (
            <Reveal key={a.href} delay={i} style={{ borderRadius: R.card, overflow: 'hidden', flex: '0 0 340px', scrollSnapAlign: 'start' }}>
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="news-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${C.lineOnDark}`,
                  borderRadius: R.card,
                  overflow: 'hidden',
                  transition: 'transform 0.18s ease, border-color 0.18s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', position: 'relative' }}>
                    <img
                      src={a.img}
                      alt=""
                      loading="lazy"
                      className="news-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0.06 }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" /><line x1="10" y1="6" x2="18" y2="6" /><line x1="10" y1="10" x2="18" y2="10" /><line x1="10" y1="14" x2="14" y2="14" /></svg>
                    </div>
                    {a.latest && (
                      <span style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        fontFamily: F.mono,
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: C.navy,
                        background: C.interactive,
                        borderRadius: R.tag,
                        padding: '3px 8px',
                      }}>
                        Latest
                      </span>
                    )}
                  </div>
                  <div style={{ padding: 'clamp(16px, 2vw, 22px)', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        fontFamily: F.mono,
                        fontSize: '11px',
                        fontWeight: 600,
                        color: tagColors[a.tag] || C.interactive,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}>
                        {a.tag}
                      </span>
                      <span style={{ fontFamily: F.body, fontSize: '12px', color: C.onDarkFaint }}>
                        {a.date}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: F.display,
                      fontSize: '16px',
                      fontWeight: 600,
                      color: C.white,
                      margin: 0,
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}>
                      {a.title}
                    </h3>
                    <div style={{ flex: 1 }} />
                    <span className="news-readmore" style={{
                      fontFamily: F.body,
                      fontSize: '13px',
                      fontWeight: 600,
                      color: C.interactive,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '4px',
                    }}>
                      Read more
                      <svg className="news-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transition: 'transform 0.18s ease' }}>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} style={{ marginTop: '48px', textAlign: 'center' }}>
          <a
            href="https://blog.gamefinity.id"
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
              background: 'transparent',
              border: `1.5px solid ${C.lineOnDark}`,
              borderRadius: R.btn,
              padding: '12px 28px',
              textDecoration: 'none',
              transition: 'background 0.18s ease, border-color 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.lineOnDark }}
          >
            Visit the blog
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .news-scroll::-webkit-scrollbar { display: none; }
        .news-scroll { scrollbar-width: none; }
        .news-card:hover .news-img { transform: scale(1.05); }
        .news-card:hover .news-arrow { transform: translateX(4px); }
        @media (max-width: 640px) {
          .news-arrows { display: none !important; }
          .news-scroll { gap: 14px; }
          .news-scroll > * { flex: 0 0 280px !important; }
        }
      ` }} />
    </section>
  )
}
