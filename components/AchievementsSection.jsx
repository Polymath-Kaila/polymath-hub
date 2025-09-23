import achievements from '@/data/achievements.json'
import AnimatedSection from './AnimatedSection'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <AnimatedSection direction="up">
        <h2 className="text-2xl md:text-3xl font-bold">Achievements</h2>
      </AnimatedSection>

      {/* Grid of achievements */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {achievements.map((a, i) => (
          <AnimatedSection
            key={i}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={i * 0.1}
          >
            <div className="bg-bg-secondary rounded-2xl border border-slate-800 p-5">
              <div className="text-lg font-semibold text-accent-amber">{a.title}</div>
              <div className="text-xs text-text-muted">{a.year}</div>
              <p className="text-text-muted mt-2">{a.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
