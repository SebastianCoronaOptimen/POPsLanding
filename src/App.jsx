import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/heroSection"
import { ProblemSolution } from "./components/problemSolution"
import { FeaturesSection } from "./components/featuresSection"
import { BenefitsSection } from "./components/BenefitsSection"
import { SocialProof } from "./components/socialProof"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/footer"

export default function App() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
