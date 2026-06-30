"use client";

import { useState } from "react";
import Link from "next/link";

const TERM_OPTIONS = [7, 14, 30, 60, 90];

function formatCurrency(n: number) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}

export default function LoanCalculator() {
  const [monto, setMonto] = useState(5000);
  const [dias, setDias] = useState(30);

  const total = Math.round(monto * (1 + 0.15 * dias / 30));
  const interes = total - monto;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Calcula tu préstamo</h2>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700">¿Cuánto necesitas?</label>
          <span className="text-lg font-bold text-primary">{formatCurrency(monto)}</span>
        </div>
        <input
          type="range"
          min={500}
          max={20000}
          step={500}
          value={monto}
          onChange={(e) => setMonto(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>$500</span>
          <span>$20,000</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700 mb-3 block">¿Por cuánto tiempo?</label>
        <div className="flex gap-2 flex-wrap">
          {TERM_OPTIONS.map((d) => (
            <button
              key={d}
              onClick={() => setDias(d)}
              className={`flex-1 min-w-[52px] h-[44px] rounded-xl text-sm font-semibold transition-colors ${
                dias === d
                  ? "bg-accent text-primary"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {d} días
            </button>
          ))}
        </div>
      </div>

      <div className="bg-background rounded-2xl p-4 mb-6 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Monto solicitado</span>
          <span className="font-medium">{formatCurrency(monto)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Interés estimado</span>
          <span className="font-medium">{formatCurrency(interes)}</span>
        </div>
        <div className="flex justify-between text-base font-bold text-gray-900 border-t border-gray-200 pt-2 mt-2">
          <span>Total a devolver</span>
          <span className="text-primary text-xl">{formatCurrency(total)}</span>
        </div>
      </div>

      <Link
        href="/prestamos"
        className="flex items-center justify-center w-full h-[52px] bg-accent text-white font-bold text-base rounded-xl hover:bg-amber-500 transition-colors"
      >
        Ver préstamos disponibles →
      </Link>

      <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500 flex-wrap">
        <span className="flex items-center gap-1"><span className="text-success font-bold">✓</span> Sin buró</span>
        <span className="flex items-center gap-1"><span className="text-success font-bold">✓</span> Solo con INE</span>
        <span className="flex items-center gap-1"><span className="text-success font-bold">✓</span> 100% en línea</span>
      </div>

      <p className="text-center text-xs text-gray-400 mt-3">
        * Cálculo orientativo. La tasa real depende del prestamista elegido.
      </p>
    </div>
  );
}
