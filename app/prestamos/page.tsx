import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import CatalogClient from "@/components/CatalogClient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Todos los préstamos en línea en México",
  description:
    "Catálogo completo de préstamos en línea en México. Compara montos, plazos y tasas. Aprobación sin buró de crédito.",
  alternates: {
    canonical: "https://dinoro.mx/prestamos",
  },
};

const categories = [
  { label: "Todos", href: "/prestamos" },
  { label: "Préstamos rápidos", href: "/prestamos/rapidos" },
  { label: "Sin buró", href: "/prestamos/sin-buro" },
  { label: "En línea", href: "/prestamos/en-linea" },
  { label: "Personales", href: "/prestamos/personales" },
];

interface Props {
  searchParams: { monto?: string; dias?: string };
}

export default function PrestamosPage({ searchParams }: Props) {
  const monto = searchParams.monto ? parseInt(searchParams.monto) : undefined;
  const dias  = searchParams.dias  ? parseInt(searchParams.dias)  : undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-1">
          Préstamos en línea en México
        </h1>
        <p className="text-gray-500 text-sm">
          Compara {lenders.length} opciones de crédito y encuentra la que mejor se adapta a tus necesidades.
        </p>
      </div>

      {/* Category nav */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 px-1">Tipo de préstamo:</p>
      <div className="flex gap-2 overflow-x-auto pb-1 mb-6 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
        {categories.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              c.href === "/prestamos"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Client component: filter chips + match logic + grid */}
      <CatalogClient monto={monto} dias={dias} />
    </div>
  );
}
