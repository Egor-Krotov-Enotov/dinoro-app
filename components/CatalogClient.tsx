"use client";

import { useState, useMemo } from "react";
import { lenders as allLenders, Lender } from "@/data/lenders";
import LenderCard from "@/components/LenderCard";
import Link from "next/link";

type FilterId = "todos" | "rapido" | "monto" | "sinburo" | "rating";

function parseMaxDays(maxDays: string): number {
  const meses = maxDays.match(/(\d+)\s*mes/);
  if (meses) return parseInt(meses[1]) * 30;
  const dias = maxDays.match(/(\d+)/);
  return dias ? parseInt(dias[1]) : 30;
}

function parseApprovalMinutes(t: string): number {
  if (t === "3 minutos") return 3;
  if (t === "15 minutos") return 15;
  if (t === "minutos") return 8;
  if (t === "~1 hora") return 60;
  if (t === "mismo día") return 480;
  if (t === "24 horas") return 1440;
  const m = t.match(/\d+/);
  return m ? parseInt(m[0]) : 60;
}

const CHIPS: { id: FilterId; label: string }[] = [
  { id: "todos",   label: "Todos" },
  { id: "rapido",  label: "Más rápido" },
  { id: "monto",   label: "Mayor monto" },
  { id: "sinburo", label: "Sin buró" },
  { id: "rating",  label: "Mejor calificado" },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

interface Props {
  monto?: number;
  dias?: number;
}

export default function CatalogClient({ monto, dias }: Props) {
  const [filter, setFilter] = useState<FilterId>("todos");

  const isMatch = (l: Lender) => {
    if (!monto || !dias) return false;
    return monto <= l.maxAmount && dias >= l.minDays && dias <= parseMaxDays(l.maxDays);
  };

  const sorted = useMemo(() => {
    let list = [...allLenders];

    // Calculator match: matching lenders float to top
    if (monto && dias) {
      list.sort((a, b) => {
        const am = isMatch(a) ? 0 : 1;
        const bm = isMatch(b) ? 0 : 1;
        return am - bm;
      });
    }

    switch (filter) {
      case "rapido":
        list = [...list].sort(
          (a, b) => parseApprovalMinutes(a.approvalTime) - parseApprovalMinutes(b.approvalTime)
        );
        break;
      case "monto":
        list = [...list].sort((a, b) => b.maxAmount - a.maxAmount);
        break;
      case "sinburo":
        list = list.filter((l) => l.sinBuro);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }

    return list;
  }, [filter, monto, dias]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Context bar */}
      {monto && dias && (
        <div className="flex items-center justify-between bg-[#FFF4E0] border border-amber-100 rounded-xl px-4 py-3 mb-5">
          <p className="text-sm font-medium text-amber-900">
            Mostrando opciones para{" "}
            <strong className="font-black">{fmt(monto)}</strong>{" "}
            en{" "}
            <strong className="font-black">{dias} días</strong>
            {" "}—{" "}
            <span className="text-amber-700">
              {allLenders.filter(isMatch).length} coincidencias exactas
            </span>
          </p>
          <Link
            href="/"
            className="ml-4 flex-shrink-0 text-xs font-bold text-amber-700 hover:text-amber-900 underline underline-offset-2"
          >
            Cambiar
          </Link>
        </div>
      )}

      {/* Filter chips */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 px-1">Ordenar por:</p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
        {CHIPS.map((chip) => (
          <button
            key={chip.id}
            onClick={() => setFilter(chip.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              filter === chip.id
                ? "bg-primary text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {chip.label}
          </button>
        ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-400 mb-4">
        {sorted.length} opciones disponibles
      </p>

      {/* Lender grid with match badge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((lender) => (
          <div key={lender.id} className="relative">
            {isMatch(lender) && (
              <div className="absolute -top-2.5 left-3 z-10">
                <span className="inline-flex items-center gap-1 bg-accent text-primary text-xs font-black px-3 py-0.5 rounded-full shadow-sm">
                  ✓ Match perfecto para ti
                </span>
              </div>
            )}
            <LenderCard lender={lender} />
          </div>
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-semibold text-gray-600 mb-2">Sin opciones con ese filtro</p>
          <button
            onClick={() => setFilter("todos")}
            className="text-sm font-bold text-accent hover:underline"
          >
            Ver todas las opciones
          </button>
        </div>
      )}
    </>
  );
}
