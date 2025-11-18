import GlitchText from './GlitchText'

export default function Philosophy() {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,26,26,0.08),transparent,rgba(255,26,26,0.08))] opacity-40" />
      <div className="relative grid md:grid-cols-2 gap-10 items-baseline">
        <div className="space-y-4">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Precision. Emotion. Velocity.</h3>
          <GlitchText text="We engineer narratives that feel inevitable." className="text-zinc-300" />
        </div>
        <div className="text-zinc-400 leading-relaxed">
          Our philosophy is a fusion of rigorous system design and visceral aesthetics. We believe great stories are systems—repeatable, scalable, and unforgettable.
        </div>
      </div>
    </div>
  )
}
