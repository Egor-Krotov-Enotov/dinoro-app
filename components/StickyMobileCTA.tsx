"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-gray-100 shadow-lg">
      <Link
        href="/prestamos"
        className="flex items-center justify-center w-full h-[52px] bg-accent text-primary font-bold text-base rounded-xl hover:bg-accent-hover transition-colors"
      >
        Solicitar ahora — Sin buró ✓
      </Link>
    </div>
  );
}
