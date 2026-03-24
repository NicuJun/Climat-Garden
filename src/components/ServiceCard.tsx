import { useState, useRef, useEffect, type ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import clsx from 'clsx'

interface ServiceCardProps {
  id: string
  index: number
  title: string
  subtitle: string
  paragraphs: string[]
  icon: ReactNode
  imageUrl: string
  imageAlt: string
  accentColor: string
  badgeText: string
}

export default function ServiceCard({
  id,
  index,
  title,
  subtitle,
  paragraphs,
  icon,
  imageUrl,
  imageAlt,
  accentColor,
  badgeText,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={ref}
      id={id}
      className={clsx(
        'transition-all duration-700 ease-out',
        visible
          ? 'opacity-100 translate-y-0'
          : index % 2 === 0
          ? 'opacity-0 translate-x-[-60px]'
          : 'opacity-0 translate-x-[60px]'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Card
        className={clsx(
          'group overflow-hidden border-0 shadow-xl transition-all duration-500 cursor-pointer',
          hovered ? 'shadow-2xl shadow-teal-200/60 -translate-y-2' : ''
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="relative overflow-hidden h-52">
          <img
            src={imageUrl}
            alt={imageAlt}
            className={clsx(
              'w-full h-full object-cover transition-transform duration-700',
              hovered || expanded ? 'scale-110' : 'scale-100'
            )}
          />
          <div className={clsx(
            'absolute inset-0 transition-opacity duration-500',
            `bg-gradient-to-t from-teal-950/90 via-teal-900/40 to-transparent`,
          )} />

          <div className={clsx(
            'absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-300',
            accentColor,
            hovered ? 'scale-110 rotate-6' : ''
          )}>
            {icon}
          </div>

          <div className="absolute top-4 right-4 font-sans text-6xl font-bold text-white/10 leading-none select-none">
            0{index + 1}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <Badge variant="outline" className="mb-2 border-white/30 text-white/80 bg-white/10 backdrop-blur text-xs">
              {badgeText}
            </Badge>
            <h3 className="font-sans text-xl font-bold text-white leading-tight">{title}</h3>
          </div>
        </div>

        <div className="p-5 bg-white">
          <p className="text-teal-700/80 text-sm leading-relaxed mb-4 font-sans">{subtitle}</p>

          <div
            className={clsx(
              'overflow-hidden transition-all duration-600 ease-in-out',
              expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            )}
            style={{ transition: 'max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease' }}
          >
            <div className="space-y-3 pb-4 border-t border-teal-100 pt-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={clsx(
                    'text-teal-800/75 text-sm leading-relaxed font-sans transition-all duration-500',
                    expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: expanded ? `${i * 80 + 100}ms` : '0ms' }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <button
              className={clsx(
                'flex items-center gap-1.5 text-sm font-semibold transition-all duration-300',
                expanded ? 'text-teal-500' : 'text-teal-700 hover:text-teal-900'
              )}
              onClick={(e) => { e.stopPropagation(); setExpanded(!expanded) }}
            >
              <ChevronRight
                size={16}
                className={clsx(
                  'transition-transform duration-300',
                  expanded ? 'rotate-90 text-teal-400' : 'rotate-0'
                )}
              />
              {expanded ? 'Згорнути' : 'Читати більше'}
            </button>

            <Button
              variant="teal"
              size="sm"
              onClick={(e) => { e.stopPropagation(); scrollToContact() }}
              className="text-xs py-2 px-4"
            >
              Замовити
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
