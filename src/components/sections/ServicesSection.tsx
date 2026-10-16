import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Bot, Cloud, Network, CheckCircle2, ArrowRight } from 'lucide-react'
import { ServiceItem } from '../../types'

const SERVICES: ServiceItem[] = [
  {
    id: 'software-custom',
    title: 'Desenvolvimento de Software Sob Medida',
    subtitle: 'Web Apps, Plataformas SaaS & Ferramentas Internas',
    description:
      'Construímos aplicações web de ponta a ponta com alta performance, experiência de usuário impecável e arquitetura sólida pensada para escalar desde o primeiro dia.',
    iconName: 'Monitor',
    tags: ['React 19', '.NET 10', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Aplicações SaaS Multi-tenant',
      'Portais corporativos de alta demanda',
      'Arquiteturas modernas e testadas',
    ],
  },
  {
    id: 'ai-agents',
    title: 'Agentes de IA & Automação Corporativa',
    subtitle: 'Automação Prática & Pipelines Cognitivos',
    description:
      'Projetamos e implementamos agentes de inteligência artificial autônomos e fluxos que eliminam tarefas repetitivas, extraem inteligência operacional e reduzem erros humanos.',
    iconName: 'Bot',
    tags: ['AI Agents', 'LLMs & RAG', 'LangChain', 'Pipelines Inteligentes', 'Python / .NET'],
    highlights: [
      'Agentes autônomos de triagem e execução',
      'Processamento de documentos e linguagem natural',
      'Integração de IA sem fricção nas rotinas da equipe',
    ],
  },
  {
    id: 'cloud-architecture',
    title: 'Consultoria de Arquitetura & Cloud',
    subtitle: 'Escalabilidade, Resiliência & DevOps',
    description:
      'Avaliamos, desenhamos e otimizamos sistemas críticos para garantir máxima disponibilidade, governança de código, deploy automatizado e custos de infraestrutura controlados.',
    iconName: 'Cloud',
    tags: ['Docker', 'AWS / Azure', 'Microsserviços', 'CI/CD Pipelines', 'DevOps'],
    highlights: [
      'Modernização de sistemas legados',
      'Pipelines automatizados de CI/CD',
      'Estratégias de alta disponibilidade e Disaster Recovery',
    ],
  },
  {
    id: 'api-integrations',
    title: 'Integrações de Sistemas & APIs Críticas',
    subtitle: 'Conectividade Segura & Tempo Real',
    description:
      'Unificamos ecossistemas fragmentados conectando ERPs, CRMs, gateways de pagamento, plataformas legadas e serviços parceiros com mensageria e comunicação em tempo real.',
    iconName: 'Network',
    tags: ['REST APIs', 'SignalR', 'WebSockets', 'Webhooks', 'Supabase'],
    highlights: [
      'Comunicação bidirecional e eventos em tempo real',
      'Sincronização robusta entre bancos e serviços legados',
      'Protocolos seguros com autenticação corporativa',
    ],
  },
]

const ServicesSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0E1422]/50">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Nossa Expertise
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            O que{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Fazemos
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Desenvolvimento de software de alta densidade técnica com foco em valor real para o seu negócio.
            Do MVP à arquitetura corporativa distribuída.
          </p>
        </motion.div>

        {/* 4 Service Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] p-8 shadow-sm hover:shadow-2xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Card Accent Gradient on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  {/* Icon & Subtitle Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                      {service.iconName === 'Monitor' && <Monitor className="w-7 h-7" />}
                      {service.iconName === 'Bot' && <Bot className="w-7 h-7" />}
                      {service.iconName === 'Cloud' && <Cloud className="w-7 h-7" />}
                      {service.iconName === 'Network' && <Network className="w-7 h-7" />}
                    </div>

                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400 font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B]">
                      // SERVIÇO #{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-2 pt-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges & CTA Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#1E293B] relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#0B0F19] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1E293B]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <a
                      href="#orcamento"
                      onClick={(e) => handleScrollTo(e, '#orcamento')}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                    >
                      <span>Simular este serviço</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
