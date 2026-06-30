import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-extrabold text-white">Dinoro</span>
              <span className="text-xl font-extrabold text-accent">.mx</span>
            </div>
            <p className="text-sm leading-relaxed">
              Comparador de microcréditos y préstamos personales en México. Encuentra la mejor opción para ti.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Préstamos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/prestamos" className="hover:text-white transition-colors">Todos los préstamos</Link></li>
              <li><Link href="/prestamos/rapidos" className="hover:text-white transition-colors">Préstamos rápidos</Link></li>
              <li><Link href="/prestamos/sin-buro" className="hover:text-white transition-colors">Sin buró de crédito</Link></li>
              <li><Link href="/prestamos/en-linea" className="hover:text-white transition-colors">En línea</Link></li>
              <li><Link href="/prestamos/personales" className="hover:text-white transition-colors">Personales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/como-funcionamos" className="hover:text-white transition-colors">Cómo funcionamos</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de privacidad</Link></li>
              <li><Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">Términos y condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-xs text-gray-400 space-y-2">
          <p>
            Dinoro.mx es un sitio comparador de servicios financieros. No somos una institución financiera ni otorgamos préstamos directamente.
            La información sobre las tasas (TAE) es referencial y puede variar. Consulta siempre las condiciones actualizadas en el sitio del prestamista.
          </p>
          <p>© {new Date().getFullYear()} Dinoro.mx — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
