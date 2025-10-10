"use client"

import { ArrowRight, Clock, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pricingContent } from "@/content/pricing"
import { useEffect, useRef, useState } from "react"
import { useContactModal } from "@/components/providers/contact-modal-provider"

const iconMap = {
  "Festpreis": Zap,
  "Stundenabrechnung": Clock,
  "Retainer": Users,
}

export function PricingCards() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const { openContactModal } = useContactModal()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pricingContent.pricingModels.models.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="preise" className="py-16 sm:py-20 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-wider">
            Preismodelle
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Flexibel und transparent
          </p>
          <p className="mt-3 text-base leading-7 text-gray-300">
            Wählen Sie das Abrechnungsmodell, das am besten zu Ihrem Projekt passt
          </p>
        </div>

        {/* Pricing Models - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 pt-4">
          {pricingContent.pricingModels.models.map((model, index) => {
            const isVisible = visibleCards.includes(index)
            const Icon = iconMap[model.name as keyof typeof iconMap]
            const isRecommended = model.recommended === true

            return (
              <div
                key={model.name}
                className={`group relative p-6 rounded-2xl border transition-all duration-700 hover:-translate-y-2 ${
                  isRecommended
                    ? 'border-accent/30 bg-[#151821]/80 backdrop-blur-xl shadow-2xl shadow-accent/20 hover:shadow-accent/30 lg:scale-105'
                    : 'border-white/10 bg-[#151821]/60 backdrop-blur-xl hover:border-white/20'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Glow effect for Recommended */}
                {isRecommended && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-accent/5 to-transparent opacity-60" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                    <div className="absolute -inset-px bg-gradient-to-b from-accent/30 via-transparent to-transparent opacity-50 blur-xl" />
                  </>
                )}

                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-accent text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Bestseller
                    </span>
                  </div>
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    isRecommended ? 'bg-accent/20 ring-2 ring-accent/30' : 'bg-blue-500/10 ring-1 ring-blue-500/20'
                  }`}>
                    <Icon className={`h-6 w-6 ${isRecommended ? 'text-accent' : 'text-blue-400'}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{model.name}</h3>

                  {/* Price (if available) */}
                  {"price" in model && model.price && (
                    <div className="mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">{model.price as string}</span>
                        <span className="text-base text-gray-400">{"priceDetail" in model ? (model.priceDetail as string) : ""}</span>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-400 min-h-[70px]">
                    {model.description}
                  </p>

                  {/* Benefits based on model type */}
                  <div className="mt-4 space-y-1.5">
                    {model.name === "Festpreis" && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Festes Budget
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Klarer Liefertermin
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Definierter Scope
                        </div>
                      </>
                    )}
                    {model.name === "Stundenabrechnung" && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Maximale Flexibilität
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Transparente Abrechnung
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          Agile Entwicklung
                        </div>
                      </>
                    )}
                    {model.name === "Retainer" && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          Vergünstigte Konditionen
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          Dedizierte Kapazität
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          Prioritäts-Support
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl text-center p-8 bg-[#151821]/60 backdrop-blur-xl rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">
            {pricingContent.cta.title}
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            {pricingContent.cta.description}
          </p>
          <Button
            onClick={openContactModal}
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50 rounded-lg inline-flex items-center justify-center gap-2 px-6 py-2.5"
          >
            <span className="whitespace-nowrap">{pricingContent.cta.buttonText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  )
}
