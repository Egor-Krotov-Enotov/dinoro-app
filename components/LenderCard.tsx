"use client";

import { useState } from "react";
import Image from "next/image";
import { Lender } from "@/data/lenders";
import Link from "next/link";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "text-accent" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
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
      <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-xs font-bold text-gray-700 text-center leading-tight px-1">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-24 h-12 relative bg-gray-50 rounded-lg overflow-hidden">
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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <LenderLogo logo={lender.logo} name={lender.name} />
        <Stars rating={lender.rating} />
      </div>

      <h3 className="text-lg font-bold text-gray-900">{lender.name}</h3>

      <div className="grid grid-cols-2 gap-y-2 text-sm">
        <div>
          <span className="text-gray-500">Hasta</span>
          <p className="font-semibold text-gray-900">${formatAmount(lender.maxAmount)} MXN</p>
        </div>
        <div>
          <span className="text-gray-500">Plazo</span>
          <p className="font-semibold text-gray-900">{lender.minDays} – {lender.maxDays}</p>
        </div>
        <div>
          <span className="text-gray-500">TAE desde</span>
          <p className="font-semibold text-gray-900">{lender.taeFrom}%</p>
        </div>
        <div>
          <span className="text-gray-500">Aprobación</span>
          <p className="font-semibold text-gray-900">{lender.approvalTime}</p>
        </div>
      </div>

      <div className="flex gap-3 text-xs text-gray-600">
        {lender.sinBuro && (
          <span className="flex items-center gap-1">
            <span className="text-success font-bold">✓</span> Sin buró
          </span>
        )}
        {lender.online && (
          <span className="flex items-center gap-1">
            <span className="text-success font-bold">✓</span> 100% en línea
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        <a
          href={lender.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1 flex items-center justify-center h-[52px] bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-colors text-sm"
        >
          Solicitar
        </a>
        <Link
          href={`/prestamos/${lender.id}`}
          className="flex-1 flex items-center justify-center h-[52px] border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors text-sm"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
