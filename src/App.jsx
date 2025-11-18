import Hero from './components/Hero'
import Section from './components/Section'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Philosophy from './components/Philosophy'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200">
      {/* Custom cursor */}
      <div className="fixed z-50 pointer-events-none" id="cursor"></div>

      <Hero />

      <Section id="who" title="Who We Are" subtitle="Premium AI production. Cinematic by design.">
        <WhoWeAre />
      </Section>

      <Section id="services" title="Services" subtitle="From neural cinema to automated creativity.">
        <Services />
      </Section>

      <Section id="portfolio" title="Portfolio" subtitle="Selected frames from the Veil.">
        <Portfolio />
      </Section>

      <Section id="philosophy" title="Philosophy" subtitle="Principles that shape the work.">
        <Philosophy />
      </Section>

      <Section id="team" title="Team" subtitle="Operators behind the veil.">
        <Team />
      </Section>

      <Section id="testimonials" title="Testimonials" subtitle="Words from partners.">
        <Testimonials />
      </Section>

      <Section id="contact" title="Contact / CTA">
        <Contact />
      </Section>

      <footer className="relative py-16 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,26,26,0.15),transparent)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-white font-semibold">Crimson Veil Productions</div>
          <div className="text-zinc-500 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
