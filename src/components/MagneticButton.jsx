import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function MagneticButton({ children, onClick, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 400, damping: 40 })
  const springY = useSpring(y, { stiffness: 400, damping: 40 })
  const rotate = useTransform([springX, springY], ([lx, ly]) => (lx / 10) )

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.3)
    y.set(relY * 0.3)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ x: springX, y: springY, rotate }}
      className={`relative overflow-hidden rounded-full px-8 py-4 font-semibold tracking-wide bg-[#ff1a1a] text-black shadow-[0_0_30px_rgba(255,26,26,0.6)] hover:shadow-[0_0_45px_rgba(255,26,26,0.85)] transition-shadow ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 opacity-20"></span>
    </motion.button>
  )
}
