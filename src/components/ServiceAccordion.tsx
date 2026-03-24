import { useState, useRef, useEffect, type ReactNode } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface Service {
  id: string
  title: string
  subtitle: string
  paragraphs: string[]
  icon: ReactNode
  imageUrl: string
  imageAlt: string
  accentHex: string
  accentLight: string
  accentText: string
}

interface Props { services: Service[] }

export default function ServiceAccordion({ services }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.04 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <div ref={ref} className="space-y-2.5">
      {services.map((svc, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={svc.id}
            id={svc.id}
            className={clsx(
              'rounded-2xl overflow-hidden bg-white transition-all duration-500 ease-out',
              isOpen ? 'shadow-lg' : 'shadow-sm hover:shadow-md',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
            )}
            style={{
              transitionDelay: `${i * 70}ms`,
              border: isOpen ? `1.5px solid ${svc.accentHex}35` : '1.5px solid #e2e8e7',
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200"
              style={{ background: isOpen ? svc.accentLight : '#ffffff' }}
            >
              <span
                className="font-sans font-black leading-none select-none flex-shrink-0"
                style={{ fontSize: '1.6rem', color: isOpen ? svc.accentHex : '#dde5e4', minWidth: '2rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ background: isOpen ? svc.accentHex : '#f0f5f4', color: isOpen ? '#fff' : '#5a7876' }}
              >
                {svc.icon}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-black text-sm sm:text-base leading-tight" style={{ color: isOpen ? svc.accentHex : '#0d2624' }}>
                  {svc.title}
                </p>
                <p
                  className="text-xs mt-0.5 font-medium text-slate-400 line-clamp-1"
                  style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.2s' }}
                >
                  {svc.subtitle}
                </p>
              </div>

              <ChevronDown
                size={17} strokeWidth={2.5} className="flex-shrink-0"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.35s ease',
                  color: isOpen ? svc.accentHex : '#94a3a8',
                }}
              />
            </button>

            <div
              style={{
                maxHeight: isOpen ? '800px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ height: '2px', background: `linear-gradient(90deg, ${svc.accentHex}, transparent)` }} />

              <div className="hidden md:flex" style={{ minHeight: '260px' }}>
                <div className="flex-shrink-0 relative overflow-hidden" style={{ width: '280px' }}>
                  <img
                    src={svc.imageUrl}
                    alt={svc.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transform: isOpen ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.7s ease' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, white)' }} />
                </div>

                <div className="flex-1 px-6 py-6 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    {svc.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-slate-600 text-sm leading-relaxed font-medium"
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
                          transition: 'opacity 0.4s ease, transform 0.4s ease',
                          transitionDelay: isOpen ? `${pi * 60 + 120}ms` : '0ms',
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(6px)',
                      transition: 'opacity 0.35s ease, transform 0.35s ease',
                      transitionDelay: isOpen ? '280ms' : '0ms',
                    }}
                  >
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full hover:opacity-80 transition-opacity"
                      style={{ background: svc.accentHex, color: '#ffffff' }}
                    >
                      Отримати консультацію <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:hidden px-4 py-5 flex flex-col gap-3">
                {svc.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-slate-600 text-sm leading-relaxed font-medium"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'opacity 0.4s ease, transform 0.4s ease',
                      transitionDelay: isOpen ? `${pi * 60 + 80}ms` : '0ms',
                    }}
                  >
                    {p}
                  </p>
                ))}
                <button
                  onClick={scrollToContact}
                  className="self-start inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full hover:opacity-80"
                  style={{
                    background: svc.accentHex,
                    color: '#ffffff',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                    transitionDelay: isOpen ? '260ms' : '0ms',
                  }}
                >
                  Отримати консультацію <ArrowRight size={13} />
                </button>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}