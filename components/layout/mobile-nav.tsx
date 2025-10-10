"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/components/providers/contact-modal-provider"

interface MobileNavProps {
  open: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

export function MobileNav({ open, onClose, navigation }: MobileNavProps) {
  const { openContactModal } = useContactModal()
  if (!open) return null

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />

      {/* Menu panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0a0e1a] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5" onClick={onClose}>
            <span className="text-xl font-bold text-primary">Typo3 für Agenturen</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onClose}
          >
            <span className="sr-only">Menü schließen</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent/10 transition-colors"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button
                className="w-full"
                onClick={() => {
                  onClose()
                  openContactModal()
                }}
              >
                Partner werden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
