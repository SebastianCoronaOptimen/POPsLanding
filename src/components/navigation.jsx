import { Button } from "./ui/button"
import { Plane } from "lucide-react"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="flex items-center gap-2">
        <Plane className="h-10 w-10 text-primary" />
        <span className="text-4xl font-bold text-foreground">POPS</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-2xl">
        <a href="#producto" className="text-muted-foreground hover:text-foreground transition-colors">
          Producto
        </a>
        <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors">
          Funcionalidades
        </a>
        <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
          Beneficios
        </a>
        <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
          Contacto
        </a>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-muted-foreground hover:bg-custom-green hover:text-white">
          Iniciar sesión
        </Button>
        <Button className="!bg-custom-cta !text-white hover:!bg-custom-cta/90">Solicitar demo</Button>
      </div>
    </nav>
  )
}
