import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ArrowRight, Calendar, Phone } from "lucide-react"

export function Summary() {
  return (
    <section id="contacto" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-custom-cta text-black">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold  mt-14 text-balance">¿Listo para transformar </h2>
            <h2 className="text-4xl font-bold mb-4  text-balance">la gestión de viáticos?</h2>
            <p className="text-xl mb-8 opacity-90 text-balance">
              Únete a las aerolíneas que ya están ahorrando tiempo y dinero con POPS
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}