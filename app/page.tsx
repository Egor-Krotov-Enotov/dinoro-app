import type { Metadata } from "next";
import Image from "next/image";
import LoanCalculator from "@/components/LoanCalculator";
import LenderGrid from "@/components/LenderGrid";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { lenders } from "@/data/lenders";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préstamos rápidos en línea en México — Compara y solicita hoy",
  description:
    "Compara más de 10 prestamistas en México. Préstamos sin buró, solo con INE y 100% en línea. Aprobación en minutos. ¡Encuentra tu préstamo ideal!",
  openGraph: {
    title: "Dinoro.mx — Préstamos rápidos en línea en México",
    description: "Compara más de 10 prestamistas. Sin buró, solo con INE. Aprobación en minutos.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dinoro.mx",
  url: "https://dinoro.mx",
  description: "Comparador de préstamos personales y microcréditos en México",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://dinoro.mx/prestamos?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const stats = [
  { icon: "👥", value: "120,000+", label: "usuarios" },
  { icon: "⚡", value: "30%", label: "aprobación" },
  { icon: "🆓", value: "100%", label: "gratis" },
];

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
      <JsonLd data={websiteSchema} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-10 pb-6 md:pt-16 md:pb-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10 items-center">

            {/* Left col — texto */}
            <div className="lg:pt-2">
              <span className="inline-block bg-accent/15 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                🇲🇽 Comparador #1 en México
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-primary leading-tight mb-3">
                Encuentra el préstamo perfecto para ti
              </h1>
              <p className="text-gray-500 text-base md:text-lg mb-6 max-w-md">
                Compara más de 10 prestamistas. Sin buró, solo con INE y aprobación en minutos.
              </p>

              {/* Illustration — mobile: between text and stats */}
              <div className="flex justify-center mb-5 lg:hidden">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Ilustración de comparación de préstamos en México"
                  width={280}
                  height={280}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Stats row — mobile */}
              <div className="flex flex-wrap gap-2 mb-6 lg:hidden">
                {stats.map((s) => (
                  <span key={s.label} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-sm font-semibold text-gray-800">
                    <span>{s.icon}</span>
                    <span className="text-accent-text font-black">{s.value}</span>
                    <span className="font-normal text-gray-500">{s.label}</span>
                  </span>
                ))}
              </div>

              {/* Stats grid — desktop */}
              <div className="hidden lg:grid grid-cols-3 gap-0 border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm mt-8">
                {stats.map((s, i) => (
                  <div key={s.label} className={`flex flex-col items-center py-4 px-3 text-center ${i < 2 ? "border-r border-gray-100" : ""}`}>
                    <span className="text-xl mb-1">{s.icon}</span>
                    <span className="text-xl font-black text-primary">{s.value}</span>
                    <span className="text-xs text-gray-500 mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center col — Illustration desktop only */}
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src="/images/hero-illustration.png"
                alt="Ilustración de comparación de préstamos en México"
                width={380}
                height={380}
                priority
                className="object-contain"
              />
            </div>

            {/* Right col — Calculator */}
            <div className="w-full">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Top lenders */}
      <section className="py-10 md:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2">
              Los mejores préstamos de México
            </h2>
            <p className="text-gray-500 text-base">Compara condiciones y encuentra el que más te conviene</p>
          </div>
          <LenderGrid lenders={topLenders} />
          <div className="text-center mt-8">
            <Link
              href="/prestamos"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors"
            >
              Ver todos los préstamos →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Benefits */}
      <section className="py-10 md:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2">
              ¿Por qué usar Dinoro.mx?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex gap-4 items-start" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{b.title}</h3>
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
