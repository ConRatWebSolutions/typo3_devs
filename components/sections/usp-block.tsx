"use client"

import { useEffect, useRef, useState } from "react"

const dashboardData = [
  {
    label: "ENTWICKLUNGSZEIT",
    title: "Schneller zum Ziel",
    description: "Profitieren Sie von unserer Expertise und sparen Sie bis zu 40% Entwicklungszeit durch optimierte Prozesse.",
    metric: "2.3x",
    subtext: "Schneller als der Durchschnitt",
    chartType: "speedup" as const, // Aufsteigender Trend nach oben
  },
  {
    label: "CODE QUALITÄT",
    title: "Clean Code Standard",
    description: "Typo3-Entwicklung nach Best Practices mit automatisierten Tests, Code Reviews und kontinuierlicher Integration.",
    metric: "A+",
    subtext: "Code Quality Score",
    chartType: "quality" as const, // Konstant hohe Qualitätsbalken
  },
  {
    label: "KOSTENEFFIZIENZ",
    title: "Optimales Budget",
    description: "Reduzieren Sie Ihre Entwicklungskosten durch unser offshore-onshore Hybrid-Modell mit deutscher Projektsteuerung.",
    metric: "45%",
    subtext: "Kosteneinsparung",
    chartType: "cost" as const, // Abfallende Kosten-Linie
  },
  {
    label: "SKALIERBARKEIT",
    title: "Flexibel wachsen",
    description: "Skalieren Sie Ihr Team nach Bedarf - von einzelnen Entwicklern bis zu kompletten Projektteams.",
    metric: "24/7",
    subtext: "Support & Verfügbarkeit",
    chartType: "growth" as const, // Wachstumskurve
  },
]

