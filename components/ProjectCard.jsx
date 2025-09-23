import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-bg-secondary rounded-2xl overflow-hidden border border-slate-800 hover:shadow-glow transition">
      <div className="relative h-44">
        {project.images?.length ? (
          <Image src={project.images[0]} alt={project.title} fill style={{objectFit:'cover'}} />
        ) : (
          <div className="h-full w-full bg-slate-700/40 flex items-center justify-center text-text-muted">No image</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-accent-cyan">{project.title}</h3>
        <p className="text-text-muted text-sm mt-1">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech?.map((t, i) => (
            <span key={i} className="bg-slate-700/60 text-xs px-2 py-1 rounded">{t}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          {project.github && <a href={project.github} target="_blank" className="inline-flex items-center gap-1 text-sm hover:underline"><Github size={16}/>GitHub</a>}
          {project.demo && <a href={project.demo} target="_blank" className="inline-flex items-center gap-1 text-sm hover:underline text-accent-amber"><ExternalLink size={16}/>Demo</a>}
        </div>
      </div>
    </div>
  )
}
