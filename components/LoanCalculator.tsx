"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type GtagFn = (cmd: string, event: string, params: Record<string, unknown>) => void;

function trackGA(event: string, params: Record<string, unknown>) {
  const w = window as unknown as { gtag?: GtagFn };
  if (typeof window !== "undefined" && w.gtag) {
    w.gtag("event", event, params);
  }
}

const TERM_OPTIONS = [7, 14, 30, 60, 90];

// Tasa diaria realista por plazo (más corto = más caro)
const DAILY_RATE: Record<number, number> = {
  7:  0.012,
  14: 0.010,
  30: 0.005,
  60: 0.0035,
  90: 0.0025,
};

function formatCurrency(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function LoanCalculator() {
  const [monto, setMonto] = useState(5000);
  const [dias, setDias] = useState(30);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tasa = DAILY_RATE[dias] ?? 0.005;
  const interesMin = Math.round(monto * tasa * dias);
  const interesMax = Math.round(interesMin * 1.4);
  const totalMin = monto + interesMin;

  const ctaHref = `/prestamos?monto=${monto}&dias=${dias}`;

  const handleChange = useCallback((newMonto: number, newDias: number) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      trackGA("calculator_used", { monto: newMonto, dias: newDias });
    }, 800);
  }, []);

  return (
    <div
      className="bg-white rounded-3xl p-5 md:p-7 w-full"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-heading font-bold text-primary">Calcula tu préstamo</h2>
        <span className="text-xs bg-accent/15 text-amber-700 font-semibold px-2.5 py-1 rounded-full">
          Sin compromiso
        </span>
      </div>

      {/* Monto slider */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-sm font-medium text-gray-600">¿Cuánto necesitas?</label>
          <span className="text-xl font-black text-primary">{formatCurrency(monto)}</span>
        </div>
        <input
          type="range"
          min={500}
          max={20000}
          step={500}
          value={monto}
          onChange={(e) => { const v = Number(e.target.value); setMonto(v); handleChange(v, dias); }}
          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$500</span>
          <span>$20,000</span>
        </div>
      </div>

      {/* Plazo buttons */}
      <div className="mb-5">
        <label className="text-sm font-medium text-gray-600 mb-2.5 block">¿Por cuánto tiempo?</label>
        <div className="flex gap-1.5 flex-wrap">
          {TERM_OPTIONS.map((d) => (
            <button
              key={d}
              onClick={() => { setDias(d); handleChange(monto, d); }}
              className={`flex-1 min-w-[48px] h-[40px] rounded-lg text-xs font-bold transition-colors ${
                dias === d
                  ? "bg-accent text-primary shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {d}d
            </button>
          ))}
        </div>
      </div>

      {/* Summary con rango de interés */}
      <div className="bg-[#FAFAFA] rounded-xl p-4 mb-5 space-y-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Monto solicitado</span>
          <span className="font-semibold text-gray-800">{formatCurrency(monto)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Interés estimado</span>
          <span className="font-semibold text-gray-800">
            {formatCurrency(interesMin)}
            <span className="text-gray-500"> – </span>
            {formatCurrency(interesMax)}
          </span>
        </div>
        <div className="flex justify-between text-sm font-bold text-gray-900 border-t border-gray-200 pt-2">
          <span>Total a devolver</span>
          <span className="text-lg font-black text-primary">desde {formatCurrency(totalMin)}</span>
        </div>
      </div>

      {/* Micro-stats */}
      <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-xl mb-4 text-center">
        <div className="py-2.5 px-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Plazo</p>
          <p className="text-sm font-black text-primary mt-0.5">{dias} días</p>
        </div>
        <div className="py-2.5 px-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Sin Buró</p>
          <p className="text-sm font-black text-green-700 mt-0.5">opciones ✓</p>
        </div>
        <div className="py-2.5 px-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Respuesta</p>
          <p className="text-sm font-black text-primary mt-0.5">minutos</p>
        </div>
      </div>

      <Link
        href={ctaHref}
        className="flex items-center justify-center w-full h-[52px] bg-accent text-primary font-bold text-base rounded-xl hover:bg-accent-hover transition-colors"
        onClick={() => trackGA("calculator_to_catalog", { monto, dias })}
      >
        Ver préstamos disponibles →
      </Link>

      <p className="text-center mt-3" style={{ fontSize: "9px", lineHeight: "1.4", color: "#9CA3AF" }}>
        Tasas y condiciones finales dependen del prestamista elegido y tu perfil. Consulta el CAT antes de firmar.
      </p>
    </div>
  );
}
