"use client"

const navigation = {
  main: [
    { name: "Vorteile", href: "#vorteile" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Prozess", href: "#prozess" },
    { name: "Preise", href: "#preise" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href
        return
      }

      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        // Custom smooth scroll with easing
        const startPosition = window.pageYOffset
        const distance = offsetPosition - startPosition
        const duration = 1000
        let start: number | null = null

        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          const ease = easeInOutCubic(progress)

          window.scrollTo(0, startPosition + distance * ease)

          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)
      }
    }
  }

  return (
    <footer id="kontakt" className="relative bg-[#0a0e1a] text-white overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 relative">
        {/* Company Description */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            Typo3 für Agenturen
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Wir sind Ihr technischer Partner im Hintergrund. White-Label-Typo3-Entwicklung mit deutscher
            Projektsteuerung – zuverlässig, diskret und kosteneffizient.
          </p>
        </div>

        {/* Main Navigation */}
        <nav className="mb-10 flex flex-wrap justify-center gap-x-12 gap-y-4" aria-label="Footer">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm leading-6 text-gray-300 hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Legal Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {navigation.legal.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-gray-400 hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm leading-5 text-gray-400">
          &copy; {currentYear} Typo3 für Agenturen. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
