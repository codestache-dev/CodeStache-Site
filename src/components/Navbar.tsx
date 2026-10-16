import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ArrowRight, Terminal } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Produtos', href: '#products' },
  { label: 'Especialista', href: '#team' },
  { label: 'Simulador', href: '#estimator' },
  { label: 'Contato', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          ? 'bg-[#151C2C]/90 dark:bg-[#0B0F19]/90 light:bg-white/90 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/5'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled
          ? theme === 'dark'
            ? 'rgba(11, 15, 25, 0.85)'
            : 'rgba(255, 255, 255, 0.85)'
          : 'transparent',
        borderColor: isScrolled
          ? theme === 'dark'
            ? '#1E293B'
            : '#E2E8F0'
          : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center p-1 bg-[#151C2C] dark:bg-[#151C2C] border border-[#1E293B] group-hover:border-indigo-500/50 transition-colors">
              <img
                src={theme === 'dark' ? '/assets/images/avatar-dark.svg' : '/assets/images/avatar-light.svg'}
                alt="CodeStache Emblema"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight flex items-center gap-0.5">
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Code</span>
                <span className="text-stache-gradient">Stache</span>
              </span>
              <span className="font-mono text-[10px] text-muted tracking-wider flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5 text-emerald-400" />
                <span>{"{ ~ }"}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2 text-sm font-medium rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/40 dark:hover:bg-slate-800/50 light:hover:bg-slate-100 transition-colors"
                style={{
                  color: theme === 'dark' ? '#94A3B8' : '#475569',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2.5 rounded-lg border border-[#1E293B] dark:border-[#1E293B] light:border-slate-200 bg-[#151C2C] dark:bg-[#151C2C] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-indigo-500/50 transition-all hover:scale-105"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <a
              href="#estimator"
              onClick={(e) => handleNavClick(e, '#estimator')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-600/30 transition-all hover:shadow-indigo-500/25 group"
            >
              <span>Estimar Projeto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-lg border border-[#1E293B] bg-[#151C2C] text-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="p-2 rounded-lg border border-[#1E293B] bg-[#151C2C] text-slate-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-b border-[#1E293B] bg-[#0B0F19]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-[#151C2C] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1E293B]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md transition-colors"
              >
                <span>Falar com Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
export default Navbar
