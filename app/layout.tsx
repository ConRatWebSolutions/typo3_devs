import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
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
      <head>
        <script async src="https://cloud.ccm19.de/app.js?apiKey=7614a1c71381479da7270f2be2afe5e6b5a96141648b472e&domain=68e8b19fa0947f8e490cd132" referrerPolicy="origin"></script>
      </head>
      <body className={`${inter.variable} font-sans bg-[#0a0e1a] text-white`}>
        <ContactModalProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  )
}
