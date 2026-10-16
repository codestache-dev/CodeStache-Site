import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Terminal, CheckCircle2, Shield, Cpu } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 dark:bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B15_1px,transparent_1px),linear-gradient(to_bottom,#1E293B15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Engenharia Inteligente com Assinatura Própria</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15]"
          >
            Transformamos complexidade em{' '}
            <span className="text-stache-gradient">software de alto impacto</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Sistemas sob medida, automações corporativas e agentes autônomos de Inteligência Artificial desenhados com rigor técnico, arquitetura limpa e pragmatismo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] text-sm sm:text-base group"
            >
              <span>Solicitar Cotação do Projeto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-all text-sm sm:text-base shadow-sm"
            >
              <span>Conhecer Nossos Serviços</span>
            </a>
          </motion.div>

          {/* Social Proof / Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-200 dark:border-[#1E293B]/70"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                100% Código Autoral
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-indigo-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                IA Aplicada com Propósito
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                Arquitetura Escalável
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                DevEx &amp; Rigor Técnico
              </span>
            </div>
          </motion.div>
        </div>

        {/* Code / Visual Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-200 dark:border-[#1E293B] bg-[#0E1424] shadow-2xl shadow-indigo-950/20"
        >
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-[#151C2C] border-b border-[#1E293B] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                codestache-runtime :: solution-architecture.ts
              </span>
            </div>
            <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Production Ready</span>
            </div>
          </div>

          {/* Terminal Code Body */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto text-slate-300 leading-relaxed bg-[#0B0F19]">
            <p className="text-slate-500">
              {'//'} CodeStache System Architecture &amp; Autonomous AI Integration
            </p>
            <p className="mt-1">
              <span className="text-indigo-400">import</span> &#123;{' '}
              <span className="text-emerald-400">EnterpriseSolution</span>,{' '}
              <span className="text-emerald-400">AIAgentWorkflow</span> &#125;{' '}
              <span className="text-indigo-400">from</span>{' '}
              <span className="text-amber-300">'@codestache/core'</span>;
            </p>
            <p className="mt-3">
              <span className="text-indigo-400">const</span>{' '}
              <span className="text-cyan-300">systemSpec</span> ={' '}
              <span className="text-indigo-400">new</span>{' '}
              <span className="text-emerald-400">EnterpriseSolution</span>(&#123;
            </p>
            <p className="pl-4">
              brand: <span className="text-amber-300">'CodeStache'</span>,
            </p>
            <p className="pl-4">
              motto: <span className="text-amber-300">'Engenharia inteligente com assinatura própria'</span>,
            </p>
            <p className="pl-4">
              stack: [<span className="text-amber-300">'.NET 9'</span>, <span className="text-amber-300">'React 19'</span>, <span className="text-amber-300">'TypeScript'</span>, <span className="text-amber-300">'Docker'</span>, <span className="text-amber-300">'AI Agents'</span>],
            </p>
            <p className="pl-4">
              automationLevel: <span className="text-purple-400">0.999</span>,
            </p>
            <p className="pl-4">
              qualityAssurance: <span className="text-indigo-400">true</span>,
            </p>
            <p>&#125;);</p>
            <p className="mt-3">
              <span className="text-indigo-400">await</span> systemSpec.
              <span className="text-cyan-300">deployHighImpactPlatform</span>(&#123;
            </p>
            <p className="pl-4 text-emerald-400">
              status: <span className="text-amber-300">'ONLINE'</span>,
            </p>
            <p className="pl-4 text-slate-400">
              result: <span className="text-amber-300">'Eliminando tarefas repetitivas e acelerando escala.'</span>
            </p>
            <p>&#125;);</p>
            <p className="mt-2 text-indigo-400 flex items-center gap-2">
              <span className="text-emerald-400">❯</span>
              <span className="text-slate-400">System validated with zero technical debt.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSection
