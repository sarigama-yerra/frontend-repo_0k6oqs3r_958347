import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const members = [
  { name: 'Aiko', role: 'Director • Anime', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Rei', role: 'Creative Engineer', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Kai', role: 'Cinematic Design', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop' },
]

export default function Team() {
  const [active, setActive] = useState(null)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {members.map((m, i) => (
        <div key={m.name} className="relative">
          <div className="relative overflow-hidden rounded-xl group border border-white/5 bg-[#0f0f0f]">
            <img src={m.img} alt={m.name} className="h-64 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="text-white font-semibold">{m.name}</div>
              <div className="text-zinc-400 text-sm">{m.role}</div>
            </div>
            <button onClick={() => setActive(m)} className="absolute inset-0" aria-label="Open profile" />
          </div>
        </div>
      ))}

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="relative max-w-2xl w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <img src={active.img} alt={active.name} className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="text-white text-2xl font-bold">{active.name}</div>
                <div className="text-zinc-400">{active.role}</div>
                <p className="text-zinc-400 mt-4">Bio coming soon. We keep our identities behind the veil—only the work speaks.</p>
              </div>
              <button onClick={() => setActive(null)} className="absolute top-3 right-3 bg-[#ff1a1a] text-black rounded-full px-3 py-1 font-semibold shadow-[0_0_20px_rgba(255,26,26,0.6)]">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
