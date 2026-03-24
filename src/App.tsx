import { Wind, Wrench, ShoppingCart, AirVent, Leaf } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceAccordion from './components/ServiceAccordion'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { Badge } from './components/ui/badge'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const services = [
  {
    id: 'sale',
    title: 'Продаж кондиціонерів',
    subtitle: 'Якісна техніка на будь-який бюджет. Прорахунок, підбір, гарантія.',
    icon: <ShoppingCart size={18} strokeWidth={2} />,
    imageUrl: 'aa.jpg',
    imageAlt: 'Кондиціонер у сучасному інтер\'єрі',
    accentHex: '#2d7d74',
    accentLight: '#f0faf9',
    accentText: 'text-teal-800',
    paragraphs: [
      'Climat Garden здійснює прорахунок та продаж кліматичного обладнання з подальшим гарантійним обслуговуванням. Якісна техніка на будь-який бюджет.',
      'Всі послуги під ключ — від підбору до після продажного сервісу. Якщо ви плануєте купити кондиціонер, але не знаєте, який саме потрібен — зателефонуйте, і ми з радістю допоможемо у виборі.',
      'Наші спеціалісти приїдуть на місце, прорахують вартість обладнання та монтажу, узгодять місце встановлення для оптимальної роботи кондиціонера.',
    ],
  },
  {
    id: 'installation',
    title: 'Монтаж кондиціонерів',
    subtitle: 'Досвідчені монтажники. Дотримання норм виробника. Гарантія на роботи.',
    icon: <Wrench size={18} strokeWidth={2} />,
    imageUrl: 'bb.jpg',
    imageAlt: 'Монтаж кондиціонера',
    accentHex: '#2e7d32',
    accentLight: '#f1faf1',
    accentText: 'text-green-800',
    paragraphs: [
      'Досвідчені монтажники кліматичного обладнання здійснять монтаж кондиціонера різної потужності з урахуванням норм виробників, щоб не позбавити клієнта права на гарантійне обслуговування.',
      'Монтаж кондиціонерів проводиться сучасним обладнанням у будинках із ремонтом. Також надається послуга з прокладання трас під кондиціонери на етапі будівництва.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Технічне обслуговування',
    subtitle: 'Щорічне ТО — здоров\'я вашої родини та довгий термін служби.',
    icon: <AirVent size={18} strokeWidth={2} />,
    imageUrl: 'cc.jpg',
    imageAlt: 'Технічне обслуговування кондиціонера',
    accentHex: '#00796b',
    accentLight: '#f0faf8',
    accentText: 'text-teal-900',
    paragraphs: [
      'Climat Garden щиро рекомендує здійснювати щорічне планове технічне обслуговування кондиціонерів. Ця послуга не лише продовжить термін експлуатації кондиціонера, а й захистить вашу сім\'ю.',
      'При здійсненні технічного обслуговування сервісанти промивають решітки повітропроводів і обробляють їх антибактеріальною речовиною — це вбереже вашу родину від алергій і захворювань дихальних шляхів.',
      'Потурбуйтесь про чистоту повітря в домі та своєчасно зробіть технічне обслуговування!',
    ],
  },
  {
    id: 'ventilation',
    title: 'Вентиляція',
    subtitle: 'Рекуперація та вентиляція — свіже повітря і здоровий мікроклімат.',
    icon: <Wind size={18} strokeWidth={2} />,
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=80',
    imageAlt: 'Система вентиляції',
    accentHex: '#388e3c',
    accentLight: '#f2faf2',
    accentText: 'text-green-900',
    paragraphs: [
      'Мікроклімат у будинку надзвичайно важливий. Часто вологість та неприємні запахи можуть заважати насолоджуватись домашнім затишком. Вихід є — системи рекуперації повітря.',
      'Встановлення рекуператора повітря гарантує постійний приток свіжого повітря та регулює вологість у приміщенні. Чисте повітря якісно впливає на самопочуття мешканців і гарантує міцний сон.',
      'Окрім рекуператорів, Climat Garden встановлює сучасні системи вентиляції на будинок: прорахунок, підбір обладнання і монтаж. Просто зателефонуйте для консультації.',
    ],
  },
]

export default function App() {
  useScrollAnimation()
  return (
    <div className="min-h-screen" style={{ background: '#f2f7f5' }}>
      <Header />
      <main>
        <Hero />
        <section id="services" className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <Badge variant="outline" className="mb-5 px-4 py-1.5 text-xs tracking-widest uppercase border-teal-300 text-teal-700 font-bold bg-white">
                <Leaf size={10} className="mr-1.5 text-green-500" />
                Наші послуги
              </Badge>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-teal-950 mb-3 leading-tight">
                Що ми робимо
              </h2>
              <p className="text-slate-500 text-sm font-semibold">
                Натисніть на послугу — побачите деталі
              </p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
              </div>
            </div>
            <div className="animate-on-scroll">
              <ServiceAccordion services={services} />
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
