export function SocialProof() {
  const airlines = ["Aerolíneas Argentinas", "LATAM Airlines", "Avianca", "Copa Airlines", "Volaris", "Interjet"]

  return (
    <section className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-8">
          Más de 50 aerolíneas confían en POPS para gestionar sus viáticos de tripulación
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {airlines.map((airline, index) => (
            <div key={index} className="text-muted-foreground font-medium text-sm">
              {airline}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
