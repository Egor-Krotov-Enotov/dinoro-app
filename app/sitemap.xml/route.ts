const BASE = "https://dinoro.mx";

const pages = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/prestamos", priority: "0.9", changefreq: "daily" },
  { url: "/prestamos/rapidos", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/sin-buro", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/en-linea", priority: "0.8", changefreq: "weekly" },
  { url: "/prestamos/personales", priority: "0.8", changefreq: "weekly" },
  { url: "/como-funcionamos", priority: "0.6", changefreq: "monthly" },
  { url: "/blog", priority: "0.7", changefreq: "weekly" },
  { url: "/aviso-de-privacidad", priority: "0.3", changefreq: "yearly" },
  { url: "/terminos-y-condiciones", priority: "0.3", changefreq: "yearly" },
];

export function GET() {
  const today = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.url}</loc>
    <lastmod>${today}</lastmod>
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
