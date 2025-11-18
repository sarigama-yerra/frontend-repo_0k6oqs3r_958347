import { useRef, useEffect } from 'react'

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  thumbnail: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop`,
}))

export default function Portfolio() {
  const scroller = useRef(null)

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div ref={scroller} className="overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
      <div className="flex gap-6 pr-6">
        {items.map((item) => (
          <div key={item.id} className="group relative w-[320px] h-[200px] flex-none rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/5">
            <img src={item.thumbnail} alt="thumb" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 ring-1 ring-[#ff1a1a]/20 rounded-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <video className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition-opacity" muted loop preload="none" src="" />
            <div className="absolute bottom-3 left-3 text-white font-semibold drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]">{item.title}</div>
            <div className="absolute inset-0 pointer-events-none border border-[#ff1a1a]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  )
}
