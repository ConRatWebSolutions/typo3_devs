"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ctaSectionContent } from "@/content/homepage"
import { ArrowRight } from "lucide-react"
import { useContactModal } from "@/components/providers/contact-modal-provider"

export function CTASection() {
  const { openContactModal } = useContactModal()
  return (
    <section className="bg-[#0a0e1a] py-24 sm:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {ctaSectionContent.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            {ctaSectionContent.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={openContactModal}
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-white text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50 relative overflow-hidden inline-flex items-center gap-2"
            >
              <span className="relative z-10">{ctaSectionContent.ctaText}</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary-600 to-accent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
