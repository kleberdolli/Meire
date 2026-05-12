import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.specialty}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Atendimento psicológico com Terapia Cognitivo-Comportamental (TCC) e formação em Neuropsicologia. Acolhimento profissional com Meire Ribeiro, CRP 03/13940.",
  keywords: [
    "psicóloga",
    "TCC",
    "terapia cognitivo-comportamental",
    "neuropsicologia",
    "Meire Ribeiro",
    "CRP 03/13940",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.name,
    description:
      "Atendimento psicológico com TCC, acolhimento e ética profissional.",
    locale: "pt_BR",
    type: "website",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Atendimento psicológico com TCC, acolhimento e ética profissional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-sand text-coffee">{children}</body>
    </html>
  );
}
