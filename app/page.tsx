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

const trustBadges = [
  { icon: "★", label: "4.8 · reseñas de usuarios", sub: "Calificación promedio" },
  { icon: "🔒", label: "Datos cifrados SSL", sub: "Conexión 100% segura" },
  { icon: "🛡", label: "Comparación sin compromiso", sub: "Sin registro obligatorio" },
];

const partnerLogos = [
  { id: "kueski",      name: "Kueski",      logo: "/logos/kueski.png" },
  { id: "moneyman",   name: "Moneyman",    logo: "/logos/moneyman.png" },
  { id: "avafin",     name: "AvaFin",      logo: "/logos/avafin.png" },
  { id: "tala",       name: "Tala",        logo: "/logos/tala.png" },
  { id: "baubap",     name: "Baubap",      logo: "/logos/baubap.png" },
  { id: "credilikeme",name: "Credilikeme", logo: "/logos/credilikeme.svg" },
  { id: "creditea",   name: "Creditea",    logo: "/logos/creditea.png" },
  { id: "vivus",      name: "Vivus",       logo: "/logos/vivus.svg" },
  { id: "credito365", name: "Credito365",  logo: "/logos/credito365.svg" },
  { id: "cozmo",      name: "Cozmo",       logo: "/logos/cozmo.png" },
];

const benefits = [
  { icon: "⚡", title: "Aprobación rápida", desc: "La mayoría de prestamistas aprueban en menos de 1 hora, algunos en minutos." },
  { icon: "🔒", title: "100% seguro", desc: "Solo comparamos prestamistas regulados y verificados en México." },
  { icon: "🆓", title: "Totalmente gratis", desc: "Nuestro servicio de comparación es completamente gratuito para ti." },
  { icon: "📱", title: "Todo desde tu celular", desc: "Solicita desde tu smartphone sin salir de casa ni hacer filas." },
];

export default function HomePage() {
  const topLenders = lenders.slice(0, 6);
  const visiblePartners = partnerLogos.slice(0, 6);
  const hiddenCount = partnerLogos.length - visiblePartners.length;

  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-6 pb-4 md:pt-10 md:pb-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">

            {/* Left col */}
            <div>
              <span className="inline-block bg-accent/15 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
                ✱ COMPARAMOS +10 PRESTAMISTAS
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-black text-primary leading-tight mb-3">
                Compara y elige,{" "}
                <span className="text-accent-text">sin compromiso</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-base mb-4 max-w-md leading-relaxed">
                Comparamos prestamistas autorizados ante CONDUSEF y te mostramos las mejores condiciones. Tú decides con quién solicitar.
              </p>

              {/* Pill badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["✓ Sin papeleo", "✓ Sin compromiso", "✓ Respuesta en minutos"].map((pill) => (
                  <span key={pill} className="text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                    {pill}
                  </span>
                ))}
              </div>

              {/* Illustration — mobile */}
              <div className="flex justify-center my-4 lg:hidden">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Comparación de préstamos en México"
                  width={220}
                  height={220}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Center col — illustration desktop */}
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src="/images/hero-illustration.png"
                alt="Comparación de préstamos en México"
                width={320}
                height={320}
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

      {/* ── Trust row ── */}
      <section className="bg-white border-t border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{b.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners logos ── */}
      <section className="bg-[#FAFAFA] border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <h2 className="text-base font-bold text-gray-700">Trabajamos con prestamistas autorizados</h2>
            <p className="text-xs text-gray-400 mt-1">+10 instituciones reguladas comparadas en un solo lugar</p>
          </div>
          {/* Mobile: scroll; desktop: grid */}
          <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:overflow-visible sm:pb-0 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
            {visiblePartners.map((p) => (
              <Link
                key={p.id}
                href={`/prestamos/${p.id}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-xl p-3 hover:shadow-md transition-shadow w-[100px] sm:w-auto"
              >
                <div className="w-14 h-10 relative flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-[11px] font-semibold text-gray-600 text-center leading-tight">{p.name}</span>
              </Link>
            ))}
            {hiddenCount > 0 && (
              <Link
                href="/prestamos"
                className="flex-shrink-0 flex flex-col items-center justify-center gap-1 bg-white border border-dashed border-gray-200 rounded-xl p-3 hover:border-accent hover:text-accent-text transition-colors w-[100px] sm:w-auto"
              >
                <span className="text-xl font-black text-gray-300">+{hiddenCount}</span>
                <span className="text-[11px] font-semibold text-gray-400">más</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Top lenders ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2">
              Los mejores préstamos de México
            </h2>
            <p className="text-gray-500 text-base">Compara condiciones y elige el que más te conviene</p>
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

      {/* ── How it works ── */}
      <HowItWorks />

      {/* ── Benefits ── */}
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

      {/* ── FAQ ── */}
      <FAQ />
    </>
  );
}
