import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function CTASection() {
  return (
    <section id="contacto" className="px-6 py-2">
      <div className="max-w-6xl mx-auto">
        <Card className="text-white bg-[#003566]/90 py-20 px-6">
          <CardContent className="p-12 text-center space-y-5">
            <h2 className="text-3xl font-bold text-balance">
              Optimize your airport operations with AIOPS
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white !text-[#003566]/90 hover:!bg-custom-cta/90 text-md">
                Schedule a demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
