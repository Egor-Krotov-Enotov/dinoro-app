import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préstamos sin buró de crédito en México 2025",
  description:
    "Obtén un préstamo aunque tengas historial negativo en el Buró de Crédito. Compara las mejores opciones sin consulta de buró en México.",
};

const requirements = [
  { label: "INE / IFE vigente", icon: "🪪", note: "Identificación oficial mexicana" },
  { label: "Número de celular activo", icon: "📱", note: "Para verificación por SMS" },
  { label: "Cuenta bancaria (CLABE)", icon: "🏦", note: "Para recibir el depósito" },
  { label: "Correo electrónico", icon: "📧", note: "Para confirmar la solicitud" },
  { label: "Selfie con INE", icon: "🤳", note: "En algunos prestamistas" },
];

const myths = [
  {
    myth: "Estar en buró significa deber dinero",
    truth: "Falso. Toda persona que haya tenido un crédito aparece en el buró. Tener historial no es malo; lo que importa es si está en positivo o negativo.",
  },
  {
    myth: "Con buró negativo no puedo obtener ningún crédito",
    truth: "Falso. Muchas plataformas de préstamos digitales en México no consultan el buró. Evalúan otros factores como ingresos o historial propio.",
  },
  {
    myth: "Limpiar el buró tarda 7 años",
    truth: "Depende del monto. Deudas de hasta 25 UDIS se eliminan en 1 año; hasta 500 UDIS, en 2 años; hasta 1,000 UDIS, en 4 años. Solo montos muy grandes tardan 6 años.",
  },
  {
    myth: "Pagar una deuda en buró la borra inmediatamente",
    truth: "No de inmediato. El registro se actualiza, pero el historial de pago tardío permanece visible. Con pagos puntuales posteriores, el score mejora progresivamente.",
  },
];

export default function SinBuroPage() {
  const filtered = lenders.filter((l) => l.sinBuro);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Sin buró</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
          {filtered.length} opciones sin consulta de buró
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Préstamos sin buró de crédito en México
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl">
          ¿Tienes historial negativo o nunca has tenido un crédito? Estas empresas aprueban
          préstamos sin consultar el Buró de Crédito. Solo necesitas tu INE.
        </p>
      </div>

      {/* Lenders */}
      <LenderGrid lenders={filtered} />

      {/* What is sin buro */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          ¿Qué significa &ldquo;sin buró de crédito&rdquo;?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Cuando un prestamista dice que ofrece créditos <strong className="text-gray-900">&ldquo;sin buró&rdquo;</strong>, significa
          que no consulta tu historial en el Buró de Crédito ni en Círculo de Crédito para decidir si te aprueban.
          En cambio, evalúan otros factores como:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "📊", title: "Historial propio", desc: "Si ya has pedido créditos antes con esa empresa y pagaste a tiempo." },
            { icon: "📱", title: "Datos del celular", desc: "Algunas apps analizan patrones de uso de tu dispositivo con tu permiso." },
            { icon: "💳", title: "Movimientos bancarios", desc: "Conectas tu banca en línea para demostrar ingresos regulares." },
          ].map((item) => (
            <div key={item.title} className="bg-background rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements table */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Requisitos para préstamos sin buró
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">Requisito</th>
                <th className="text-left px-4 py-3 font-semibold">Descripción</th>
                <th className="text-center px-4 py-3 font-semibold">¿Obligatorio?</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((req, i) => (
                <tr key={req.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    <span className="mr-2">{req.icon}</span>{req.label}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{req.note}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${req.label === "Selfie con INE" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                      {req.label === "Selfie con INE" ? "A veces" : "Sí"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Myths */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Mitos y realidades del buró de crédito
        </h2>
        <div className="space-y-4">
          {myths.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <p className="text-sm font-semibold text-red-500 mb-1">❌ Mito: {item.myth}</p>
              <p className="text-sm text-gray-700"><span className="text-primary font-semibold">✓ Realidad:</span> {item.truth}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mt-12 bg-accent/5 rounded-2xl p-8">
        <h2 className="text-xl font-extrabold text-gray-900 mb-4">
          Consejos antes de pedir un préstamo sin buró
        </h2>
        <ol className="space-y-3 text-sm text-gray-700">
          {[
            "Compara el <strong>CAT (Costo Anual Total)</strong> entre varias opciones, no solo la tasa mensual.",
            "Empieza con un <strong>monto pequeño</strong> que puedas pagar con seguridad. Es mejor pedir menos y pagarlo puntualmente.",
            "Verifica que el prestamista esté registrado en el <strong>SIPRES de CONDUSEF</strong> (condusef.gob.mx).",
            "Lee los términos del contrato antes de firmar, especialmente las <strong>penalizaciones por atraso</strong>.",
            "Nunca pagues una <strong>comisión por adelantado</strong> para que te aprueben el préstamo. Eso es una señal de fraude.",
            "Aprovecha el préstamo para <strong>construir historial positivo</strong>: pagando a tiempo mejorarás tu score para futuros créditos.",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 bg-accent text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: tip }} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
