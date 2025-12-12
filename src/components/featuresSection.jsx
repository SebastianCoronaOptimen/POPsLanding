import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Calculator, FileCheck, Zap, BarChart3, Shield, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: "Multi-platform & responsive",
      description: "Adapts to computers, tablets, and mobile devices",
    },
    {
      icon: FileCheck,
      title: "Offline/online functionality",
      description: "operates with or without an internet connection.",
    },
    {
      icon: Zap,
      title: "Multilingual support",
      description: "Available in multiple languages for global teams.",
    },
    {
      icon: Clock,
      title: "Light & dark modes",
      description: "Switch btween light and dark themes.",
    },
    {
      icon: BarChart3,
      title: "Color-coded statuses",
      description: "Quickly identify operation states at a glance",
    },
    {
      icon: Shield,
      title: "Full traceability",
      description: "Ensures complete and reliable data tracking",
    },
  ]

  return (
    <section id="funcionalidades" className="px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-balance">
            AIOPS (Airport Operational Sentinel) is a comprehensive platform designed to centralize and optimize
            daily airport operations. It is a multi-platform, responsive, and multilingual system that automatically
            adapts to computers, tablets, and mobile devices, ensuring a seamless experience both in the field and
            in the office. The application can operate with or without an Internet connection, ensuring continuity in
            data capture and synchronization in environments where connectivity may be limited. It also offers light
            and dark modes, and a unified color-coded status system that enables quick identification of operation
            states, ensuring traceability and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-custom-cta/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-custom-cta" />
                  </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
