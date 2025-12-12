import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MonitorSmartphone, CloudOff, Languages, MoonStar, Palette, RefreshCcw } from "lucide-react";


export function Overview() {
  const features = [
    {
      icon: MonitorSmartphone,
      title: "Multi-platform & responsive",
      description: "Adapts to computers, tablets, and mobile devices",
    },
    {
      icon: CloudOff,
      title: "Offline/online functionality",
      description: "operates with or without an internet connection.",
    },
    {
      icon: Languages,
      title: "Multilingual support",
      description: "Available in multiple languages for global teams.",
    },
    {
      icon: MoonStar,
      title: "Light & dark modes",
      description: "Switch btween light and dark themes.",
    },
    {
      icon: Palette,
      title: "Color-coded statuses",
      description: "Quickly identify operation states at a glance",
    },
    {
      icon: RefreshCcw,
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
                <div className="flex flex-col gap-3">
                  <div className="p-2  rounded-lg">
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
