"use client";

import { useState } from "react";
import Image from "next/image";
import { Lender } from "@/data/lenders";
import Link from "next/link";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "text-accent" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

function formatAmount(n: number) {
  return new Intl.NumberFormat("es-MX").format(n);
}

function LenderLogo({ logo, name }: { logo: string; name: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-20 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600 text-center leading-tight px-1">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-20 h-10 relative bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
      <Image
        src={logo}
        alt={`Logo ${name}`}
        fill
        className="object-contain p-1"
        onError={() => setError(true)}
        unoptimized
      />
    </div>
  );
}

export default function LenderCard({ lender }: { lender: Lender }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <LenderLogo logo={lender.logo} name={lender.name} />
        <Stars rating={lender.rating} />
      </div>

      <h3 className="text-base font-bold text-gray-900 -mt-1">{lender.name}</h3>

      {/* Conditions */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm bg-gray-50 rounded-xl p-3">
        <div>
          <span className="text-xs text-gray-400 uppercase tracking-wide">Hasta</span>
          <p className="font-bold text-gray-900">${formatAmount(lender.maxAmount)}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 uppercase tracking-wide">Plazo</span>
          <p className="font-bold text-gray-900">{lender.minDays}–{lender.maxDays}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 uppercase tracking-wide">TAE desde</span>
          <p className="font-bold text-gray-900">{lender.taeFrom}%</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 uppercase tracking-wide">Aprobación</span>
          <p className="font-bold text-gray-900">{lender.approvalTime}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex gap-2 flex-wrap -mt-1">
        {lender.sinBuro && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-success bg-green-50 px-2.5 py-1 rounded-full">
            <span>✓</span> Sin buró
          </span>
        )}
        {lender.online && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            <span>📱</span> 100% en línea
          </span>
        )}
      </div>

      {/* CTAs */}
      <div className="flex gap-2 mt-auto">
        <a
          href={lender.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1 flex items-center justify-center h-[48px] bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors text-sm"
        >
          Solicitar
        </a>
        <Link
          href={`/prestamos/${lender.id}`}
          className="flex-1 flex items-center justify-center h-[48px] bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
