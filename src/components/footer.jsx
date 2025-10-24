import { Plane } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 py-12 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo_pops.png"
                alt="POPS logo"
                className="w-[200px] my-[-30px] ml-[-20px]"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              La plataforma líder para gestión de viáticos y acreditaciones en la industria aérea.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Casos de éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Estado del sistema
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos de servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 POPS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
