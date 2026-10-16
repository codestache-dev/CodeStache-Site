import React from 'react'
import { Github, Linkedin, MessageSquare, ArrowUpRight, Terminal, Heart } from 'lucide-react'
import { CodeStacheLogo } from './Navbar'

const QUICK_LINKS = [
  { label: 'Sobre a Empresa', href: '#empresa' },
  { label: 'Serviços Especializados', href: '#servicos' },
  { label: 'Produtos & Soluções', href: '#produtos' },
  { label: 'O Fundador', href: '#fundador' },
  { label: 'Simulador de Orçamento', href: '#orcamento' },
  { label: 'Fale Conosco', href: '#contato' },
]

const SERVICES_LINKS = [
  { label: 'Software Sob Medida (Web & SaaS)', href: '#servicos' },
  { label: 'Agentes Autônomos de IA', href: '#servicos' },
  { label: 'Consultoria de Arquitetura & Cloud', href: '#servicos' },
  { label: 'Integrações de APIs & WebSockets', href: '#servicos' },
]

const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#0B0F19] border-t border-[#1E293B] text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E293B]">
          {/* Coluna 1: Marca & Tagline (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="inline-flex items-center gap-3 group focus:outline-none"
            >
              <div className="p-1.5 rounded-lg bg-[#151C2C] border border-[#1E293B] group-hover:border-indigo-500/50 transition-colors">
                <CodeStacheLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Code
                <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                  Stache
                </span>
              </span>
            </a>

            <p className="text-sm font-semibold text-indigo-300 italic">
              "Engenharia inteligente com assinatura própria."
            </p>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md">
              Simplificamos a complexidade tecnológica e potencializamos o trabalho humano com sistemas sob medida,
              arquiteturas escaláveis e agentes de IA que eliminam tarefas repetitivas.
            </p>

            {/* Status Live */}
            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Goiânia, GO · Operação Remota Nacional e Global
              </span>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos (3 colunas) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-white text-base tracking-wide">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Especialidades (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-semibold text-white text-base tracking-wide">
              Soluções
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LINKS.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(e) => handleScrollTo(e, service.href)}
                    className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Conectar & Redes (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-semibold text-white text-base tracking-wide">
              Conectar
            </h3>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href="https://github.com/JoaoVitorDiass"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#151C2C] border border-[#1E293B] group-hover:border-indigo-500/50">
                  <Github className="w-4 h-4 text-white" />
                </div>
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.linkedin.com/in/joaovitordiass/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#151C2C] border border-[#1E293B] group-hover:border-indigo-500/50">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                </div>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
              </a>

              <a
                href="https://wa.me/5562982193504"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#151C2C] border border-[#1E293B] group-hover:border-emerald-500/50">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright e Tech Badge */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © 2024–2025 <span className="text-slate-200 font-medium">CodeStache</span>. Todos os direitos reservados.
          </p>

          <div className="font-mono text-slate-500 flex items-center gap-2 bg-[#151C2C]/70 px-3.5 py-1.5 rounded-full border border-[#1E293B]">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>Construído com React 19, TypeScript, Tailwind v4 & Framer Motion</span>
            <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
