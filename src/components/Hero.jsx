import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import GlitchText from './GlitchText'
import ParallaxFog from './ParallaxFog'

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0a0a0a]/40 to-[#0a0a0a] pointer-events-none" />
      <ParallaxFog />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 drop-shadow-[0_0_24px_rgba(255,26,26,0.35)]">
            Crimson Veil Productions
          </span>
        </motion.h1>

        <GlitchText text="Where Vision Turns Into Reality." className="mt-6 text-xl md:text-2xl" />
        <motion.p className="text-zinc-300/90 mt-4 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          AI Cinematic Ads • Anime Production • AI Agents • Creative Automation
        </motion.p>

        <motion.div className="mt-10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <MagneticButton onClick={() => {
            const el = document.getElementById('services')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}>
            Experience The Future
          </MagneticButton>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 text-xs tracking-widest uppercase">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          >
            Scroll
          </motion.span>
        </div>
      </div>
    </section>
  )
}
