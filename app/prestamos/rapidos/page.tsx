import type { Metadata } from "next";
import { lenders } from "@/data/lenders";
import LenderGrid from "@/components/LenderGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préstamos rápidos en línea en México — Aprobación en minutos",
  description:
    "Compara préstamos rápidos en México con aprobación en 5–30 minutos. Sin buró de crédito, solo con INE. Dinero en tu cuenta el mismo día.",
};

const approvalTable = [
  { name: "Baubap", time: "5–10 min", deposit: "< 1 hora" },
  { name: "Tala", time: "10–15 min", deposit: "< 1 hora" },
  { name: "Moneyman", time: "15 min", deposit: "< 2 horas" },
  { name: "Credito365", time: "3 min", deposit: "< 1 hora" },
  { name: "Kueski", time: "~1 hora", deposit: "mismo día" },
  { name: "Credilikeme", time: "~1 hora", deposit: "mismo día" },
];

const faqs = [
  {
    q: "¿Cuánto tarda en llegar el dinero a mi cuenta?",
    a: "Dependiendo del prestamista y tu banco, el depósito puede llegar en menos de 1 hora. En algunos casos puede tardar hasta 24 horas si el trámite se hace fuera del horario bancario.",
  },
  {
    q: "¿Puedo pedir un préstamo rápido sin tener historial crediticio?",
    a: "Sí. La mayoría de los prestamistas de préstamos rápidos en México no consultan el Buró de Crédito. Solo necesitas una identificación oficial (INE) y una cuenta bancaria.",
  },
  {
    q: "¿Cuánto puedo pedir en un préstamo rápido?",
    a: "Los montos varían entre $500 y $26,000 MXN según el prestamista y tu historial con ellos. Los primeros préstamos suelen ser de $1,000–$5,000 MXN y el límite aumenta con cada pago puntual.",
  },
  {
    q: "¿Son seguros los préstamos rápidos en línea?",
    a: "Sí, siempre que elijas empresas registradas ante la CONDUSEF. Todas las opciones de Dinoro.mx operan legalmente en México. Nunca compartas tu contraseña bancaria con nadie.",
  },
];

export default function RapidosPage() {
  const filtered = lenders.filter((l) => l.category.includes("rapidos"));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-primary">Inicio</Link>
        <span>›</span>
        <Link href="/prestamos" className="hover:text-primary">Préstamos</Link>
        <span>›</span>
        <span className="text-gray-600">Préstamos rápidos</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          ⚡ {filtered.length} opciones disponibles
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Préstamos rápidos en México
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl">
          Créditos en línea con aprobación en minutos y depósito el mismo día. Sin citas, sin papeleos y sin buró de crédito.
        </p>
      </div>

      {/* Lenders */}
      <LenderGrid lenders={filtered} />

      {/* Approval time table */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          ¿Cuánto tarda cada prestamista en aprobar?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-semibold">Prestamista</th>
                <th className="text-left px-4 py-3 font-semibold">Tiempo de aprobación</th>
                <th className="text-left px-4 py-3 font-semibold">Depósito en cuenta</th>
              </tr>
            </thead>
            <tbody>
              {approvalTable.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                  <td className="px-4 py-3 text-gray-700">{row.time}</td>
                  <td className="px-4 py-3 text-gray-700">{row.deposit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">* Tiempos estimados en días hábiles. Pueden variar según el banco receptor.</p>
      </section>

      {/* Requirements */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Requisitos generales</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "Ser mayor de 18 años",
              "Ser ciudadano mexicano o residente con INE/IFE vigente",
              "Tener un número de celular activo",
              "Contar con cuenta bancaria a tu nombre (CLABE interbancaria)",
              "Tener correo electrónico",
              "En algunos casos: selfie o foto con tu INE",
            ].map((req) => (
              <li key={req} className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que NO necesitas</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "Buen historial en el Buró de Crédito",
              "Comprobante de ingresos formal",
              "Aval o codeudor",
              "Garantía o colateral",
              "Ir a una sucursal",
              "Esperar días para la respuesta",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to apply */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Cómo solicitar un préstamo rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Elige tu préstamo", desc: "Compara montos, plazos y tasas en la tabla de arriba." },
            { step: "2", title: "Haz clic en Solicitar", desc: "Te llevamos al sitio oficial del prestamista." },
            { step: "3", title: "Llena el formulario", desc: "Tarda menos de 5 minutos. Solo con tu INE y datos básicos." },
            { step: "4", title: "Recibe el dinero", desc: "El depósito llega directo a tu cuenta bancaria." },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                {s.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
