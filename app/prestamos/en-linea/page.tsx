import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préstamos en línea en México — Sin ir a sucursal",
  description:
    "Solicita tu préstamo 100% en línea desde tu celular o computadora. Sin papeleos, sin filas y sin salir de casa. Aprobación rápida en México.",
};

const processSteps = [
  {
    icon: "📋",
    title: "1. Registro",
    desc: "Crea tu cuenta con tu correo y número de celular. Tarda menos de 2 minutos.",
  },
  {
    icon: "🪪",
    title: "2. Verificación de identidad",
    desc: "Toma una foto de tu INE y una selfie. El sistema verifica tu identidad de forma automática.",
  },
  {
    icon: "🏦",
    title: "3. Datos bancarios",
    desc: "Ingresa tu CLABE interbancaria para recibir el depósito. No necesitas dar tu contraseña bancaria.",
  },
  {
    icon: "✅",
    title: "4. Solicitud y aprobación",
    desc: "El sistema analiza tu perfil y da respuesta en minutos. Si se aprueba, firmas el contrato digital.",
  },
  {
    icon: "💸",
    title: "5. Depósito",
    desc: "El dinero llega a tu cuenta bancaria. Puede ser en minutos o hasta 24 horas según el banco.",
  },
];

const loanTypes = [
  {
    type: "Microcréditos",
    range: "$500 – $5,000",
    term: "7 – 30 días",
    best: "Gastos urgentes, emergencias",
    example: "Kueski, Baubap, Vivus",
  },
  {
    type: "Préstamos medianos",
    range: "$5,000 – $25,000",
    term: "1 – 6 meses",
    best: "Reparaciones, deudas, imprevistos",
    example: "Moneyman, Tala, Cozmo",
  },
  {
    type: "Préstamos personales",
    range: "$25,000 – $80,000",
    term: "6 – 36 meses",
    best: "Educación, salud, remodelación",
    example: "Creditea, AvaFin",
  },
];

export default function EnLineaPage() {
  const filtered = lenders.filter((l) => l.online);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">En línea</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💻 {filtered.length} prestamistas 100% digitales
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Préstamos en línea en México
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl">
          Todo el proceso desde tu celular o computadora: solicita, firma y recibe el dinero
          sin salir de casa, sin filas y sin ir a una sucursal.
        </p>
      </div>

      <LenderGrid lenders={filtered} />

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          ¿Cómo funciona un préstamo en línea?
        </h2>
        <p className="text-gray-500 mb-8">El proceso completo tarda entre 10 y 30 minutos.</p>
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gray-200" />
          <div className="space-y-6">
            {processSteps.map((s, i) => (
              <div key={i} className="relative flex items-start gap-5">
                <div className="w-16 h-16 bg-white border-2 border-accent rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 z-10 shadow-sm">
                  {s.icon}
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          ¿Es seguro pedir préstamos en línea en México?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Sí, siempre que elijas prestamistas regulados. En México, las empresas de crédito en línea
          deben estar registradas ante la <strong className="text-gray-900">CONDUSEF</strong> y cumplir
          con la Ley para Regular las Instituciones de Tecnología Financiera (Ley Fintech).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: "🔒", title: "Cifrado SSL", desc: "Tus datos viajan encriptados entre tu dispositivo y el servidor del prestamista." },
            { icon: "📜", title: "Registro CONDUSEF", desc: "Todas las empresas de nuestro catálogo están registradas y supervisadas." },
            { icon: "🚫", title: "Sin contraseñas bancarias", desc: "Nunca debes compartir tu contraseña de banca en línea. Solo tu CLABE." },
            { icon: "⚖️", title: "Contrato digital", desc: "Firmas un contrato legal con todos los términos antes del desembolso." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-background rounded-xl p-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
          <strong>⚠️ Señales de fraude:</strong> Si te piden pagar una comisión anticipada para aprobar tu préstamo,
          es una estafa. Los prestamistas legítimos nunca cobran por adelantado.
        </div>
      </section>

      {/* Loan types */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Tipos de préstamos en línea disponibles
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">Tipo</th>
                <th className="text-left px-4 py-3 font-semibold">Monto</th>
                <th className="text-left px-4 py-3 font-semibold">Plazo</th>
                <th className="text-left px-4 py-3 font-semibold">Ideal para</th>
                <th className="text-left px-4 py-3 font-semibold">Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              {loanTypes.map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                  <td className="px-4 py-3 text-gray-700">{row.range}</td>
                  <td className="px-4 py-3 text-gray-700">{row.term}</td>
                  <td className="px-4 py-3 text-gray-700">{row.best}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
