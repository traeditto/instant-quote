import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { TrustBar } from "@/components/landing/trust-bar"
import { Services } from "@/components/landing/services"
import { WhyUs } from "@/components/landing/why-us"
import { Process } from "@/components/landing/process"
import { Testimonials } from "@/components/landing/testimonials"
import { FinalCta } from "@/components/landing/final-cta"
import { SiteFooter } from "@/components/landing/site-footer"

export default function LandingPage() {
  return (
    <main style={{ background: "#0b1a2e", minHeight: "100vh" }}>
      <SiteHeader />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
