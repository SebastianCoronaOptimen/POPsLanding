import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ArrowRight } from "lucide-react"


export function HeroSection() {

  const goFeaturesSection = () => {
    const section = document.getElementById("FeaturesSection").scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6 text-sm">
          Nuevo: Integración con sistemas de tracking ✈️
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
          La nueva forma de gestionar <span className="text-custom-cta">viáticos y acreditaciones</span> en la industria
          aérea
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Simplifica y centraliza la gestión de viáticos para tripulaciones aéreas. Control automático, validación
          inteligente y transparencia total.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="!bg-custom-cta !text-primary-foreground hover:!bg-custom-cta/90 px-8 py-3">
            Solicitar demo gratuita
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button onClick={goFeaturesSection} variant="outline" size="lg" className="px-8 py-3 bg-transparent hover:bg-custom-green">
            Ver funcionalidades
          </Button>
        </div>
      </div>
    </section>
  )
}
