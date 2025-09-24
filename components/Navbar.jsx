import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Teaching", href: "#teaching" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-accent-cyan">
          Polymath Kaila
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent-amber transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-slate-800 px-4 py-3 space-y-3">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block hover:text-accent-amber transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
