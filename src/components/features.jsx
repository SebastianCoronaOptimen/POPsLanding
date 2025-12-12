import { Card, CardContent } from "./ui/card";
import { Building2, Users, TrendingUp } from "lucide-react";

export function Features() {
  return (
    <section id="beneficios" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="text-left">
            <CardContent className="p-8 mb-4">
              <div className="flex justify-start mb-6 mt-5"> </div>
              <h3 className="text-xl font-bold mb-4">Process Center</h3>
              <ul className="text-muted-foreground space-y-4">
                <li>• Background report processing</li>
                <li>• Offline/online synchronization</li>
                <li>• Automated audits</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardContent className="p-8">
              <div className="flex justify-start mb-6 mt-5"></div>
              <h3 className="text-xl font-bold mb-4">
                Cross-Functional System Features
              </h3>
              <ul className="text-muted-foreground space-y-4">
                <li>• User, role, and permission management</li>
                <li>• Dynamic context-based help</li>
                <li>• Unified status system</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
