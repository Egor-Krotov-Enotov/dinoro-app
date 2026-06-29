const steps = [
  {
    number: "1",
    icon: "🧮",
    title: "Calcula",
    description: "Usa nuestro simulador para saber cuánto puedes pedir y cuánto pagarás. Sin sorpresas.",
  },
  {
    number: "2",
    icon: "🔍",
    title: "Compara",
    description: "Revisa las opciones disponibles según tu monto, plazo y si necesitas préstamo sin buró.",
  },
  {
    number: "3",
    icon: "✅",
    title: "Solicita",
    description: "Haz clic en tu opción favorita y completa el proceso 100% en línea. ¡Solo con tu INE!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            ¿Cómo funciona Dinoro.mx?
          </h2>
          <p className="text-gray-500 text-lg">En 3 simples pasos encuentras tu préstamo ideal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gray-200" />

          {steps.map((step, idx) => (
            <div key={idx} className="text-center flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl">
                  {step.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
