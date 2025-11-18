import { motion } from 'framer-motion'
import { Film, Bot, Sparkles, Palette } from 'lucide-react'

const services = [
  { title: 'AI Cinematic Ads', icon: Film, desc: 'High-impact visuals rendered with neural tools and film grammar.' },
  { title: 'Anime / Animation Production', icon: Sparkles, desc: 'Stylized anime pipelines combining gen models and artists.' },
  { title: 'Graphic Concept Ads', icon: Palette, desc: 'Bold stills and kinetic typography for product stories.' },
  { title: 'AI Agents & Automation', icon: Bot, desc: 'Custom agents orchestrating creative operations end-to-end.' },
]

export default function Services() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          className="group perspective"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="relative h-48 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)] bg-[#1b1b1b]/60 backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-end gap-3 [backface-visibility:hidden]">
              <s.icon className="w-8 h-8 text-[#ff1a1a] drop-shadow-[0_0_12px_rgba(255,26,26,0.7)]" />
              <div className="text-white font-semibold">{s.title}</div>
              <div className="text-zinc-400 text-sm">{s.desc}</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-[#ff1a1a]/10 to-transparent" />
            </div>
            <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1b1b1b]">
              <div className="text-[#ff1a1a] text-sm tracking-widest uppercase">Explore</div>
            </div>
            <div className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-[#ff1a1a]/20" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
