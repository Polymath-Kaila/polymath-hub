import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TestimonialCard({ t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-bg-secondary rounded-2xl overflow-hidden border border-slate-800"
    >
      {/* Image */}
      <motion.div
        className="relative h-40"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t.image ? (
          <Image
            src={t.image}
            alt={t.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="h-full w-full bg-slate-700/40" />
        )}
      </motion.div>

      {/* Text + Info */}
      <motion.div
        className="p-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="italic text-text-muted">"{t.testimonial}"</p>
        <div className="mt-3 text-sm">
          <div className="font-semibold">{t.name}</div>
          <div className="text-text-muted">{t.relation}</div>
          {t.contact && (
            <div className="text-xs text-accent-cyan break-all">
              {t.contact}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
