import MagneticButton from './MagneticButton'

export default function Contact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(255,26,26,0.25),transparent_70%)]" />
      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Let’s Build The Impossible.</h3>
          <p className="text-zinc-400 mt-3">Tell us about your project. We respond within 24 hours.</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-[#0f0f0f]/80 border border-white/10 rounded-2xl p-6 space-y-4 shadow-[0_0_40px_rgba(255,26,26,0.08)]">
          <input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1a1a]" placeholder="Name" />
          <input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1a1a]" placeholder="Email" />
          <textarea className="w-full h-28 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff1a1a]" placeholder="What are you building?" />
          <MagneticButton className="w-full justify-center">Send Request</MagneticButton>
        </form>
      </div>
    </div>
  )
}
