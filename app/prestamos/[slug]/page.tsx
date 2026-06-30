import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { lenders } from "@/data/lenders";
import { lenderDetails } from "@/data/lender-details";
import JsonLd from "@/components/JsonLd";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return lenders.map((l) => ({ slug: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lender = lenders.find((l) => l.id === params.slug);
  const detail = lenderDetails[params.slug];
  if (!lender || !detail) return {};

  return {
    title: `${lender.name} — Opiniones, requisitos y cómo solicitar en México`,
    description: `Todo sobre ${lender.name}: monto hasta $${lender.maxAmount.toLocaleString("es-MX")} MXN, aprobación en ${lender.approvalTime}. ${detail.tagline}.`,
  };
}

function formatAmount(n: number) {
  return new Intl.NumberFormat("es-MX").format(n);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= Math.round(rating) ? "text-accent" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-gray-500 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function LenderPage({ params }: Props) {
  const lender = lenders.find((l) => l.id === params.slug);
  const detail = lenderDetails[params.slug];

  if (!lender || !detail) notFound();

  const conditions = [
    { label: "Monto mínimo", value: `$${formatAmount(detail.minAmount)} MXN` },
    { label: "Monto máximo", value: `$${formatAmount(lender.maxAmount)} MXN` },
    { label: "Plazo", value: `${lender.minDays} – ${lender.maxDays}` },
    { label: "Aprobación", value: lender.approvalTime },
    { label: "Sin buró", value: lender.sinBuro ? "✓ Sí" : "Requiere historial" },
    { label: "TAE desde", value: `${lender.taeFrom}%` },
    { label: "En línea", value: "✓ 100%" },
    { label: "Calificación", value: `${lender.rating} / 5` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://dinoro.mx" },
      { "@type": "ListItem", position: 2, name: "Préstamos", item: "https://dinoro.mx/prestamos" },
      { "@type": "ListItem", position: 3, name: lender!.name, item: `https://dinoro.mx/prestamos/${lender!.id}` },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: `Préstamo ${lender!.name}`,
    description: detail!.description,
    provider: { "@type": "Organization", name: lender!.name },
    url: lender!.url,
    amount: { "@type": "MonetaryAmount", currency: "MXN", maxValue: lender!.maxAmount, minValue: detail!.minAmount },
    annualPercentageRate: lender!.taeFrom,
    feesAndCommissionsSpecification: `TAE desde ${lender!.taeFrom}%`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={financialProductSchema} />
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary transition-colors">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">{lender.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-14 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lender.logo}
                alt={`Logo ${lender.name}`}
                className="max-h-12 max-w-[72px] object-contain p-1"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {lender.name}
                </h1>
                {detail.recommended && (
                  <span className="inline-flex items-center gap-1 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Nuestra recomendación
                  </span>
                )}
              </div>
              <StarRating rating={lender.rating} />
            </div>
          </div>
          <a
            href={lender.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="sm:flex-shrink-0 flex items-center justify-center h-[52px] px-6 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors text-sm whitespace-nowrap"
          >
            Solicitar en {lender.name} →
          </a>
        </div>

        <p className="text-gray-500 text-sm italic border-l-4 border-primary pl-3">
          {detail.tagline}
        </p>
      </div>

      {/* Conditions table */}
      <section className="mb-8">
        <h2 className="text-xl font-extrabold text-gray-900 mb-4">Condiciones del préstamo</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <tbody>
              {conditions.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-500 w-1/2">{row.label}</td>
                  <td className={`px-4 py-3 font-semibold ${row.value.startsWith("✓") ? "text-success" : "text-gray-900"}`}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why this lender */}
      <section className="mb-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-extrabold text-gray-900 mb-3">
          ¿Por qué destacamos a {lender.name}?
        </h2>
        <p className="text-gray-600 leading-relaxed">{detail.description}</p>
      </section>

      {/* Pros & Contras */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-green-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
            Ventajas
          </h3>
          <ul className="space-y-2">
            {detail.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-success font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">✗</span>
            Desventajas
          </h3>
          <ul className="space-y-2">
            {detail.contras.map((contra, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                <span>{contra}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ideal for */}
      <section className="mb-8 bg-accent/5 rounded-2xl p-6 border border-accent/20">
        <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          ¿Para quién es ideal {lender.name}?
        </h2>
        <p className="text-gray-700 leading-relaxed">{detail.idealFor}</p>
      </section>

      {/* Legal disclaimer */}
      <p className="text-xs text-gray-400 mb-8 leading-relaxed">
        * La TAE indicada es referencial y puede variar según tu perfil. Consulta siempre el contrato
        oficial de {lender.name} antes de firmar. Dinoro.mx es un comparador independiente y no otorga
        préstamos directamente.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={lender.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1 flex items-center justify-center h-[52px] bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors text-base"
        >
          Solicitar en {lender.name} →
        </a>
        <Link
          href="/prestamos"
          className="flex-1 flex items-center justify-center h-[52px] border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-primary hover:text-primary transition-colors text-base"
        >
          Ver todas las opciones
        </Link>
      </div>
    </div>
  );
}
