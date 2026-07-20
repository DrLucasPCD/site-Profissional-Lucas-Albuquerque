import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasalbuquerque.com.br"),
  title: "Lucas Albuquerque | Ciência, propósito e superação",
  description: "Portfólio de Lucas Albuquerque — biomédico patologista, especialista em Neurociências, mestre em Engenharia Biomédica e graduando em Medicina.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: { title: "Lucas Albuquerque | Ciência, propósito e superação", description: "Biomédico, mestre em Engenharia Biomédica e graduando em Medicina.", type: "website", locale: "pt_BR", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lucas Albuquerque — Ciência, propósito e superação" }] },
  twitter: { card: "summary_large_image", title: "Lucas Albuquerque | Ciência, propósito e superação", description: "Biomédico, mestre em Engenharia Biomédica e graduando em Medicina.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={manrope.variable}>{children}</body></html>;
}
