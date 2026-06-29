import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos personales en México",
  description:
    "Compara préstamos personales en México. Montos mayores con plazos más largos. Ideal para gastos médicos, educación o remodelación.",
};

export default function PersonalesPage() {
  const filtered = lenders.filter((l) => l.category.includes("personales"));
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Préstamos personales en México
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Montos más altos y plazos más largos para cubrir gastos médicos, educación, viajes o lo que necesites.
        </p>
      </div>
      <LenderGrid lenders={filtered} />
    </div>
  );
}
