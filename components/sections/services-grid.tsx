"use client"

import { Settings, Puzzle, ArrowRightLeft, Palette, Zap, LifeBuoy, Database, ShieldCheck } from "lucide-react"
import { servicesContent } from "@/content/services"
import { useEffect, useRef, useState } from "react"

const iconMap = {
  Settings,
  Puzzle,
  ArrowRightLeft,
  Palette,
  Zap,
  LifeBuoy,
  Database,
  ShieldCheck,
}

export function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            servicesContent.services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
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
    <section id="leistungen" className="py-24 sm:py-32 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b57b705_1px,transparent_1px),linear-gradient(to_bottom,#4b57b705_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-accent">
            Unsere Leistungen
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Alles aus einer Hand
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Von der Entwicklung bis zum Support – wir bieten Ihnen ein umfassendes Leistungspaket
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesContent.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isVisible = visibleCards.includes(index)
            return (
              <div
                key={service.title}
                className={`group relative p-8 bg-[#151821]/60 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/10 hover:bg-[#1a1f2e]/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3.5 ring-1 ring-accent/20 group-hover:ring-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
