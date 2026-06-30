import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray-700" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-gray-600 my-4 bg-gray-50 py-2 pr-3 rounded-r-lg"
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-left bg-primary text-white font-semibold px-3 py-2 border border-primary/30"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-3 py-2 border border-gray-200 text-gray-700"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary font-medium underline underline-offset-2 hover:text-green-700"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-100 text-primary px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
};

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        <span>›</span>
        <span className="text-gray-600 line-clamp-1">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-500 mb-4">{post.description}</p>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} de lectura</span>
        </div>
      </header>

      <hr className="border-gray-200 mb-8" />

      {/* MDX content */}
      <article className="prose-custom">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-br from-primary to-green-700 rounded-2xl p-8 text-white text-center">
        <p className="text-sm font-medium text-white/80 mb-2">¿Listo para solicitar?</p>
        <h3 className="text-2xl font-extrabold mb-4">
          Compara los mejores préstamos de México
        </h3>
        <p className="text-white/80 text-sm mb-6">
          Sin buró de crédito · Solo con INE · Aprobación en minutos
        </p>
        <Link
          href="/prestamos"
          className="inline-flex items-center justify-center h-[52px] px-8 bg-accent text-white font-bold rounded-xl hover:bg-amber-500 transition-colors text-base"
        >
          Compara préstamos →
        </Link>
      </div>

      {/* Back */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-primary transition-colors">
          ← Volver al blog
        </Link>
      </div>
    </div>
  );
}
