import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

// lucide-react dropped brand icons, so social marks are hand-drawn SVGs like the rest of the site.
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.5c0-.93.26-1.56 1.59-1.56h1.7V3.1C15.98 3.03 15 2.94 13.85 2.94c-2.4 0-4.05 1.47-4.05 4.16v2.5H7v3.2h2.8V21h3.7z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M21.6 7.4a2.4 2.4 0 00-1.7-1.7C18.2 5.3 12 5.3 12 5.3s-6.2 0-7.9.4A2.4 2.4 0 002.4 7.4C2 9.1 2 12 2 12s0 2.9.4 4.6a2.4 2.4 0 001.7 1.7c1.7.4 7.9.4 7.9.4s6.2 0 7.9-.4a2.4 2.4 0 001.7-1.7c.4-1.7.4-4.6.4-4.6s0-2.9-.4-4.6zM10 15V9l5.2 3-5.2 3z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v5.8c0 1.07-.16 2.18-.73 3.09-1.28 2.08-3.9 3.07-6.17 2.31-2.91-.97-4.6-4.25-3.46-7.14 1.05-2.65 4.39-4.04 7.1-2.96v4.06c-1.24-.46-2.82-.12-3.48 1.05-.62 1.11-.25 2.75.87 3.32 1.17.6 2.8.27 3.48-.86.51-.86.55-1.92.56-2.92V.02h-2.25z" />
  </svg>
)

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/gamefinity.id/', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@gamefinity.id', Icon: TikTokIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/gamefinity.id/', Icon: FacebookIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/c/gamefinityid', Icon: YoutubeIcon },
]

const companyLinks = [
  { label: 'Our story', href: '#how-we-got-here' },
  { label: 'The toolkit', href: '#toolkit' },
  { label: 'Partner with us', href: '#partner' },
  { label: 'Privacy policy', href: '/privacy', internal: true },
  { label: 'Terms of service', href: '/terms', internal: true },
]

const productLinks = [
  { label: 'Mini Games SDK', href: 'https://mini-games.gamefinity.id' },
  { label: 'Mini Cinema SDK', href: 'https://mini-cinema.gamefinity.id' },
  { label: 'Mini Chatto SDK', href: 'https://mini-chatto.gamefinity.id' },
]

