import type { Metadata } from "next";
import Link from "next/link";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos rápidos en Guadalajara — Aprobación en minutos desde tu celular",
  description:
    "Préstamos en línea en Guadalajara y todo Jalisco. Sin buró de crédito, sin ir a sucursal. Dinero en tu cuenta el mismo día vía SPEI o en OXXO.",
};

const faqs = [
  {
    q: "¿Los préstamos en línea sirven para negocios en Guadalajara?",
    a: "Sí. El dinero es de uso libre: puedes usarlo para tu negocio en el Mercado San Juan de Dios, surtir inventario, cubrir una renta o cualquier otro fin. No se requiere justificación de uso.",
  },
  {
    q: "¿Puedo solicitar desde Zapopan o Tlaquepaque?",
    a: "Por supuesto. Los préstamos digitales no tienen restricciones geográficas dentro de México. Funcionan igual en Zapopan, Tlaquepaque, Tonalá, Tlajomulco y cualquier municipio del estado de Jalisco.",
  },
  {
    q: "¿Cuánto tarda el SPEI en Jalisco?",
    a: "El tiempo de SPEI es el mismo en todo México, incluyendo Jalisco. En horario bancario, los depósitos llegan en minutos. Fuera de horario o en fines de semana, algunos bancos acreditan al siguiente día hábil.",
  },
];

export default function GuadalajaraPage() {
  const topLenders = lenders.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Guadalajara</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🌵 Guadalajara, Jalisco
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Préstamos rápidos en Guadalajara — aprobación en minutos desde tu celular
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Guadalajara es la segunda ciudad más grande de México y motor económico clave. Si tienes negocio
          en el Mercado San Juan de Dios, trabajas en la industria tapatía o necesitas cubrir un gasto
          inesperado, los préstamos en línea son la forma más rápida de conseguir liquidez sin trámites presenciales.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full">
          🏪 Más de 800 puntos OXXO en Guadalajara para pago en efectivo
        </div>
      </div>

      {/* Lenders */}
      <LenderGrid lenders={topLenders} />

      {/* How to receive money */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          ¿Cómo recibo el dinero en Guadalajara?
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
              El depósito llega directo a tu cuenta bancaria vía SPEI. Funciona con cualquier banco
              en Guadalajara: BBVA, Santander, Banamex, Banorte, HSBC, Bancoppel, Nu y Mercado Pago.
              Solo necesitas tu CLABE interbancaria de 18 dígitos.
            </p>
          </div>
          <div className="bg-background rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏪</span>
              <div>
                <h3 className="font-bold text-gray-900">Pago en OXXO</h3>
                <span className="text-xs text-accent font-semibold">Sin cuenta bancaria</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Con más de 800 tiendas OXXO en el área metropolitana de Guadalajara —incluyendo
              Zapopan, Tlaquepaque y Tonalá— puedes pagar tus cuotas en efectivo sin necesidad
              de cuenta bancaria ni transferencia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Preguntas frecuentes — Préstamos en Guadalajara
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
        <p className="text-gray-500 mb-4">¿Quieres comparar todas las opciones disponibles?</p>
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
