import { Card, CardContent } from "./ui/card";
import { Fuel, Scale, ClipboardList, Truck } from "lucide-react";
import { CheckCircle } from "lucide-react";

export function MainModules() {
  return (
    <section className="px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-balance">Main Modules</h2>
        <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-balance">
          Core functionalities to streamline every aspect of your operations
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <Card className="rounded-xl p-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Fuel className="w-6 h-6 text-[#0A1F44]" />
              <h3 className="text-xl font-semibold">Fuel Module</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Complete traceability of the fueling process, from planning to
              execution.
            </p>

            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Flight planning and fuel load management.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Real-time data synchronization with fuel trucks.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Automated generation of delivery notes.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-xl  p-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-[#0A1F44]" />
              <h3 className="text-xl font-semibold">Weight & Balance Module</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Ensures operational safety by managing weight and balance
              calculations.
            </p>

            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Control of loading and unloading processes.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Real-time alerts for deviations from the plan.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Dynamic load sheet generation.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-xl p-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-6 h-6 text-[#0A1F44]" />
              <h3 className="text-xl font-semibold">Manifests Module</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Streamlines the creation and management of cargo and passenger
              manifests.
            </p>

            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Automated integration with reservation systems.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Electronic signature and digital distribution.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Compliance with international regulations.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-xl p-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-6 h-6 text-[#0A1F44]" />
              <h3 className="text-xl font-semibold">
                Ground Support Equipment (GSE) Module
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Optimizes the management and allocation of all ground support
              equipment.
            </p>

            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>
                  Real-time location and status tracking of equipment.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Predictive maintenance and scheduling.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>
                  Automated resource allocation based on flight schedules.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
