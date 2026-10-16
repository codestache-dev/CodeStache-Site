import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-[#080B12] border-t border-slate-200 dark:border-[#1E293B] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (2 columns on large) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center p-1 bg-[#151C2C] border border-[#1E293B]">
                <img
                  src="/assets/images/avatar-dark.svg"
                  alt="CodeStache Emblema"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
                Code<span className="text-stache-gradient">Stache</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Engenharia inteligente com assinatura própria. Simplificando a complexidade tecnológica por meio de sistemas escaláveis, automação com IA e organização de conhecimento.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/JoaoVitorDiass"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/joaovitordiass"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@codestache.dev"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-4 uppercase tracking-wider font-mono">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#hero" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Sobre a CodeStache
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Produtos &amp; Tools
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Simulador de Custos
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-4 uppercase tracking-wider font-mono">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>SaaS &amp; Aplicações Web</li>
              <li>Agentes Autônomos de IA</li>
              <li>Consultoria Cloud &amp; Docker</li>
              <li>SignalR &amp; Tempo Real</li>
              <li>Bases Vetoriais &amp; RAG</li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-4 uppercase tracking-wider font-mono">
              Ecossistema
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#products" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  StacheHub
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  CodeStache DevEx
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  StacheAgent
                </a>
              </li>
              <li>
                <a href="https://github.com/JoaoVitorDiass" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Open Source
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} CodeStache. Todos os direitos reservados.</span>
            <span>·</span>
            <span className="font-mono text-emerald-500 font-semibold">{"{ ~ }"}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">
              Engenharia inteligente com assinatura própria.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#151C2C] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
