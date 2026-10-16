import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Terminal, Layers } from 'lucide-react'

const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-25 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Indigo Orb */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-600/25 rounded-full blur-3xl"
        />

        {/* Mint / Emerald Orb */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-0 w-[420px] h-[420px] bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl"
        />

        {/* Blue Orb */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-500/15 dark:bg-blue-600/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-[#151C2C] dark:border-emerald-500/30 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Disponível para novos projetos e consultorias
              </span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            </div>

            {/* H1 Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[1.12]">
              Engenharia de Software que{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                Transforma Negócios
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-[#94A3B8] leading-relaxed max-w-2xl">
              Desenvolvemos sistemas sob medida, automações inteligentes e soluções integradas com IA que eliminam
              tarefas manuais e aceleram o crescimento sustentável da sua empresa.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#orcamento"
                onClick={(e) => handleScrollTo(e, '#orcamento')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#10B981] hover:opacity-95 shadow-xl shadow-indigo-500/30 transition-all duration-200 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Simular Projeto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#produtos"
                onClick={(e) => handleScrollTo(e, '#produtos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-700 dark:text-[#F8FAFC] bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:bg-slate-50 dark:hover:bg-[#1A2338] transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>Ver Produtos</span>
              </a>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Arquitetura de Alta Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-500" />
                <span>Segurança & Código Proprietário</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span>Integração Prática com IA</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Code Snippet Card (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Glow Behind the Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] rounded-2xl blur-lg opacity-30 dark:opacity-40 animate-pulse" />

            <div className="relative rounded-2xl bg-[#0F1626] dark:bg-[#151C2C] border border-[#1E293B] shadow-2xl overflow-hidden text-left font-mono text-xs sm:text-sm">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E1A] dark:bg-[#0B0F19] border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>codestache.config.ts</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  LIVE
                </span>
              </div>

              {/* Code Body */}
              <div className="p-5 space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400">import</span> &#123;{' '}
                  <span className="text-indigo-300">defineArchitecture</span>,{' '}
                  <span className="text-indigo-300">createAgent</span> &#125;{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-emerald-300">'@codestache/core'</span>;
                </div>
                <div className="text-slate-600 dark:text-slate-500">// Configuração oficial de solução sob medida</div>
                <div>
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-sky-300">enterpriseSolution</span> ={' '}
                  <span className="text-yellow-300">defineArchitecture</span>(&#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">company:</span>{' '}
                  <span className="text-emerald-300">"CodeStache"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-emerald-300">"React 19"</span>,{' '}
                  <span className="text-emerald-300">".NET 10"</span>,{' '}
                  <span className="text-emerald-300">"PostgreSQL"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">aiAgents:</span>{' '}
                  <span className="text-yellow-300">createAgent</span>(&#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"Autonomous Business Copilot"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">mission:</span>{' '}
                  <span className="text-emerald-300">"Eliminate repetitive operations"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">realtime:</span>{' '}
                  <span className="text-indigo-400">true</span>,
                </div>
                <div className="pl-4">&#125;),</div>
                <div className="pl-4">
                  <span className="text-slate-400">signature:</span>{' '}
                  <span className="text-emerald-300">"Engenharia inteligente com assinatura própria"</span>,
                </div>
                <div>&#125;);</div>

                {/* Status Output Line */}
                <div className="pt-2 text-[11px] text-emerald-400/90 flex items-center gap-2 border-t border-[#1E293B]/70 mt-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>[STACHE-CORE] Pipeline pronto para produção & escala contínua.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Strip at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 dark:border-[#1E293B] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              5<span className="text-indigo-500">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8]">Anos de experiência técnica full stack</p>
          </div>

          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              10<span className="text-emerald-500">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8]">Projetos entregues em produção</p>
          </div>

          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              100<span className="text-indigo-400">%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8]">Compromisso, rigor técnico & SLA</p>
          </div>

          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              24<span className="text-emerald-400">h</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8]">Tempo médio de resposta consultiva</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
