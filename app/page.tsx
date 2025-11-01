import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { MarqueeSection } from "@/components/marquee-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <MarqueeSection />
      <FacilitiesSection />
      <Footer />
    </main>
  )
}
