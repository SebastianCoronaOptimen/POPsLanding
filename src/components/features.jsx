import { Card, CardContent } from "./ui/card";
import { Zap } from "lucide-react";

export function Features() {
  return (
    <section className="px-6 py-2">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <Card className="bg-[#003566]/90 text-white rounded-xl p-6">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Process Center</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                <span>Background report processing</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                <span>Offline/online synchronization</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                <span>Automated audits</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#003566]/90 text-white rounded-xl p-6">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6">
              Cross-Functional System Features
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                <span>User, role, and permission management</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                <span>Dynamic context-based help</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                <span>Unified status system</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
