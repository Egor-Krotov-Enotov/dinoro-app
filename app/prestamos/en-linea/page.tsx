import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";

export const metadata: Metadata = {
  title: "Préstamos en línea en México — Sin ir a sucursal",
  description:
    "Solicita tu préstamo 100% en línea desde tu celular o computadora. Sin papeleos ni filas. Aprobación rápida en México.",
};

export default function EnLineaPage() {
  const filtered = lenders.filter((l) => l.online);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Préstamos en línea en México
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Solicita desde tu celular en cualquier momento. Sin salir de casa, sin filas y sin papeleos.
        </p>
      </div>
      <LenderGrid lenders={filtered} />
    </div>
  );
}
