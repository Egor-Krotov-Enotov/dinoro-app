import type { Metadata } from "next";
import LoanCalculator from "@/components/LoanCalculator";
import TrustBar from "@/components/TrustBar";
import LenderGrid from "@/components/LenderGrid";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import { lenders } from "@/data/lenders";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préstamos rápidos en línea en México — Compara y solicita hoy",
  description:
    "Compara más de 10 prestamistas en México. Préstamos sin buró, solo con INE y 100% en línea. Aprobación en minutos. ¡Encuentra tu préstamo ideal!",
};

const benefits = [
  { icon: "⚡", title: "Aprobación rápida", desc: "La mayoría de prestamistas aprueban en menos de 1 hora, algunos en minutos." },
  { icon: "🔒", title: "100% seguro", desc: "Solo comparamos prestamistas regulados y verificados en México." },
  { icon: "🆓", title: "Totalmente gratis", desc: "Nuestro servicio de comparación es completamente gratuito para ti." },
  { icon: "📱", title: "Todo desde tu celular", desc: "Solicita desde tu smartphone sin salir de casa ni hacer filas." },
];

export default function HomePage() {
  const topLenders = lenders.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-[#1d8f47] to-[#156032] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4">
                🇲🇽 Solo para México
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Encuentra el préstamo perfecto para ti
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Compara más de 10 prestamistas en línea. Sin buró de crédito, solo con INE y aprobación en minutos.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/90">
                <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  ✓ Sin buró de crédito
                </span>
                <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  ✓ Solo con INE
                </span>
                <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  ✓ 100% en línea
                </span>
              </div>
            </div>
            <div>
              <LoanCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Top lenders */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Los mejores préstamos de México
            </h2>
            <p className="text-gray-500 text-lg">Compara condiciones y encuentra el que más te conviene</p>
          </div>
          <LenderGrid lenders={topLenders} />
          <div className="text-center mt-8">
            <Link
              href="/prestamos"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-primary text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              Ver todos los préstamos →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              ¿Por qué usar Dinoro.mx?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 flex gap-4 items-start">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
