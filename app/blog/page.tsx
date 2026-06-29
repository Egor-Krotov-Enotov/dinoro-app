import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Consejos sobre préstamos y finanzas personales",
  description:
    "Artículos y consejos sobre cómo manejar préstamos, mejorar tu historial crediticio y tomar mejores decisiones financieras en México.",
};

const posts = [
  {
    slug: "como-mejorar-historial-crediticio",
    title: "Cómo mejorar tu historial en el buró de crédito",
    excerpt: "Sigue estos pasos para limpiar tu historial y acceder a mejores tasas de interés.",
    date: "15 jun 2025",
    readTime: "5 min",
  },
  {
    slug: "diferencia-entre-tae-y-tasa-mensual",
    title: "¿Qué diferencia hay entre TAE y tasa mensual?",
    excerpt: "Aprende a leer las condiciones de un préstamo y compara de forma inteligente.",
    date: "2 jun 2025",
    readTime: "4 min",
  },
  {
    slug: "prestamo-sin-buro-requisitos",
    title: "Requisitos para préstamos sin buró en 2025",
    excerpt: "Todo lo que necesitas para obtener un préstamo aunque tengas mal historial crediticio.",
    date: "20 may 2025",
    readTime: "6 min",
  },
  {
    slug: "kueski-vs-moneyman",
    title: "Kueski vs Moneyman: ¿cuál es mejor en 2025?",
    excerpt: "Comparativa detallada de dos de los prestamistas más populares de México.",
    date: "10 may 2025",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Blog de Dinoro.mx
        </h1>
        <p className="text-gray-500">Consejos financieros para tomar mejores decisiones con tu dinero</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-3 text-xs text-gray-400 mb-3">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} de lectura</span>
            </div>
            <h2 className="font-bold text-gray-900 text-lg mb-2 leading-tight">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
            <span className="text-primary text-sm font-semibold">Leer artículo →</span>
          </article>
        ))}
      </div>
    </div>
  );
}
