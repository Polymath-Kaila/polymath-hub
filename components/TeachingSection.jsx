import testimonials from '@/data/testimonials.json'
import TestimonialCard from './TestimonialCard'
import AnimatedSection from './AnimatedSection'

export default function TeachingSection() {
  return (
    <section id="teaching" className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <AnimatedSection direction="up">
        <h2 className="text-2xl md:text-3xl font-bold">Teaching & Mentorship</h2>
      </AnimatedSection>

      {/* Description */}
      <AnimatedSection direction="up" delay={0.1}>
        <p className="text-text-muted mt-2">
          Real people, real impact.{' '}
          <code className="text-accent-amber"></code>.
        </p>
      </AnimatedSection>

      {/* Testimonials grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {testimonials.map((t, i) => (
          <AnimatedSection
            key={i}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={i * 0.1}
          >
            <TestimonialCard t={t} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
