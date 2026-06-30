"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-0.5">
            <span className="text-2xl font-heading font-black text-primary tracking-tight">dinoro</span>
            <span className="text-2xl font-heading font-black text-accent tracking-tight">.mx</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/prestamos" className="hover:text-primary transition-colors">Préstamos</Link>
            <Link href="/prestamos/rapidos" className="hover:text-primary transition-colors">Préstamos rápidos</Link>
            <Link href="/prestamos/sin-buro" className="hover:text-primary transition-colors">Sin buró</Link>
            <Link href="/como-funcionamos" className="hover:text-primary transition-colors">Cómo funciona</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </nav>

          <Link
            href="/prestamos"
            className="hidden md:inline-flex items-center justify-center bg-accent text-primary font-bold text-sm px-5 h-[44px] rounded-lg hover:bg-accent-hover transition-colors"
          >
            Solicitar préstamo
          </Link>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <Link href="/prestamos" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Préstamos</Link>
            <Link href="/prestamos/rapidos" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Préstamos rápidos</Link>
            <Link href="/prestamos/sin-buro" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Sin buró</Link>
            <Link href="/como-funcionamos" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Cómo funciona</Link>
            <Link href="/blog" className="py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link
              href="/prestamos"
              className="inline-flex items-center justify-center bg-accent text-primary font-bold py-3 rounded-lg mt-1"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar préstamo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
