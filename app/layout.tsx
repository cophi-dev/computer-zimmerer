import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const sans = Inter({ variable: "--font-sans-face", subsets: ["latin"], display: "swap" });

const defaultTitle = "Computer Zimmerer – Computer, Netzwerk & EDV in Tiefenbach";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary", title: defaultTitle, description: site.description },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
