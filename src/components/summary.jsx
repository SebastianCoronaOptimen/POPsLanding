import { Card, CardContent } from "./ui/card";
import { Smartphone, ShieldCheck, AlertCircle, CheckCircle, Network} from "lucide-react";

export function ExecutiveSummary() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-gray-100 rounded-xl p-10">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">
                  Executive Summary
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AIOPS is a complete solution for airport operations
                  management, combining mobility, traceability, efficiency, and
                  operational safety. It centralizes critical information in a
                  single system, reduces errors, accelerates decision-making,
                  and provides an intuitive and adaptable experience for
                  ramp-side operational environments.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white rounded-md p-3 shadow-sm">
                  <Smartphone className="w-5 h-5 text-[#003566]" />
                  <span className="text-lg text-black">Mobility</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-md p-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#003566]" />
                  <span className="text-lg text-black">Traceability</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-md p-3 shadow-sm">
                  <AlertCircle className="w-5 h-5 text-[#003566]" />
                  <span className="text-lg text-black">
                    Error reduction
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-md p-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#003566]" />
                  <span className="text-lg text-black">
                    Operational safety
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-md p-3 shadow-sm">
                  <Network className="w-5 h-5 text-[#003566]" />
                  <span className="text-lg text-black">
                    Centralized information
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
