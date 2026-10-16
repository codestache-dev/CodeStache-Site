import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Laptop, MessageSquare, BookOpen } from 'lucide-react'

export const ProductsSection: React.FC = () => {
  const products = [
    {
      name: 'StacheHub',
      badge: 'Flagship Platform',
      tagline: 'Helpdesk & Atendimento Inteligente com IA, SLAs e SignalR',
      description:
        'Plataforma completa de gestão de chamados, suporte técnico e atendimento omnicanal com triagem automatizada via IA, acompanhamento estrito de SLAs e comunicação em tempo real.',
      features: [
        'Comunicação bidirecional instantânea via SignalR',
        'Classificação e sugestão de soluções por IA generativa',
        'Controle granular de SLA por gravidade e cliente',
        'Base de conhecimento viva com busca vetorial',
      ],
      tech: ['.NET 9', 'React 19', 'SignalR', 'PostgreSQL', 'Docker'],
      status: 'Em Produção',
      icon: MessageSquare,
      link: '#contact',
    },
    {
      name: 'CodeStache DevEx & Docs',
      badge: 'Productivity Tool',
      tagline: 'Gestão de Conhecimento e Changelogs Automatizados por IA',
      description:
        'Ecossistema de documentação técnica viva que sincroniza repositórios de código com changelogs automáticos, onboarding guiado de desenvolvedores e wikis inteligentes.',
      features: [
        'Geração automática de notas de lançamento a partir de PRs',
        'Busca semântica em toda a arquitetura de sistemas',
        'Rampa de aprendizado acelerada para novos membros',
        'Integração nativa com GitHub e GitLab',
      ],
      tech: ['TypeScript', 'Next.js / Vite', 'Vector DB', 'Markdown Engine'],
      status: 'Beta Interno',
      icon: BookOpen,
      link: '#contact',
    },
    {
      name: 'StacheAgent Suite',
      badge: 'AI Automation',
      tagline: 'Framework de Agentes Autônomos Corporativos',
      description:
        'Suite de agentes de IA orquestrados para executar tarefas burocráticas recorrentes: triagem de e-mails, validação de regras de negócio, conciliação e relatórios executivos.',
      features: [
        'Execução autônoma com logs auditáveis passo a passo',
        'Conexão segura com bancos de dados e APIs privadas',
        'Interrupção e revisão humana (Human-in-the-loop)',
        'Resiliência a timeouts e recuperação de estado',
      ],
      tech: ['Python / .NET', 'LangChain', 'Docker', 'Redis', 'OAuth'],
      status: 'Disponível Sob Medida',
      icon: Laptop,
      link: '#contact',
    },
  ]

  return (
    <section id="products" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-500/10">
            <span>&lt;produtos-e-ferramentas&gt;</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Ferramentas Criadas com Assinatura Própria
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Soluções proprietárias nascidas para resolver problemas reais de produtividade e engenharia.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((prod, index) => {
            const Icon = prod.icon
            return (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col justify-between p-8 rounded-xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm hover:border-indigo-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                      {prod.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                    {prod.badge}
                  </span>

                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-1 mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                    {prod.tagline}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {prod.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="pt-6 border-t border-slate-200 dark:border-[#1E293B] flex flex-wrap gap-1.5 mb-5">
                    {prod.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={prod.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-800 hover:text-white dark:text-slate-200 dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Solicitar Demonstração</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default ProductsSection
