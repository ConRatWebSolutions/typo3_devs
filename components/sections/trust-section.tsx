"use client"

import { FileCheck, EyeOff, Shield } from "lucide-react"
import { aboutContent } from "@/content/about"
import { useEffect, useRef, useState } from "react"

const iconMap = {
  FileCheck,
  EyeOff,
  Shield,
}

export function TrustSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutContent.trust.points.forEach((_, index) => {
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
    <section id="vertrauen" className="py-24 sm:py-32 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b57b705_1px,transparent_1px),linear-gradient(to_bottom,#4b57b705_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-accent">
            Vertrauen
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {aboutContent.trust.title}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {aboutContent.trust.points.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap]
            const isVisible = visibleCards.includes(index)
            return (
              <div
                key={point.title}
                className={`group relative text-center p-8 bg-[#151821]/60 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/10 hover:bg-[#1a1f2e]/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20 group-hover:ring-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-10 w-10 text-accent relative z-10" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {point.description}
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
