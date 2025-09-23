import testimonials from '@/data/testimonials.json'
import TestimonialCard from './TestimonialCard'

export default function TeachingSection() {
  return (
    <section id="teaching" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Teaching & Mentorship</h2>
      <p className="text-text-muted mt-2">Real people, real impact. Add photos and quotes in <code className="text-accent-amber">/data/testimonials.json</code>.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
      </div>
    </section>
  )
}
