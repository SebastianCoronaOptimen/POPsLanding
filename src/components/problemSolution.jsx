import { Card, CardContent } from "./ui/card"
import { AlertTriangle, CheckCircle, Globe, DollarSign, Users, Clock } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Del caos actual a la <span className="text-custom-cta">simplicidad con POPS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            La gestión de viáticos en aerolíneas es compleja. POPS lo simplifica todo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Problem Side */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6 mt-14">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-2xl font-bold">Situación actual</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Complejidad por país</p>
                    <p className="text-sm text-muted-foreground">Diferentes regulaciones y montos por destino</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Múltiples monedas</p>
                    <p className="text-sm text-muted-foreground">Euro, peso, dólar... cálculos manuales complejos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Seniority variable</p>
                    <p className="text-sm text-muted-foreground">Diferentes montos según experiencia del tripulante</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Cambios de última hora</p>
                    <p className="text-sm text-muted-foreground mb-6">Vuelos cancelados, retrasos, nuevas asignaciones</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution Side */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6 mt-14">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Con POPS</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Cálculo automático</p>
                    <p className="text-sm text-muted-foreground">
                      Sistema inteligente que conoce todas las regulaciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Conversión automática</p>
                    <p className="text-sm text-muted-foreground">Tipos de cambio actualizados en tiempo real</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Perfiles inteligentes</p>
                    <p className="text-sm text-muted-foreground">
                      Reconoce automáticamente el nivel de cada tripulante
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Sincronización en tiempo real</p>
                    <p className="text-sm text-muted-foreground mb-6">Conectado con sistemas de operación y tracking</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
