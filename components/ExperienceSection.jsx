import experience from '@/data/experience.json'
import AnimatedSection from './AnimatedSection'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <AnimatedSection direction="up">
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
      </AnimatedSection>

      {/* Experience cards */}
      <div className="mt-6 space-y-6">
        {experience.map((x, i) => (
          <AnimatedSection
            key={i}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={i * 0.1}
          >
            <div className="bg-bg-secondary border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-accent-cyan">
                  {x.role} — {x.company}
                </div>
                <div className="text-xs text-text-muted">{x.period}</div>
              </div>
              <p className="text-text-muted mt-2">{x.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
