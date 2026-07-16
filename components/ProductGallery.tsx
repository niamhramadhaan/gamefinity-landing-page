import { useEffect, useRef } from 'react'
import { C, F } from './theme'

const PRODUCTS = [
  { seed: 'gf-store-mlbb', label: 'Mobile Legends', image: '/logos/mobile-legends.svg' },
  { seed: 'gf-store-freefire', label: 'Free Fire', image: '/logos/freefire.png' },
  { seed: 'gf-store-pubg', label: 'PUBG Mobile', image: '/logos/pubg-mobile.svg' },
  { seed: 'gf-store-steam', label: 'Steam Wallet', image: '/logos/steam.svg' },
  { seed: 'gf-store-googleplay', label: 'Google Play', image: '/logos/google-play.svg' },
  { seed: 'gf-store-xl', label: 'XL', image: '/logos/xlsmart.svg' },
  { seed: 'gf-store-roblox', label: 'Roblox', image: '/logos/roblox.svg' },
  { seed: 'gf-store-playstation', label: 'PlayStation', image: '/logos/playstation.svg' },
  { seed: 'gf-store-pointblank', label: 'Point Blank', image: '/logos/pointblank.svg' },
  { seed: 'gf-store-codm', label: 'Call of Duty Mobile', image: '/logos/codm.svg' },
  { seed: 'gf-store-riot', label: 'Riot Cash', image: '/logos/riot-games.svg' },
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

function gradientFor(seed: string): string {
  const hash = seed.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0)
  const angle = Math.abs(hash) % 60 + 130
  return `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px), ` +
    `linear-gradient(${angle}deg, ${C.navy} 0%, #0c3a6b 55%, ${C.primary} 100%)`
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

        const { seed, label, image } = PRODUCTS[seedIdxRef.current % PRODUCTS.length]
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
          background: ${gradientFor(seed)};
          background-size: 18px 18px, 100% 100%;
          opacity: 0;
        `

        const inner = document.createElement('div')
        inner.style.cssText = `
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10%;
        `

        const imgEl = document.createElement('img')
        imgEl.alt = label
        imgEl.loading = 'lazy'
        imgEl.style.cssText = `
          max-width: 70%;
          max-height: 55%;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.35));
        `
        imgEl.src = image

        const labelEl = document.createElement('span')
        labelEl.textContent = label
        labelEl.style.cssText = `
          font-family: ${F.display}, sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: white;
          opacity: 0.75;
          letter-spacing: 0.01em;
          text-align: center;
          white-space: nowrap;
        `

        inner.appendChild(imgEl)
        inner.appendChild(labelEl)
        el.appendChild(inner)
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
