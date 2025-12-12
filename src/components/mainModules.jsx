import { Card, CardContent } from "./ui/card";
import { Building2, Users, TrendingUp } from "lucide-react";

export function MainModules() {
  return (
    <section id="beneficios" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Main Modules</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Core functionalities to streamline every aspect of your operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="text-left">
            <CardContent className="p-8 mb-4">
              <div className="flex justify-start mb-6 mt-14">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Building2 className="h-9 w-9 text-custom-cta/90" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Fuel Module</h3>
              <ul className="text-muted-foreground space-y-2">
                <p>
                  Complete traceability of the fueling process, from planning to
                  execution
                </p>
                <li>• Flight planning and fuel load management.</li>
                <li>• Real-time data synchronization with fuel trucks.</li>
                <li>• Automated generation of delivery notes.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardContent className="p-8">
              <div className="flex justify-start mb-6 mt-14">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Users className="h-9 w-9 text-custom-green/90" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Weight & Balance Module
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <p>
                  Ensures operational safety by managing weight and balance
                  calculations.
                </p>
                <li>• Control of loading and unloading processes.</li>
                <li>• Real-time alerts for deviations from the plan.</li>
                <li>• Dynamic load sheet generation.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardContent className="p-8">
              <div className="flex justify-start mb-6 mt-14">
                <div className="p-4 bg-chart-4/10 rounded-full">
                  <TrendingUp className="h-9 w-9 text-custom-green/70" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Manifests Module</h3>
              <ul className="text-muted-foreground space-y-2">
                <p>
                  Streamlines the creation and management of cargo and passenger
                  manifests.
                </p>
                <li>• Automated integration with reservation systems.</li>
                <li>• Electronic signature and digital distribution.</li>
                <li>• Compliance with international regulations.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardContent className="p-8">
              <div className="flex justify-start mb-6 mt-14">
                <div className="p-4 bg-chart-4/10 rounded-full">
                  <TrendingUp className="h-9 w-9 text-custom-green/70" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Ground Support Equipment (GSE) Module
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <p>
                  Optimizes the management and allocation of all ground support
                  equipment.
                </p>
                <li>• Real-time location and status tracking of equipment.</li>
                <li>• Predictive maintenance and scheduling.</li>
                <li>
                  • Automated resource allocation based on flight schedules.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
