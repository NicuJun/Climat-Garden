import { Instagram, Phone, X } from 'lucide-react'
import { useSticky } from '../hooks/useSticky'
import { PHONE_NUMBER, PHONE_DISPLAY, INSTAGRAM_URL } from '../constants'
import clsx from 'clsx'

export default function Header() {
  const isSticky = useSticky(80)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isSticky ? 'py-2' : 'py-4'
      )}
      style={{
        background: 'rgba(13,38,36,0.96)',
        backdropFilter: 'blur(14px)',
        boxShadow: isSticky ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="На початок"
          className="flex-shrink-0 group"
        >
          <img
            src="/logo.jpg"
            alt="Climat Garden"
            className={clsx(
              'object-contain rounded-xl transition-all duration-300 group-hover:opacity-85',
              isSticky ? 'h-9' : 'h-11'
            )}
          />
        </button>

        <div className="flex items-center gap-3 sm:gap-4">

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
          >
            <Phone size={14} strokeWidth={2.2} />
            <span className="hidden md:inline">{PHONE_DISPLAY}</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="sm:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Зателефонувати"
          >
            <Phone size={18} strokeWidth={2} />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/75 hover:text-white transition-colors duration-200"
          >
            <Instagram size={18} strokeWidth={1.8} />
          </a>
          
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white transition-colors duration-200 whitespace-nowrap"
            style={{ background: '#22c55e' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#16a34a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#22c55e')}
          >
            Зв'язатися
          </button>
        </div>
      </div>
    </header>
  )
}
