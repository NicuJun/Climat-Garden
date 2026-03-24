import { Phone, Instagram, MapPin, Heart } from 'lucide-react'
import {
  PHONE_NUMBER, PHONE_DISPLAY,
  PHONE_NUMBER_2, PHONE_DISPLAY_2,
  INSTAGRAM_URL, INSTAGRAM_HANDLE,
  ADDRESS, MAPS_URL,
} from '../constants'

export default function Footer() {
  return (
    <footer style={{ background: '#081a18' }} className="text-white/55 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Climat Garden"
              className="h-9 w-auto object-contain rounded-lg opacity-90"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
            <div>
              <span className="font-sans text-sm font-black text-white block leading-tight">Climat Garden</span>
              <span className="text-white/35 text-xs font-medium">Кліматичне обладнання</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-1.5 text-xs font-semibold hover:text-green-400 transition-colors">
              <Phone size={12} /> {PHONE_DISPLAY}
            </a>
            <a href={`tel:${PHONE_NUMBER_2}`} className="flex items-center gap-1.5 text-xs font-semibold hover:text-teal-400 transition-colors">
              <Phone size={12} /> {PHONE_DISPLAY_2}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold hover:text-pink-400 transition-colors">
              <Instagram size={12} /> {INSTAGRAM_HANDLE}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold hover:text-white transition-colors">
              <MapPin size={12} /> {ADDRESS}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(45,125,116,0.3)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>© {new Date().getFullYear()} Climat Garden.</p>
            <p className="flex items-center gap-1.5 font-medium">
              Зроблено з <Heart size={10} className="text-green-500 fill-green-500" /> в Україні
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
