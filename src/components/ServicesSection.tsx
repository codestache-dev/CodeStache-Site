import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Bot, Cloud, Layers, CheckCircle2, ArrowRight } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'software',
      title: 'Desenvolvimento de Software Sob Medida (Web & SaaS)',
      description:
        'Construímos plataformas completas, produtos SaaS escaláveis e sistemas internos sob medida. Do protótipo funcional ao ambiente de produção em alta disponibilidade.',
      icon: Code2,
      badge: 'Core Engineering',
      technologies: ['.NET 9 / C#', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      deliverables: [
        'Aplicações Web responsivas de alta performance',
        'APIs RESTful e GraphQL robustas e documentadas',
        'Painéis administrativos e dashboards em tempo real',
        'Arquitetura modular focada em escalabilidade',
      ],
    },
    {
      id: 'ai-agents',
      title: 'Agentes Autônomos de IA & Automação Corporativa',
      description:
        'Transformamos operações manuais em pipelines inteligentes com agentes de IA autônomos. Recuperação de conhecimento (RAG), triagem automática e assistentes operacionais.',
      icon: Bot,
      badge: 'IA Aplicada',
      technologies: ['OpenAI / Claude', 'RAG Pipelines', 'Vector DBs', 'LangChain', 'Python'],
      deliverables: [
        'Agentes autônomos para atendimento e triagem técnica',
        'Bases de conhecimento inteligentes com busca semântica',
        'Automação de relatórios, changelogs e rotinas burocráticas',
        'Integração segura com dados corporativos sensíveis',
      ],
    },
    {
      id: 'cloud-architecture',
      title: 'Consultoria de Arquitetura & Cloud',
      description:
        'Estruturação técnica sólida para evitar gargalos e custos desnecessários em nuvem. Conteinerização com Docker, CI/CD automatizado e observabilidade.',
      icon: Cloud,
      badge: 'Infra & DevEx',
      technologies: ['Docker', 'Azure / AWS', 'CI/CD Pipelines', 'Supabase', 'Observability'],
      deliverables: [
        'Auditoria de arquitetura e mitigação de dívida técnica',
        'Conteinerização com Docker e orquestração limpa',
        'Pipelines de deploy contínuo (GitHub Actions)',
        'Padronização de ambientes de desenvolvimento (DevEx)',
      ],
    },
    {
      id: 'integrations',
      title: 'Integrações de Sistemas & APIs Críticas',
      description:
        'Conexão transparente entre sistemas legados, gateways de pagamento, CRMs, ERPs e ferramentas de terceiros com tolerância a falhas e comunicação em tempo real.',
      icon: Layers,
      badge: 'High Reliability',
      technologies: ['SignalR', 'Webhooks', 'Message Queues', 'REST APIs', 'OAuth 2.0'],
      deliverables: [
        'Sincronização bidirecional entre ERPs e plataformas web',
        'Comunicação em tempo real com WebSockets / SignalR',
        'Integração com gateways de pagamento e autenticação',
        'Monitoramento de saúde e resiliência a falhas de rede',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0E1424]/40 border-y border-slate-200/60 dark:border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-500 dark:text-emerald-400 bg-emerald-500/10">
            <span>&lt;serviços&gt;</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Soluções Técnicas Especializadas
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Engenharia sob demanda para acelerar seu produto, otimizar sua operação e implementar IA com segurança e resultado prático.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Entregáveis:
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="pt-6 border-t border-slate-200 dark:border-[#1E293B] flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#estimator"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>Estimar</span>
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
