import { useEffect, useRef } from 'react'

export default function ParallaxFog() {
  const layer1 = useRef(null)
  const layer2 = useRef(null)
  const layer3 = useRef(null)

  useEffect(() => {
    const handle = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX - w / 2) / w
      const y = (e.clientY - h / 2) / h
      if (layer1.current) layer1.current.style.transform = `translate(${x * 8}px, ${y * 8}px)`
      if (layer2.current) layer2.current.style.transform = `translate(${x * -12}px, ${y * -12}px)`
      if (layer3.current) layer3.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0">
      <div ref={layer1} className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(255,26,26,0.25),transparent_60%)]" />
      <div ref={layer2} className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(800px_400px_at_80%_30%,rgba(255,26,26,0.2),transparent_60%)]" />
      <div ref={layer3} className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(1000px_500px_at_50%_80%,rgba(255,26,26,0.18),transparent_70%)]" />
    </div>
  )
}
