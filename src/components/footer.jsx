import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <div className="flex justify-center gap-2 mb-4 ">
              <img
                src="/images/logo_pops.png"
                alt="POPS logo"
                className="w-[200px] my-[-30px]"
              />
            </div>
            <p className="text-muted-foreground text-center gap-20">
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

        <div className=" mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AIOPS. All rights reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
