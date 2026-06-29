import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de préstamos en México — Consejos y guías financieras",
  description:
    "Artículos y guías sobre préstamos, buró de crédito y finanzas personales en México. Todo lo que necesitas saber antes de solicitar un crédito.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Blog de préstamos en México
        </h1>
        <p className="text-gray-500 text-lg">
          Consejos financieros para tomar mejores decisiones con tu dinero
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400">Próximamente nuevos artículos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h2 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">
                {post.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-400 space-x-2">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime} de lectura</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
