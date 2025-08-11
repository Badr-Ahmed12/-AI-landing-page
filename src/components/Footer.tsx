import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-transparent backdrop-blur-lg text-gray-400 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
            NeonBot
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            {links.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="relative text-sm transition hover:text-white"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socials.map(({ icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-2 rounded-full hover:shadow-[0_0_12px_rgba(0,255,255,0.4)] hover:text-white transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} NeonBot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
