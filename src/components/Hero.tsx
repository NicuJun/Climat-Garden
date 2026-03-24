import { useEffect, useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { PHONE_NUMBER, PHONE_DISPLAY } from '../constants'

const leaves = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 9) % 88}%`,
  top: `${10 + (i * 13) % 75}%`,
  delay: `${(i * 0.5) % 3}s`,
  duration: `${5 + (i * 0.6) % 4}s`,
  size: 12 + (i % 3) * 5,
  rotate: (i * 43) % 360,
}))

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&auto=format&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(150deg, rgba(10,30,28,0.96) 0%, rgba(20,52,48,0.91) 55%, rgba(35,80,70,0.80) 100%)' }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf) => (
          <div key={leaf.id} className="absolute" style={{ left: leaf.left, top: leaf.top, animation: `floatLeaf ${leaf.duration} ${leaf.delay} ease-in-out infinite`, opacity: 0 }}>
            <svg width={leaf.size} height={leaf.size * 0.55} viewBox="0 0 24 13" fill="none" style={{ transform: `rotate(${leaf.rotate}deg)` }}>
              <ellipse cx="12" cy="6.5" rx="11" ry="5.5" fill="#5ec266" opacity="0.22" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto pt-28 pb-32">

        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(-12px)', transition: 'all 0.6s ease', transitionDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/15 bg-white/8 text-green-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Кліматичне обладнання під ключ
          </span>
        </div>

        <h1 className="leading-[1.1] mb-7" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {['Ваш', 'комфортний'].map((word, i) => (
            <span
              key={word}
              className="inline-block mr-3 text-white"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                fontWeight: 900,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(36px)',
                transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${0.2 + i * 0.12}s`,
                textShadow: '0 2px 20px rgba(0,0,0,0.35)',
              }}
            >
              {word}
            </span>
          ))}
          <br />
          <span
            className="inline-block"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #4ade80, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(36px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0.44s',
            }}
          >
            мікроклімат
          </span>
        </h1>

        <p
          className="text-white/65 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{
            fontSize: '1.05rem',
            fontWeight: 500,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.65s ease',
            transitionDelay: '0.58s',
          }}
        >
          Продаж, монтаж та обслуговування кондиціонерів і вентиляційних систем.
          Якісна техніка на будь-який бюджет — від підбору до гарантійного сервісу.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.65s ease',
            transitionDelay: '0.72s',
          }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full font-bold text-sm text-white transition-colors duration-200"
            style={{ background: '#22c55e' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#16a34a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#22c55e')}
          >
            Зв'язатися з нами
          </button>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm border transition-colors duration-200"
            style={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            <Phone size={15} strokeWidth={2.2} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce z-10"
        aria-label="Прокрутити вниз"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>

      <style>{`
        @keyframes floatLeaf {
          0%, 100% { opacity: 0; transform: translateY(0) rotate(0deg); }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-45px) rotate(22deg); }
        }
      `}</style>
    </section>
  )
}
