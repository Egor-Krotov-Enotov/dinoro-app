"use client";

import { useState } from "react";
import JsonLd from "@/components/JsonLd";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en aprobarse un préstamo en línea?",
    a: "La mayoría de los prestamistas digitales en México aprueban en 5 a 30 minutos. El depósito en tu cuenta puede llegar en menos de 1 hora, aunque en algunos bancos puede tardar hasta 24 horas en días hábiles.",
  },
  {
    q: "¿Puedo pedir un préstamo si tengo mal buró?",
    a: "Sí. Muchos prestamistas de nuestro catálogo no consultan el Buró de Crédito. Usa el filtro \"Sin buró\" en la sección de préstamos para ver solo las opciones disponibles para ti, independientemente de tu historial crediticio.",
  },
  {
    q: "¿Es seguro pedir un préstamo en línea en México?",
    a: "Sí, siempre que elijas empresas registradas en el SIPRES de CONDUSEF. Todas las opciones de Dinoro.mx operan legalmente en México. Puedes verificar cualquier prestamista en condusef.gob.mx. Nunca compartas tu contraseña bancaria: solo necesitan tu CLABE.",
  },
  {
    q: "¿Cuánto me pueden prestar la primera vez?",
    a: "En tu primer préstamo, la mayoría de las plataformas prestan entre $300 y $8,000 MXN. El límite crece con cada pago puntual que realices. Algunos prestamistas como AvaFin o Creditea ofrecen montos mayores desde el inicio si tienes historial crediticio positivo.",
  },
  {
    q: "¿Qué necesito para pedir un préstamo en línea?",
    a: "Los requisitos básicos son: INE o IFE vigente, CLABE interbancaria de tu cuenta bancaria, celular con cámara para la selfie de verificación y número de celular activo. No necesitas comprobante de ingresos formal ni aval.",
  },
  {
    q: "¿El servicio de Dinoro.mx tiene algún costo?",
    a: "No. Comparar préstamos en Dinoro.mx es completamente gratuito para el usuario. Nos financiamos a través de comisiones que pagan los prestamistas cuando alguien solicita un crédito desde nuestros enlaces. Esto no afecta los resultados ni encarece tu préstamo.",
  },
  {
    q: "¿Qué es el CAT y por qué debo revisarlo?",
    a: "El CAT (Costo Anual Total) es el indicador más completo del costo de un crédito: incluye tasa de interés, comisiones, seguros y otros cargos, todo expresado como porcentaje anual. Siempre compara por CAT y no solo por tasa mensual, ya que dos créditos con la misma tasa pueden tener CATs muy diferentes por sus comisiones.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white">
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 text-sm">Todo lo que necesitas saber antes de solicitar tu préstamo</p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${open === idx ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === idx && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
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
