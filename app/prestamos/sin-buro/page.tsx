import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos sin buró de crédito en México",
  description:
    "Obtén un préstamo aunque tengas mal historial en el buró de crédito. Compara opciones sin consulta de buró en México.",
};

export default function SinBuroPage() {
  const filtered = lenders.filter((l) => l.sinBuro);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          {filtered.length} opciones sin buró
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Préstamos sin buró de crédito
        </h1>
        <p className="text-gray-500 max-w-2xl">
          ¿Estás en buró o no tienes historial crediticio? Estas empresas aprueban préstamos sin consultar el buró de crédito. Solo necesitas tu INE.
        </p>
      </div>
      <LenderGrid lenders={filtered} />
    </div>
  );
}
