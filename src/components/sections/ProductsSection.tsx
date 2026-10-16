import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Kanban,
  Clock,
  Radio,
  BarChart3,
  Users,
  ShieldCheck,
  FolderGit2,
  Workflow,
  X,
} from 'lucide-react'

const STACHEHUB_FEATURES = [
  { icon: Kanban, label: 'Kanban ágil em tempo real com drag-and-drop dinâmico' },
  { icon: Clock, label: 'SLA e prioridades automáticas baseadas em regras e IA' },
  { icon: ShieldCheck, label: 'Histórico de auditoria completo com rastreabilidade total' },
  { icon: Radio, label: 'Notificações instantâneas via SignalR / WebSockets' },
  { icon: BarChart3, label: 'Dashboard analítico com tempo de resolução e produtividade' },
  { icon: Users, label: 'Controle multiequipe com permissões granulares por papel' },
]

const UPCOMING_PRODUCTS = [
  {
    id: 'stachedoc',
    name: 'StacheDoc AI',
    tagline: 'Documentação Viva & Changelogs Autônomos',
    description:
      'Agente autônomo de IA que analisa commits, Pull Requests e contratos de API para gerar e atualizar documentação técnica de ponta a ponta sem esforço manual.',
    status: 'Em Validação / MVP',
    statusColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
    techs: ['LangChain', 'AST Parsers', 'GitHub Apps', 'Markdown Engine'],
    icon: FolderGit2,
  },
  {
    id: 'stacheflow',
    name: 'StacheFlow Ops',
    tagline: 'Orquestração de Agentes para Equipes de TI',
    description:
      'Controlador de fluxos de trabalho e automações internas que integra tickets do StacheHub a rotinas de deploys, alertas e triagens automatizadas.',
    status: 'Design & Arquitetura',
    statusColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    techs: ['Event-Driven', 'Docker', '.NET Workers', 'Telemetry'],
    icon: Workflow,
  },
]

const ProductsSection: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="produtos" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            Portfólio de Soluções
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            Nossos{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Produtos
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Desenvolvemos ferramentas proprietárias que resolvem problemas reais de operação, suporte técnico e
            gestão de tecnologia com rigor de engenharia.
          </p>
        </motion.div>

        {/* Featured Product: StacheHub (Large Card with Gradient Border) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 relative rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400 shadow-2xl shadow-indigo-500/10"
        >
          <div className="rounded-[22px] bg-white dark:bg-[#151C2C] p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Info (Left 7 Cols) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Em Produção
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-[#0B0F19] text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-[#1E293B]">
                    TICK-32 · v3.0
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Produto Flagship
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white flex items-center gap-3">
                    StacheHub
                    <span className="text-sm font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md font-normal">
                      Enterprise Desk
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-indigo-300 mt-2">
                    Plataforma completa de Help Desk, SLAs Inteligentes e Atendimento em Tempo Real
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  Projetada para eliminar a desorganização em times de suporte e TI. O StacheHub orquestra chamados,
                  mensura SLAs rigorosos, oferece quadro Kanban dinâmico e integra inteligência artificial para
                  triagem e respostas assistidas.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {STACHEHUB_FEATURES.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <Icon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-slate-100 dark:border-[#1E293B]/80 space-y-2">
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                    // Stack Arquitetural
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['.NET 10', 'React 19', 'PostgreSQL', 'SignalR', 'Docker', 'Tailwind CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-md bg-slate-100 dark:bg-[#0B0F19] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#1E293B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#10B981] hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all"
                  >
                    <span>Ver Demonstração</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <a
                    href="#contato"
                    onClick={(e) => handleScrollTo(e, '#contato')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-[#F8FAFC] bg-slate-100 dark:bg-[#0B0F19] hover:bg-slate-200 dark:hover:bg-[#1A2338] border border-slate-200 dark:border-[#1E293B] transition-colors"
                  >
                    <span>Implantar na sua Empresa</span>
                  </a>
                </div>
              </div>

              {/* Visual Preview / Dashboard Mockup (Right 5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-[#0B0F19] border border-[#1E293B] p-5 shadow-2xl text-left font-mono">
                  {/* Top Window Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#1E293B] text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] text-slate-300">stachehub.internal/board</span>
                    <span className="text-[10px] text-emerald-400">SignalR: Connected</span>
                  </div>

                  {/* Mock Kanban Board Preview */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-white">Quadro de Chamados (TI)</span>
                      <span className="text-emerald-400 text-[11px]">SLA Global: 99.4%</span>
                    </div>

                    {/* Mock Cards */}
                    <div className="space-y-2.5 text-xs">
                      {/* Ticket 1 */}
                      <div className="p-3 rounded-lg bg-[#151C2C] border border-emerald-500/30 space-y-1.5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-indigo-400 font-semibold">#TICK-32</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                            Em Produção
                          </span>
                        </div>
                        <p className="text-slate-200 font-sans text-xs">
                          Helpdesk v3 - SignalR WebSocket Hub & Automação de SLAs
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                          <span>Resp: João Vitor</span>
                          <span className="text-emerald-400">SLA: 15m restantes</span>
                        </div>
                      </div>

                      {/* Ticket 2 */}
                      <div className="p-3 rounded-lg bg-[#151C2C] border border-[#1E293B] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-indigo-400 font-semibold">#TICK-26</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                            Em Desenvolvimento
                          </span>
                        </div>
                        <p className="text-slate-200 font-sans text-xs">
                          Portal Institucional CodeStache & Simulador de Projetos
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                          <span>Stack: React 19 + Tailwind v4</span>
                          <span className="text-indigo-300">Prioridade Alta</span>
                        </div>
                      </div>

                      {/* Ticket 3 */}
                      <div className="p-3 rounded-lg bg-[#151C2C] border border-[#1E293B] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-indigo-400 font-semibold">#TICK-20</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                            Concluído
                          </span>
                        </div>
                        <p className="text-slate-200 font-sans text-xs">
                          Integração com LLM para Sugestão de Solução Automática
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                          <span>IA Agent Ativo</span>
                          <span className="text-cyan-400">100% Validado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Products in Pipeline Section */}
        <div className="mt-20 space-y-8">
          <div className="text-left">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span>Em Desenvolvimento & Pipeline de Inovação</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-1">
              Ferramentas em ciclo de validação contínua criadas pelo laboratório CodeStache.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {UPCOMING_PRODUCTS.map((prod, index) => {
              const Icon = prod.icon
              return (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] p-8 shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${prod.statusColor}`}>
                        {prod.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                        {prod.name}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mt-0.5">
                        {prod.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#1E293B]">
                    <div className="flex flex-wrap gap-2">
                      {prod.techs.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1E293B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#151C2C] border border-[#1E293B] p-6 shadow-2xl space-y-5 text-left">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-[#0B0F19]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">Demonstração StacheHub</h3>
                <p className="text-xs text-emerald-400">Ambiente de Demonstração Guiada</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              O StacheHub possui instância ativa para homologação e demonstração com dados de teste.
              Para ter acesso guiado ou implantar em ambiente corporativo, converse diretamente com o nosso arquiteto.
            </p>

            <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B] space-y-2 text-xs font-mono text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Stack:</span>
                <span className="text-white">.NET 10 + React 19 + SignalR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Disponibilidade:</span>
                <span className="text-emerald-400">On-Premise ou Cloud Dedicada</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href="https://wa.me/5562982193504?text=Ol%C3%A1!%20Gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20StacheHub."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-emerald-500 hover:opacity-95"
              >
                Agendar Demonstração no WhatsApp
              </a>
              <button
                onClick={() => setDemoModalOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white bg-[#0B0F19]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductsSection
