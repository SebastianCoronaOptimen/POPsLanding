import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="text-2xl flex items-center gap-2">
        <img
          src="/images/flag.png"
          alt="AIOPS icon"
          className="w-5 h-5 object-contain"
        />
        <span className="font-semibold text-[#0A1F44]">AIOPS</span>
      </div>
      <div className="flex items-center gap-8 text-2xl">
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#producto"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Overview
          </a>
          <a
            href="#funcionalidades"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Modules
          </a>
          <a
            href="#beneficios"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#contacto"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <Button className="!bg-custom-cta !text-white hover:!bg-custom-cta/90 text-md">
          Schedule a demo
        </Button>
      </div>
    </nav>
  );
}
