import type { Metadata } from "next";
import Link from "next/link";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos en línea en la Ciudad de México — Sin filas ni sucursal",
  description:
    "Solicita un préstamo en línea en la CDMX en minutos. Sin buró de crédito, sin comprobante de domicilio. Aprobación el mismo día y depósito vía SPEI o pago en OXXO.",
};

const faqs = [
  {
    q: "¿Puedo pedir un préstamo en CDMX sin comprobante de domicilio?",
    a: "Sí. Los prestamistas digitales en México no solicitan comprobante de domicilio. Solo necesitas tu INE vigente y una CLABE bancaria a tu nombre para recibir el depósito.",
  },
  {
    q: "¿Depositan en Bancoppel o BanBajío?",
    a: "Sí. Los depósitos se realizan vía SPEI, que funciona con cualquier banco o institución financiera con CLABE mexicana: Bancoppel, BanBajío, HSBC, Santander, BBVA y todos los demás.",
  },
  {
    q: "¿Funciona el depósito vía SPEI los fines de semana en CDMX?",
    a: "El sistema SPEI opera las 24 horas, los 7 días de la semana. Sin embargo, algunos bancos acreditan los fondos en horario hábil. Si solicitas el viernes por la noche, es posible que el abono aparezca el lunes por la mañana.",
  },
];

export default function CDMXPage() {
  const topLenders = lenders.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Ciudad de México</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🏙️ Ciudad de México
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Préstamos en línea en la Ciudad de México — sin filas, sin sucursal
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Con más de 9 millones de habitantes y el mayor número de usuarios de internet del país,
          la CDMX concentra el mayor volumen de solicitudes de préstamos en línea de México.
          Puedes solicitar desde el Metro, desde casa o desde tu trabajo sin mover un pie.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full">
          🏪 Más de 2,500 tiendas OXXO en CDMX para pagar en efectivo
        </div>
      </div>

      {/* Lenders */}
      <LenderGrid lenders={topLenders} />

      {/* How to receive money */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          ¿Cómo recibo el dinero en la Ciudad de México?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏦</span>
              <div>
                <h3 className="font-bold text-gray-900">Depósito vía SPEI</h3>
                <span className="text-xs text-primary font-semibold">Más rápido</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              La mayoría de los préstamos llegan a tu cuenta bancaria vía SPEI en minutos.
              Funciona con cualquier banco disponible en CDMX: BBVA, Santander, Banamex, HSBC,
              Bancoppel, Nu, Mercado Pago y más. Solo necesitas tu CLABE de 18 dígitos.
            </p>
          </div>
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏪</span>
              <div>
                <h3 className="font-bold text-gray-900">Pago y cobro en OXXO</h3>
                <span className="text-xs text-accent font-semibold">Sin cuenta bancaria</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Algunos prestamistas permiten retirar o pagar en las más de 2,500 tiendas OXXO
              distribuidas en todas las alcaldías de la CDMX: Iztapalapa, Gustavo A. Madero,
              Tlalpan, Coyoacán, Álvaro Obregón y el resto. Ideal si no tienes cuenta bancaria.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Preguntas frecuentes — Préstamos en CDMX
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
        <p className="text-gray-500 mb-4">¿Quieres ver todas las opciones disponibles?</p>
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
