"use client"

import { useEffect, useState } from "react"
import { X, Mail, Phone, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-5xl bg-[#151821] rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Kontakt
                </h2>
                <p className="text-gray-400">
                  Lassen Sie uns über Ihr nächstes Typo3-Projekt sprechen. Wir freuen uns auf Ihre Anfrage!
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 ring-1 ring-accent/20">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">E-Mail</p>
                    <a href="mailto:info@conrat.de" className="mt-1 text-sm text-gray-400 hover:text-accent transition-colors">
                      info@conrat.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 ring-1 ring-accent/20">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Telefon</p>
                    <a href="tel:056519529126" className="mt-1 text-sm text-gray-400 hover:text-accent transition-colors">
                      05651 9529126
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 ring-1 ring-accent/20">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Geschäftszeiten</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Mo-Do: 9:00 - 16:00 Uhr<br />
                      Fr: 9:00 - 14:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-[#0a0e1a]/60 backdrop-blur-xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Kostenloses Erstgespräch vereinbaren
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
