import { useEffect, useRef } from 'react'
import { C, F } from './theme'

const PRODUCT_SEEDS = [
  'gf-store-mlbb',
  'gf-store-freefire',
  'gf-store-pubg',
  'gf-store-steam',
  'gf-store-googleplay',
  'gf-store-xl',
]

const PRODUCT_LABELS = [
  'Mobile Legends',
  'Free Fire',
  'PUBG Mobile',
  'Steam Wallet',
  'Google Play',
  'XL',
]

const SIZES = [
  { w: 120, h: 90 },
  { w: 100, h: 75 },
  { w: 140, h: 105 },
  { w: 110, h: 82 },
]

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function createPlaceholderSvg(seed: string, label: string): string {
  const hash = seed.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0)
  const angle = Math.abs(hash) % 60 + 130
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="210" viewBox="0 0 280 210">
      <defs>
        <linearGradient id="bg-${seed}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle})">
          <stop offset="0%" stop-color="${C.navy}"/>
          <stop offset="55%" stop-color="#0c3a6b"/>
          <stop offset="100%" stop-color="${C.primary}"/>
        </linearGradient>
      </defs>
      <rect width="280" height="210" fill="url(#bg-${seed})"/>
      <g opacity="0.06">
        ${Array.from({ length: 15 }, (_, i) => {
          const x = 10 + (i % 5) * 55
          const y = 10 + Math.floor(i / 5) * 55
          return `<circle cx="${x}" cy="${y}" r="1" fill="white"/>`
        }).join('')}
      </g>
      <g transform="translate(140, 95)" opacity="0.25">
        <rect x="-18" y="-14" width="36" height="28" rx="4" fill="none" stroke="white" stroke-width="1.2"/>
        <circle cx="0" cy="0" r="7" fill="none" stroke="white" stroke-width="1.2"/>
      </g>
      <text x="140" y="145" text-anchor="middle" font-family="${F.display}, sans-serif" font-size="13" font-weight="600" fill="white" opacity="0.7">${label}</text>
    </svg>
  `.trim()
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default function ProductGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)
  const zIndexRef = useRef(1)
  const seedIdxRef = useRef(0)

  useEffect(() => {
    let gsapScript = document.getElementById('gs-gsap') as HTMLScriptElement | null
    if (!gsapScript) {
      gsapScript = document.createElement('script')
      gsapScript.id = 'gs-gsap'
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
      gsapScript.async = true
      document.head.appendChild(gsapScript)
    }

    function init() {
      const gsap = (window as any).gsap
      if (!gsap) return

      function handleVisibility() {
        if (document.hidden) {
          pausedRef.current = true
          gsap.globalTimeline.pause()
          containerRef.current?.querySelectorAll('[data-product-tile]').forEach(el => el.remove())
        } else {
          pausedRef.current = false
          gsap.globalTimeline.resume()
        }
      }
      document.addEventListener('visibilitychange', handleVisibility)

      function spawnTile() {
        if (pausedRef.current) return
        const container = containerRef.current
        if (!container) return

        const seed = PRODUCT_SEEDS[seedIdxRef.current % PRODUCT_SEEDS.length]
        const label = PRODUCT_LABELS[seedIdxRef.current % PRODUCT_LABELS.length]
        seedIdxRef.current++

        const shape = pick(SIZES)
        const cw = container.offsetWidth || 500
        const ch = container.offsetHeight || 400

        const maxScale = Math.min(cw / shape.w, ch / shape.h, 1.2)
        const tileW = Math.round(shape.w * maxScale)
        const tileH = Math.round(shape.h * maxScale)

        const centerX = cw / 2
        const centerY = ch / 2

        // Originkit outToIn: spawn from edges, fly inward
        const i = seedIdxRef.current
        const blankArea = 45
        const angle = rand(0, Math.PI * 2)
        const cosA = Math.cos(angle)
        const sinA = Math.sin(angle)

        // Entry: far outside the visible frame (2.5x radius)
        const entryR = Math.max(cw, ch) * 0.85
        const entryD = entryR - blankArea
        const startX = cosA * entryD * 2.5
        const startY = sinA * entryD * 2.5

        // Target: near center (within blankArea)
        const targetD = rand(10, blankArea * 0.8)
        const targetX = cosA * targetD
        const targetY = sinA * targetD

        // Exit: fly back outward (alternating direction)
        const exitSign = i % 2 === 0 ? 1 : -1
        const exitR = entryR
        const exitX = exitSign * cosA * exitR
        const exitY = exitSign * sinA * exitR

        const el = document.createElement('div')
        el.setAttribute('data-product-tile', '1')
        el.style.cssText = `
          position: absolute;
          width: ${tileW}px;
          height: ${tileH}px;
          left: ${centerX}px;
          top: ${centerY}px;
          transform-origin: center center;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          z-index: ${zIndexRef.current++};
          pointer-events: none;
          will-change: transform, opacity;
          translate: -50% -50%;
          background: ${C.navy};
          opacity: 0;
        `

        const imgEl = document.createElement('img')
        imgEl.alt = label
        imgEl.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;'
        imgEl.src = createPlaceholderSvg(seed, label)

        el.appendChild(imgEl)
        container.appendChild(el)

        const entryDur = rand(1.8, 2.4)
        const holdDur = rand(1.5, 3.0)
        const exitDur = rand(0.8, 1.2)
        const startScale = rand(0.2, 0.4)
        const midScale = rand(0.85, 1.05)

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(el, { opacity: 0 })
            el.remove()
          }
        })

        // Appear: from far edge → to near center (outToIn)
        tl.set(el, { scale: startScale, opacity: 0, x: startX, y: startY, rotation: rand(-8, 8) })
          .to(el, {
            scale: midScale,
            opacity: 1,
            x: targetX,
            y: targetY,
            duration: entryDur,
            ease: 'power2.out',
          })
          // Hold near center
          .to(el, {
            scale: midScale * 1.05,
            x: targetX * 1.1,
            y: targetY * 1.1,
            duration: holdDur,
            ease: 'none',
          })
          // Disappear: shrink + fade at center (no fly outward)
          .to(el, {
            scale: 0,
            x: targetX,
            y: targetY,
            opacity: 0,
            duration: exitDur,
            ease: 'power2.in',
          })
      }

      const spawnInterval = setInterval(() => {
        if (pausedRef.current) return
        const active = containerRef.current?.querySelectorAll('[data-product-tile]').length || 0
        if (active < 6) {
          spawnTile()
        }
      }, 800)

      timerRef.current = spawnInterval

      return () => {
        document.removeEventListener('visibilitychange', handleVisibility)
        clearInterval(spawnInterval)
      }
    }

    let cleanup: (() => void) | undefined

    if ((window as any).gsap) {
      cleanup = init()
    } else {
      gsapScript.addEventListener('load', () => { cleanup = init() })
    }

    return () => {
      cleanup?.()
      if (timerRef.current) clearInterval(timerRef.current)
      const gsap = (window as any).gsap
      if (gsap) {
        try { gsap.globalTimeline.clear() } catch {}
      }
      containerRef.current?.querySelectorAll('[data-product-tile]').forEach(el => el.remove())
      zIndexRef.current = 1
      seedIdxRef.current = 0
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 3',
        background: C.navy,
        borderRadius: '12px',
        overflow: 'hidden',
        border: `1px solid ${C.lineOnDark}`,
      }}
    >
      {/* Dot grid texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.06,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      {/* Center label */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        <span style={{
          fontFamily: F.mono,
          fontSize: '10px',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginTop: '8px',
        }}>
          1,000+ products
        </span>
      </div>
    </div>
  )
}
