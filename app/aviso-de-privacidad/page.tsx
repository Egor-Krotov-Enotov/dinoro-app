import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Dinoro.mx. Conoce cómo protegemos y tratamos tu información personal.",
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Aviso de privacidad</h1>
      <p className="text-gray-400 text-sm mb-8">Última actualización: junio 2025</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Responsable del tratamiento</h2>
          <p>Dinoro.mx es responsable del tratamiento de los datos personales que usted nos proporcione. Para cualquier consulta relacionada con su privacidad, puede contactarnos en: privacidad@dinoro.mx</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Datos personales que recabamos</h2>
          <p>En Dinoro.mx no recopilamos datos personales directamente a través de formularios. Podemos recopilar datos de navegación de forma anónima (páginas visitadas, tiempo en sitio) con fines estadísticos y de mejora del servicio.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Finalidades del tratamiento</h2>
          <p>Los datos de navegación son utilizados exclusivamente para: mejorar la experiencia del usuario, analizar el tráfico del sitio y mostrar contenido relevante. No vendemos ni compartimos datos personales con terceros para fines publicitarios.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Cookies</h2>
          <p>Este sitio utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas (Google Analytics) para medir el tráfico. Puede deshabilitar las cookies en la configuración de su navegador.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Derechos ARCO</h2>
          <p>Tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, contacte a: privacidad@dinoro.mx</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Cambios al aviso de privacidad</h2>
          <p>Nos reservamos el derecho de modificar este aviso en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>
        </section>
      </div>
    </div>
  );
}
