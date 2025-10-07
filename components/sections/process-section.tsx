"use client"

import { processContent } from "@/content/homepage"
import { useEffect, useRef, useState } from "react"

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processContent.steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * 200)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="prozess" ref={sectionRef} className="py-24 sm:py-32 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b57b705_1px,transparent_1px),linear-gradient(to_bottom,#4b57b705_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {processContent.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            {processContent.description}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processContent.steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index)
              return (
                <div key={step.number} className="relative group">
                  {/* Connector Line - hidden on last item and on mobile */}
                  {index < processContent.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 -translate-x-1/2 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-accent/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
                      {/* Animated pulse moving through line */}
                      <div className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-accent to-transparent blur-sm ${isVisible ? 'animate-[slideThrough_3s_ease-in-out_infinite]' : 'opacity-0'}`}
                           style={{ animationDelay: `${index * 0.5}s` }} />
                    </div>
                  )}

                  <div className={`relative flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary-600 text-white text-2xl font-bold ring-4 ring-primary-900 shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-accent/40 group-hover:ring-accent/50 animate-[pulse_3s_ease-in-out_infinite]">
                      <span className="relative z-10">{step.number}</span>
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/40 transition-all duration-300" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-7 text-white group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-300 group-hover:text-white transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
