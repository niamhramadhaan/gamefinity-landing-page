import { useState } from 'react'
import Reveal from './Reveal'
import { C, F, R, MAX_W } from './theme'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const trustPoints = [
  'One integration across three modules. Pick what fits your app.',
  'Revenue share on games, video, and live rooms.',
  'A team that has run this at community scale since 2017.',
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'A work email lets us reply.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email address looks incomplete.'
  if (!values.company.trim()) errors.company = 'Which app or company are we talking to?'
  return errors
}

function Field({ id, label, type = 'text', value, onChange, onBlur, error, textarea, placeholder }) {
  const describedBy = error ? `${id}-error` : undefined
  const base = {
    width: '100%',
    fontFamily: F.body,
    fontSize: '15px',
    color: C.navy,
    background: C.white,
    border: `1.5px solid ${error ? '#d1584f' : 'rgba(4,44,83,0.18)'}`,
    borderRadius: R.input,
    padding: '12px 14px',
    outline: 'none',
    transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      <label htmlFor={id} style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
        {label}
      </label>
      {textarea ? (
        <textarea id={id} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} rows={4} aria-invalid={!!error} aria-describedby={describedBy} style={{ ...base, resize: 'vertical', minHeight: '104px' }} />
      ) : (
        <input id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} aria-invalid={!!error} aria-describedby={describedBy} style={base} />
      )}
      {error && (
        <span id={`${id}-error`} role="alert" style={{ fontFamily: F.body, fontSize: '13px', color: '#ffb4ac' }}>
          {error}
        </span>
      )}
    </div>
  )
}

export default function Partner() {
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const setField = key => e => {
    const next = { ...values, [key]: e.target.value }
    setValues(next)
    if (touched[key]) setErrors(validate(next))
  }
  const onBlur = key => () => {
    setTouched(t => ({ ...t, [key]: true }))
    setErrors(validate(values))
  }
  const handleSubmit = e => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, company: true })
    if (Object.keys(found).length === 0) setSubmitted(true)
  }

  return (
    <section id="partner" className="dot-grid partner-bg" style={{ borderTop: 'none' }}>
      <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
        <div className="partner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <Reveal>
            <span style={{ fontFamily: F.mono, fontSize: '12px', fontWeight: 500, color: C.interactive, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Partner with us
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
              Put the engine to work in your app.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '17px', lineHeight: 1.65, color: C.onDark, maxWidth: '46ch', margin: '0 0 30px' }}>
              Tell us where you'd like more time-in-app. We'll show you what games, drama, or live chat could look like on your surfaces, and how the numbers work.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {trustPoints.map(t => (
                <li key={t} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontFamily: F.body, fontSize: '15px', color: 'rgba(255,255,255,0.88)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                    <path d="M4 10.4L8.2 14.5L16 6.5" stroke={C.interactive} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '36px' }}>
              <h3 style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 600, color: C.white, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
                Frequently asked
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[
                  { q: 'How does integration work?', a: 'One API call connects your app to games, video, and live chat modules. Most partners ship within 2–4 weeks.' },
                  { q: 'What apps do you work with?', a: 'Super apps, fintech, e-commerce, education, and entertainment apps with active daily users in Indonesia.' },
                  { q: 'What\'s the revenue model?', a: 'Revenue share across games, video, and live rooms. No upfront fees — we grow when you grow.' },
                  { q: 'Do you support non-Indonesian apps?', a: 'Yes. We help global companies localize, set up payments, and navigate distribution for the Indonesian market.' },
                ].map(({ q, a }) => (
                  <details key={q} style={{ borderBottom: `1px solid ${C.lineOnDark}` }}>
                    <summary style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.88)',
                      padding: '14px 0',
                      cursor: 'pointer',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      {q}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, transition: 'transform 0.2s ease' }}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <p style={{ fontFamily: F.body, fontSize: '13.5px', lineHeight: 1.6, color: C.onDark, margin: '0 0 14px', maxWidth: '40ch' }}>
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} style={{
            background: 'rgba(255,255,255,0.05)',
            border: `1px solid ${C.lineOnDark}`,
            borderRadius: R.card,
            padding: 'clamp(24px, 3vw, 34px)',
          }}>
            {submitted ? (
              <div role="status" style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: R.btn, background: 'rgba(55,138,221,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5L10 17.5L19 7" stroke={C.interactive} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 500, color: C.white, margin: '0 0 10px' }}>
                  Thanks, {values.name.trim().split(' ')[0]}. We've got it.
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '15px', lineHeight: 1.6, color: C.onDark, maxWidth: '38ch', margin: '0 auto' }}>
                  Someone from the partnerships team will reply to {values.email.trim()} within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <Field id="name" label="Your name" value={values.name} onChange={setField('name')} onBlur={onBlur('name')} error={touched.name && errors.name} placeholder="Dewi Anggraini" />
                <Field id="email" label="Work email" type="email" value={values.email} onChange={setField('email')} onBlur={onBlur('email')} error={touched.email && errors.email} placeholder="dewi@yourapp.id" />
                <Field id="company" label="App or company" value={values.company} onChange={setField('company')} onBlur={onBlur('company')} error={touched.company && errors.company} placeholder="Ruangku Super App" />
                <Field id="message" label="What are you hoping to add? (optional)" value={values.message} onChange={setField('message')} onBlur={onBlur('message')} textarea placeholder="We want more daily sessions on our rewards tab." />
                <button type="submit" className="partner-submit">Start the conversation</button>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: C.onDarkFaint, margin: 0, textAlign: 'center' }}>
                  We reply to every serious inquiry. No mailing lists.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-bg {
          position: relative;
          background-color: ${C.navy};
          background-image:
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cpath d='M0 20h12m16 0h12M20 0v12m0 16v12'/%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/g%3E%3C/svg%3E"),
            radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px, 24px 24px;
          background-position: 0 0, -1px -1px;
        }
        .partner-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 80% 90%, rgba(55,138,221,0.1), transparent 70%);
          pointer-events: none;
        }
        .partner-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(55,138,221,0.3) 40%, rgba(55,138,221,0.5) 50%, rgba(55,138,221,0.3) 60%, transparent);
        }
        #partner input::placeholder,
        #partner textarea::placeholder { color: rgba(4,44,83,0.4); }
        #partner input:focus,
        #partner textarea:focus {
          border-color: ${C.accentBright} !important;
          box-shadow: 0 0 0 3px rgba(59,158,255,0.28) !important;
        }
        .partner-submit {
          font-family: ${F.body};
          font-size: 15px;
          font-weight: 600;
          color: ${C.white};
          background: ${C.primary};
          border: none;
          border-radius: ${R.btn};
          padding: 14px 24px;
          cursor: pointer;
          margin-top: 4px;
          transition: background 0.18s ease, transform 0.1s ease;
        }
        .partner-submit:hover { background: #2270bd; }
        .partner-submit:active { transform: scale(0.985); }
        @media (max-width: 860px) {
          .partner-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
        #partner details[open] summary svg { transform: rotate(180deg); }
        #partner details summary::-webkit-details-marker { display: none; }
        #partner details summary::marker { display: none; content: ''; }
      ` }} />
    </section>
  )
}
