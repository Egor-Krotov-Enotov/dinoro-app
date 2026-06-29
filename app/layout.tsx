import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const GA_ID = "G-XXXXXXXXXX"; // reemplazar con ID real antes de lanzar

export const metadata: Metadata = {
  title: {
    default: "Dinoro.mx — Préstamos rápidos en línea en México",
    template: "%s | Dinoro.mx",
  },
  description:
    "Compara los mejores préstamos personales y microcréditos en México. Sin buró de crédito, solo con INE y 100% en línea. Aprobación en minutos.",
  keywords: ["préstamos en línea México", "préstamos sin buró", "microcréditos México", "dinero rápido"],
  metadataBase: new URL("https://dinoro.mx"),
  openGraph: {
    siteName: "Dinoro.mx",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
