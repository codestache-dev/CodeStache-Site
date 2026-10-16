import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, Eye, ShieldCheck, Zap, Users, Brain, Sparkles } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Pragmatismo Inteligente',
      description: 'Priorizamos soluções que resolvem dores reais com a melhor relação entre esforço, custo, manutenibilidade e benefício.',
      icon: Zap,
      color: 'text-indigo-400',
    },
    {
      title: 'Conhecimento Compartilhado',
      description: 'Sistemas e equipes só escalam com solidez quando o conhecimento técnico é acessível, estruturado e vivo.',
      icon: Users,
      color: 'text-emerald-400',
    },
    {
      title: 'Inovação Incremental',
      description: 'Validamos ideias em ciclos ágeis e práticos antes de construir infraestruturas complexas e desnecessárias.',
      icon: Sparkles,
      color: 'text-cyan-400',
    },
    {
      title: 'Automação com Propósito',
      description: 'Inteligência Artificial não como modismo, mas como alavanca real para eliminar tarefas repetitivas e potencializar humanos.',
      icon: Brain,
      color: 'text-purple-400',
    },
    {
      title: 'Assinatura Própria',
      description: 'Rigor e confiança técnica sem abrir mão da autenticidade, clareza e de uma identidade inconfundível.',
      icon: ShieldCheck,
      color: 'text-rose-400',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-500/10">
            <span>&lt;sobre&gt;</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Quem Somos &amp; O Que Nos Move
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A CodeStache nasce para unir o rigor da engenharia de software moderna à criatividade e inteligência da era da IA.
          </p>
        </div>

        {/* Purpose, Mission, Vision Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Propósito */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
              Nosso Propósito
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Simplificar a complexidade tecnológica e potencializar o trabalho humano por meio de software inteligente, automação prática e organização do conhecimento.
            </p>
          </motion.div>

          {/* Missão */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
              Nossa Missão
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Desenvolver sistemas sob medida, ferramentas internas, automações e soluções com IA que eliminem tarefas repetitivas, acelerem o aprendizado e gerem valor contínuo.
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
              Nossa Visão
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Ser referência em soluções inteligentes de engenharia e produtividade técnica, reconhecida por construir ferramentas enxutas, escaláveis e com identidade marcante.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
              Nossos Pilares &amp; Valores Fundamentais
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Diretrizes que orientam cada linha de código, design de sistema e entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm flex items-start gap-4 transition-colors hover:border-indigo-500/40"
                >
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 shrink-0">
                    <Icon className={`w-5 h-5 ${val.color}`} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-1">
                      {val.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
