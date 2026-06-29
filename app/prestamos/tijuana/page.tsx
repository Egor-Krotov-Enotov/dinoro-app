import type { Metadata } from "next";
import Link from "next/link";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos rápidos en Tijuana — Sin buró, depósito el mismo día",
  description:
    "Préstamos en línea en Tijuana y toda Baja California. Sin buró de crédito, depósito vía SPEI el mismo día. Ideal para trabajadores de maquiladora y frontera.",
};

const faqs = [
  {
    q: "¿Puedo pedir un préstamo si trabajo en San Diego pero vivo en Tijuana?",
    a: "Sí. Solo necesitas una cuenta bancaria mexicana con CLABE y tu INE vigente. El préstamo se deposita en pesos MXN en tu cuenta de cualquier banco mexicano, sin importar dónde trabajes.",
  },
  {
    q: "¿Los préstamos en línea funcionan en Tecate y Mexicali también?",
    a: "Sí. Al ser 100% digital, el servicio está disponible en toda Baja California: Tijuana, Tecate, Ensenada, Mexicali y Rosarito. No hay restricciones geográficas dentro del territorio mexicano.",
  },
  {
    q: "¿Puedo recibir el préstamo si tengo cuenta en dólares?",
    a: "No. Los préstamos se depositan exclusivamente en cuentas en pesos mexicanos (MXN) con CLABE interbancaria de 18 dígitos. Si tienes una cuenta en dólares, necesitas abrir una cuenta en pesos en cualquier banco mexicano.",
  },
];

export default function TijuanaPage() {
  const sinBuroLenders = lenders.filter((l) => l.sinBuro);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Tijuana</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🌉 Tijuana, Baja California
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Préstamos rápidos en Tijuana — sin buró, depósito el mismo día
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Tijuana es una ciudad fronteriza con dinámica financiera única. Con miles de trabajadores
          de maquiladoras, comerciantes y emprendedores, la necesidad de liquidez rápida es constante.
          Los préstamos en línea funcionan igual en Tijuana: 100% digital, depósito vía SPEI a
          cualquier banco mexicano.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full">
          💡 Solo necesitas cuenta bancaria mexicana — no importa que trabajes cerca de la frontera
        </div>
      </div>

      {/* Important notice for border workers */}
      <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-bold text-blue-900 mb-2 text-sm">📌 Información importante para tijuanenses</h3>
        <p className="text-blue-800 text-sm leading-relaxed">
          Si trabajas en San Diego o tienes ingresos en dólares, puedes solicitar un préstamo siempre que
          tengas <strong>INE mexicana vigente</strong> y una <strong>cuenta bancaria en pesos MXN</strong>.
          El préstamo se otorga y deposita en pesos, independientemente de tu situación laboral binacional.
        </p>
      </div>

      <LenderGrid lenders={sinBuroLenders} />

      {/* How to receive money */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          ¿Cómo recibo el dinero en Tijuana?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏦</span>
              <div>
                <h3 className="font-bold text-gray-900">Depósito vía SPEI</h3>
                <span className="text-xs text-primary font-semibold">En minutos</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              El dinero llega a tu cuenta en Tijuana vía SPEI en minutos. Funciona con todos los
              bancos disponibles en la frontera: BBVA, Banamex, Banorte, Santander, HSBC y
              también con fintechs como Nu, Mercado Pago o Albo.
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
              Paga tus cuotas en efectivo en cualquier OXXO de Tijuana: Zona Centro, Zona Rio,
              Playas de Tijuana, Otay y más. También puedes pagar en Tecate, Rosarito o Ensenada
              si vives fuera de la capital de Baja California.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Preguntas frecuentes — Préstamos en Tijuana
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
        <p className="text-gray-500 mb-4">Compara todas las opciones sin buró disponibles para Tijuana</p>
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
