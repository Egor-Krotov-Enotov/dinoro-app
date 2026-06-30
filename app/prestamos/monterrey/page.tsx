import type { Metadata } from "next";
import Link from "next/link";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos personales en Monterrey — Sin buró, sin aval, 100% en línea",
  description:
    "Préstamos en línea en Monterrey y área metropolitana. Sin buró de crédito, sin aval. Ideal para trabajadores de maquiladoras y manufactura. Depósito el mismo día.",
};

const faqs = [
  {
    q: "¿Puedo pedir un préstamo siendo trabajador de maquiladora en Monterrey?",
    a: "Sí. No se requiere empleo formal ni nómina de empresa reconocida. Los prestamistas digitales evalúan tu capacidad de pago con base en tu información bancaria o historial propio, no en tu tipo de empleo.",
  },
  {
    q: "¿Funciona el depósito en Banorte si tengo cuenta en Monterrey?",
    a: "Sí. Banorte, con fuerte presencia en Monterrey y todo el noreste, recibe depósitos vía SPEI sin ningún problema. Lo mismo aplica para cualquier otro banco mexicano con CLABE válida.",
  },
  {
    q: "¿Los préstamos cubren toda el área metropolitana de Monterrey?",
    a: "Sí. Al ser 100% digital, el servicio cubre todo el área metropolitana: Monterrey, San Nicolás de los Garza, Guadalupe, San Pedro Garza García, Apodaca, Escobedo y el resto de municipios del AMM.",
  },
];

export default function MonterreyPage() {
  const sinBuroLenders = lenders.filter((l) => l.sinBuro);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Monterrey</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🏭 Monterrey, Nuevo León
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Préstamos personales en Monterrey — sin buró, sin aval, 100% en línea
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Monterrey es la capital industrial de México. Muchos trabajadores de maquiladoras y empresas
          de manufactura no tienen historial crediticio formal. Los préstamos en línea sin buró son la
          solución perfecta para ese perfil: rápidos, digitales y sin papeleo.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full">
          🗺️ Disponible en toda el área metropolitana: Monterrey, San Nicolás, Guadalupe, San Pedro y Apodaca
        </div>
      </div>

      {/* Sin buró lenders highlight */}
      <div className="mb-6 p-4 bg-accent/5 rounded-xl border border-accent/20 flex items-center gap-3">
        <span className="text-2xl">✅</span>
        <p className="text-sm text-gray-700">
          Mostramos primero las opciones <strong className="text-primary">sin consulta de buró</strong>,
          ideales para trabajadores de manufactura e industria en el área regia.
        </p>
      </div>

      <LenderGrid lenders={sinBuroLenders} />

      {/* How to receive money */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          ¿Cómo recibo el dinero en Monterrey?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏦</span>
              <div>
                <h3 className="font-bold text-gray-900">Depósito vía SPEI</h3>
                <span className="text-xs text-primary font-semibold">Mismo día</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              El dinero llega a tu cuenta bancaria en Monterrey vía SPEI. Compatible con Banorte
              —banco con fuerte raíz regiomontana—, BBVA, Santander, Banamex, HSBC, Bancoppel,
              Nu y cualquier institución con CLABE mexicana.
            </p>
          </div>
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏪</span>
              <div>
                <h3 className="font-bold text-gray-900">Pago en OXXO</h3>
                <span className="text-xs text-accent font-semibold">En efectivo</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Paga tus cuotas en cualquier OXXO del área metropolitana de Monterrey.
              Hay cientos de puntos disponibles en todas las colonias y municipios
              del AMM, incluyendo turnos nocturnos y fines de semana.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Preguntas frecuentes — Préstamos en Monterrey
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">Compara todas las opciones sin buró disponibles en México</p>
        <Link
          href="/prestamos"
          className="inline-flex items-center justify-center h-[52px] px-8 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors text-base"
        >
          Ver todos los préstamos disponibles →
        </Link>
      </div>
    </div>
  );
}
