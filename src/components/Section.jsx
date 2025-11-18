import { motion } from 'framer-motion'

export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="relative w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,27,27,0.6),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p className="text-zinc-400 mt-3 max-w-2xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            {subtitle}
          </motion.p>
        )}
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  )
}
