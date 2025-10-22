import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ArrowRight, Calendar, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-custom-cta text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold  mt-14 text-balance">¿Listo para transformar </h2>
            <h2 className="text-4xl font-bold mb-4  text-balance">la gestión de viáticos?</h2>
            <p className="text-xl mb-8 opacity-90 text-balance">
              Únete a las aerolíneas que ya están ahorrando tiempo y dinero con POPS
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                <Calendar className="mr-2 h-4 w-4" />
                Solicitar demo gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-custom-cta bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Hablar con un experto
              </Button>
            </div>

            <p className="text-sm mt-6 mb-14 opacity-75">Demo personalizada • Sin compromiso • Implementación en 30 días</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
