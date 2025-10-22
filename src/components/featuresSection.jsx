import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Calculator, FileCheck, Zap, BarChart3, Shield, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: "Control de viáticos",
      description: "Cálculo automático de montos según país, moneda y seniority del tripulante.",
    },
    {
      icon: FileCheck,
      title: "Gestión de acreditaciones",
      description: "Solicitudes y aprobaciones para viáticos adicionales, tiempo extra o vuelos no programados.",
    },
    {
      icon: Zap,
      title: "Integración con sistemas",
      description: "Conexión con sistemas de tracking para retroalimentación en tiempo real de vuelos asignados.",
    },
    {
      icon: Clock,
      title: "Historial y transparencia",
      description: "Registro claro de todas las solicitudes, aprobaciones y pagos pendientes.",
    },
    {
      icon: BarChart3,
      title: "Reportes inteligentes",
      description: "Análisis de gastos por ruta, país, moneda y tripulación para mejor control financiero.",
    },
    {
      icon: Shield,
      title: "Seguridad y confiabilidad",
      description: "Plataforma segura y confiable, diseñada específicamente para la industria aérea.",
    },
  ]

  return (
    <section id="funcionalidades" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Funcionalidades que <span className="text-custom-cta">transforman</span> tu operación
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Herramientas diseñadas específicamente para las necesidades de la industria aérea
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-custom-cta/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-custom-cta" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