export default function Footer() {
  const textRef = useRef<SVGTextElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    function fitWatermark() {
      if (!svgRef.current || !textRef.current) return
      try {
        const bbox = textRef.current.getBBox()
        if (bbox && bbox.width > 0) {
          svgRef.current.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
        }
      } catch (e) {
        console.warn('Failed to measure font bbox', e)
      }
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark)
    } else {
      fitWatermark()
    }

    window.addEventListener('resize', fitWatermark)
    const timeout = setTimeout(fitWatermark, 500)

    return () => {
      window.removeEventListener('resize', fitWatermark)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <footer className="bg-white px-5 sm:px-6 py-12 relative overflow-hidden font-sans pt-16">
      <div className="max-w-[1150px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-stretch">
        {/* Left Card */}
        <div className="relative min-h-[360px] rounded-[28px] p-8 lg:p-10 overflow-hidden flex flex-col justify-between shadow-[0_12px_40px_rgba(2,98,167,0.1)] bg-slate-50 border border-slate-200">
          <iframe
            src="https://lottie.host/embed/1dab5677-9dd9-4c38-a024-580174490fe0/MwLBQWvigz.lottie"
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            style={{ border: 'none' }}
          ></iframe>
          <div className="absolute inset-0 bg-white/10 z-0"></div>

          <div className="flex items-center relative z-10 h-8">
            <img
              src="https://gamefinity.id/_next/static/media/gamefinity-logo.4018141e.png"
              alt="Gamefinity"
              className="h-full w-auto object-contain filter drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                if (e.currentTarget.nextElementSibling)
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'
              }}
            />
            <span
              className="h-8 bg-transparent px-2 items-center justify-center text-slate-900 font-bold text-2xl tracking-tight hidden"
              style={{ display: 'none' }}
            >
              GAMEFINITY
            </span>
          </div>

          <div className="mt-auto mb-8 relative z-10 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white max-w-fit">
            <h3 className="text-[22px] sm:text-[24px] font-bold text-slate-800 leading-[1.35] drop-shadow-sm mb-2">
              Transforming the gaming landscape,
              <br />
              <span className="text-[#0262a7] font-black">built for gamers.</span>
            </h3>
            <p className="text-slate-600 text-[11px] font-medium leading-relaxed max-w-[280px] mt-4">
              PT Bangun Media Integra
              <br />
              Jl. Palem Raya Sektor 1.3 BJ No. 29, BSD City, Tangerang Selatan, Banten, 15318
            </p>
          </div>

          <div className="flex justify-between items-center relative z-10 border-t border-slate-200 pt-6">
            <span className="text-[16px] font-black uppercase tracking-wider text-slate-800">
              Join the guild!
            </span>
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm hover:bg-slate-50 hover:-translate-y-1 hover:text-[#0262a7] hover:border-blue-200 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#f0f1f5] rounded-[28px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between relative mt-12 lg:mt-0">
          {/* Floating CTA Badge */}
          <div className="absolute -top-[55px] right-6 lg:right-10 z-20 flex flex-col items-end gap-1">
            <a
              href="#partner"
              className="w-[110px] h-[110px] flex items-center justify-center relative group cursor-pointer transition-transform"
              aria-label="Jump to partner with us"
            >
              <motion.img
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                src="https://gamefinity.id/assets/cub-care/cta.png"
                alt="Ready to play"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </a>
            <div className="flex items-center gap-1 -rotate-6 mt-1 mr-4">
              <span className="text-[15px] font-bold uppercase tracking-wider text-slate-600 whitespace-nowrap">
                Ready to play?
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-[90px] pt-8 lg:pt-6">
            <div>
              <h4 className="font-sans text-[15px] font-bold uppercase tracking-wider text-slate-800 mb-5">
                Company
              </h4>
              <nav className="flex flex-col gap-3.5" aria-label="Company">
                {companyLinks.map((link) =>
                  link.internal ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[14px] font-semibold text-[#111827] hover:text-[#1f65d6] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[14px] font-semibold text-[#111827] hover:text-[#1f65d6] transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>
            </div>
            <div>
              <h4 className="font-sans text-[15px] font-bold uppercase tracking-wider text-slate-800 mb-5">
                Products
              </h4>
              <nav className="flex flex-col gap-3.5" aria-label="Products">
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] font-medium text-[#4b5563] hover:text-[#0262a7] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-16 flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-8">
            <div className="text-[12.5px] font-medium text-slate-400">
              © {new Date().getFullYear()} PT Bangun Media Integra. All rights reserved.
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[15px] font-normal text-slate-500 leading-[1.45]">
                The game never stops.
                <br />
                <strong className="block text-[19px] font-bold text-[#111827] mt-1">
                  Level up with Gamefinity.
                </strong>
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.hash = 'partner'
                }}
                className="w-full sm:w-[310px] bg-white border border-slate-200 rounded-xl p-1 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-stretch"
              >
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 bg-transparent border-none outline-none text-[13.5px] text-[#111827] px-3.5 placeholder:text-slate-400 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#0262a7] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-lg shadow-[0_6px_20px_rgba(2,98,167,0.28),_0_2px_8px_rgba(2,98,167,0.15)] hover:bg-[#014d84] hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(2,98,167,0.30)] transition-all duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div
        className="max-w-[1150px] mx-auto mt-[-50px] sm:mt-[-80px] lg:mt-[-100px] pointer-events-none select-none relative z-0 leading-none"
        aria-hidden="true"
      >
        <svg
          ref={svgRef}
          viewBox="62 95 876 175"
          className="block w-full h-auto overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            ref={textRef}
            x="500"
            y="240"
            textAnchor="middle"
            className="font-sans font-black tracking-tighter"
            fontSize="300"
            fill="rgba(0, 0, 0, 0.035)"
          >
            GAMEFINITY
          </text>
        </svg>
      </div>
    </footer>
  )
}
