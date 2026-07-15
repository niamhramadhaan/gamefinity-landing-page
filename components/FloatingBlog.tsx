import { C, F } from './theme'

const articles = [
  {
    title: 'Daftar Anime Romance 2026 yang Bikin Melting',
    date: '12 Mei 2026',
    href: 'https://blog.gamefinity.id/anime/daftar-anime-romance-2026-yang-bikin-melting',
  },
  {
    title: '"Michael" Jadi Film Biopik Terlaris Kedua di Dunia',
    date: '6 Mei 2026',
    href: 'https://blog.gamefinity.id/pop-culture/film-dan-tv/ceritakan-kisah-hidup-michael-jackson-michael-jadi-film-biopik-terlaris-kedua-di-dunia',
  },
  {
    title: 'Rekomendasi Skin MLBB Event Diamond Kuning',
    date: '13 Maret 2026',
    href: 'https://blog.gamefinity.id/game/rekomendasi-skin-mlbb-yang-wajib-kamu-beli-melalui-event-diamond-kuning',
  },
]

export default function FloatingBlog() {
  return (
    <div className="floating-blog">
      <a
        href="https://blog.gamefinity.id"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read news on blog.gamefinity.id"
        className="floating-blog-btn"
      >
        <span className="floating-blog-badge">new!</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
          <line x1="10" y1="6" x2="18" y2="6" />
          <line x1="10" y1="10" x2="18" y2="10" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      </a>

      <div className="floating-blog-popover">
        <div className="floating-blog-header">Read news</div>
        <div className="floating-blog-list">
          {articles.map((a) => (
            <a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-blog-item"
            >
              <span className="floating-blog-item-title">{a.title}</span>
              <span className="floating-blog-item-date">{a.date}</span>
            </a>
          ))}
        </div>
        <a
          href="https://blog.gamefinity.id"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-blog-all"
        >
          View all articles
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .floating-blog {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 50;
          animation: blog-cycle 15s ease-in-out infinite;
        }
        @keyframes blog-cycle {
          0%   { transform: translateX(-100%); opacity: 0; }
          5%   { transform: translateX(0);     opacity: 1; }
          33%  { transform: translateX(0);     opacity: 1; }
          40%  { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        .floating-blog::before {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 0;
          width: 48px;
          height: 12px;
        }
        .floating-blog-btn {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${C.navy};
          color: ${C.white};
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.18s ease;
          box-shadow: 0 4px 16px rgba(4,44,83,0.2);
        }
        .floating-blog-btn:hover { background: ${C.primary}; }
        .floating-blog-badge {
          position: absolute;
          top: -4px;
          right: -6px;
          background: #ef4444;
          color: ${C.white};
          font-family: ${F.body};
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 2px 6px;
          border-radius: 9999px;
          line-height: 1.2;
          pointer-events: none;
          animation: blog-blink 2.5s ease-in-out infinite;
        }
        @keyframes blog-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        .floating-blog-popover {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 0;
          width: 300px;
          background: ${C.white};
          border: 1px solid ${C.line};
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(4,44,83,0.12);
          padding: 14px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }
        .floating-blog:hover .floating-blog-popover {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .floating-blog-header {
          font-family: ${F.mono};
          font-size: 10px;
          font-weight: 500;
          color: ${C.slateLight};
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0 0 10px;
          border-bottom: 1px solid ${C.line};
          margin-bottom: 10px;
        }
        .floating-blog-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .floating-blog-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .floating-blog-item:hover { background: rgba(4,44,83,0.04); }
        .floating-blog-item-title {
          font-family: ${F.body};
          font-size: 13px;
          font-weight: 500;
          color: ${C.navy};
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .floating-blog-item-date {
          font-family: ${F.mono};
          font-size: 10px;
          color: ${C.slateLight};
        }
        .floating-blog-all {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid ${C.line};
          font-family: ${F.body};
          font-size: 12px;
          font-weight: 600;
          color: ${C.primary};
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .floating-blog-all:hover { color: ${C.navy}; }
        @media (max-width: 900px) {
          .floating-blog-popover { display: none; }
        }
      ` }} />
    </div>
  )
}
