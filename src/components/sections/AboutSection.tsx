import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Cpu, Target, Compass, Flag, ShieldCheck } from 'lucide-react'
import { ValuePillar } from '../../types'

const PILLARS: ValuePillar[] = [
  {
    id: 'pragmatismo',
    title: 'Pragmatismo Inteligente',
    description:
      'Soluções enxutas que resolvem dores reais com a melhor relação entre custo, esforço, facilidade de manutenção e benefício de negócio.',
    iconName: 'Zap',
  },
  {
    id: 'automacao',
    title: 'Automação com Propósito',
    description:
      'IA como motor invisível de produtividade — não modismo passageiro — eliminando trabalho braçal repetitivo e alavancando equipes.',
    iconName: 'Brain',
  },
  {
    id: 'assinatura',
    title: 'Assinatura Própria',
    description:
      'Rigor técnico com identidade marcante. Cada arquitetura e linha de código carrega a qualidade e a elegância do padrão CodeStache.',
    iconName: 'Target',
  },
]

const STRATEGY_BLOCKS = [
  {
    label: 'Nosso Propósito',
    icon: Compass,
    accent: 'from-indigo-500 to-blue-500',
    borderGlow: 'hover:border-indigo-500/50',
    text: 'Simplificar a complexidade tecnológica e potencializar o trabalho humano por meio de software inteligente, automação prática e organização do conhecimento.',
  },
  {
    label: 'Nossa Missão',
    icon: Flag,
    accent: 'from-blue-500 to-emerald-500',
    borderGlow: 'hover:border-blue-500/50',
    text: 'Desenvolver sistemas sob medida, ferramentas internas, automações e soluções integradas com IA que eliminem tarefas repetitivas, acelerem o aprendizado de equipes e gerem valor contínuo.',
  },
  {
    label: 'Nossa Visão',
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-400',
    borderGlow: 'hover:border-emerald-500/50',
    text: 'Ser referência em soluções inteligentes de engenharia de software e produtividade técnica, destacando-se pela capacidade de criar ferramentas enxutas, escaláveis e de alto impacto com assinatura própria.',
  },
]

const AboutSection: React.FC = () => {
  return (
    <section id="empresa" className="py-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-15 dark:opacity-20 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

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
            Quem Somos
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            Sobre a{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              CodeStache
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Nascemos da visão de que a verdadeira produtividade tecnológica vem da união entre{' '}
            <strong className="text-slate-900 dark:text-white font-medium">
              sistemas bem construídos, automação com inteligência artificial e identidade própria
            </strong>
            . Fugimos de códigos genéricos e soluções infladas: entregamos engenharia pragmática com assinatura inconfundível.
          </p>
        </motion.div>

        {/* 3 Pillars Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] p-8 shadow-sm hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pillar.iconName === 'Zap' && <Zap className="w-6 h-6 text-indigo-500" />}
                {pillar.iconName === 'Brain' && <Cpu className="w-6 h-6 text-emerald-500" />}
                {pillar.iconName === 'Target' && <Target className="w-6 h-6 text-blue-500" />}
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategy Blocks: Propósito / Missão / Visão */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGY_BLOCKS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`rounded-2xl p-6 bg-slate-50 dark:bg-[#111726] border border-slate-200/80 dark:border-[#1E293B] ${item.borderGlow} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.accent} text-white`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
