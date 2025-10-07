"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-900 text-primary-50 p-4 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Diese Website verwendet nur technisch notwendige Cookies, um die Funktionalität der Website zu
              gewährleisten. Es werden keine Tracking- oder Marketing-Cookies eingesetzt.{" "}
              <Link href="/datenschutz" className="underline hover:text-accent transition-colors">
                Mehr erfahren
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={acceptCookies}
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Akzeptieren
            </Button>
            <button
              onClick={acceptCookies}
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Banner schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
