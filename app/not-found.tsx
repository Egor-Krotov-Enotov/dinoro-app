import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada — Dinoro.mx",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center py-16">
      <div className="mb-6">
        <span className="text-6xl font-heading font-black text-gray-100 select-none">404</span>
      </div>
      <div className="mb-2 flex items-center gap-1.5">
        <span className="text-2xl font-heading font-black text-primary">dinoro</span>
        <span className="text-2xl font-heading font-black text-accent">.mx</span>
      </div>
      <h1 className="text-xl font-bold text-gray-800 mb-2 mt-4">Esta página no existe</h1>
      <p className="text-gray-500 text-sm max-w-xs mb-8">
        La dirección que buscas no se encontró. Puede que haya sido movida o eliminada.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <Link
          href="/"
          className="flex-1 flex items-center justify-center h-[48px] bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors text-sm"
        >
          Volver al inicio
        </Link>
        <Link
          href="/prestamos"
          className="flex-1 flex items-center justify-center h-[48px] bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
        >
          Ver préstamos
        </Link>
      </div>
    </div>
  );
}
