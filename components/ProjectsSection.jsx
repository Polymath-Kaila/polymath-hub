import projects from '@/data/projects.json'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
      <p className="text-text-muted mt-2">Data‑driven cards. Update <code className="text-accent-amber">/data/projects.json</code> to add more.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
