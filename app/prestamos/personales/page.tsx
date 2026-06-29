import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préstamos personales en México — Montos altos y plazos largos",
  description:
    "Compara préstamos personales en México de hasta $80,000 MXN. Ideal para educación, salud, remodelación o consolidar deudas. Solicita en línea.",
};

const loanTypes = [
  {
    icon: "🏥",
    title: "Gastos médicos",
    desc: "Cubre operaciones, tratamientos o emergencias de salud sin agotar tus ahorros.",
  },
  {
    icon: "🎓",
    title: "Educación",
    desc: "Paga colegiaturas, cursos o maestrías y repártelo en mensualidades cómodas.",
  },
  {
    icon: "🏠",
    title: "Remodelación del hogar",
    desc: "Mejora tu casa: baño, cocina, techado o instalaciones eléctricas.",
  },
  {
    icon: "🔄",
    title: "Consolidación de deudas",
    desc: "Une varias deudas en un solo crédito con menor tasa y una sola mensualidad.",
  },
  {
    icon: "✈️",
    title: "Viajes y eventos",
    desc: "Financia una boda, viaje o celebración y paga en plazos fijos.",
  },
  {
    icon: "🚗",
    title: "Compra de auto o moto",
    desc: "Si no calificas para crédito automotriz, un préstamo personal puede ser la alternativa.",
  },
];

const selectionFactors = [
  {
    factor: "Monto que necesitas",
    detail: "Define exactamente cuánto necesitas. Pedir más de lo necesario incrementa el costo total sin beneficio real.",
    tip: "Pide solo lo necesario",
  },
  {
    factor: "Plazo de pago",
    detail: "Un plazo más largo reduce la mensualidad pero aumenta el total de intereses pagados. Busca el equilibrio.",
    tip: "El más corto que puedas pagar",
  },
  {
    factor: "CAT (Costo Anual Total)",
    detail: "Incluye tasa de interés + comisiones + seguros. Es el indicador más preciso para comparar dos créditos.",
    tip: "Siempre compara por CAT",
  },
  {
    factor: "Comisiones",
    detail: "Revisa comisión por apertura, por prepago anticipado y por atraso. Pueden encarecer significativamente el crédito.",
    tip: "Lee la letra chica",
  },
  {
    factor: "Velocidad de aprobación",
    detail: "Para urgencias, prioriza prestamistas con aprobación en horas. Para montos grandes, puede valer la pena esperar 1–2 días.",
    tip: "Urgencia vs. costo",
  },
];

export default function PersonalesPage() {
  const filtered = lenders.filter((l) => l.category.includes("personales"));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Personales</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💼 Hasta $80,000 MXN
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Préstamos personales en México
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl">
          Créditos con montos mayores y plazos más largos para proyectos importantes.
          Compara tasas y elige el que mejor se adapta a tu situación.
        </p>
      </div>

      <LenderGrid lenders={filtered} />

      {/* Use cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          ¿Para qué puedo usar un préstamo personal?
        </h2>
        <p className="text-gray-500 mb-8">
          A diferencia de un crédito hipotecario o automotriz, el préstamo personal no tiene un fin específico.
          Tú decides en qué lo usas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loanTypes.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selection factors table */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Factores clave para elegir un préstamo personal
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">Factor</th>
                <th className="text-left px-4 py-3 font-semibold">Por qué importa</th>
                <th className="text-left px-4 py-3 font-semibold">Recomendación</th>
              </tr>
            </thead>
            <tbody>
              {selectionFactors.map((row, i) => (
                <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{row.factor}</td>
                  <td className="px-4 py-3 text-gray-600 leading-relaxed">{row.detail}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                      {row.tip}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips */}
      <section className="mt-12 bg-primary/5 rounded-2xl p-8">
        <h2 className="text-xl font-extrabold text-gray-900 mb-5">
          ¿Cómo mejorar tus probabilidades de aprobación?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          {[
            { icon: "📊", tip: "Ten a la mano tus últimos 3 estados de cuenta bancarios. Demuestran ingresos sin necesidad de nómina formal." },
            { icon: "🎯", tip: "Solicita un monto acorde a tu ingreso. La mayoría de prestamistas aprueban hasta 3 veces tu ingreso mensual." },
            { icon: "✅", tip: "Si tienes historial en el buró, asegúrate de no tener cuentas abiertas vencidas al momento de la solicitud." },
            { icon: "⏳", tip: "No hagas múltiples solicitudes simultáneas. Cada consulta al buró puede afectar temporalmente tu score." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              <span className="text-2xl">{item.icon}</span>
              <p className="leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
