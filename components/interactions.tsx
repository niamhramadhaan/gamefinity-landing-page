// Lightweight tech-brand micro-interactions. Pointer-driven, mutate the element
// directly via event.currentTarget (no React state for continuous values), and
// honor prefers-reduced-motion (gated in CSS).

// Spread onto a card that also has className "spotlight" and renders <Spot/> last.
export const spotHandlers = {
  onPointerMove: e => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  },
}

export function Spot() {
  return <span className="spot" aria-hidden="true" />
}
