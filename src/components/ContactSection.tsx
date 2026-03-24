import { Phone, Instagram, MapPin } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import {
  PHONE_NUMBER, PHONE_DISPLAY,
  PHONE_NUMBER_2, PHONE_DISPLAY_2,
  INSTAGRAM_URL, INSTAGRAM_HANDLE,
  ADDRESS, MAPS_URL,
} from '../constants'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 sm:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2624 0%, #1a3e3a 50%, #225550 100%)' }}
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #2dd4bf, transparent)' }} />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">

        <div className="text-center mb-14 animate-on-scroll">
          <Badge className="mb-6 bg-white/8 text-green-300 border-green-500/25 px-5 py-2 text-xs tracking-widest uppercase font-bold backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse inline-block" />
            Ми завжди на зв'язку
          </Badge>
          <h2 className="font-sans text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Зв'язатися з нами
          </h2>
          <p className="text-white/60 text-base font-semibold max-w-md mx-auto leading-relaxed">
            Зателефонуйте або напишіть у Instagram — безкоштовна консультація і виїзд на об'єкт.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-on-scroll">

          <a href={`tel:${PHONE_NUMBER}`} className="group block">
            <Card className="border border-white/10 bg-white/6 backdrop-blur-sm hover:bg-white/12 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500/40 transition-all duration-300 cursor-pointer" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <CardContent className="pt-7 pb-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-900/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white/45 text-xs font-bold uppercase tracking-widest mb-1">Основний</p>
                  <p className="text-white font-sans text-base font-black">{PHONE_DISPLAY}</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href={`tel:${PHONE_NUMBER_2}`} className="group block">
            <Card className="border border-white/10 bg-white/6 backdrop-blur-sm hover:bg-white/12 hover:-translate-y-2 hover:shadow-2xl hover:border-teal-500/40 transition-all duration-300 cursor-pointer" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <CardContent className="pt-7 pb-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-900/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white/45 text-xs font-bold uppercase tracking-widest mb-1">Додатковий</p>
                  <p className="text-white font-sans text-base font-black">{PHONE_DISPLAY_2}</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <Card className="border border-white/10 bg-white/6 backdrop-blur-sm hover:bg-white/12 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-500/40 transition-all duration-300 cursor-pointer" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <CardContent className="pt-7 pb-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
                  <Instagram size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white/45 text-xs font-bold uppercase tracking-widest mb-1">Instagram</p>
                  <p className="text-white font-sans text-base font-black">{INSTAGRAM_HANDLE}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="mt-5 animate-on-scroll">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/8 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <MapPin size={20} className="text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-white/70 font-bold text-sm group-hover:text-white transition-colors">{ADDRESS}</span>
            <span className="text-white/30 text-xs font-semibold">— відкрити на карті →</span>
          </a>
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Button
            variant="green"
            size="lg"
            onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
            className="text-sm font-bold px-8 py-3 shadow-xl shadow-green-900/40"
          >
            <Phone size={20} strokeWidth={2.2} />
            Зателефонувати зараз
          </Button>
          <p className="mt-4 text-white/35 text-sm font-semibold">Безкоштовна консультація та виїзд на об'єкт</p>
        </div>
      </div>
    </section>
  )
}
