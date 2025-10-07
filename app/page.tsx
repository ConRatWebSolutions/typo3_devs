import { HeroSection } from "@/components/sections/hero-section"
import { USPBlock } from "@/components/sections/usp-block"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ProcessSection } from "@/components/sections/process-section"
import { TrustSection } from "@/components/sections/trust-section"
import { PricingCards } from "@/components/sections/pricing-cards"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <USPBlock />
      <ServicesGrid />
      <ProcessSection />
      <TrustSection />
      <PricingCards />
      <FAQSection />
      <CTASection />
    </>
  )
}
