import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Todos los préstamos en línea en México",
  description:
    "Catálogo completo de préstamos en línea en México. Compara montos, plazos y tasas. Aprobación sin buró de crédito.",
};

const categories = [
  { label: "Todos", href: "/prestamos" },
  { label: "Préstamos rápidos", href: "/prestamos/rapidos" },
  { label: "Sin buró", href: "/prestamos/sin-buro" },
  { label: "En línea", href: "/prestamos/en-linea" },
  { label: "Personales", href: "/prestamos/personales" },
];

export default function PrestamosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Préstamos en línea en México
        </h1>
        <p className="text-gray-500">
          Compara {lenders.length} opciones de crédito y encuentra la que mejor se adapta a tus necesidades.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              c.href === "/prestamos"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      <LenderGrid lenders={lenders} />
    </div>
  );
}
