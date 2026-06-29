import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos rápidos en línea en México",
  description:
    "Préstamos rápidos aprobados en minutos. Sin buró de crédito, 100% en línea. Compara las mejores opciones de microcrédito en México.",
};

export default function RapidosPage() {
  const filtered = lenders.filter((l) => l.category.includes("rapidos"));
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Préstamos rápidos en México
        </h1>
        <p className="text-gray-500">
          Créditos con aprobación en minutos u horas. Recibe dinero el mismo día.
        </p>
      </div>
      <LenderGrid lenders={filtered} />
    </div>
  );
}
