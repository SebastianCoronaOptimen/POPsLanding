import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ArrowRight } from "lucide-react"


export function HeroSection() {

  const goFeaturesSection = () => {
    const section = document.getElementById("FeaturesSection").scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="px-6 py-20 text-left">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-balance mb-8 leading-tight">
            AIOPS - Integrated Platform for Airport Operations
          </h1>

          <p className="text-2xl text-muted-foreground mb-8 max-w-2xl text-left">
            Mobility, traceability, and operational efficiency in one system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-left">
            <Button size="lg" className="!background: #003566 !text-primary-foreground hover:!bg-custom-cta/90 px-8 py-3">
              Schedule a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={goFeaturesSection} variant="outline" size="lg" className="px-8 py-3 bg-primary/5 hover:bg-custom-green">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-4">
            <img 
            src="/images/computadora.png" 
            alt="computadora"
            className="rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,53,102,0.2)]"
            />
        </div>

      </div>
    </section>
  )
}
