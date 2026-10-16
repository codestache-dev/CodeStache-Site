import React, { useState } from 'react'
import { Calculator, Check, Clock, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'

interface ServiceTypeOption {
  id: string
  label: string
  baseCost: number
  baseDays: number
}

interface FeatureOption {
  id: string
  label: string
  cost: number
  days: number
}

const serviceTypes: ServiceTypeOption[] = [
  {
    id: 'web_saas',
    label: 'Plataforma Web ou SaaS Sob Medida',
    baseCost: 8000,
    baseDays: 20,
  },
  {
    id: 'ai_agents',
    label: 'Agente Autônomo de IA & Automação Corporativa',
    baseCost: 6500,
    baseDays: 15,
  },
  {
    id: 'cloud_arch',
    label: 'Consultoria de Arquitetura, Cloud & Docker',
    baseCost: 4500,
    baseDays: 10,
  },
  {
    id: 'api_integration',
    label: 'Integrações de APIs Críticas & Tempo Real',
    baseCost: 5000,
    baseDays: 12,
  },
]

const addOnFeatures: FeatureOption[] = [
  {
    id: 'rag_ai',
    label: 'Pipeline RAG com busca vetorial corporativa',
    cost: 2500,
    days: 6,
  },
  {
    id: 'realtime',
    label: 'Mensageria e Sockets em tempo real (SignalR)',
    cost: 1800,
    days: 4,
  },
  {
    id: 'docker_cicd',
    label: 'Setup Docker + Pipeline CI/CD GitHub Actions',
    cost: 1400,
    days: 3,
  },
  {
    id: 'analytics',
    label: 'Painel analítico executivo e métricas de uso',
    cost: 1900,
    days: 5,
  },
  {
    id: 'multitenant',
    label: 'Arquitetura Multi-Tenant para B2B SaaS',
    cost: 3200,
    days: 8,
  },
]

export const BudgetEstimator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(serviceTypes[0].id)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [urgencyMultiplier, setUrgencyMultiplier] = useState<number>(1) // 1: normal, 1.25: acelerado

  const handleFeatureToggle = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const currentService = serviceTypes.find((s) => s.id === selectedService) || serviceTypes[0]

  const totalCost = Math.round(
    (currentService.baseCost +
      addOnFeatures
        .filter((f) => selectedFeatures.includes(f.id))
        .reduce((sum, f) => sum + f.cost, 0)) *
      urgencyMultiplier
  )

  const totalDays = Math.round(
    (currentService.baseDays +
      addOnFeatures
        .filter((f) => selectedFeatures.includes(f.id))
        .reduce((sum, f) => sum + f.days, 0)) /
      urgencyMultiplier
  )

  const handleTransferToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement | null
      if (messageInput) {
        const featureNames = addOnFeatures
          .filter((f) => selectedFeatures.includes(f.id))
          .map((f) => f.label)
          .join(', ')

        messageInput.value = `Olá CodeStache! Gostaria de conversar sobre o projeto:\n- Serviço: ${
          currentService.label
        }\n- Adicionais: ${
          featureNames || 'Nenhum adicional selecionado'
        }\n- Estimativa gerada no simulador: R$ ${totalCost.toLocaleString('pt-BR')},00 (~${totalDays} dias de desenvolvimento).`
      }
    }
  }

  return (
    <section id="estimator" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-500 dark:text-emerald-400 bg-emerald-500/10">
            <span>&lt;simulador-interativo&gt;</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Simulador de Escopo e Investimento
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Transparência e previsibilidade desde o primeiro instante. Simule os recursos do seu projeto e obtenha uma estimativa de investimento e prazo.
          </p>
        </div>

        {/* Estimator Interactive Box */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options (Left Side) */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151C2C] border border-slate-200 dark:border-[#1E293B] shadow-sm">
            {/* Step 1: Service Type */}
            <div>
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">
                  1
                </span>
                <span>Selecione a Categoria Principal</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {serviceTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedService(type.id)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                      selectedService === type.id
                        ? 'border-indigo-500 bg-indigo-500/10 text-slate-900 dark:text-white font-medium'
                        : 'border-slate-200 dark:border-[#1E293B] hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-sm">{type.label}</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      a partir de R$ {type.baseCost.toLocaleString('pt-BR')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Extra Features */}
            <div>
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">
                  2
                </span>
                <span>Módulos e Recursos Complementares</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {addOnFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id)
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => handleFeatureToggle(feat.id)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-500/10 text-slate-900 dark:text-white'
                          : 'border-slate-200 dark:border-[#1E293B] hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'border-slate-400 dark:border-slate-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-sm">{feat.label}</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        + R$ {feat.cost.toLocaleString('pt-BR')}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div>
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">
                  3
                </span>
                <span>Ritmo de Execução</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgencyMultiplier(1)}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    urgencyMultiplier === 1
                      ? 'border-indigo-500 bg-indigo-500/10 font-medium text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-[#1E293B] text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <p className="text-sm font-medium">Cronograma Padrão</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">Sprints regulares</p>
                </button>
                <button
                  type="button"
                  onClick={() => setUrgencyMultiplier(1.25)}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    urgencyMultiplier === 1.25
                      ? 'border-indigo-500 bg-indigo-500/10 font-medium text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-[#1E293B] text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <p className="text-sm font-medium">Sprint Acelerado (Fast Track)</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">Entrega priorizada (+25%)</p>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card (Right Side Sticky) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0E1424] text-white border border-[#1E293B] shadow-2xl relative overflow-hidden lg:sticky lg:top-28">
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

            <div className="flex items-center gap-2 text-indigo-400 mb-6">
              <Calculator className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-wider">
                Resumo da Estimativa
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Investimento Estimado</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-mono text-slate-400">R$</span>
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {totalCost.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-slate-400">,00</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 pt-2 border-t border-[#1E293B]">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="text-sm font-mono">
                  Prazo estimado: ~{totalDays} dias úteis
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Código autoral com documentação completa</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Acompanhamento direto com o Arquiteto fundador</span>
              </div>
            </div>

            <button
              onClick={handleTransferToContact}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] text-sm group"
            >
              <span>Solicitar Proposta Formal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] text-center text-slate-400 mt-4 leading-normal">
              * Valores e prazos são estimativas referenciais sujeitos a validação do briefing técnico final.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BudgetEstimator
