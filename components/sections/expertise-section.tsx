"use client"

import { Award, Users, Globe, Code2 } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "20+",
    label: "Jahre Erfahrung",
    description: "Am Markt etabliert"
  },
  {
    icon: Users,
    value: "5+",
    label: "Jahre",
    description: "White-Label Entwicklung für Agenturen"
  },
  {
    icon: Globe,
    value: "DACH",
    label: "Region",
    description: "Umfangreiche Projekte für namhafte Kunden"
  },
  {
    icon: Code2,
    value: "100+",
    label: "Projekte",
    description: "Erfolgreich umgesetzt"
  }
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise, die Sie <span className="text-accent">überzeugt</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seit über 20 Jahren entwickeln wir digitale Lösungen. In den letzten 5 Jahren haben wir uns auf
            White-Label-Entwicklung für Agenturen spezialisiert und realisieren komplexe TYPO3-Projekte
            für namhafte Kunden in der DACH-Region.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-300 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">Unsere Stärke</h3>
              <p className="text-gray-400 leading-relaxed">
                Als White-Label-Partner arbeiten wir im Hintergrund und ermöglichen es Agenturen,
                ihren Kunden erstklassige TYPO3-Lösungen anzubieten. Unsere langjährige Erfahrung
                garantiert professionelle Umsetzung auf höchstem Niveau.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">Mehr über uns</h3>
              <p className="text-gray-400 leading-relaxed">
                Neben TYPO3-Entwicklung für Agenturen bieten wir ein breites Spektrum an digitalen
                Lösungen. Erfahren Sie mehr über unsere Expertise und weitere Leistungen auf{" "}
                <a
                  href="https://somesolutions.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  somesolutions.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
