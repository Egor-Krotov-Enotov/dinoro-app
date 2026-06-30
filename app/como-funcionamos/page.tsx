import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo funcionamos — Dinoro.mx",
  description:
    "Dinoro.mx es un comparador gratuito de préstamos en México. Conoce cómo seleccionamos a los prestamistas, cómo ganamos dinero y cómo protegemos tu independencia.",
};

export default function ComoFuncionamosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-green-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">¿Cómo funciona Dinoro.mx?</h1>
          <p className="text-lg text-white/80">
            Somos un comparador independiente de préstamos en México. Transparencia total: te explicamos
            quiénes somos, cómo ganamos dinero y por qué puedes confiar en nuestras comparativas.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Qué es Dinoro */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🔍</span>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">¿Qué es Dinoro.mx?</h2>
              <p className="text-gray-500 text-sm">Un comparador, no un banco</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 text-gray-700 leading-relaxed">
            <p>
              Dinoro.mx es un <strong className="text-gray-900">sitio comparador de servicios financieros</strong>.
              Reunimos en un solo lugar las mejores opciones de préstamos personales y microcréditos disponibles
              en México para que puedas comparar condiciones, tasas y requisitos sin tener que visitar
              decenas de sitios.
            </p>
            <p>
              <strong className="text-gray-900">No somos una institución financiera.</strong> No prestamos
              dinero directamente ni intermediamos en la relación entre tú y el prestamista.
              Cuando haces clic en &ldquo;Solicitar&rdquo;, te llevamos al sitio oficial de la empresa para que
              completes el proceso directamente con ellos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-semibold text-primary mb-2">✓ Lo que SÍ hacemos</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Comparamos condiciones de forma objetiva</li>
                  <li>• Mostramos TAE, montos y plazos reales</li>
                  <li>• Filtramos por sin buró, monto o velocidad</li>
                  <li>• Te redirigimos al sitio oficial del prestamista</li>
                  <li>• Mantenemos el servicio gratis para ti</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-semibold text-red-600 mb-2">✗ Lo que NO hacemos</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Otorgar préstamos directamente</li>
                  <li>• Cobrar comisiones al usuario</li>
                  <li>• Solicitar contraseñas o datos bancarios</li>
                  <li>• Garantizar la aprobación del crédito</li>
                  <li>• Vender tu información personal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo ganamos */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">💰</span>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">¿Cómo gana dinero Dinoro.mx?</h2>
              <p className="text-gray-500 text-sm">Modelo de negocio transparente</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 text-gray-700 leading-relaxed">
            <p>
              Dinoro.mx se financia a través de <strong className="text-gray-900">comisiones de afiliación</strong>
              {" "}que pagan los prestamistas cuando un usuario hace clic en sus enlaces desde nuestro sitio y solicita
              un préstamo. Este modelo es estándar en la industria comparadora a nivel mundial.
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-sm">
              <p className="font-semibold text-gray-900 mb-1">📌 Importante que sepas:</p>
              <p>
                Estas comisiones <strong>no afectan el orden ni los resultados</strong> de nuestra comparativa.
                Los prestamistas aparecen ordenados por relevancia y calidad para el usuario,
                no por cuánto nos pagan. Ninguna empresa puede &ldquo;comprar&rdquo; el primer lugar en Dinoro.mx.
              </p>
            </div>
            <p className="text-sm text-gray-500">
              El uso de Dinoro.mx es completamente gratuito para ti. Nunca te cobraremos por comparar,
              filtrar ni hacer clic en los enlaces de nuestro catálogo.
            </p>
          </div>
        </section>

        {/* Cómo seleccionamos */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">¿Cómo seleccionamos a los prestamistas?</h2>
              <p className="text-gray-500 text-sm">Solo CONDUSEF SIPRES</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Para aparecer en el catálogo de Dinoro.mx, cada prestamista debe cumplir con un proceso
              de verificación. Nuestros criterios de admisión son:
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: "📋",
                  title: "Registro en CONDUSEF SIPRES",
                  desc: "La empresa debe estar registrada en el Sistema de Registro de Prestadores de Servicios Financieros de la CONDUSEF. Puedes verificarlo en condusef.gob.mx.",
                },
                {
                  icon: "📄",
                  title: "Contrato de crédito claro",
                  desc: "El prestamista debe ofrecer un contrato digital con condiciones legibles, incluyendo TAE, CAT, comisiones y penalizaciones claramente detallados.",
                },
                {
                  icon: "🔒",
                  title: "Protección de datos",
                  desc: "Deben contar con aviso de privacidad y política de protección de datos conforme a la Ley Federal de Protección de Datos Personales.",
                },
                {
                  icon: "⭐",
                  title: "Reseñas de usuarios",
                  desc: "Revisamos reseñas en la App Store, Google Play y Trustpilot. Empresas con calificación sistemáticamente baja o con quejas de fraude no son incluidas.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-background rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Independencia */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">⚖️</span>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Nuestra independencia editorial</h2>
              <p className="text-gray-500 text-sm">Los resultados no se venden</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 text-gray-700 leading-relaxed">
            <p>
              El equipo editorial de Dinoro.mx opera de forma independiente al equipo comercial.
              Los prestamistas no pueden influir en el contenido de nuestras reseñas ni en el
              ordenamiento de los resultados del catálogo.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Ningún prestamista paga por aparecer primero en el catálogo.",
                "Las calificaciones (estrellas) reflejan datos de usuarios reales y verificación propia.",
                "Si detectamos prácticas abusivas o quejas masivas, retiramos al prestamista del catálogo.",
                "Actualizamos los datos de TAE, montos y plazos periódicamente para mantener la precisión.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Legal */}
        <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-sm text-gray-600 space-y-2">
          <h3 className="font-bold text-gray-900 text-base">Datos legales</h3>
          <p>
            Dinoro.mx es un sitio de comparación financiera que opera en México.
            La información sobre tasas, montos y condiciones es orientativa y puede variar.
            Siempre consulta el contrato oficial del prestamista antes de firmar.
          </p>
          <p>
            Puedes verificar si un prestamista está regulado en el{" "}
            <a
              href="https://www.condusef.gob.mx/index.php/sipres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline"
            >
              SIPRES de CONDUSEF →
            </a>
          </p>
          <p>
            Para quejas o aclaraciones sobre un préstamo, puedes contactar a la CONDUSEF:
            teléfono 800-999-8080 o en{" "}
            <a
              href="https://www.condusef.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline"
            >
              condusef.gob.mx
            </a>.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/prestamos"
            className="inline-flex items-center justify-center h-[52px] px-8 bg-accent text-white font-bold rounded-xl hover:bg-amber-500 transition-colors text-base"
          >
            Ver préstamos disponibles →
          </Link>
        </div>
      </div>
    </div>
  );
}
