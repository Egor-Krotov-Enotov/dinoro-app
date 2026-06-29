import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de Dinoro.mx. Conoce las reglas de uso de nuestro comparador de préstamos.",
};

export default function TerminosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Términos y condiciones</h1>
      <p className="text-gray-400 text-sm mb-8">Última actualización: junio 2025</p>

      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Aceptación de los términos</h2>
          <p>Al acceder y utilizar Dinoro.mx usted acepta los presentes términos y condiciones. Si no está de acuerdo con ellos, le solicitamos que no utilice nuestro sitio.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Naturaleza del servicio</h2>
          <p>Dinoro.mx es un comparador de servicios financieros. No somos una institución financiera, no otorgamos préstamos directamente y no intermediamos en la relación entre el usuario y el prestamista.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Precisión de la información</h2>
          <p>La información sobre tasas, montos y condiciones es orientativa y puede variar. Siempre consulte el contrato oficial del prestamista antes de firmar. Dinoro.mx no se responsabiliza por cambios en las condiciones de los prestamistas listados.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Servicio gratuito</h2>
          <p>El uso de Dinoro.mx es completamente gratuito para el usuario. Nos financiamos a través de comisiones que pagan los prestamistas cuando un usuario hace clic en sus enlaces, lo cual no afecta los resultados de nuestra comparativa.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Limitación de responsabilidad</h2>
          <p>Dinoro.mx no será responsable por daños directos o indirectos derivados del uso de la información publicada en este sitio o de la contratación de servicios con los prestamistas listados.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Ley aplicable</h2>
          <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa será resuelta ante los tribunales competentes de la Ciudad de México.</p>
        </section>
      </div>
    </div>
  );
}
