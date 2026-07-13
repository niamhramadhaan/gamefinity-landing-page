import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `value` once it scrolls into view.
// Honors prefers-reduced-motion by showing the final value immediately.
export default function CountUp({ value, decimals = 0, prefix = '', suffix = '', duration = 1400, style, className }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      if (started.current) return
      started.current = true
      if (prefersReduced) {
        setDisplay(value)
        return
      }
      let raf
      let startTs = null
      const step = ts => {
        if (startTs === null) startTs = ts
        const p = Math.min((ts - startTs) / duration, 1)
        // easeOutCubic: decelerate, no overshoot
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(value * eased)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
      return () => cancelAnimationFrame(raf)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
