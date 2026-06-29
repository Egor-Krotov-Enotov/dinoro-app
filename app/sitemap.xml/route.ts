import { getAllPosts } from "@/lib/blog";

const BASE = "https://dinoro.mx";

const staticPages = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/prestamos", priority: "0.9", changefreq: "daily" },
  { url: "/prestamos/rapidos", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/sin-buro", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/en-linea", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/personales", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/cdmx", priority: "0.8", changefreq: "monthly" },
  { url: "/prestamos/guadalajara", priority: "0.8", changefreq: "monthly" },
  { url: "/prestamos/monterrey", priority: "0.8", changefreq: "monthly" },
  { url: "/prestamos/puebla", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/tijuana", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/cozmo", priority: "0.8", changefreq: "monthly" },
  { url: "/prestamos/kueski", priority: "0.8", changefreq: "monthly" },
  { url: "/prestamos/moneyman", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/avafin", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/tala", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/baubap", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/credilikeme", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/creditea", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/vivus", priority: "0.7", changefreq: "monthly" },
  { url: "/prestamos/credito365", priority: "0.7", changefreq: "monthly" },
  { url: "/como-funcionamos", priority: "0.6", changefreq: "monthly" },
  { url: "/blog", priority: "0.7", changefreq: "weekly" },
  { url: "/aviso-de-privacidad", priority: "0.3", changefreq: "yearly" },
  { url: "/terminos-y-condiciones", priority: "0.3", changefreq: "yearly" },
];

export function GET() {
  const posts = getAllPosts();
  const today = new Date().toISOString().split("T")[0];

  const blogPages = posts.map((p) => ({
    url: `/blog/${p.slug}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: p.date || today,
  }));

  const allPages = [
    ...staticPages.map((p) => ({ ...p, lastmod: today })),
    ...blogPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
