import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-80">
          <div>
            <div className="flex justify-center gap-2 mb-4 ">
              <img
                src="/images/logo_pops.png"
                alt="POPS logo"
                className="w-[200px] my-[-30px] ml-[-20px]"
              />
            </div>
            <p className="text-muted-foreground text-center">
              La plataforma líder para gestión de viáticos y acreditaciones en
              la industria aérea.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            <img 
            src="/images/logo_aws.png" 
            alt="AWS logo"
            className="w-[200px] h-[80px]"/>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 POPS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
