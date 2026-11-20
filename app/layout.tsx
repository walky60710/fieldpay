import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/opsz.css";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fieldpay: get paid for financial-product assignments",
  description:
    "A partner app for assignments, campus cards, merchant payments and investments. A fictional fintech product, designed in Framer and rebuilt in Next.js.",
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Marks the page as JavaScript-ready before paint, so scroll reveals never hide content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-only">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
