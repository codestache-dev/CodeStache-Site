import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle2, Terminal, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'SaaS / Web App Sob Medida',
    timeline: '1 a 3 meses',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const whatsappMessage = encodeURIComponent(
      `Olá CodeStache! Gostaria de solicitar uma cotação para o meu projeto:\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📧 *E-mail:* ${formData.email}\n` +
      `📱 *Telefone/WhatsApp:* ${formData.phone || 'Não informado'}\n` +
      `🎯 *Tipo de Projeto:* ${formData.projectType}\n` +
      `⏱️ *Prazo Desejado:* ${formData.timeline}\n\n` +
      `📝 *Detalhes da Demanda:*\n${formData.message}`
    )

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Open WhatsApp in new tab
      window.open(`https://wa.me/5518996605512?text=${whatsappMessage}`, '_blank')
    }, 600)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0E1424]/40 border-y border-slate-200/60 dark:border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-500 dark:text-emerald-400 bg-emerald-500/10">
            <span>&lt;cotacao-sob-medida&gt;</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Cotações Sob Medida &amp; Contato Direto
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Não trabalhamos com valores engessados ou genéricos. Cada produto tem desafios, arquitetura e objetivos únicos: fale direto com nossa engenharia para receber uma proposta técnica detalhada com escopo e prazos precisos.
          </p>
        </div>

        {/* Content Box */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information & Channels (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Canais Diretos de Engenharia
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Prefere conversar diretamente antes de preencher o formulário? Acesse nossos canais oficiais:
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5518996605512?text=Ol%C3%A1%20CodeStache!%20Gostaria%20de%20conversar%20sobre%20uma%20cota%C3%A7%C3%A3o%20para%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 text-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">WhatsApp Comercial</p>
                    <p className="font-medium">+55 (18) 99660-5512</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:joovitordiasdasilva@gmail.com"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">E-mail Comercial</p>
                    <p className="font-medium">joovitordiasdasilva@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Localização</p>
                    <p className="font-medium">Presidente Prudente, SP · Atendimento Remoto Global</p>
                  </div>
                </div>

                {/* SLA */}
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Tempo de Resposta</p>
                    <p className="font-medium">&lt; 24h úteis para propostas</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#1E293B]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Redes &amp; Repositórios
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/JoaoVitorDiass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="GitHub do Fundador"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/joaovitordiass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label="LinkedIn do Fundador"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Quote Form (Right) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  Solicitação de Cotação Enviada!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Os dados do seu projeto foram formatados e abertos no WhatsApp. Nosso Arquiteto técnico responderá com uma análise detalhada em até 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Enviar Outra Solicitação
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Ana Silva"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ana@empresa.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(18) 99660-5512"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Tipo de Projeto
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 text-sm"
                    >
                      <option value="SaaS / Web App Sob Medida">SaaS &amp; Aplicações Web Sob Medida</option>
                      <option value="Agentes Autônomos de IA & Automação">Agentes Autônomos de IA &amp; Automação</option>
                      <option value="Consultoria de Arquitetura & Cloud">Consultoria de Arquitetura &amp; Cloud</option>
                      <option value="Integrações de APIs Críticas & Tempo Real">Integrações de APIs &amp; Tempo Real</option>
                      <option value="Outro Desafio de Engenharia">Outro Desafio de Engenharia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Prazo Estimado Desejado
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 text-sm"
                  >
                    <option value="Urgente / Fast Track (&lt; 1 mês)">Fast Track / Urgente (&lt; 1 mês)</option>
                    <option value="1 a 3 meses (Recomendado)">1 a 3 meses (Ciclo regular)</option>
                    <option value="3 a 6 meses (Escopo Robusto)">3 a 6 meses (Escopo robusto)</option>
                    <option value="Aberto a cronograma técnico recomendado">Aberto à recomendação técnica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Detalhes do Projeto &amp; Objetivos *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva as principais necessidades, regras de negócio ou dores operacionais que a solução deve resolver..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-600/30 transition-all text-sm disabled:opacity-50 group hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Preparando Cotação...' : 'Solicitar Cotação via WhatsApp Comercial'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  * Sua solicitação é transmitida de forma direta e segura para a engenharia da CodeStache.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection
