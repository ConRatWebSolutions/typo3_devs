"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/content/homepage"
import { useEffect, useRef } from "react"
import { useContactModal } from "@/components/providers/contact-modal-provider"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { openContactModal } = useContactModal()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Matrix rain characters
    const characters = "TYPO3{}[]<>/;:_-+=*&#@$%ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const fontSize = 20
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []
    let frameCount = 0

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    function drawMatrix() {
      if (!ctx || !canvas) return

      frameCount++

      // Only update every 5th frame to slow down the animation
      if (frameCount % 5 !== 0) {
        requestAnimationFrame(drawMatrix)
        return
      }

      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(10, 14, 26, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text style
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)]

        // Color gradient - brighter at the front
        const brightness = Math.random() * 0.5 + 0.5
        ctx.fillStyle = `rgba(6, 182, 212, ${brightness})`

        // Draw character
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(char, x, y)

        // Randomly reset drop to top
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }

      requestAnimationFrame(drawMatrix)
    }

    drawMatrix()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize)
      drops.length = newColumns
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.random() * -100
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#1e3a8a] via-[#0f1729] to-[#0a0e1a] overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ pointerEvents: "none" }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-primary-600/30 via-primary-700/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-1/2 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-accent/15 via-transparent to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b57b708_1px,transparent_1px),linear-gradient(to_bottom,#4b57b708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
            <span className="text-accent text-sm font-semibold">White-Label Typo3 Entwicklung</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {heroContent.headline}
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-accent via-accent to-primary-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            {heroContent.subheadline}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            {heroContent.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              onClick={openContactModal}
              size="lg"
              className="text-base group relative overflow-hidden bg-accent hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              <span className="relative z-10">{heroContent.ctaText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary-600 to-accent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
