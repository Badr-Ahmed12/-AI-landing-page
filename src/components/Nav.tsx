import { useState } from 'react'
import { Menu, X } from 'lucide-react' 

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-white/10 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <span className="text-white text-2xl font-bold tracking-tight">Neonbot</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6">
            {links.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-300 hover:text-white hover:underline underline-offset-4 text-sm font-medium transition"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-black/90 backdrop-blur-lg px-4 pb-4">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
