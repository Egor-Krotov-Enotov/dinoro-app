"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Qué es un préstamo sin buró de crédito?",
    a: "Es un crédito que no requiere historial crediticio positivo en el Buró de Crédito. Las empresas aprueban basándose en otros factores como tus ingresos o historial en su propia plataforma.",
  },
  {
    q: "¿Cuánto tarda en aprobarse un préstamo en línea?",
    a: "Dependiendo del prestamista, la aprobación puede tardar desde 3 minutos hasta 24 horas. La mayoría de las opciones en Dinoro.mx aprueban en menos de 1 hora.",
  },
  {
    q: "¿Qué documentos necesito para solicitar?",
    a: "La mayoría de los prestamistas solo requieren tu INE/IFE vigente, una cuenta bancaria o CLABE y tu número de celular. Algunos pueden pedir comprobante de ingresos.",
  },
  {
    q: "¿Es seguro solicitar un préstamo en línea en México?",
    a: "Sí, siempre que elijas prestamistas regulados y registrados ante la CNBV o CONDUSEF. Todas las empresas listadas en Dinoro.mx operan legalmente en México.",
  },
  {
    q: "¿Qué significa TAE?",
    a: "La Tasa Anual Equivalente (TAE) es el costo total del crédito expresado como porcentaje anual, incluyendo intereses y comisiones. Sirve para comparar el costo real entre diferentes préstamos.",
  },
  {
    q: "¿Dinoro.mx cobra alguna comisión?",
    a: "No. Dinoro.mx es un servicio comparativo completamente gratuito para el usuario. Nunca te cobraremos por usar nuestro sitio ni por solicitar un préstamo a través de él.",
  },
  {
    q: "¿Puedo solicitar un préstamo si estoy en el buró de crédito?",
    a: "Sí. Muchos de los prestamistas de nuestro catálogo ofrecen préstamos sin consultar el buró de crédito, por lo que tu historial crediticio no es un impedimento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500">Todo lo que necesitas saber antes de solicitar tu préstamo</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open === idx ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
