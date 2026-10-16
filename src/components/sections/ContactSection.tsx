import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Mail, Clock, MapPin, Send, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react'
import { ContactFormData } from '../../types'

const CONTACT_INFO = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Direto',
    value: '(62) 9 8219-3504',
    hint: 'Atendimento rápido com o arquiteto',
    href: 'https://wa.me/5562982193504',
    isExternal: true,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Mail,
    title: 'E-mail Institucional',
    value: 'contato@codestache.dev',
    hint: 'Propostas formais e parcerias corporativas',
    href: 'mailto:contato@codestache.dev',
    isExternal: false,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: Clock,
    title: 'Tempo de Resposta',
    value: 'Em até 24 horas úteis',
    hint: 'Atendimento consultivo e prioritário',
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: MapPin,
    title: 'Localização & Operação',
    value: 'Goiânia, GO · Brasil',
    hint: 'Atendimento remoto para todo o Brasil e exterior',
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
]

const PROJECT_TYPE_OPTIONS = [
  'Desenvolvimento de Software Sob Medida (Web / SaaS)',
  'Agentes Autônomos de IA & Automação Corporativa',
  'Consultoria de Arquitetura & Cloud (.NET / Cloud)',
  'Integração de APIs Críticas & WebSockets',
  'Implantação do StacheHub (Help Desk com IA)',
  'Outro Desafio Tecnológico',
]

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: PROJECT_TYPE_OPTIONS[0],
    description: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formata mensagem para WhatsApp
    const message = `Olá! Vim pelo site da CodeStache e gostaria de conversar sobre um projeto.\n\n• Nome: ${formData.name}\n• Empresa: ${formData.company || 'Não informada'}\n• E-mail: ${formData.email}\n• Telefone: ${formData.phone || 'Não informado'}\n• Tipo de Projeto: ${formData.projectType}\n• Mensagem / Detalhes:\n${formData.description}`

    const whatsappUrl = `https://wa.me/5562982193504?text=${encodeURIComponent(message)}`
    setIsSubmitted(true)

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Accent Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
            Canais de Comunicação
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            Vamos{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Diga-nos o que você precisa construir ou otimizar. Avaliamos a viabilidade arquitetural,
            prazos e a melhor estratégia de engenharia para o seu negócio.
          </p>
        </motion.div>

        {/* Two Columns Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            {CONTACT_INFO.map((item, idx) => {
              const Icon = item.icon
              const isClickable = !!item.href
              const CardContent = (
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-200 group">
                  <div className={`p-3 rounded-xl border shrink-0 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {item.title}
                    </span>
                    <p className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{item.value}</span>
                      {isClickable && (
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-[#94A3B8]">{item.hint}</p>
                  </div>
                </div>
              )

              if (isClickable) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="block focus:outline-none"
                  >
                    {CardContent}
                  </a>
                )
              }

              return <div key={idx}>{CardContent}</div>
            })}

            {/* Quick Note Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-indigo-500/20 text-xs text-slate-600 dark:text-[#94A3B8] space-y-2">
              <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-semibold font-display">
                <Sparkles className="w-4 h-4" />
                <span>Atendimento Consultivo Direto</span>
              </div>
              <p className="leading-relaxed">
                Você conversa diretamente com engenheiros de software seniores. Não temos intermediários ou
                respostas genéricas: avaliamos código, arquitetura e ROI de forma prática.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-xl p-8 sm:p-10 text-left">
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8] mb-6">
                Preencha os dados e a mensagem será aberta automaticamente no seu WhatsApp já formatada.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Mensagem pronta! O WhatsApp foi aberto para você confirmar o envio.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex: Tech Corp"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="joao@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Tipo de Projeto (Select) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Tipo de Projeto / Interesse *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    {PROJECT_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Descrição do Projeto */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Descrição do Projeto ou Dúvida *
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descreva brevemente seu objetivo, prazos desejados ou desafios atuais..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#10B981] hover:opacity-95 shadow-xl shadow-indigo-500/25 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem via WhatsApp</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
