import projects from '@/data/projects.json'
import ProjectCard from './ProjectCard'
import AnimatedSection from './AnimatedSection' // 👈 import the animation wrapper

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <AnimatedSection direction="up">
        <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
        <p className="text-text-muted mt-2">
          {' '}
          <code className="text-accent-amber"></code>
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((p, idx) => (
          <AnimatedSection 
            key={p.id} 
            direction={idx % 2 === 0 ? "left" : "right"} 
            delay={idx * 0.1}
          >
            <ProjectCard project={p} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
