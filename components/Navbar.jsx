import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/home" className="font-bold text-xl text-accent-cyan">Kaila<span className="text-accent-amber">.</span></Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-text-muted">
          <a href="#projects" className="hover:text-text-primary">Projects</a>
          <a href="#teaching" className="hover:text-text-primary">Teaching</a>
          <a href="#experience" className="hover:text-text-primary">Experience</a>
          <a href="#achievements" className="hover:text-text-primary">Achievements</a>
          <a href="#contact" className="hover:text-text-primary">Contact</a>
        </div>
        <Link href="/" className="text-xs text-text-muted hover:text-text-primary">Terminal</Link>
      </div>
    </nav>
  )
}
