import type { Metadata } from "next";
import Link from "next/link";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos en línea en Puebla — Dinero rápido sin ir al banco",
  description:
    "Préstamos personales en Puebla capital, Tehuacán y todo el estado. Sin buró de crédito, sin comprobante de ingresos. Solicita desde tu celular y recibe vía SPEI.",
};

const faqs = [
  {
    q: "¿Puedo pedir un préstamo siendo comerciante informal en Puebla?",
    a: "Sí. Los prestamistas digitales no exigen comprobante de ingresos formal ni declaración de impuestos. Puedes ser comerciante del Centro Histórico, vendedor de tianguis o cualquier otra actividad independiente.",
  },
  {
    q: "¿Hay restricciones para municipios del interior del estado de Puebla?",
    a: "No. Al ser 100% en línea, el servicio funciona en todo México sin distinción geográfica: Puebla capital, Tehuacán, San Martín Texmelucan, Atlixco, Cholula y cualquier municipio del estado.",
  },
  {
    q: "¿Cuánto tarda el depósito en bancos de Puebla vía SPEI?",
    a: "El tiempo de SPEI es igual en todo el país. En horario bancario (lunes a viernes, 6:00–22:00 hrs), los depósitos llegan en minutos. Fuera de ese horario o en fines de semana, algunos bancos acreditan el siguiente día hábil.",
  },
];

export default function PueblaPage() {
  const topLenders = lenders.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Puebla</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🦅 Puebla de Zaragoza
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Préstamos en línea en Puebla — dinero rápido sin ir al banco
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Puebla combina industria, comercio y turismo. Si eres comerciante en el Centro Histórico,
          empleado del corredor automotriz o necesitas dinero para una emergencia, los préstamos
          digitales llegan a tu cuenta sin importar en qué parte del estado estés.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full">
          🗺️ Disponible en todo el estado: Puebla capital, Tehuacán, San Martín Texmelucan y más
        </div>
      </div>

      {/* Lenders */}
      <LenderGrid lenders={topLenders} />

      {/* How to receive money */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          ¿Cómo recibo el dinero en Puebla?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏦</span>
              <div>
                <h3 className="font-bold text-gray-900">Depósito vía SPEI</h3>
                <span className="text-xs text-primary font-semibold">Opción más rápida</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tu préstamo llega directo a cualquier cuenta bancaria en Puebla vía SPEI: BBVA, Banamex,
              Banorte, Santander, HSBC, Bancoppel o cualquier fintech con CLABE. El sistema opera
              todos los días y los depósitos se acreditan en minutos en horario bancario.
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
              Paga tus cuotas en cualquier OXXO de Puebla capital o del interior del estado.
              Hay tiendas disponibles en el Centro Histórico, Angelópolis, Las Animas y en los
              principales municipios: Tehuacán, San Martín Texmelucan, Atlixco y Cholula.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Preguntas frecuentes — Préstamos en Puebla
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
        <p className="text-gray-500 mb-4">Compara todas las opciones y elige la mejor para ti</p>
        <Link
          href="/prestamos"
          className="inline-flex items-center justify-center h-[52px] px-8 bg-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-base"
        >
          Ver todos los préstamos disponibles →
        </Link>
      </div>
    </div>
  );
}