export function USPBlock() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dashboardData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
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
    <section id="vorteile" ref={sectionRef} className="py-24 sm:py-32 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-wider">
            Warum wir?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ihre Vorteile auf einen Blick
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dashboardData.map((item, index) => {
            const isVisible = visibleCards.includes(index)
            return (
              <div
                key={item.title}
                className={`group relative p-10 bg-[#151821]/80 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-700 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

                <div className="relative">
                  {/* Label */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  {/* Chart Area */}
                  <div className="mb-8 h-48 bg-[#0d1117]/50 rounded-2xl p-6 border border-white/5">
                    {item.chartType === "speedup" && (
                      // Entwicklungszeit: Sprint/Velocity Dashboard
                      <div className="h-full flex flex-col justify-between">
                        {/* Sprint Timeline */}
                        <div className="space-y-3">
                          {/* Sprint 1 - langsamer */}
                          <div className="flex items-center gap-3">
                            <div className="text-[10px] text-gray-500 w-16 font-mono">Sprint 1</div>
                            <div className="flex-1 h-2 bg-gradient-to-r from-blue-900/50 to-blue-700/50 rounded-full relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shimmer"></div>
                            </div>
                            <div className="text-xs text-blue-400 w-12 text-right font-mono">40pts</div>
                          </div>

                          {/* Sprint 2 - schneller */}
                          <div className="flex items-center gap-3 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '200ms' }}>
                            <div className="text-[10px] text-gray-500 w-16 font-mono">Sprint 2</div>
                            <div className="flex-1 h-2 bg-gradient-to-r from-blue-700/50 to-cyan-600/50 rounded-full relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer" style={{ animationDelay: '200ms' }}></div>
                            </div>
                            <div className="text-xs text-cyan-400 w-12 text-right font-mono">65pts</div>
                          </div>

                          {/* Sprint 3 - noch schneller */}
                          <div className="flex items-center gap-3 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '400ms' }}>
                            <div className="text-[10px] text-gray-500 w-16 font-mono">Sprint 3</div>
                            <div className="flex-1 h-2 bg-gradient-to-r from-cyan-600/50 to-cyan-400 rounded-full relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-shimmer" style={{ animationDelay: '400ms' }}></div>
                            </div>
                            <div className="text-xs text-cyan-300 w-12 text-right font-mono">92pts</div>
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="bg-cyan-500/10 rounded-lg p-2 border border-cyan-500/20">
                            <div className="text-[10px] text-gray-500 mb-1">Velocity</div>
                            <div className="text-cyan-400 font-bold text-lg">+130%</div>
                          </div>
                          <div className="bg-blue-500/10 rounded-lg p-2 border border-blue-500/20">
                            <div className="text-[10px] text-gray-500 mb-1">Delivery</div>
                            <div className="text-blue-400 font-bold text-lg">2.3x</div>
                          </div>
                        </div>

                        {/* Speed Indicator */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-8 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full animate-pulse"
                                style={{
                                  animationDelay: `${i * 150}ms`,
                                  height: `${(i + 1) * 6}px`
                                }}
                              />
                            ))}
                          </div>
                          <div className="text-[10px] text-cyan-400 font-mono">ACCELERATING</div>
                        </div>
                      </div>
                    )}

                    {item.chartType === "quality" && (
                      // Code Qualität: Code-Editor Style Visualisierung
                      <div className="h-full flex flex-col justify-between font-mono text-xs">
                        {/* Code Lines mit Syntax-Highlighting-Style */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '100ms' }}>
                            <div className="w-6 h-0.5 bg-blue-400 rounded"></div>
                            <div className="w-20 h-0.5 bg-cyan-400 rounded"></div>
                            <div className="w-12 h-0.5 bg-blue-500 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '200ms' }}>
                            <div className="w-4 h-0.5 bg-cyan-500 rounded"></div>
                            <div className="w-24 h-0.5 bg-blue-400 rounded"></div>
                            <div className="w-16 h-0.5 bg-cyan-400 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '300ms' }}>
                            <div className="w-8 h-0.5 bg-blue-500 rounded"></div>
                            <div className="w-16 h-0.5 bg-cyan-500 rounded"></div>
                            <div className="w-20 h-0.5 bg-blue-400 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '400ms' }}>
                            <div className="w-12 h-0.5 bg-cyan-400 rounded"></div>
                            <div className="w-8 h-0.5 bg-blue-600 rounded"></div>
                            <div className="w-24 h-0.5 bg-cyan-500 rounded"></div>
                          </div>
                        </div>

                        {/* Code Stats / Metrics */}
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <div className="bg-blue-500/10 rounded-lg p-2 border border-blue-500/20">
                            <div className="text-[10px] text-gray-500 mb-1">Tests</div>
                            <div className="text-cyan-400 font-bold">98%</div>
                          </div>
                          <div className="bg-cyan-500/10 rounded-lg p-2 border border-cyan-500/20">
                            <div className="text-[10px] text-gray-500 mb-1">Coverage</div>
                            <div className="text-blue-400 font-bold">95%</div>
                          </div>
                          <div className="bg-blue-600/10 rounded-lg p-2 border border-blue-600/20">
                            <div className="text-[10px] text-gray-500 mb-1">Reviews</div>
                            <div className="text-cyan-300 font-bold">100%</div>
                          </div>
                        </div>

                        {/* Git-style indicators */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                            <span className="text-[10px] text-gray-500">Clean Code</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '500ms' }}></div>
                            <span className="text-[10px] text-gray-500">PSR-12</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <span className="text-[10px] text-gray-500">Typed</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.chartType === "cost" && (
                      // Kosteneffizienz: Abfallende Kosten-Linie (Kostenreduktion)
                      <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient-cost" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        {/* Alte Kosten (hellblau gestrichelt) */}
                        <path
                          d="M0,50 L50,52 L100,55 L150,58 L200,60 L250,63 L300,65"
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          opacity="0.4"
                        />
                        {/* Neue Kosten (cyan/blau) - 45% günstiger */}
                        <path
                          d="M0,90 L50,92 L100,95 L150,100 L200,103 L250,105 L300,108"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="3"
                        />
                        <path
                          d="M0,90 L50,92 L100,95 L150,100 L200,103 L250,105 L300,108 L300,150 L0,150 Z"
                          fill="url(#gradient-cost)"
                        />
                        {/* Pfeil nach unten zeigt Einsparung */}
                        <line x1="150" y1="58" x2="150" y2="95" stroke="#06b6d4" strokeWidth="2" />
                        <polygon points="150,100 145,90 155,90" fill="#06b6d4" />
                        <text x="160" y="80" fill="#06b6d4" fontSize="14" fontWeight="bold">-45%</text>
                      </svg>
                    )}

                    {item.chartType === "growth" && (
                      // Skalierbarkeit: Wachstumskurve mit ansteigenden Balken
                      <div className="flex items-end justify-around h-full gap-2">
                        {[30, 45, 55, 65, 72, 78, 85, 90, 93, 95].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-t-lg transition-all duration-1000"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${i * 100}ms`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className="text-5xl font-bold text-white mb-2">{item.metric}</div>
                    <div className="text-sm text-gray-400">{item.subtext}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">
                    {item.description}
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
