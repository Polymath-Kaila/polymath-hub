import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{background: 'radial-gradient(600px circle at 50% 0%, rgba(56,189,248,.35), transparent 40%)'}}/>
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6}}
            className="text-3xl md:text-5xl font-extrabold leading-tight">
            Evans Kaila — <span className="text-accent-cyan">Builder</span>, Mentor, Dreamer
          </motion.h1>
          <motion.p
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0, delay:.1}} transition={{duration:.6}}
            className="text-text-muted mt-4 max-w-prose">
            I craft full‑stack apps, teach peers, and turn ideas into real products. Explore projects,
            mentorship, and achievements — all in one immersive experience.
          </motion.p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan px-4 py-2 rounded-lg hover:bg-accent-cyan/20 transition">See Projects</a>
            <a href="/"
               className="border border-slate-700 px-4 py-2 rounded-lg hover:bg-bg-secondary transition">Open Terminal</a>
          </div>
        </div>
        <div className="h-[300px] md:h-[420px]">
          <Hero3D />
        </div>
      </div>
    </section>
  )
}
