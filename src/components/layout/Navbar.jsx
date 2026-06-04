'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#services', label: 'Услуги' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <>
      {/* Floating controls — top-right corner */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md rounded-full px-3 py-2 border border-white/15">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
            className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-2xl bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-serif text-4xl md:text-5xl text-white/90 hover:text-white transition-all duration-200 hover:tracking-wider"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
