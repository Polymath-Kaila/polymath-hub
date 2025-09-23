import Image from 'next/image'
export default function TestimonialCard({ t }) {
  return (
    <div className="bg-bg-secondary rounded-2xl overflow-hidden border border-slate-800">
      <div className="relative h-40">
        {t.image ? <Image src={t.image} alt={t.name} fill style={{objectFit:'cover'}} /> : <div className="h-full w-full bg-slate-700/40" />}
      </div>
      <div className="p-5">
        <p className="italic text-text-muted">"{t.testimonial}"</p>
        <div className="mt-3 text-sm">
          <div className="font-semibold">{t.name}</div>
          <div className="text-text-muted">{t.relation}</div>
          {t.contact && <div className="text-xs text-accent-cyan break-all">{t.contact}</div>}
        </div>
      </div>
    </div>
  )
}
