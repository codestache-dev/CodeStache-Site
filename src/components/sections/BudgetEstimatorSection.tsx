import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Clock,
  Flame,
  Send,
} from 'lucide-react'
import { ProjectTypeOption, ProjectFeatureOption, UrgencyOption, UrgencyLevel } from '../../types'

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'mvp',
    title: 'MVP Rápido',
    duration: '4 a 8 semanas',
    description: 'Validação ágil no mercado com escopo enxuto, arquitetura moderna e lançamento rápido.',
    badge: 'Go-to-Market Ágil',
  },
  {
    id: 'saas',
    title: 'SaaS Completo',
    duration: '3 a 6 meses',
    description: 'Plataforma completa, multi-tenant, autenticação robusta, billing e escalabilidade de alta carga.',
    badge: 'Escala & Performance',
  },
  {
    id: 'automacao-ia',
    title: 'Automação & Agentes de IA',
    duration: '2 a 4 semanas',
    description: 'Pipelines inteligentes de dados, agentes autônomos e corte substancial de trabalho operacional repetitivo.',
    badge: 'Produtividade 10x',
  },
  {
    id: 'consultoria',
    title: 'Consultoria Técnica & Cloud',
    duration: '1 a 2 semanas',
    description: 'Code review aprofundado, diagnóstico de arquitetura, migração para cloud e governança.',
    badge: 'Mentoria Sênior',
  },
  {
    id: 'integracao-apis',
    title: 'Integração de APIs Críticas',
    duration: '2 a 6 semanas',
    description: 'Conexão segura entre sistemas legados, gateways de pagamento, ERPs, CRMs e WebSockets.',
    badge: 'Conectividade Total',
  },
]

const FEATURES_LIST: ProjectFeatureOption[] = [
  { id: 'auth', label: 'Autenticação & Gestão de Usuários (RBAC/JWT)', category: 'Segurança' },
  { id: 'dashboard', label: 'Dashboard Analítico & Relatórios Gerenciais', category: 'Gestão' },
  { id: 'ia', label: 'Integração com IA / LLMs / Agentes Autônomos', category: 'Inteligência' },
  { id: 'apis', label: 'Integração de APIs de Terceiros & Webhooks', category: 'Conexão' },
  { id: 'mobile', label: 'PWA / Responsividade Mobile Avançada', category: 'Interface' },
  { id: 'realtime', label: 'Comunicação em Tempo Real (SignalR/WebSockets)', category: 'Tempo Real' },
  { id: 'cloud', label: 'Infraestrutura Cloud & Pipelines CI/CD (Docker)', category: 'DevOps' },
  { id: 'payments', label: 'Gateway de Pagamentos & Checkout Recorrente', category: 'Finanças' },
]

const URGENCIES: UrgencyOption[] = [
  {
    id: 'low',
    label: 'Normal / Planejado',
    description: 'Desenvolvimento cadenciado com etapas graduais e testes contínuos sem sobrecarga de cronograma.',
    multiplierText: 'Prazo padrão garantido',
  },
  {
    id: 'medium',
    label: 'Moderada / Prioritária',
    description: 'Sprints mais intensos para antecipação de entregáveis e marcos executivos importantes.',
    multiplierText: 'Aceleração de 20% a 30%',
  },
  {
    id: 'high',
    label: 'Urgente / Sprint Crítico',
    description: 'Prioridade total e dedicação intensiva imediata para atender a prazos regulatórios ou oportunidades imediatas.',
    multiplierText: 'Foco exclusivo & entregas imediatas',
  },
]

const BudgetEstimatorSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedType, setSelectedType] = useState<string>('mvp')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'dashboard',
    'ia',
  ])
  const [selectedUrgency, setSelectedUrgency] = useState<UrgencyLevel>('medium')

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id))
    } else {
      setSelectedFeatures([...selectedFeatures, id])
    }
  }

  const selectedTypeObj = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0]
  const selectedUrgencyObj = URGENCIES.find((u) => u.id === selectedUrgency) || URGENCIES[1]
  const selectedFeatureLabels = selectedFeatures.map(
    (fId) => FEATURES_LIST.find((f) => f.id === fId)?.label || fId
  )

  const buildWhatsAppUrl = () => {
    const text = `Olá! Simulei meu projeto no site da CodeStache.\n\n• Tipo de Projeto: ${selectedTypeObj.title} (${selectedTypeObj.duration})\n• Funcionalidades Desejadas:\n  - ${selectedFeatureLabels.join('\n  - ')}\n• Urgência/Prazo: ${selectedUrgencyObj.label} (${selectedUrgencyObj.multiplierText})\n\nGostaria de entender a viabilidade e agendar um alinhamento técnico.`
    return `https://wa.me/5562982193504?text=${encodeURIComponent(text)}`
  }

  const resetEstimator = () => {
    setCurrentStep(1)
    setSelectedType('mvp')
    setSelectedFeatures(['auth', 'dashboard', 'ia'])
    setSelectedUrgency('medium')
  }

  return (
    <section id="orcamento" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Calculadora Interativa
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            Simule seu{' '}
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              Projeto
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Selecione o formato ideal para as suas necessidades técnicas e receba uma estimativa
            orientativa para falar diretamente com o nosso arquiteto.
          </p>
        </motion.div>

        {/* Wizard Container */}
        <div className="mt-12 rounded-3xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-2xl overflow-hidden p-6 sm:p-10">
          {/* Step Indicator Header */}
          <div className="border-b border-slate-100 dark:border-[#1E293B] pb-6 mb-8">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              {[
                { step: 1, label: 'Tipo' },
                { step: 2, label: 'Módulos' },
                { step: 3, label: 'Urgência' },
                { step: 4, label: 'Resultado' },
              ].map((item) => {
                const isActive = currentStep === item.step
                const isPassed = currentStep > item.step
                return (
                  <div key={item.step} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                        isPassed
                          ? 'bg-emerald-500 text-white'
                          : isActive
                          ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/20'
                          : 'bg-slate-100 dark:bg-[#0B0F19] text-slate-400'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4" /> : item.step}
                    </div>
                    <span
                      className={`hidden sm:inline text-xs font-medium ${
                        isActive
                          ? 'text-slate-900 dark:text-white font-semibold'
                          : isPassed
                          ? 'text-emerald-500'
                          : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Wizard Steps with AnimatePresence */}
          <AnimatePresence mode="wait">
            {/* STEP 1: Tipo de Projeto */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Passo 1: Qual é o formato do seu projeto?
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-[#94A3B8] mt-1">
                    Escolha a modalidade que melhor se alinha com o momento da sua empresa.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = selectedType === type.id
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-200 relative group flex flex-col justify-between ${
                          isSelected
                            ? 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                            : 'bg-slate-50/60 dark:bg-[#0B0F19] border-slate-200 dark:border-[#1E293B] hover:border-indigo-400/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                              {type.title}
                            </span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                              {type.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                            {type.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-[#1E293B] flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-mono flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-indigo-400" />
                            {type.duration}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all"
                  >
                    <span>Próximo: Funcionalidades</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Funcionalidades Desejadas */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Passo 2: Quais módulos e tecnologias você precisa?
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-[#94A3B8] mt-1">
                    Selecione uma ou mais funcionalidades essenciais para o escopo do projeto.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {FEATURES_LIST.map((feature) => {
                    const isChecked = selectedFeatures.includes(feature.id)
                    return (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => toggleFeature(feature.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between gap-3 ${
                          isChecked
                            ? 'bg-indigo-50/60 dark:bg-indigo-950/20 border-indigo-500 shadow-sm'
                            : 'bg-slate-50/60 dark:bg-[#0B0F19] border-slate-200 dark:border-[#1E293B] hover:border-slate-400'
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                            {feature.category}
                          </span>
                          <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                            {feature.label}
                          </p>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-md border shrink-0 flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#0B0F19] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Voltar</span>
                  </button>

                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={selectedFeatures.length === 0}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 shadow-lg shadow-indigo-600/25 transition-all"
                  >
                    <span>Próximo: Urgência</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Urgência & Prazo */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Passo 3: Qual é a urgência de entrega?
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-[#94A3B8] mt-1">
                    Nosso modelo se adapta à velocidade que o seu negócio precisa.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {URGENCIES.map((urg) => {
                    const isSelected = selectedUrgency === urg.id
                    return (
                      <button
                        key={urg.id}
                        type="button"
                        onClick={() => setSelectedUrgency(urg.id)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-indigo-50/60 dark:bg-indigo-950/20 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                            : 'bg-slate-50/60 dark:bg-[#0B0F19] border-slate-200 dark:border-[#1E293B] hover:border-indigo-400/50'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                              {urg.label}
                            </span>
                            {urg.id === 'high' && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-500 border border-rose-500/30 flex items-center gap-1">
                                <Flame className="w-3 h-3" />
                                Alta Prioridade
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                            {urg.description}
                          </p>
                          <span className="inline-block text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                            ✓ {urg.multiplierText}
                          </span>
                        </div>

                        <div
                          className={`w-6 h-6 rounded-full border shrink-0 flex items-center justify-center ${
                            isSelected
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#0B0F19] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Voltar</span>
                  </button>

                  <button
                    onClick={() => setCurrentStep(4)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-emerald-600 hover:opacity-95 shadow-lg shadow-indigo-600/25 transition-all"
                  >
                    <span>Ver Resultado da Simulação</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Resultado & Resumo */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Simulação Concluída com Sucesso
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    Estrutura Recomendada para o seu Projeto
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8]">
                    Confira a estimativa técnica calculada e converse diretamente com o arquiteto.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-200 dark:border-[#1E293B]">
                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                        // Formato de Escopo
                      </span>
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-1">
                        {selectedTypeObj.title}
                      </h4>
                      <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-0.5">
                        {selectedTypeObj.badge}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                        // Prazo Estimado
                      </span>
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-1">
                        {selectedTypeObj.duration}
                      </h4>
                      <p className="text-xs text-emerald-500 font-medium mt-0.5">
                        {selectedUrgencyObj.multiplierText}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                        // Modelo de Parceria
                      </span>
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-1">
                        Engenharia Sob Medida
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Código Proprietário & Arquitetura Sólida
                      </p>
                    </div>
                  </div>

                  {/* Modules Selected */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      // Módulos Selecionados ({selectedFeatures.length})
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedFeatureLabels.map((label, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-[#151C2C] border border-slate-200/80 dark:border-[#1E293B]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-200 truncate">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions: Send to WhatsApp & Reset */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={resetEstimator}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Refazer Simulação</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] via-[#4F46E5] to-[#10B981] hover:opacity-95 shadow-xl shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Conversar no WhatsApp com o Arquiteto</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default BudgetEstimatorSection
