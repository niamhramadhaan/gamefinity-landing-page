import { useEffect, useRef, useState } from 'react'

// Wraps children in a scroll-reveal container. Adds `.is-visible` the first
// time the element crosses into view, then stops observing so it stays put.
// Content is visible by default; `.reveal-ready` on <html> gates the animation.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }: { as?: React.ElementType; delay?: number; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    // Signal to CSS that JS is ready and animations can run
    document.documentElement.classList.add('reveal-ready')

    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const delayClass = delay ? ` reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' is-visible' : ''}${delayClass} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
