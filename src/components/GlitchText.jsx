import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const chars = '!@#$%^&*()_+{}|:"<>?[];,./~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function GlitchText({ text, className = '' }) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    let raf
    let t = 0
    const scramble = () => {
      t += 1
      if (t < 12) {
        const scrambled = text
          .split('')
          .map((ch, i) => (Math.random() < Math.min(1, 0.3 + t * 0.06) ? ch : chars[Math.floor(Math.random() * chars.length)]))
          .join('')
        setDisplay(scrambled)
        raf = requestAnimationFrame(scramble)
      } else {
        setDisplay(text)
      }
    }
    scramble()
    return () => cancelAnimationFrame(raf)
  }, [text])

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="relative">
        <span className="text-white">{display}</span>
        <span className="absolute inset-0 blur-[1px] opacity-50 text-[#ff1a1a] pointer-events-none" aria-hidden>
          {display}
        </span>
      </span>
    </motion.span>
  )
}
