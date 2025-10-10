export const pricingContent = {
  title: "Preise & Pakete",
  subtitle: "Flexible Abrechnungsmodelle für Ihre Anforderungen",
  description:
    "Wir bieten verschiedene Preismodelle an, die zu Ihrer Projektgröße und Ihrem Budget passen. Alle Preise verstehen sich als White-Label-Service.",

  packages: [
    {
      name: "Setup & Migration",
      description: "Ideal für neue Typo3-Projekte oder Migrationen",
      features: [
        "Typo3-Installation und Konfiguration",
        "Migration von bestehenden Systemen",
        "Template-Integration",
        "Initiales Performance-Tuning",
        "Umfassende Dokumentation",
        "3 Monate kostenloser Support",
      ],
      pricing: "Auf Anfrage",
      recommended: false,
    },
    {
      name: "Extension-Entwicklung",
      description: "Für individuelle Typo3-Extensions und Features",
      features: [
        "Maßgeschneiderte Extension-Entwicklung",
        "API-Integrationen",
        "Datenbankdesign",
        "Umfangreiche Testing",
        "Code-Dokumentation",
        "6 Monate Gewährleistung",
      ],
      pricing: "Auf Anfrage",
      recommended: true,
    },
    {
      name: "Wartung & Support",
      description: "Laufende Betreuung Ihrer Typo3-Projekte",
      features: [
        "Regelmäßige Updates und Patches",
        "Performance-Monitoring",
        "Technischer Support (Response: 24h)",
        "Monatliche Reports",
        "Bugfixing inklusive",
        "Flexible Stundenkontingente",
      ],
      pricing: "Auf Anfrage",
      recommended: false,
    },
    {
      name: "Retainer-Modell",
      description: "Für Agenturen mit kontinuierlichem Bedarf",
      features: [
        "Dedizierte Entwicklungskapazität",
        "Prioritäts-Support",
        "Flexibler Einsatz der Stunden",
        "Monatliche Abrechnung",
        "Persönlicher Account Manager",
        "Keine Setup-Gebühren",
      ],
      pricing: "Auf Anfrage",
      recommended: false,
    },
  ],

  pricingModels: {
    title: "Unsere Abrechnungsmodelle",
    models: [
      {
        name: "Retainer",
        description:
          "Monatliches Stundenkontingent zu vergünstigten Konditionen. Perfekt für laufende Betreuung und kontinuierliche Entwicklung.",
      },
      {
        name: "Stundenabrechnung",
        description:
          "Abrechnung nach tatsächlichem Aufwand. Maximale Flexibilität bei sich ändernden Anforderungen.",
        price: "ab 50€",
        priceDetail: "Stundensatz",
        recommended: true,
      },
      {
        name: "Festpreis",
        description:
          "Klare Projektdefinition mit festem Budget und Liefertermin. Ideal für klar definierte Projekte mit festen Anforderungen.",
      },
    ],
  },

  cta: {
    title: "Individuelles Angebot gewünscht?",
    description: "Kontaktieren Sie uns für ein maßgeschneidertes Angebot, das perfekt zu Ihren Anforderungen passt.",
    buttonText: "Angebot anfordern",
    buttonLink: "/kontakt",
  },
}
