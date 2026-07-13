import React from 'react'
import { C, F } from './theme'

/**
 * Standard image placeholder — branded navy gradient with a subtle camera icon.
 * Used as a stand-in before real photography is added.
 * Each seed produces a slightly different gradient angle so tiles feel varied.
 */
export default function PlaceholderImage({ seed = 'default', alt = 'Placeholder image', className = '', style = {}, children }: { seed?: string; alt?: string; className?: string; style?: React.CSSProperties; children?: React.ReactNode }) {
  // Deterministic gradient from seed string
  const hash = seed.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0)
  const angle = Math.abs(hash) % 60 + 130 // 130–190deg range

  return (
    <div
      className={className}
      aria-label={alt}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(${angle}deg, ${C.navy} 0%, #0c3a6b 55%, ${C.primary} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        ...style,
      }}
    >
      {/* Dot grid texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
        pointerEvents: 'none',
      }} />
      {/* Camera icon */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span style={{
        fontFamily: F.mono,
        fontSize: '10px',
        color: 'rgba(255,255,255,0.25)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        position: 'relative',
      }}>
        Photo coming soon
      </span>
      {children}
    </div>
  )
}
