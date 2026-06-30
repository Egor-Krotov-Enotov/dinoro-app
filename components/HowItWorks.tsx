import Image from "next/image";

const steps = [
  {
    number: "01",
    image: "/images/step1-calcula.png",
    title: "Calcula",
    description: "Usa nuestro simulador para saber cuánto puedes pedir y cuánto pagarás. Sin sorpresas.",
  },
  {
    number: "02",
    image: "/images/step2-compara.png",
    title: "Compara",
    description: "Revisa las opciones disponibles según tu monto, plazo y si necesitas préstamo sin buró.",
  },
  {
    number: "03",
    image: "/images/step3-solicita.png",
    title: "Solicita",
    description: "Haz clic en tu opción favorita y completa el proceso 100% en línea. ¡Solo con tu INE!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-14 bg-white relative overflow-hidden">
      {/* Blob decorativo fondo */}
      <svg
        className="absolute -bottom-16 -left-16 w-64 h-64 opacity-20 pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M150 20C200 20 270 70 280 130C290 190 250 270 190 285C130 300 50 260 25 200C0 140 30 60 80 30C105 16 125 20 150 20Z"
          fill="#FFF4E0"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2">
            ¿Cómo funciona Dinoro.mx?
          </h2>
          <p className="text-gray-500 text-base">En 3 simples pasos encuentras tu préstamo ideal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl p-6 flex flex-col gap-3" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              {/* Número outline grande detrás */}
              <span
                className="absolute -top-4 -left-2 text-[80px] font-black leading-none select-none pointer-events-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #F5A623",
                  opacity: 0.25,
                  fontFamily: "Poppins, system-ui, sans-serif",
                }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Ilustración */}
              <div className="flex justify-center pt-2">
                <Image
                  src={step.image}
                  alt={`Paso ${step.number}: ${step.title}`}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="object-contain w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                />
              </div>

              <h3 className="text-lg font-heading font-bold text-primary">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
