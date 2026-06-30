"use client";

import { useState } from "react";
import Link from "next/link";

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

  const tasa = DAILY_RATE[dias] ?? 0.005;
  const interesMin = Math.round(monto * tasa * dias);
  const interesMax = Math.round(interesMin * 1.4);
  const totalMin = monto + interesMin;

  const ctaHref = `/prestamos?monto=${monto}&dias=${dias}`;

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
          onChange={(e) => setMonto(Number(e.target.value))}
          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
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
              onClick={() => setDias(d)}
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
            <span className="text-gray-400"> – </span>
            {formatCurrency(interesMax)}
          </span>
        </div>
        <div className="flex justify-between text-sm font-bold text-gray-900 border-t border-gray-200 pt-2">
          <span>Total a devolver</span>
          <span className="text-lg font-black text-primary">desde {formatCurrency(totalMin)}</span>
        </div>
      </div>

      <Link
        href={ctaHref}
        className="flex items-center justify-center w-full h-[52px] bg-accent text-primary font-bold text-base rounded-xl hover:bg-accent-hover transition-colors"
      >
        Ver préstamos disponibles →
      </Link>

      <div className="flex justify-center gap-4 mt-3 text-xs text-gray-400 flex-wrap">
        <span className="flex items-center gap-1">
          <span className="text-success">✓</span> Sin buró
        </span>
        <span className="flex items-center gap-1">
          <span className="text-success">✓</span> Solo con INE
        </span>
        <span className="flex items-center gap-1">
          <span className="text-success">✓</span> 100% en línea
        </span>
      </div>

      <p className="text-center text-xs text-gray-300 mt-2">
        * Cálculo orientativo. La tasa real depende del prestamista elegido.
      </p>
    </div>
  );
}
