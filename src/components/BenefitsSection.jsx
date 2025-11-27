import { Card, CardContent } from "./ui/card"
import { Building2, Users, TrendingUp } from "lucide-react"

export function BenefitsSection() {
  return (
    <section id="beneficios" className="px-6 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Beneficios para <span className="text-custom-cta">todos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            POPS mejora la experiencia tanto para aerolíneas como para tripulantes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-8 mb-4">
              <div className="flex justify-center mb-6 mt-14">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Building2 className="h-9 w-9 text-custom-cta/90" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Para la aerolínea</h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Mayor control financiero</li>
                <li>• Reducción de errores</li>
                <li>• Procesos más rápidos</li>
                <li>• Mejor compliance</li>
                <li>• Reportes detallados</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6 mt-14">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Users className="h-9 w-9 text-custom-green/90" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Para el tripulante</h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Transparencia en pagos</li>
                <li>• Facilidad para solicitar aclaraciones</li>
                <li>• Seguridad en la gestión</li>
                <li>• Acceso web 24/7</li>
                <li>• Historial completo</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6 mt-14">
                <div className="p-4 bg-chart-4/10 rounded-full">
                  <TrendingUp className="h-9 w-9 text-custom-green/70" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Para ambos</h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Ahorro de tiempo significativo</li>
                <li>• Procesos más claros</li>
                <li>• Plataforma moderna</li>
                <li>• Soporte especializado</li>
                <li>• Escalabilidad garantizada</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
