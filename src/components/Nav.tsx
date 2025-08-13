import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#integrations", label: "Integrations" },
    { href: "#plans", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-transparent z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] cursor-pointer"
          >
            NeonBot
          </a>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6">
            {links.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="relative text-gray-300 hover:text-white text-sm font-medium transition cursor-pointer"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-300 hover:text-white focus:outline-none p-2 rounded-md hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-black/80 backdrop-blur-lg px-4 pb-4 animate-fadeDown">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-white/10 transition cursor-pointer"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

