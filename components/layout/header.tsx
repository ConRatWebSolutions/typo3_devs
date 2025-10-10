"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { MobileNav } from "./mobile-nav"
import { useContactModal } from "@/components/providers/contact-modal-provider"

const navigation = [
  { name: "Vorteile", href: "#vorteile" },
  { name: "Leistungen", href: "#leistungen" },
  { name: "Prozess", href: "#prozess" },
  { name: "Preise", href: "#preise" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openContactModal } = useContactModal()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're not on the home page, navigate to home first
    if (href.startsWith('#') && window.location.pathname !== '/') {
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
      const duration = 1000 // 1 second
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <nav className="mx-auto max-w-6xl bg-[#0a0e1a]/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/20" aria-label="Global">
        <div className="flex items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="group flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Some Solutions Logo"
                width={40}
                height={40}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-base font-bold text-white group-hover:text-accent transition-all duration-300">
                Typo3 für Agenturen
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="px-3.5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button
              onClick={openContactModal}
              className="h-9 px-5 text-sm font-medium bg-white text-black hover:bg-gray-100 transition-all hover:scale-105 shadow-lg shadow-white/10 rounded-full"
            >
              Partner werden
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navigation={navigation} />
    </header>
  )
}
