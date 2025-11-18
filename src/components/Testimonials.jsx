import { useEffect, useRef } from 'react'

const items = [
  { quote: 'They turned abstract vision into visceral impact.', name: 'Nova Studios' },
  { quote: 'A new bar for AI-first production.', name: 'Omni Brand' },
  { quote: 'Surgical precision. Cinematic soul.', name: 'Redline Media' },
]

export default function Testimonials() {
  const cards = useRef([])

  useEffect(() => {
    const handle = (e) => {
      cards.current.forEach((el) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / rect.width
        const dy = (e.clientY - cy) / rect.height
        el.style.transform = `rotateX(${dy * -6}deg) rotateY(${dx * 6}deg)`
      })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div key={i} ref={(el) => (cards.current[i] = el)} className="transition-transform duration-150 will-change-transform">
          <div className="rounded-xl bg-[#111]/80 border border-white/10 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="text-white text-lg">“{t.quote}”</div>
            <div className="text-zinc-500 mt-4">— {t.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
