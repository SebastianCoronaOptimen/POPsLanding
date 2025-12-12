import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/heroSection"
import { MainModules } from "./components/mainModules"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/footer"
import { Features } from "./components/features"
import { Overview } from "./components/overview"
import { ExecutiveSummary } from "./components/summary"

export default function App() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <Navigation />
      <HeroSection />
      <div id="FeaturesSection">
      <Overview />
      </div>
      <MainModules/>
      <Features/>
      <ExecutiveSummary/>
      <CTASection />
      <Footer />
    </main>
  )
}
