import { motion } from 'framer-motion'
import GlitchText from './GlitchText'

const milestones = [
  { year: '2021', text: 'Origin of the Veil — experiments in AI-driven imagery.' },
  { year: '2022', text: 'First cinematic ad powered by neural rendering.' },
  { year: '2023', text: 'Anime pipeline fuses generative tools with hand-crafted art.' },
  { year: '2024', text: 'AI Agents orchestrate creative automation at scale.' },
]

export default function WhoWeAre() {
  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(255,26,26,0.3),transparent_70%)]" />
      <div className="relative grid md:grid-cols-2 gap-12">
        <div>
          <GlitchText text="We craft emotion with algorithms." className="text-xl text-zinc-300" />
          <p className="text-zinc-400 mt-4 leading-relaxed">
            We are a premium AI production studio blurring the line between code and cinema. Our work blends neural artistry with human direction to create high-impact visuals and narratives.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff1a1a] to-transparent" />
          <ul className="space-y-8 pl-10">
            {milestones.map((m, i) => (
              <motion.li key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-3 h-3 rounded-full bg-[#ff1a1a] shadow-[0_0_20px_rgba(255,26,26,0.8)]" />
                  <div>
                    <div className="text-white font-semibold">{m.year}</div>
                    <div className="text-zinc-400">{m.text}</div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
