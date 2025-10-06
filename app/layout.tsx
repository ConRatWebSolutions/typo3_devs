import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
