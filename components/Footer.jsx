export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-text-muted flex items-center justify-between">
        <div>© {new Date().getFullYear()} Evans Kaila</div>
        <div>Built with Next.js • Tailwind • Three.js</div>
      </div>
    </footer>
  )
}
