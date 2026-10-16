import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react'
import { NavbarProps, NavLink } from '../../types'

const NAV_LINKS: NavLink[] = [
  { label: 'Empresa', href: '#empresa' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Fundador', href: '#fundador' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Contato', href: '#contato' },
]

export const CodeStacheLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 512 512" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="navLogoGradient" x1="0%" y1="75%" x2="100%" y2="25%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <g fill="url(#navLogoGradient)">
      {/* Chevron Esquerdo < */}
      <path d="M 62 250 L 135 177 C 137 175, 140 172, 144 172 L 152 172 C 156 172, 159 175, 159 179 L 159 184 L 97 252 C 93 254, 93 258, 97 260 L 159 328 L 159 333 C 159 337, 156 340, 152 340 L 144 340 C 140 340, 137 337, 135 335 L 62 262 C 58 258, 58 254, 62 250 Z" />
      {/* Bigode Central */}
      <path d="M 256.0 241.37 C 256.0 239.88, 253.57 239.63, 252.52 238.58 C 248.14 234.2, 244.84 232.65, 239.97 230.22 C 223.84 222.15, 208.63 227.07, 193.98 234.4 C 183.59 239.59, 177.78 254.34, 167.5 259.48 C 161.0 262.73, 149.86 266.0, 142.41 262.27 C 141.09 261.61, 131.26 255.32, 131.26 258.09 C 131.26 266.09, 135.61 271.58, 139.62 277.6 C 153.52 298.45, 178.54 298.56, 198.16 288.75 C 209.31 283.18, 215.05 269.16, 226.03 263.67 C 230.84 261.26, 242.14 261.26, 246.94 263.67 C 247.48 263.93, 256.0 270.46, 256.0 269.24 C 256.0 270.46, 264.52 263.93, 265.06 263.67 C 269.86 261.26, 281.16 261.26, 285.97 263.67 C 296.95 269.16, 302.69 283.18, 313.84 288.75 C 333.46 298.56, 358.48 298.45, 372.38 277.6 C 376.39 271.58, 380.74 266.09, 380.74 258.09 C 380.74 255.32, 370.91 261.61, 369.59 262.27 C 362.14 266.0, 351.0 262.73, 344.5 259.48 C 334.22 254.34, 328.41 239.59, 318.02 234.4 C 303.37 227.07, 288.16 222.15, 272.03 230.22 C 267.16 232.65, 263.86 234.2, 259.48 238.58 C 258.43 239.63, 256.0 239.88, 256.0 241.37 Z" />
      {/* Chevron Direito > */}
      <path d="M 62 250 L 135 177 C 137 175, 140 172, 144 172 L 152 172 C 156 172, 159 175, 159 179 L 159 184 L 97 252 C 93 254, 93 258, 97 260 L 159 328 L 159 333 C 159 337, 156 340, 152 340 L 144 340 C 140 340, 137 337, 135 335 L 62 262 C 58 258, 58 254, 62 250 Z" transform="translate(512, 0) scale(-1, 1)" />
    </g>
  </svg>
)

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/80 dark:bg-[#0B0F19]/85 bg-white/85 backdrop-blur-md border-b border-[#1E293B]/60 dark:border-[#1E293B] border-slate-200/80 shadow-lg shadow-black/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="CodeStache Home"
          >
            <div className="p-1.5 rounded-lg bg-[#151C2C]/50 dark:bg-[#151C2C] border border-[#1E293B] group-hover:border-indigo-500/50 transition-colors">
              <CodeStacheLogo className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-105 duration-300" />
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-[#F8FAFC]">
              Code
              <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Stache
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-[#94A3B8] hover:text-indigo-600 dark:hover:text-[#F8FAFC] transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-[#151C2C]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
              className="p-2.5 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-white dark:bg-[#151C2C] text-slate-600 dark:text-[#94A3B8] hover:text-indigo-600 dark:hover:text-[#F8FAFC] hover:border-indigo-500/50 transition-colors focus:outline-none"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 transition-transform rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#orcamento"
              onClick={(e) => handleLinkClick(e, '#orcamento')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#10B981] hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
              className="p-2 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-white dark:bg-[#151C2C] text-slate-600 dark:text-[#94A3B8]"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menu de Navegação"
              className="p-2.5 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-white dark:bg-[#151C2C] text-slate-700 dark:text-[#F8FAFC] hover:border-indigo-500/50 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-[#1E293B] bg-[#0B0F19]/95 dark:bg-[#0B0F19]/95 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium rounded-lg text-slate-700 dark:text-[#94A3B8] hover:text-indigo-600 dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#151C2C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="#orcamento"
                onClick={(e) => handleLinkClick(e, '#orcamento')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#10B981] shadow-lg shadow-indigo-500/25"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
