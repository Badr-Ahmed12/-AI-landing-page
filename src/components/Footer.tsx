export default function Footer() {
    const links = [
      { label: 'About', href: '/about' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ]
  
    return (
      <footer className="bg-black/90 text-gray-400 border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {/* Logo + Name */}
            <div className="text-white text-xl font-semibold tracking-tight">
              Neonbot
            </div>
  
            {/* Links */}
            <div className="flex space-x-6">
              {links.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-white text-sm transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
  
          {/* Divider */}
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Neonbot. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  