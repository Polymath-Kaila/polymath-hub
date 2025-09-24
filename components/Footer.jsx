import { FaGithub, FaLinkedin, FaTwitter, FaTiktok,FaInstagram, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-text-muted flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left: Copyright */}
        <div>© {new Date().getFullYear()} Polymath Kaila</div>

        {/* Center: Tech stack */}
        <div className="text-center">Built with Next.js • Tailwind • Three.js</div>

        {/* Right: Social icons */}
        <div className="flex space-x-5">
          <a href="https://github.com/Polymath-Kaila" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <FaGithub size={18} />
          </a>
          <a href= "https://www.linkedin.com/in/polymath-kaila-627838351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            <FaLinkedin size={18} />
          </a>
          <a href="https://x.com/polymath_kaila1" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors duration-200">
            <FaTwitter size={18} />
          </a>
          <a href="https://tiktok.com/@polymath_kaila" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
            <FaTiktok size={18} />
          </a>
          <a href="https://www.instagram.com/polymath_kaila/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-200">
            <FaInstagram size={18} />
          </a>
          <a href="mailto:polymathkaila81@gmail.com" className="hover:text-red-400 transition-colors duration-200">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
