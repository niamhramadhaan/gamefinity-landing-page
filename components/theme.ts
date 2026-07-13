// Shared design tokens for inline-styled components.
// Mirrors the @theme block in styles/globals.css so JS and CSS stay in sync.
// Direction: Tech-Forward Blue. Flat surfaces, navy + blue base, blue accent.
export const C = {
  navy: '#042C53',
  navyLight: '#0b3a6b',
  primary: '#185FA5', // brand blue + accent (light surfaces)
  interactive: '#378ADD', // accent on dark surfaces, network/line color
  accentBright: '#3B9EFF', // crisp interactive-blue: hover/focus glow, spotlight highlight (state variant, not a 2nd accent)
  neutral: '#F1EFE8',
  offWhite: '#F8F7F4',
  slate: '#475569',
  slateLight: '#64748b',
  white: '#FFFFFF',
  // Borders (flat design leans on hairlines instead of shadows)
  line: 'rgba(4,44,83,0.12)',
  lineSoft: 'rgba(4,44,83,0.07)',
  lineOnDark: 'rgba(255,255,255,0.14)',
  lineOnDarkSoft: 'rgba(255,255,255,0.08)',
  // Muted text on dark surfaces
  onDark: 'rgba(255,255,255,0.72)',
  onDarkFaint: 'rgba(255,255,255,0.5)',
}

export const F = {
  display: 'var(--font-display)',
  body: 'var(--font-body)',
  mono: 'var(--font-mono)',
}

// One radius system, documented: buttons/inputs 8px, cards 12px, tags full pill.
export const R = {
  btn: '8px',
  input: '8px',
  card: '12px',
  tag: '9999px',
}

export const MAX_W = '1200px'
