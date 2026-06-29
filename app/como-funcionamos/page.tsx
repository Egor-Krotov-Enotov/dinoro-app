import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo funcionamos — Dinoro.mx",
  description:
    "Descubre cómo Dinoro.mx te ayuda a encontrar el mejor préstamo en línea en México. Proceso simple, rápido y gratuito.",
};

export default function ComoFuncionamosPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-primary to-green-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">¿Cómo funciona Dinoro.mx?</h1>
          <p className="text-lg text-white/80">
            Somos un comparador gratuito de préstamos. Te ayudamos a encontrar la mejor opción sin cobrarte nada.
          </p>
        </div>
      </div>

      <HowItWorks />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Lo que hacemos (y lo que no)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-3">✓ Lo que SÍ hacemos</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Comparar prestamistas del mercado mexicano</li>
                <li>• Mostrar tasas, plazos y condiciones reales</li>
                <li>• Filtrar por sin buró, monto o plazo</li>
                <li>• Redirigirte al sitio oficial del prestamista</li>
                <li>• Mantener el servicio 100% gratuito para ti</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="font-bold text-red-600 mb-3">✗ Lo que NO hacemos</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Otorgar préstamos directamente</li>
                <li>• Cobrar comisiones al usuario</li>
                <li>• Solicitar datos bancarios</li>
                <li>• Garantizar aprobación</li>
                <li>• Vender tu información personal</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/prestamos"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-accent text-white font-bold rounded-xl hover:bg-amber-500 transition-colors"
            >
              Ver préstamos disponibles →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
