import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-bg-secondary rounded-2xl overflow-hidden border border-slate-800 hover:shadow-glow transition"
    >
      {/* Image */}
      <motion.div
        className="relative h-44"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {project.images?.length ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="h-full w-full bg-slate-700/40 flex items-center justify-center text-text-muted">
            No image
          </div>
        )}
      </motion.div>

      {/* Text + Tech */}
      <motion.div
        className="p-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-accent-cyan">{project.title}</h3>
        <p className="text-text-muted text-sm mt-1">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech?.map((t, i) => (
            <motion.span
              key={i}
              className="bg-slate-700/60 text-xs px-2 py-1 rounded"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              viewport={{ once: true }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm hover:underline"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm hover:underline text-accent-amber"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
