import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Award, Cpu } from 'lucide-react'

export const TeamSection: React.FC = () => {
  const skills = [
    '.NET 9 / C#',
    'React 19 & TypeScript',
    'Cloud & Docker',
    'AI Agents & LLM RAG',
    'Supabase & PostgreSQL',
    'SignalR & Real-time Web',
    'Clean Architecture & DDD',
    'DevEx & CI/CD',
  ]

  return (
    <section id="team" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0E1424]/40 border-y border-slate-200/60 dark:border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-500/10">
            <span>&lt;fundador-e-lideranca&gt;</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Engenharia Liderada por Especialista
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A CodeStache é fundada e guiada por quem está na linha de frente do desenvolvimento prático de sistemas e arquitetura de inteligência artificial.
          </p>
        </div>

        {/* Founder Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-xl overflow-hidden p-8 sm:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar / Photo placeholder or logo avatar */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-emerald-400 p-1 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-[#0B0F19] overflow-hidden flex items-center justify-center p-3">
                    <img
                      src="/assets/images/avatar-dark.svg"
                      alt="João Vitor Dias"
                      className="w-full h-full object-contain hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-md">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>

              {/* Founder Information */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                      João Vitor Dias
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                      Fundador, Full Stack Software Engineer &amp; Solutions Architect
                    </p>
                  </div>

                  <div className="flex items-center justify-center md:justify-end gap-3 pt-2 md:pt-0">
                    <a
                      href="https://github.com/JoaoVitorDiass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/joaovitordiass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4 mb-6">
                  Arquiteto de soluções focado em ecossistemas de alta performance, integrações com Inteligência Artificial e experiência do desenvolvedor (DevEx). Criador do <strong>StacheHub</strong>, plataforma corporativa de helpdesk com SignalR em tempo real, gestão rigorosa de SLAs e automações inteligentes.
                </p>

                {/* Technical Stack Tags */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Especialidades &amp; Tecnologias Chave:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* StacheHub Quote / Credibility */}
                <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 flex items-start gap-3 text-left">
                  <Award className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      Compromisso de Entrega:
                    </span>{' '}
                    Cada projeto sob a chancela CodeStache é desenhado para ser auditável, legível e preparado para escala real, sem atalhos que gerem dívida técnica oculta.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default TeamSection
