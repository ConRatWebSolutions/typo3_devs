import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"
import { ContactModalProvider } from "@/components/providers/contact-modal-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "White-Label Typo3-Entwicklung für Agenturen",
  description: "Zuverlässige, diskrete und skalierbare Typo3-Entwicklung mit deutscher Projektsteuerung",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans bg-[#0a0e1a] text-white`}>
        <ContactModalProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </ContactModalProvider>
      </body>
    </html>
  )
}
