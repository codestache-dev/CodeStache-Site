import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, MessageSquare, Quote, Code2 } from 'lucide-react'

const SKILLS = [
  'C#',
  '.NET 10',
  'React 19',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'Cloud Architecture',
  'AI Agents & LLMs',
  'SignalR',
  'Supabase',
  'Tailwind CSS',
  'CI/CD DevOps',
]

const TeamSection: React.FC = () => {
  return (
    <section id="fundador" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0E1422]/50">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
            Liderança Técnica
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            O{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Fundador
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Conheça o arquiteto por trás dos padrões de engenharia, código limpo e soluções inteligentes da CodeStache.
          </p>
        </motion.div>

        {/* Large Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-xl overflow-hidden p-8 sm:p-12 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Founder Avatar & Quick Badges (Left 4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-5">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-500" />
                <img
                  src="https://avatars.githubusercontent.com/u/105681946"
                  alt="João Vitor Dias - Fundador CodeStache"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-2xl border-2 border-white dark:border-[#1E293B]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                  }}
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  João Vitor Dias
                </h3>
                <p className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                  Full Stack Engineer & Arquiteto de Soluções
                </p>
              </div>

              {/* Social Link Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/JoaoVitorDiass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-800 transition-colors"
                  aria-label="GitHub de João Vitor Dias"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/joaovitordiass/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] transition-colors"
                  aria-label="LinkedIn de João Vitor Dias"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://wa.me/5562982193504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-emerald-600 dark:text-emerald-400 hover:text-white hover:bg-emerald-600 transition-colors"
                  aria-label="WhatsApp direto"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Founder Biography & Highlights (Right 8 Cols) */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="space-y-4 text-slate-600 dark:text-[#94A3B8] text-sm sm:text-base leading-relaxed">
                <p>
                  Com sólida experiência no desenvolvimento de sistemas distribuídos e plataformas corporativas críticas,
                  João Vitor combina o rigor formal da engenharia de software com agilidade prática e visão de produto.
                </p>
                <p>
                  É o criador e mantenedor da plataforma <strong className="text-slate-900 dark:text-white">StacheHub</strong>{' '}
                  (sistema de Help Desk com WebSockets SignalR, controle avançado de SLA e inteligência artificial), além de liderar
                  a arquitetura de múltiplos projetos web, SaaS e fluxos automatizados com agentes de IA.
                </p>
                <p>
                  Na CodeStache, atua diretamente no design de sistemas, mentoria de arquitetura, automação de processos corporativos
                  e garantia de que cada entrega possua excelência em performance, manutenibilidade e identidade própria.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border-l-4 border-indigo-500 border border-slate-200 dark:border-[#1E293B] p-6">
                <Quote className="w-6 h-6 text-indigo-400 mb-2 opacity-60" />
                <p className="italic text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  "Engenharia inteligente não é apenas fazer o código compilar; é construir ferramentas enxutas, elegantes e sustentáveis que eliminem tarefas manuais e potencializem a inteligência das equipes."
                </p>
                <span className="block mt-2 text-xs font-mono text-indigo-500 dark:text-indigo-400 font-semibold">
                  — João Vitor Dias, Fundador da CodeStache
                </span>
              </div>

              {/* Skills Grid */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>// Tecnologias & Especialidades</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1 rounded-md bg-slate-100 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1E293B]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
